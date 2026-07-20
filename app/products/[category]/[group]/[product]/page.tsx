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
                <span>Project specific, typical from 1,000 units</span>
              </div>
              <div className="spec-item">
                <strong>Customization Options</strong>
                <span>Formula adjustment, custom scent, specific active ingredients, packaging decoration, custom box.</span>
              </div>
              <div className="spec-item">
                <strong>Lead Time</strong>
                <span>4-6 weeks for production after sample approval.</span>
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
