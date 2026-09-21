'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import type { Product } from '@/lib/product-detail/types';
import { getProductGallery, galleryIndex, swipeDirection } from '@/lib/product-detail/gallery';
import { ProductImageView } from './product-media';
import styles from './product-gallery.module.css';

export function ProductGallery({ product }: { product: Pick<Product, 'gallery' | 'heroImage' | 'name'> }) {
  const images = getProductGallery(product);
  const [selected, setSelected] = useState(0);
  const current = Math.min(selected, images.length - 1);
  const active = images[current];
  const thumbnails = useRef<(HTMLButtonElement | null)[]>([]);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const move = (delta: number) => setSelected(galleryIndex(current, delta, images.length));
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const deltas: Record<string, number> = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 };
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? images.length - 1 :
      event.key in deltas ? galleryIndex(index, deltas[event.key], images.length) : null;
    if (next === null) return;
    event.preventDefault(); setSelected(next); thumbnails.current[next]?.focus();
  }
  return <div className={styles.gallery} role="group" aria-label={`${product.name} product gallery`}>
    {images.length > 1 && <div className={styles.thumbnails} aria-label="Product images">
      {images.map((image, index) => <button key={index} type="button"
        className={styles.thumbnail} aria-pressed={index === current}
        aria-label={`View image ${index + 1}: ${image.alt}`}
        ref={element => { thumbnails.current[index] = element; }}
        onClick={() => setSelected(index)} onKeyDown={event => onKey(event, index)}>
        <ProductImageView key={image.src || image.alt} image={image} thumbnail />
        <span className={styles.thumbNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </button>)}
    </div>}
    <div className={styles.mainColumn}>
      <div className={styles.mainImage}
        onTouchStart={event => { const point = event.touches[0]; touch.current = event.touches.length === 1 ? { x: point.clientX, y: point.clientY } : null; }}
        onTouchCancel={() => { touch.current = null; }}
        onTouchEnd={event => {
          const start = touch.current; touch.current = null;
          if (!start || !event.changedTouches[0]) return;
          const point = event.changedTouches[0];
          const delta = swipeDirection(point.clientX - start.x, point.clientY - start.y);
          if (delta && images.length > 1) move(delta);
        }}>
        <ProductImageView key={active.src || active.alt} image={active} priority={current === 0} />
        {images.length > 1 && <span className={styles.counter} aria-live="polite" aria-atomic="true">{current + 1} / {images.length}</span>}
      </div>
    </div>
  </div>;
}
