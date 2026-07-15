import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { ProductLibraryClient } from '@/components/product-library-client';
import { productCategories } from '@/lib/products';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Beauty & Personal Care Product Library',
  description: 'Browse skincare, body care, hair care, sun care, soap, essential oil, fragrance and selected home-care product capabilities.'
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Product Library" title="Explore Product Formats Across Beauty, Personal Care and Home Care" description="Use the library when you already know the product category. Formula, texture, fragrance, packaging, MOQ and available documents are confirmed according to the specific project." image="/images/site/product-library-flatlay.webp" primaryLabel="Ask About a Product" primaryContext={{ source: 'Product Library hero' }} secondaryLabel="Explore Product Solutions" secondaryHref="/solutions" />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Browse by Category" title="Seven Product Capability Areas" text="Each category page organizes product formats into practical groups. The library is a starting point—not a promise that every product uses the same MOQ, timeline or document package." />
          <div className="category-grid">
            {productCategories.map((category) => (
              <Link className={`category-card color-${category.color}`} href={`/products/${category.slug}`} key={category.slug}>
                <img className="category-card-image" src={asset(category.image)} alt={`${category.name} product capability category`} />
                <span className="eyebrow">{category.eyebrow}</span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <strong>View {category.groups.reduce((total, group) => total + group.products.length, 0)} product directions →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Search the Library" title="Find a Product Direction" text="Search by product name, category or product group. Use the inquiry button on any card to send the product name directly to our team." />
          <ProductLibraryClient />
        </div>
      </section>
    </>
  );
}
