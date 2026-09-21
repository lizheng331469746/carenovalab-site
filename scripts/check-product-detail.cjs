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
  const faqHtml = html.slice(html.indexOf('id="faq"'), html.indexOf('id="start-project"'));
  assert.equal((faqHtml.match(/<details>/g) || []).length, product.faq.length);
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
  const alternate = { ...product, name: 'Second product test', demo: false, heroImage: { ...product.heroImage, src: '/images/test.webp' }, faq: [{ question: '</script><script>alert(1)</script>', answer: 'Safe text' }] };
  assert(render(alternate).includes('Second product test'), 'Template must render arbitrary product data');
  assert.equal(productMetadata(alternate).robots.index, true);
  assert(productMetadata(alternate).openGraph.images[0].url.endsWith('/images/test.webp'));
  assert(!faqJsonLd(alternate).includes('</script>'));
  assert(!html.includes('Design preview'));
  assert(!html.includes('/ CareNova Lab'));
  assert.equal((html.match(/id="start-project"/g) || []).length, 1);
  assert.equal(product.benefits.length, 3);
  assert.equal(product.customization.length, 4);
  assert.equal(product.texture.attributes.length, 3);
  assert.equal(product.quickInfo.length, 4);
  assert.equal(product.overview.attributes.length, 6);
  assert.equal(product.specifications.length, 13);
  assert.equal(product.faq.length, 7);
  for (const fact of product.quickInfo) {
    const spec = product.specifications.find(item => item.label === (fact.label === 'Size' ? 'Available Size' : fact.label));
    if (spec) assert.equal(spec.value, fact.value, 'Hero and specifications must agree');
  }
  const { getPackagingOptions } = require('../lib/product-detail/packaging');
  assert.throws(() => getPackagingOptions(['not-a-real-pack']), /Unknown packaging ID/);
  const { createProcurementFaq, categoryContent } = require('../lib/product-detail/content');
  assert.notEqual(categoryContent.cleansers.ctaHeading, categoryContent['hair-care'].ctaHeading);
  const generated = createProcurementFaq('hair-care', { formula: 'Alternate formula', moq: 'Test MOQ 222', sample: 'No samples', fragrance: 'No scent', branding: 'Test label' }, 'Test documents');
  assert(generated[0].answer.includes('hair care product'));
  assert(generated[1].answer.includes('Test MOQ 222'));
  assert.equal(generated[6].answer, 'Test documents');
  const variants = { ...product,
    ingredients: [{ name: 'Test confirmed ingredient', description: 'Test only', status: 'confirmed' }, { name: 'Test proposed ingredient', description: 'Test only', status: 'proposed', image: { src: '/images/test-ingredient.webp', alt: 'Test ingredient image', caption: 'Test' } }],
    packagingOptions: [{ id: 'test', type: 'Test pack', capacity: 'Test capacity', material: 'Test material', decoration: 'Test decoration', description: 'Test description', image: { alt: 'Test pack image', caption: 'Test' } }]
  };
  const variantHtml = render(variants);
  assert(variantHtml.includes('Confirmed ingredient') && variantHtml.includes('Proposed ingredient'));
  assert(variantHtml.includes('Test material') && variantHtml.includes('Test decoration'));
  assert(variantHtml.includes('/images/test-ingredient.webp'));
  assert(!html.includes('Factory Certifications'), 'Do not imply unverified factory certification');
  assert(html.includes('Subject to review'));
  const { ProductGallery } = require('../components/product-detail/product-gallery');
  const { productCategories } = require('../lib/products');
  const { getCatalogDetail, catalogSlug, catalogProductPath } = require('../lib/product-detail/catalog');
  const legacyRoute = require('../app/products/[category]/[group]/[product]/page');
  const urls = new Set();
  let catalogCount = 0;
  for (const category of productCategories) for (const group of category.groups) for (const item of group.products) {
    const path = catalogProductPath(category, group, item);
    assert(!urls.has(path), `Duplicate existing URL: ${path}`); urls.add(path);
    const mapped = getCatalogDetail(category.slug, catalogSlug(group.name), catalogSlug(item.name));
    assert.equal(mapped.name, item.name);
    assert.equal(mapped.shortDescription, item.description);
    assert.equal(mapped.seo.canonicalPath, path);
    assert.equal(productMetadata(mapped).robots.index, true);
    assert.equal(mapped.customization.length, 4);
    if (item.image?.endsWith('.webp')) assert(mapped.gallery[0].src.endsWith(item.image));
    if (item.details) {
      assert.equal(mapped.texture.description, item.details.texture);
      assert.equal(mapped.packagingOptions[0].description, item.details.packaging);
      assert.equal(mapped.ingredients[0].description, item.details.ingredientDirection);
    }
    const mappedHtml = render(mapped);
    assert(mappedHtml.includes('product gallery'));
    assert(mappedHtml.includes('id="product-title"'));
    assert(mappedHtml.includes('Business Details'));
    assert.equal((mappedHtml.match(/id="start-project"/g) || []).length, 1);
    catalogCount++;
  }
  assert.equal(getCatalogDetail('invalid', 'invalid', 'invalid'), undefined);
  await assert.rejects(() => legacyRoute.default({ params: Promise.resolve({ category: 'skincare', group: 'cleansers', product: 'invalid' }) }), /NEXT_HTTP_ERROR_FALLBACK;404/);
  console.log(`PASS: ${catalogCount} existing catalog products use the master template; URLs and source content preserved.`);
  const { getProductGallery, galleryIndex, swipeDirection } = require('../lib/product-detail/gallery');
  const { hasSectionData } = require('../lib/product-detail/visibility');
  for (let count = 1; count <= 5; count++) {
    const gallery = product.gallery.slice(0, count);
    const rendered = renderToStaticMarkup(React.createElement(ProductGallery, { product: { name: 'Gallery test', gallery } }));
    assert.equal(rendered.includes(`1 / ${count}`), count > 1);
    assert.equal((rendered.match(/aria-pressed=/g) || []).length, count === 1 ? 0 : count);
    assert(!rendered.includes('<img'), 'Empty gallery sources use placeholders in main image and thumbnails');
    assert.equal(galleryIndex(0, -1, count), count - 1);
    assert.equal(galleryIndex(count - 1, 1, count), 0);
  }
  assert.equal(getProductGallery({ name: 'Empty gallery', gallery: [] }).length, 1);
  assert.equal(getProductGallery({ name: 'Capped gallery', gallery: [...product.gallery, ...product.gallery] }).length, 5);
  assert.equal(swipeDirection(-100, 5), 1);
  assert.equal(swipeDirection(100, 5), -1);
  assert.equal(swipeDirection(30, 5), 0);
  assert.equal(swipeDirection(50, 100), 0, 'Vertical page scrolling must not change slides');
  assert.equal(hasSectionData({ heading: '', attributes: [] }), false);
  const sparse = { slug: 'test-only', name: 'Sparse test', category: 'Test', demo: true, seo: product.seo };
  const sparseHtml = render(sparse);
  for (const id of order.slice(1)) assert(!sparseHtml.includes(`id="${id}"`), `Empty section ${id} must be hidden`);
  assert(!sparseHtml.includes('application/ld+json'));
  const emptyHtml = render({ ...sparse, overview: {}, texture: {}, manufacturing: {}, benefits: [], ingredients: [], packagingOptions: [], faq: [{ question: '', answer: '' }] });
  for (const id of order.slice(1)) assert(!emptyHtml.includes(`id="${id}"`));
  assert(!emptyHtml.includes('application/ld+json'));
  const gallerySeo = productMetadata({ ...sparse, gallery: [{ type: 'hero', src: '/images/gallery.webp', alt: 'Gallery SEO' }] });
  assert(gallerySeo.openGraph.images[0].url.endsWith('/images/gallery.webp'));
  assert(!html.includes('<figcaption'));
  assert(!html.includes('Product Hero</'));
  assert(html.includes('Business Details</h3>'));
  const { displayProduct, visibleFacts } = require('../lib/product-detail/visibility');
  assert.deepEqual(visibleFacts([{ label: 'Empty', value: ' ' }, { label: 'Missing', value: 'N/A' }, { label: 'Unknown', value: 'unknown' }, { label: 'Later', value: 'TBD' }]), []);
  const dirty = { ...sparse,
    benefits: [{ title: 'TBD', description: 'Unknown' }],
    overview: { heading: '', description: 'N/A', attributes: [{ label: 'Capacity', value: 'TBD' }] },
    ingredients: [{ name: 'Unknown', description: 'TBD', status: 'proposed' }],
    texture: { heading: 'Unknown', description: 'TBD', attributes: ['N/A'] },
    customization: [{ title: '', description: '' }],
    packagingOptions: [{ id: 'blank', type: 'Unknown', capacity: 'TBD', description: '', image: { alt: 'internal' } }],
    manufacturing: { standards: 'TBD', qualityControl: 'N/A', targetMarkets: ['Unknown'] },
    specifications: [{ label: 'Capacity', value: 'TBD', group: 'Product Details' }],
    faq: [{ question: 'N/A', answer: 'Unknown' }]
  };
  const cleanHtml = render(dirty);
  for (const id of order.slice(1)) assert(!cleanHtml.includes(`id="${id}"`), `Placeholder-only section ${id}`);
  assert.equal(JSON.parse(faqJsonLd(dirty)).mainEntity.length, 0);
  const certData = displayProduct({ ...sparse, manufacturing: {
    factoryCertifications: [{ name: 'Factory test credential', factory: 'Test factory', scope: 'Factory scope', evidenceReference: 'TEST-ONLY' }],
    productCertifications: [{ name: 'Product test credential', scope: 'Product scope', evidenceReference: 'TEST-ONLY' }]
  } });
  const certHtml = render(certData);
  assert(certHtml.includes('Factory Certifications') && certHtml.includes('Product Certifications'));
  await assert.rejects(() => route.default({ params: Promise.resolve({ category: 'unknown-product' }) }), /NEXT_HTTP_ERROR_FALLBACK;404/);
  for (const relative of ['app/products/skincare/page.tsx', 'app/products/[category]/[group]/page.tsx', 'app/products/[category]/[group]/[product]/page.tsx']) assert(fs.existsSync(path.join(root, relative)));
  console.log('PASS: one demo, ordered sections, reusable data, placeholders, CTA destinations, metadata, FAQ escaping, and unknown-slug 404.');
})();
