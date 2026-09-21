'use client';

import { useState } from 'react';
import type { ProductImage } from '@/lib/product-detail/types';
import styles from './product-detail.module.css';

export function ProductImageView({ image, priority = false, thumbnail = false }: { image: ProductImage; priority?: boolean; thumbnail?: boolean }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  return image.src && failedSrc !== image.src ?
    <img src={image.src} alt={thumbnail ? '' : image.alt} width={1000} height={1000}
      loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'}
      draggable={false} onError={() => setFailedSrc(image.src)} /> :
    <div className={styles.placeholder} role={thumbnail ? undefined : 'img'} aria-label={thumbnail ? undefined : image.alt} aria-hidden={thumbnail || undefined}>
      <span className={styles.monogram} aria-hidden="true">CNL</span>
      {!thumbnail && <><span>CARENOVA LAB</span><small>Image coming soon</small></>}
    </div>;
}
export function ProductMedia({ image, priority = false }: { image: ProductImage; priority?: boolean }) {
  return <figure className={styles.media}><ProductImageView key={image.src || image.alt} image={image} priority={priority} />
  </figure>;
}
