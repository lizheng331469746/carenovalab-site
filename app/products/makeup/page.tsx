import type { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';
import { getCategory } from '@/lib/products';
const category = getCategory('makeup')!;
export const metadata: Metadata = { title: 'Makeup Product Development', description: category.description };
export default function Page() { return <CategoryPage slug="makeup" />; }
