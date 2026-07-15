import type { Metadata } from 'next';
import { InsightArticle } from '@/components/insight-article';
import { insights } from '@/lib/insights';
const article = insights.find((item) => item.slug === 'scenario-based-personal-care')!;
export const metadata: Metadata = { title: article.title, description: article.excerpt };
export default function Page(){ return <InsightArticle slug="scenario-based-personal-care" />; }
