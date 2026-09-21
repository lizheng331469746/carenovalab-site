// Lightweight server-rendering checks. Run with: node scripts/check-product-detail.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...rest) {
  return resolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, ...rest);
};
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = (mod, filename) => {
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }
  });
  mod._compile(output.outputText, filename);
};
require.extensions['.css'] = mod => { mod.exports = { __esModule: true, default: new Proxy({}, { get: (_, key) => String(key) }) }; };
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { detailProducts, getDetailProduct } = require('../lib/product-detail');
const { productMetadata, faqJsonLd } = require('../lib/product-detail/seo');
const { ProductDetail } = require('../components/product-detail/product-detail');
const { InquiryProvider } = require('../components/inquiry-provider');
const route = require('../app/products/[category]/page');
const render = product => renderToStaticMarkup(React.createElement(InquiryProvider, null, React.createElement(ProductDetail, { product })));

(async () => {
  assert.equal(detailProducts.length, 1, 'Only one demo is registered');
  const product = detailProducts[0];
  assert.equal(getDetailProduct('unknown-product'), undefined);
  const html = render(product);
  const order = ['product-title', 'key-benefits', 'product-overview', 'key-ingredients', 'texture-experience', 'customization', 'packaging-options', 'manufacturing-compliance', 'product-specifications', 'faq', 'start-project'];
  let previous = -1;
  for (const id of order) { const position = html.indexOf(`id="${id}"`); assert(position > previous, id); previous = position; }
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/<details>/g) || []).length, product.faq.length);
  assert(html.includes('href="/start-your-project"'));
  assert(html.includes('href="/contact"'));
  assert(!html.includes('<img'), 'Empty media slots must not request broken assets');
  const metadata = await route.generateMetadata({ params: Promise.resolve({ category: product.slug }) });
  assert.equal(metadata.title.absolute, product.seo.title);
  assert.equal(metadata.robots.index, false);
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.deepEqual(metadata.openGraph.images, []);
  const schema = JSON.parse(faqJsonLd(product));
  assert.equal(schema.mainEntity[0].acceptedAnswer.text, product.faq[0].answer);
  const alternate = { ...product, name: 'Second product test', demo: false, hero: { ...product.hero, src: '/images/test.webp' }, faq: [{ question: '</script><script>alert(1)</script>', answer: 'Safe text' }] };
  assert(render(alternate).includes('Second product test'), 'Template must render arbitrary product data');
  assert.equal(productMetadata(alternate).robots.index, true);
  assert(productMetadata(alternate).openGraph.images[0].url.endsWith('/images/test.webp'));
  assert(!faqJsonLd(alternate).includes('</script>'));
  await assert.rejects(() => route.default({ params: Promise.resolve({ category: 'unknown-product' }) }), /NEXT_HTTP_ERROR_FALLBACK;404/);
  for (const relative of ['app/products/skincare/page.tsx', 'app/products/[category]/[group]/page.tsx', 'app/products/[category]/[group]/[product]/page.tsx']) assert(fs.existsSync(path.join(root, relative)));
  console.log('PASS: one demo, ordered sections, reusable data, placeholders, CTA destinations, metadata, FAQ escaping, and unknown-slug 404.');
})();
