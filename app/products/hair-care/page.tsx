import type { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';
import { getCategory } from '@/lib/products';
const category = getCategory('hair-care')!;
export const metadata: Metadata = { title: category.name + ' Product Development', description: category.description };
export default function Page(){ return <CategoryPage slug="hair-care" />; }
