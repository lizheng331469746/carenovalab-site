import Link from 'next/link';
import type { ReactNode } from 'react';
import { InquiryButton } from '@/components/inquiry-provider';
import type { Product, ProductFeature, ProductFact, Manufacturing, SupportItem } from '@/lib/product-detail/types';
import { faqJsonLd } from '@/lib/product-detail/seo';
import { ProductMedia } from './product-media';
import { ProductGallery } from './product-gallery';
import { hasSectionData } from '@/lib/product-detail/visibility';
export { ProductMedia } from './product-media';
import styles from './product-detail.module.css';

export function ProductSection({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className={styles.section}>
    <div className={styles.sectionHeading}><span className="eyebrow">{eyebrow}</span><h2 id={`${id}-title`}>{title}</h2></div>
    {children}
  </section>;
}
export function ProductFacts({ items, variant = 'attributes' }: { items: ProductFact[]; variant?: 'quickInfo' | 'attributes' | 'specifications' }) {
  return <dl className={styles[variant]}>{items.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>;
}
export function FeatureGrid({ items, compact = false }: { items: ProductFeature[]; compact?: boolean }) {
  return <div className={compact ? styles.compactCards : styles.cards}>{items.map(item => <article className={styles.card} key={item.title}>
    <h3>{item.title}</h3><p>{item.description}</p>
  </article>)}</div>;
}
export function ProductActions({ product }: { product: Product }) {
  if (!product.cta || !hasSectionData(product.cta)) return null;
  return <div className={styles.actions}>
    <InquiryButton className="button button-dark" context={{ product: product.name, source: `Product Detail: ${product.slug}` }}>{product.cta.inquiryLabel}</InquiryButton>
    <Link className="button button-outline" href="/start-your-project">{product.cta.projectLabel}</Link>
  </div>;
}
function SupportList({ items }: { items: SupportItem[] }) {
  return <ul className={styles.supportList}>{items.map(item => <li key={item.name}>
    <strong>{item.name}</strong><span className={styles.status}>{item.status === 'confirmed' ? 'Confirmed available' : 'Subject to review'}</span><p>{item.details}</p>
  </li>)}</ul>;
}
export function ManufacturingSupport({ data: input }: { data: Manufacturing }) {
  const data = { ...input, factoryCertifications: input.factoryCertifications ?? [], availableDocumentation: input.availableDocumentation ?? [], regulatorySupport: input.regulatorySupport ?? [], targetMarkets: input.targetMarkets ?? [] };
  const hasDocuments = hasSectionData([data.documentationSummary, data.availableDocumentation, data.regulatorySupport, data.targetMarkets]);
  return <>
    <p className={styles.intro}>{data.introduction}</p>
    <div className={styles.manufacturingGrid}>
      {(data.standards || data.factoryCertifications.length > 0) && <article className={styles.card}><h3>Manufacturing Standards</h3><p>{data.standards}</p>
        {data.factoryCertifications.length > 0 && <div className={styles.supportDetail}><h4>Factory Certifications</h4>
          <ul className={styles.supportList}>{data.factoryCertifications.map(cert => <li key={`${cert.factory}-${cert.name}`}><strong>{cert.name}</strong><p>{cert.factory} · {cert.scope}</p></li>)}</ul>
        </div>}
      </article>}
      {data.qualityControl && <article className={styles.card}><h3>Quality Control</h3><p>{data.qualityControl}</p></article>}
      {data.testingSupport && <article className={styles.card}><h3>Testing Support</h3><p>{data.testingSupport}</p></article>}
      {hasDocuments && <article className={styles.card}><h3>Regulatory &amp; Export Documentation</h3><p>{data.documentationSummary}</p>
        <div className={styles.supportDetail}>
          {data.availableDocumentation.length > 0 && <><h4>Available Documentation</h4><SupportList items={data.availableDocumentation} /></>}
          {data.regulatorySupport.length > 0 && <><h4>Regulatory Support</h4><SupportList items={data.regulatorySupport} /></>}
          {data.targetMarkets.length > 0 && <><h4>Target Market</h4><p>{data.targetMarkets.join(' · ')}</p></>}
        </div>
      </article>}
    </div>
  </>;
}
export function ProductDetail({ product }: { product: Product }) {
  const faq = (product.faq ?? []).filter(item => item.question.trim() && item.answer.trim());
  const overview = product.overview;
  const texture = product.texture;
  return <article className={styles.page}>
    {faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd({ ...product, faq }) }} />}
    <div className="container">
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span aria-current="page">{product.name}</span></nav>
      <section className={styles.hero} aria-labelledby="product-title">
        <ProductGallery key={product.slug} product={product} />
        <div className={styles.heroCopy}>
          <span className="eyebrow">{[product.category, product.subcategory].filter(Boolean).join(' · ')}</span>
          <h1 id="product-title">{product.name}</h1>{product.shortDescription && <p className={styles.lead}>{product.shortDescription}</p>}
          {!!product.benefitTags?.length && <ul className={styles.benefitTags}>{product.benefitTags.slice(0, 3).map(tag => <li key={tag}>{tag}</li>)}</ul>}
          {!!product.quickInfo?.length && <ProductFacts items={product.quickInfo} variant="quickInfo" />}
          <ProductActions product={product} />
        </div>
      </section>
      {(!!product.benefits?.length) && <ProductSection id="key-benefits" eyebrow="Product Benefits" title="Key Benefits"><FeatureGrid items={product.benefits ?? []} /></ProductSection>}
      {(hasSectionData(overview) || !!product.overviewImage?.src) && <ProductSection id="product-overview" eyebrow="Product Overview" title="Product Overview"><div className={styles.split}>
        <div><h3 className={styles.editorial}>{overview?.heading}</h3><p>{overview?.description}</p><ProductFacts items={overview?.attributes ?? []} /></div>
        <ProductMedia image={product.overviewImage ?? { alt: product.name }} />
      </div></ProductSection>}
      {(!!product.ingredients?.length) && <ProductSection id="key-ingredients" eyebrow="Formula & Ingredients" title="Key Ingredients">
        <p className={styles.intro}>{product.ingredientIntroduction}</p>
        <div className={styles.cards}>{(product.ingredients ?? []).map(ingredient => <article className={styles.ingredient} key={ingredient.name}>
          <ProductMedia image={ingredient.image ?? { alt: ingredient.name, caption: ingredient.name }} />
          <span className={styles.status}>{ingredient.status === 'confirmed' ? 'Confirmed ingredient' : 'Proposed ingredient'}</span>
          <h3>{ingredient.name}</h3><p>{ingredient.description}</p>
        </article>)}</div>
      </ProductSection>}
      {(hasSectionData(texture) || !!product.textureImage?.src) && <ProductSection id="texture-experience" eyebrow="Texture & Experience" title="Texture & Experience"><div className={styles.split}>
        <ProductMedia image={product.textureImage ?? { alt: product.name }} /><div><h3 className={styles.editorial}>{texture?.heading}</h3><p>{texture?.description}</p><ul className={styles.textureList}>{(texture?.attributes ?? []).map(item => <li key={item}>{item}</li>)}</ul></div>
      </div></ProductSection>}
      {(!!product.customization?.length) && <ProductSection id="customization" eyebrow="OEM / ODM" title="OEM/ODM Customization"><FeatureGrid items={product.customization ?? []} compact /></ProductSection>}
      {(!!product.packagingOptions?.length) && <ProductSection id="packaging-options" eyebrow="Packaging" title="Packaging Options">
        <p className={styles.intro}>{product.packagingIntroduction}</p><div className={styles.cards}>{(product.packagingOptions ?? []).map(option => <article className={styles.packaging} key={option.id}>
          <ProductMedia image={option.image} /><h3>{option.type}</h3>
          <ProductFacts items={[
            { label: 'Capacity', value: option.capacity },
            ...(option.material ? [{ label: 'Material', value: option.material }] : []),
            ...(option.decoration ? [{ label: 'Decoration', value: option.decoration }] : [])
          ]} /><p>{option.description}</p>
        </article>)}</div>
      </ProductSection>}
      {(hasSectionData(product.manufacturing)) && <ProductSection id="manufacturing-compliance" eyebrow="Manufacturing" title="Manufacturing & Compliance"><ManufacturingSupport data={product.manufacturing ?? {}} /></ProductSection>}
      {(!!product.specifications?.length) && <ProductSection id="product-specifications" eyebrow="Product Details" title="Product Specifications"><ProductFacts items={product.specifications ?? []} variant="specifications" /></ProductSection>}
      {(faq.length > 0) && <ProductSection id="faq" eyebrow="FAQ" title="Frequently Asked Questions"><div className={styles.faq}>{faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></ProductSection>}
      {product.cta && hasSectionData(product.cta) && <section id="start-project" className={styles.cta} aria-labelledby="project-title"><span className="eyebrow">Start Your Project</span><h2 id="project-title">{product.cta.heading}</h2><p>{product.cta.description}</p><ProductActions product={product} /><Link className={styles.explore} href="/contact">{product.cta.contactLabel} →</Link></section>}
    </div>
  </article>;
}

