import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCategory } from '@/lib/products';
import { InquiryButton } from '@/components/inquiry-provider';

export async function generateMetadata({ params }: { params: Promise<{ category: string; group: string }> }): Promise<Metadata> {
  const p = await params;
  const category = getCategory(p.category);
  const group = category?.groups.find((g) => g.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-') === p.group);
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
            <article className="group-product-card" key={product}>
              <div className="group-product-art">
                <span className="group-product-placeholder">{product.charAt(0)}</span>
              </div>
              <div className="group-product-body">
                <h3>{product}</h3>
                <p>Bulk Price Starts From: Contact us</p>
                <InquiryButton
                  className="text-link"
                  context={{ product, source: `${category.name} / ${group.name}` }}
                >
                  Ask about this product →
                </InquiryButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
