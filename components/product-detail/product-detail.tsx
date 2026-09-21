import Link from 'next/link';
import type { ReactNode } from 'react';
import { InquiryButton } from '@/components/inquiry-provider';
import type { Product, ProductFeature, ProductImage } from '@/lib/product-detail/types';
import { faqJsonLd } from '@/lib/product-detail/seo';
import styles from './product-detail.module.css';

export function ProductMedia({ image, priority = false }: { image: ProductImage; priority?: boolean }) {
  return <figure className={styles.media}>
    {image.src ? <img src={image.src} alt={image.alt} width={1000} height={1000} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} /> :
      <div className={styles.placeholder} role="img" aria-label={image.alt}>
        <span className={styles.monogram} aria-hidden="true">CNL</span>
        <span>CARENOVA LAB</span><small>Image coming soon</small>
      </div>}
    <figcaption>{image.caption}</figcaption>
  </figure>;
}

export function ProductSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className={styles.section}>
    <div className={styles.sectionHeading}><span className="eyebrow">{number} / CareNova Lab</span><h2 id={`${id}-title`}>{title}</h2></div>
    {children}
  </section>;
}

export function FeatureGrid({ items }: { items: ProductFeature[] }) {
  return <div className={styles.cards}>{items.map((item, index) => <article className={styles.card} key={item.title}>
    <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
    <h3>{item.title}</h3><p>{item.description}</p>
  </article>)}</div>;
}

export function ProductActions({ product }: { product: Product }) {
  return <div className={styles.actions}>
    <InquiryButton className="button button-dark" context={{ product: product.name, source: `Product Detail: ${product.slug}` }}>{product.cta.inquiryLabel}</InquiryButton>
    <Link className="button button-outline" href="/start-your-project">{product.cta.projectLabel}</Link>
  </div>;
}

export function ProductDetail({ product }: { product: Product }) {
  return <article className={styles.page}>
    {product.faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd(product) }} />}
    <div className="container">
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span aria-current="page">{product.name}</span></nav>
      <section className={styles.hero} aria-labelledby="product-title">
        <ProductMedia image={product.hero} priority />
        <div className={styles.heroCopy}>
          <span className="eyebrow">{product.category}</span>
          {product.demo && <p className={styles.demo}>Design preview · development concept</p>}
          <h1 id="product-title">{product.name}</h1><p className={styles.lead}>{product.summary}</p>
          <ul className={styles.tags}>{product.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <ProductActions product={product} />
          <a className={styles.explore} href="#key-benefits">Explore the product ↓</a>
        </div>
      </section>
      <ProductSection id="key-benefits" number="02" title="Key Benefits"><FeatureGrid items={product.benefits} /></ProductSection>
      <ProductSection id="product-overview" number="03" title="Product Overview"><div className={styles.split}>
        <div><h3 className={styles.editorial}>{product.overview.heading}</h3>{product.overview.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        <ProductMedia image={product.overview.image} />
      </div></ProductSection>
      <ProductSection id="key-ingredients" number="04" title="Key Ingredients"><p className={styles.intro}>{product.ingredients.introduction}</p><FeatureGrid items={product.ingredients.items} /></ProductSection>
      <ProductSection id="texture-experience" number="05" title="Texture & Experience"><div className={styles.split}>
        <ProductMedia image={product.texture.image} /><div><h3 className={styles.editorial}>{product.texture.heading}</h3><p>{product.texture.description}</p><ul className={styles.textureList}>{product.texture.attributes.map(item => <li key={item}>{item}</li>)}</ul></div>
      </div></ProductSection>
      <ProductSection id="customization" number="06" title="OEM/ODM Customization"><FeatureGrid items={product.customization} /></ProductSection>
      <ProductSection id="packaging-options" number="07" title="Packaging Options"><p className={styles.intro}>{product.packaging.introduction}</p><div className={styles.cards}>{product.packaging.options.map(option => <article className={styles.packaging} key={option.title}><ProductMedia image={option.image} /><h3>{option.title}</h3><p>{option.description}</p></article>)}</div></ProductSection>
      <ProductSection id="manufacturing-compliance" number="08" title="Manufacturing & Compliance"><p className={styles.intro}>{product.manufacturing.introduction}</p><FeatureGrid items={product.manufacturing.items} /></ProductSection>
      <ProductSection id="product-specifications" number="09" title="Product Specifications"><dl className={styles.specifications}>{product.specifications.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></ProductSection>
      <ProductSection id="faq" number="10" title="Frequently Asked Questions"><div className={styles.faq}>{product.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></ProductSection>
      <section id="start-project" className={styles.cta} aria-labelledby="project-title"><span className="eyebrow">11 / Start Your Project</span><h2 id="project-title">{product.cta.heading}</h2><p>{product.cta.description}</p><ProductActions product={product} /><Link className={styles.explore} href="/contact">Contact our team →</Link></section>
    </div>
  </article>;
}
