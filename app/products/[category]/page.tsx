import { notFound } from 'next/navigation';
import { getDetailProduct } from '@/lib/product-detail';
import { productMetadata } from '@/lib/product-detail/seo';
import { ProductDetail } from '@/components/product-detail/product-detail';

// Next requires the existing dynamic segment name. Static category pages win;
// the URL here is /products/<product-slug>. Existing nested routes stay intact.
type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  const product = getDetailProduct((await params).category);
  if (!product) notFound();
  return productMetadata(product);
}

export default async function ProductPage({ params }: Props) {
  const product = getDetailProduct((await params).category);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
