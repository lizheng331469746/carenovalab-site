import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, ShieldCheck, Leaf, Box, Globe, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { insights } from '@/lib/insights';
import { asset } from '@/lib/assets';

const insightCategories = [
  {
    num: '1',
    title: 'Market Insight',
    desc: 'We analyze trends, consumer needs, and market data to uncover real opportunities.',
    image: '/images/site/insight-step-1.webp'
  },
  {
    num: '2',
    title: 'Product Concept',
    desc: 'We develop strong product concepts and positioning strategies.',
    image: '/images/site/insight-step-2.webp'
  },
  {
    num: '3',
    title: 'Formulation',
    desc: 'Our R&D team creates effective, safe, and innovative formulas based on science.',
    image: '/images/site/insight-step-3.webp'
  },
  {
    num: '4',
    title: 'Packaging',
    desc: 'We design functional, sustainable, and brand-aligned packaging solutions.',
    image: '/images/site/insight-step-4.webp'
  },
  {
    num: '5',
    title: 'Manufacturing',
    desc: 'We ensure strict quality control and efficient production to support your brand growth.',
    image: '/images/site/insight-step-5.webp'
  },
  {
    num: '6',
    title: 'Market Success',
    desc: 'We help you launch successfully and grow sustainably in the global market.',
    image: '/images/site/insight-step-6.webp'
  }
];

export const metadata: Metadata = {
  title: 'Beauty Trends, Product Development & Compliance Insights',
  description: 'Explore product opportunity, range strategy, packaging, OEM/ODM development and target-market preparation insights for beauty and personal care brands.'
};

export default function InsightsPage(){return <>
  <PageHero eyebrow="Insights" title="Turn Beauty Trends Into Practical Product Decisions" description="Our content connects market signals with product concepts, formula routes, packaging choices, target-market preparation and launch execution." image="/images/hero-solutions.svg" backgroundImage="https://sc02.alicdn.com/kf/H18b2f89d55b44eb7aadc8bfc480a5a28X.jpg" primaryLabel="Discuss a Product Idea" primaryContext={{source:'Insights page'}} secondaryLabel="Explore Product Solutions" secondaryHref="/solutions"/>
  <section className="section section-white"><div className="container"><SectionHeading eyebrow="Featured Insights" title="Start With the Three Strategic Directions" text="These articles explain the logic behind CareNova Lab’s current solution-led product development approach."/><div className="insight-grid">{insights.map(article=><Link className="insight-card" href={`/insights/${article.slug}`} key={article.slug}><div className="insight-art"><img src={asset(article.image)} alt={article.title} /></div><div className="insight-copy"><div className="insight-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><strong>Read Insight →</strong></div></Link>)}</div></div></section>
  <section className="section section-muted">
    <div className="container">
      <div className="text-center-serif" style={{ marginBottom: '60px' }}>
        <h2>
          We identify market opportunities<br />
          and transform them<br />
          <span className="text-gold">into scalable products.</span>
        </h2>
        <div className="serif-separator">
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </div>
      </div>
      
      <div className="insight-process-grid">
        {insightCategories.map((item, index) => (
          <div className="insight-process-item" key={item.title}>
            <div className="step-num">{item.num}. {item.title}</div>
            <p>{item.desc}</p>
            <div style={{ position: 'relative' }}>
              <div className="insight-process-image">
                <img src={asset(item.image)} alt={item.title} />
              </div>
              {index < insightCategories.length - 1 && (
                <div className="insight-process-arrow">
                  <ChevronRight />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="insight-features-bar">
        <div className="feature-item"><FlaskConical /> Science-Driven Formulation</div>
        <div className="feature-item"><ShieldCheck /> Global Quality Standards</div>
        <div className="feature-item"><Leaf /> Sustainable Solutions</div>
        <div className="feature-item"><Box /> End-to-End Support</div>
        <div className="feature-item"><Globe /> For Global Brands</div>
      </div>
    </div>
  </section>
</>}
