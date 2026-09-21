import { notFound } from 'next/navigation';
import { getCatalogDetail } from '@/lib/product-detail/catalog';
import { productMetadata } from '@/lib/product-detail/seo';
import { ProductDetail } from '@/components/product-detail/product-detail';

type Props = { params: Promise<{ category: string; group: string; product: string }> };
async function resolveProduct(params: Props['params']) {
  const route = await params;
  const product = getCatalogDetail(route.category, route.group, route.product);
  if (!product) notFound();
  return product;
}
export async function generateMetadata({ params }: Props) {
  return productMetadata(await resolveProduct(params));
}
export default async function ProductDetailPage({ params }: Props) {
  return <ProductDetail product={await resolveProduct(params)} />;
}
