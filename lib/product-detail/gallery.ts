import type { GalleryImage, Product } from './types';

export const MAX_GALLERY_IMAGES = 5;
export function getProductGallery(product: Pick<Product, 'gallery' | 'heroImage' | 'name'>): GalleryImage[] {
  if (product.gallery?.length) return product.gallery.slice(0, MAX_GALLERY_IMAGES);
  return [{ ...(product.heroImage ?? { alt: product.name }), type: 'hero' }];
}
export function galleryIndex(index: number, delta: number, count: number): number {
  return count > 0 ? (index + delta % count + count) % count : 0;
}
export function swipeDirection(dx: number, dy: number): number {
  return Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.3 ? (dx < 0 ? 1 : -1) : 0;
}
