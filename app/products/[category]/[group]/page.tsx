import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategory } from '@/lib/products';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

export async function generateMetadata({ params }: { params: Promise<{ category: string; group: string }> }): Promise<Metadata> {
  const p = await params;
  const category = getCategory(p.category);
  if (!category) return { title: 'Not Found' };
  const group = category.groups.find((g) => g.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.group);
  if (!group) return { title: 'Not Found' };
  return { title: `${group.name} | ${category.name}` };
}

export default async function GroupPage({ params }: { params: Promise<{ category: string; group: string }> }) {
  const p = await params;
  const category = getCategory(p.category);
  if (!category) notFound();

  const group = category.groups.find(
    (g) => g.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.group
  );
  if (!group) notFound();

  return (
    <div className="section-white group-page">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> <span>/</span>{' '}
          <Link href="/products">Products</Link> <span>/</span>{' '}
          <Link href={`/products/${category.slug}`}>{category.name}</Link> <span>/</span>{' '}
          <span className="font-semibold text-[var(--ink)]">{group.name}</span>
        </div>
      </div>
      <div className="container group-layout">
        <aside className="group-sidebar">
          <div className="group-search">
            <span className="group-search-icon">🔍</span>
            <input placeholder="Search for products..." aria-label="Search" />
          </div>
          <h3 className="group-sidebar-title">CHOOSE CATEGORY</h3>
          <ul className="group-sidebar-list">
            <li className="group-sidebar-back">
              <Link href={`/products/${category.slug}`}>← Back to {category.name}</Link>
            </li>
            {category.groups.map((g) => (
              <li
                key={g.name}
                className={g.name === group.name ? 'group-sidebar-active' : ''}
              >
                <Link href={`/products/${category.slug}/${g.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}>
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="group-grid">
          {group.products.map((product) => (
            <article className="group-product-card" key={product.name}>
              <Link href={`/products/${category.slug}/${p.group}/${product.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`} className="group-product-art">
                {product.image ? (
                  <img src={asset(product.image)} alt={product.name} />
                ) : (
                  <span className="group-product-placeholder">{product.name.charAt(0)}</span>
                )}
              </Link>
              <div className="group-product-body">
                <Link href={`/products/${category.slug}/${p.group}/${product.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}>
                  <h3>{product.name}</h3>
                </Link>
                <p>{product.description}</p>
                <div className="group-product-actions">
                  <InquiryButton
                    className="text-link"
                    context={{ product: product.name, source: `${category.name} / ${group.name}` }}
                  >
                    Direct Inquiry →
                  </InquiryButton>
                  <Link href={`/products/${category.slug}/${p.group}/${product.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`} className="text-link">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
