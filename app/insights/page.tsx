import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { insights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Beauty Trends, Product Development & Compliance Insights',
  description: 'Explore product opportunity, range strategy, packaging, OEM/ODM development and target-market preparation insights for beauty and personal care brands.'
};

export default function InsightsPage(){return <>
  <PageHero eyebrow="Insights" title="Turn Beauty Trends Into Practical Product Decisions" description="Our content connects market signals with product concepts, formula routes, packaging choices, target-market preparation and launch execution." image="/images/hero-solutions.svg" backgroundImage="https://sc02.alicdn.com/kf/H18b2f89d55b44eb7aadc8bfc480a5a28X.jpg" primaryLabel="Discuss a Product Idea" primaryContext={{source:'Insights page'}} secondaryLabel="Explore Product Solutions" secondaryHref="/solutions"/>
  <section className="section section-white"><div className="container"><SectionHeading eyebrow="Featured Insights" title="Start With the Three Strategic Directions" text="These articles explain the logic behind CareNova Lab’s current solution-led product development approach."/><div className="insight-grid">{insights.map(article=><Link className="insight-card" href={`/insights/${article.slug}`} key={article.slug}><div className="insight-art"/><div className="insight-copy"><div className="insight-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><strong>Read Insight →</strong></div></Link>)}</div></div></section>
  <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Content Categories" title="What the Knowledge Center Will Cover"/><div className="card-grid">{[
    ['Market & Trend Insight','Consumer shifts, category opportunities, regional preferences and emerging product formats.'],
    ['Product Development','Formula routes, SKU architecture, sampling, MOQ and practical OEM/ODM decisions.'],
    ['Packaging & Presentation','Packaging formats, decoration, sets, artwork and e-commerce presentation.'],
    ['Target-Market Preparation','Document questions, testing preparation and compliance topics that require project-level review.'],
    ['Launch Content','Product naming, packaging copy, key selling points, listing structure and content direction.'],
    ['Founder & Buyer Guides','Practical guidance for startup brands, e-commerce sellers, distributors and device companies.']
  ].map(x=><article className="info-card" key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
</>}
