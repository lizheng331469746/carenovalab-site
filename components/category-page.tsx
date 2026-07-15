import Link from 'next/link';
import { getCategory } from '@/lib/products';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug)!;
  return (
    <>
      <section className="category-header">
        <div className="container category-header-grid">
          <div>
            <span className="eyebrow">{category.eyebrow}</span>
            <h1>{category.name} Product Development</h1>
            <p>{category.description} Product specifications, claims, testing, MOQ, packaging and documents must be confirmed for the target market and manufacturing route.</p>
            <div className="hero-actions">
              <InquiryButton context={{ source: `${category.name} category`, message: `I would like to discuss a ${category.name} product project.` }}>Request a {category.name} Quote</InquiryButton>
              <Link className="button button-outline" href="/products">Back to Product Library</Link>
            </div>
          </div>
          <div className="category-header-image">
            <img src={asset(category.image)} alt={`${category.name} product development collection`} />
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container category-groups">
          {category.groups.map((group) => (
            <div key={group.name}>
              <div className="category-group-title">
                <div><span className="eyebrow">{category.name}</span><h2>{group.name}</h2></div>
                <p>{group.products.length} product directions</p>
              </div>
              <div className="simple-product-grid">
                {group.products.map((product) => (
                  <article className="simple-product" key={product}>
                    <span aria-hidden="true" />
                    <h3>{product}</h3>
                    <InquiryButton className="text-link" context={{ product, source: `${category.name} / ${group.name}` }}>Ask about this product →</InquiryButton>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-muted">
        <div className="container split-grid">
          <div><span className="eyebrow">Project-Level Confirmation</span><h2>What We Confirm Before Quotation</h2><p>A useful quotation requires more than a product name. The formula route, target market, quantity, packaging, testing and launch date can materially affect feasibility and cost.</p></div>
          <div className="list-check">{['Target country and sales channel','Estimated order quantity per SKU','Private label, semi-custom or full custom route','Texture, fragrance and ingredient direction','Primary and secondary packaging requirements','Required testing and available document questions','Expected sample and launch schedule'].map((item) => <div key={item}>{item}</div>)}</div>
        </div>
      </section>
    </>
  );
}
