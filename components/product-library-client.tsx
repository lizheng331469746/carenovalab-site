'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Package, Leaf, Droplets, Clock } from 'lucide-react';
import { productCategories } from '@/lib/products';
import { useInquiry } from './inquiry-provider';
import { asset } from '@/lib/assets';

export function ProductLibraryClient() {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const { openInquiry } = useInquiry();

  const products = useMemo(() => {
    return productCategories.flatMap((category) =>
      category.groups.flatMap((group) =>
        group.products.map((product) => ({ product, group: group.name, category }))
      )
    ).filter((item) => {
      const categoryMatch = active === 'all' || item.category.slug === active;
      const queryMatch = `${item.product.name} ${item.product.description} ${item.group} ${item.category.name}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [active, query]);

  return (
    <div>
      <div className="product-toolbar">
        <div className="filter-scroll">
          <button className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')}>All Products</button>
          {productCategories.map((category) => (
            <button key={category.slug} className={active === category.slug ? 'active' : ''} onClick={() => setActive(category.slug)}>
              {category.name}
            </button>
          ))}
        </div>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products…" aria-label="Search products" />
      </div>
      <div className="result-count">{products.length} product directions</div>
      <div className="product-grid-refined">
        {products.map((item) => (
          <article className="refined-product-card" key={`${item.category.slug}-${item.group}-${item.product.name}`}>
            <Link href={`/products/${item.category.slug}/${item.group.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}/${item.product.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`} className="refined-card-art">
              {item.product.image ? (
                <img src={asset(item.product.image)} alt={item.product.name} />
              ) : (
                <div className="refined-placeholder">
                  <span className="placeholder-char">{item.product.name.charAt(0)}</span>
                </div>
              )}
            </Link>
            <div className="refined-card-body">
              <span className="refined-meta">{item.category.name} · {item.group}</span>
              <Link href={`/products/${item.category.slug}/${item.group.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}/${item.product.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}>
                <h3>{item.product.name}</h3>
              </Link>
              <p>{item.product.description}</p>

              <div className="refined-moq">
                <Package size={14} /> <span>MOQ from 1,000 pcs</span>
              </div>

              <div className="refined-actions">
                <button className="button-request" onClick={() => openInquiry({ product: item.product.name, source: 'Product Library' })}>Request a Quote</button>
                <Link className="link-details" href={`/products/${item.category.slug}/${item.group.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}/${item.product.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}>View Product Details →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
