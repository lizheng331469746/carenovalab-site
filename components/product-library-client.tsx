'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
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
      <div className="product-grid">
        {products.map((item) => (
          <article className="product-card" key={`${item.category.slug}-${item.group}-${item.product.name}`}>
            <div className={`product-card-art color-${item.category.color}`}>
              {item.product.image ? (
                <img src={asset(item.product.image)} alt={item.product.name} className="product-card-image" />
              ) : (
                <>
                  <span className="mini-bottle" />
                  <span className="mini-jar" />
                </>
              )}
            </div>
            <div className="product-card-body">
              <span className="product-meta">{item.category.name} · {item.group}</span>
              <h3>{item.product.name}</h3>
              <p>{item.product.description}</p>
              <div className="product-card-actions">
                <button onClick={() => openInquiry({ product: item.product.name, source: 'Product Library' })}>Ask about this product</button>
                <Link href={`/products/${item.category.slug}`}>View category →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
