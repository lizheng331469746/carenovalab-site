import { demoProduct } from './demo';
import type { Product } from './types';

export const detailProducts: readonly Product[] = [demoProduct];
export function getDetailProduct(slug: string): Product | undefined {
  return detailProducts.find(product => product.slug === slug);
}
