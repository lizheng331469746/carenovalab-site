import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategory, productCategories } from '@/lib/products';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

export async function generateMetadata({ params }: { params: Promise<{ category: string; group: string; product: string }> }): Promise<Metadata> {
  const p = await params;
  const category = getCategory(p.category);
  if (!category) return { title: 'Not Found' };
  
  const group = category.groups.find(g => g.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.group);
  if (!group) return { title: 'Not Found' };

  const product = group.products.find(pr => pr.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.product);
  if (!product) return { title: 'Not Found' };

  return { 
    title: `${product.name} | ${group.name} | CareNova Lab`,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ category: string; group: string; product: string }> }) {
  const p = await params;
  const category = getCategory(p.category);
  if (!category) notFound();

  const group = category.groups.find(
    (g) => g.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.group
  );
  if (!group) notFound();

  const product = group.products.find(
    (pr) => pr.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.product
  );
  if (!product) notFound();

  return (
    <div className="section-white product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> <span>/</span>{' '}
          <Link href="/products">Products</Link> <span>/</span>{' '}
          <Link href={`/products/${category.slug}`}>{category.name}</Link> <span>/</span>{' '}
          <Link href={`/products/${category.slug}/${p.group}`}>{group.name}</Link> <span>/</span>{' '}
          <span className="font-semibold text-[var(--ink)]">{product.name}</span>
        </div>

        <div className="product-detail-grid">
          <div className="product-detail-visual">
            <div className="product-main-image">
              {product.image ? (
                <img src={asset(product.image)} alt={product.name} />
              ) : (
                <div className="placeholder-large">
                   <div className="lab-icon">🧪</div>
                   <span>CareNova Lab Professional Formulation</span>
                </div>
              )}
            </div>
          </div>

          <div className="product-detail-info">
            <span className="eyebrow">{category.name} · {group.name}</span>
            <h1>{product.name}</h1>
            <p className="product-main-desc">{product.description}</p>
            
            <div className="product-specs">
              <div className="spec-item">
                <strong>Minimum Order (MOQ)</strong>
                <span>From 100 units, depending on the development route you choose.</span>
              </div>
              <div className="spec-item">
                <strong>Customization Options</strong>
                <span>Formula adjustment, custom scent, specific active ingredients, packaging decoration, custom box.</span>
              </div>
              <div className="spec-item">
                <strong>Lead Time</strong>
                <span>Confirmed after the formula, packaging and selected development route are reviewed.</span>
              </div>
            </div>

            <div className="detail-actions">
              <InquiryButton className="button button-dark" context={{ product: product.name, source: `Product Detail: ${product.name}` }}>
                Request a Custom Quote
              </InquiryButton>
              <Link href="/start-your-project" className="button button-outline">
                Submit a Project Brief
              </Link>
            </div>
            
            <p className="detail-hint">
              * Final specifications and certifications depend on the target market and selected manufacturing route.
            </p>
          </div>
        </div>
      </div>

      <section className="section oem-route-section">
        <div className="container">
          <span className="eyebrow">Flexible development routes</span>
          <h2>Choose Your OEM/ODM Route</h2>
          <p className="oem-route-intro">Select the route that fits your budget, launch stage and customization needs. Our team confirms the exact quotation, packaging and schedule for your chosen product.</p>
          <div className="oem-route-grid">
            <article className="oem-route-card">
              <span className="oem-route-label">Plan A</span>
              <h3>Ready Stock + Your Label</h3>
              <p className="oem-route-moq">MOQ from 100 units</p>
              <p>Choose from available stock products and add your customized labels. A practical route for market testing, limited budgets and a faster first launch.</p>
              <ul>
                <li>Choose an available product</li>
                <li>Confirm quotation and MOQ</li>
                <li>Finalize label text and design</li>
                <li>Quality inspection before delivery</li>
              </ul>
              <InquiryButton className="text-link" context={{ product: product.name, source: `Product Detail: ${product.name}`, message: `I would like to discuss Plan A — Ready Stock + Your Label for ${product.name}.` }}>Ask about Plan A →</InquiryButton>
            </article>
            <article className="oem-route-card oem-route-card-featured">
              <span className="oem-route-label">Plan B</span>
              <h3>Semi-Custom Product</h3>
              <p className="oem-route-moq">MOQ from 1,000 units</p>
              <p>Adapt a product direction to your brand by confirming ingredients, fragrance, color and packaging details before pre-production samples and mass production.</p>
              <ul>
                <li>Refine product and packaging details</li>
                <li>Review quotation and MOQ</li>
                <li>Approve pre-production samples</li>
                <li>Mass production and quality inspection</li>
              </ul>
              <InquiryButton className="text-link" context={{ product: product.name, source: `Product Detail: ${product.name}`, message: `I would like to discuss Plan B — Semi-Custom Product for ${product.name}.` }}>Ask about Plan B →</InquiryButton>
            </article>
            <article className="oem-route-card">
              <span className="oem-route-label">Plan C</span>
              <h3>Full OEM/ODM Customization</h3>
              <p className="oem-route-moq">MOQ from 50,000 units</p>
              <p>Build a distinctive product and brand system with custom formula development, packaging design and project coordination from concept through production.</p>
              <ul>
                <li>Custom formula development</li>
                <li>Custom packaging design</li>
                <li>Dedicated project management</li>
                <li>End-to-end launch coordination</li>
              </ul>
              <InquiryButton className="text-link" context={{ product: product.name, source: `Product Detail: ${product.name}`, message: `I would like to discuss Plan C — Full OEM/ODM Customization for ${product.name}.` }}>Ask about Plan C →</InquiryButton>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2>Recommended Services for This Product</h2>
          <div className="card-grid">
             <article className="info-card">
               <h3>Formula Matching</h3>
               <p>We match your performance requirements with suitable base formulas or develop semi-custom routes.</p>
             </article>
             <article className="info-card">
               <h3>Packaging Sourcing</h3>
               <p>Coordinate standard or custom packaging components including secondary boxes and shipping cartons.</p>
             </article>
             <article className="info-card">
               <h3>Document Support</h3>
               <p>Guidance on COA, MSDS, ingredients lists and market-specific compliance checks.</p>
             </article>
          </div>
        </div>
      </section>
    </div>
  );
}

