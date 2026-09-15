import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategory } from '@/lib/products';
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
    description: product.description,
    openGraph: { title: product.name, description: product.description, ...(product.image ? { images: [{ url: asset(product.image), alt: product.name }] } : {}) }
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
                <img src={asset(product.image)} alt={`${product.name} — CareNova Lab packaging design`} width={1254} height={1254} fetchPriority="high" />
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
            {product.details && product.tags && <ul className="product-feature-tags" aria-label="Product highlights">{product.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
            
            <div className="product-specs">
              <div className="spec-item">
                <strong>Minimum Order (MOQ)</strong>
                <span>{product.details ? 'Confirmed for your formula, packaging and chosen development route.' : 'From 100 units, depending on the development route you choose.'}</span>
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
            
            {product.details && <p className="packaging-caption">Packaging concept shown. Final formula, finish and pack size are confirmed with your sample.</p>}
            <p className="detail-hint">
              * Final specifications and certifications depend on the target market and selected manufacturing route.
            </p>
          </div>
        </div>
      </div>


      {product.details && (
        <section className="section product-story-section" aria-label="Product features and development">
          <div className="container">
            <span className="eyebrow">Product characteristics</span>
            <h2>What Makes This Product Stand Out</h2>
            <p className="product-story-intro">{product.details.overview}</p>
            <div className="product-highlight-grid">
              {product.details.highlights.map((highlight, index) => (
                <article className="product-highlight" key={highlight.title}>
                  <span className="highlight-number">0{index + 1}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
            <div className="product-story-grid">
              <article>
                <span className="eyebrow">Sensory profile</span>
                <h2>Texture &amp; Cleansing Experience</h2>
                <p>{product.details.texture}</p>
                <h3>Ingredient Direction</h3>
                <p>{product.details.ingredientDirection}</p>
              </article>
              <article>
                <span className="eyebrow">Designed for your brand</span>
                <h2>Packaging Highlights</h2>
                <p>{product.details.packaging}</p>
                <h3>What You Can Customize</h3>
                <ul className="product-customization-list">
                  {product.details.customization.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
            <div className="product-development-note">
              <p>These are product development directions. Ingredient choices, sensory performance and finished-product claims are confirmed through formulation, sample approval and relevant testing.</p>
              <InquiryButton className="button button-dark" context={{ product: product.name, source: 'Product features', message: `I would like to discuss the formula, packaging and sample options for ${product.name}.` }}>Discuss This Product</InquiryButton>
            </div>
            <nav className="cleansing-collection-links" aria-label="Explore the cleansing collection">
              <Link href="/products/skincare/cleansers">Explore Cleansers →</Link>
              <Link href="/products/skincare/makeup-removers">Explore Makeup Removers →</Link>
            </nav>
          </div>
        </section>
      )}

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

