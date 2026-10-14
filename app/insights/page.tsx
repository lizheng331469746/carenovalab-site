import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, ShieldCheck, Leaf, Box, Globe, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { insights } from '@/lib/insights';
import { asset } from '@/lib/assets';

const editorialCategories = [
  {
    id: 'formulation-ingredients',
    title: 'Formulation & Ingredients',
    desc: 'Formula design, active ingredients, textures, stability and product performance.'
  },
  {
    id: 'packaging-customization',
    title: 'Packaging & Customization',
    desc: 'Packaging formats, decoration, branding, sets and practical customization routes.'
  },
  {
    id: 'oem-odm-manufacturing',
    title: 'OEM/ODM Manufacturing',
    desc: 'Sampling, MOQ, production planning, quality control and supply chain execution.'
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory & Compliance',
    desc: 'Target-market requirements, claims, testing and available product documentation.'
  },
  {
    id: 'beauty-market-trends',
    title: 'Beauty Market Trends',
    desc: 'Emerging consumer needs, product opportunities and category development ideas.'
  }
];

const developmentSteps = [
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
  <section className="section section-white"><div className="container">
    <SectionHeading eyebrow="Knowledge Center" title="Insights for Building Better Beauty Products" text="Explore practical guidance across formulation, packaging, manufacturing, compliance and beauty market opportunities."/>
    <div className="insight-category-grid">{editorialCategories.map((category, index) => <section className="insight-category-card anchor-target" id={category.id} key={category.id}><span>{String(index + 1).padStart(2, '0')}</span><h3>{category.title}</h3><p>{category.desc}</p><a href="#featured-insights">Browse Insights →</a></section>)}</div>
  </div></section>
  <section className="section section-muted anchor-target" id="featured-insights"><div className="container"><SectionHeading eyebrow="Featured Insights" title="Start With the Latest Strategic Directions" text="These articles connect market opportunities with practical product development decisions."/><div className="insight-grid-5">{insights.map(article=><Link className="insight-card" href={`/insights/${article.slug}`} key={article.slug}><div className="insight-art"><img src={asset(article.image)} alt={article.title} /></div><div className="insight-copy"><div className="insight-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p className="excerpt-sm">{article.excerpt}</p><strong>Read Insight →</strong></div></Link>)}</div>
</div></section>
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
        {developmentSteps.map((item, index) => (
          <div className="insight-process-item" key={item.title}>
            <div className="step-num">{item.num}. {item.title}</div>
            <p>{item.desc}</p>
            <div style={{ position: 'relative' }}>
              <div className="insight-process-image">
                <img src={asset(item.image)} alt={item.title} />
              </div>
              {index < developmentSteps.length - 1 && (
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
