import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InsightsCategoryFeed } from '@/components/insights-category-feed';
import { insightCategories } from '@/lib/insights';

type PageProps = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return insightCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = insightCategories.find((item) => item.slug === slug);
  if (!category) return {};
  return { title: `${category.label} Insights`, description: category.description };
}

export default async function InsightCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = insightCategories.find((item) => item.slug === slug);
  if (!category) notFound();
  return <InsightsCategoryFeed category={category} />;
}

