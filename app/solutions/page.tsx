import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Beauty & Personal Care Product Solutions',
  description: 'Explore device companion skincare, fragrance body care and scenario-based personal care solutions built around real consumers, routines and market opportunities.'
};

const solutions = [
  {
    title: 'Device Companion Skincare',
    href: '/solutions/device-companion-skincare',
    image: '/images/site/formula-ampoules.webp',
    audience: 'Beauty device companies, distributors, salons and professional-care brands.',
    goal: 'Build a complete pre-device, during-device and post-device skincare routine.',
    outputs: ['Pre-care cleanser','Conductive or device-use gel','Soothing serum','Repair mask','Barrier cream','Post-hair-removal spray']
  },
  {
    title: 'Fragrance Body Care',
    href: '/solutions/fragrance-body-care',
    image: '/images/categories/body-care.webp',
    audience: 'Fragrance brands, e-commerce brands, Middle East distributors, gift and hospitality channels.',
    goal: 'Turn one scent direction into a coordinated, repeat-purchase body-care collection.',
    outputs: ['Body mist','Hair mist','Shower gel','Body lotion','Body scrub','Hand cream','Body oil']
  },
  {
    title: 'Scenario-Based Personal Care',
    href: '/solutions/scenario-based-care',
    image: '/images/hero-scenario.svg',
    audience: 'Brands that want a clearer consumer, climate, routine or occasion-based positioning.',
    goal: 'Create products that answer who they are for, when they are used and how the routine works.',
    outputs: ['Post-workout care','Dry-hot-climate body care','Men’s oil-control care','Sensitive minimal care','Overnight radiance care','Dark-area body care']
  }
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Solutions"
        title="From Market Opportunity to a Clear Product System"
        description="A product catalog tells you what exists. A product solution helps you decide what to launch, who it is for, how the products work together and what must be prepared before production."
        image="/images/site/formula-ampoules.webp"
        primaryLabel="Build My Product Concept"
        primaryContext={{ source: 'Solutions page', message: 'I need help turning a market opportunity into a product concept.' }}
        secondaryLabel="Browse the Product Library"
        secondaryHref="/products"
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Why Solution-Led Development" title="Start With the Consumer and Commercial Logic" text="Instead of selecting unrelated formulas, we define the target user, use moment, channel, price level and range architecture first. This makes formula, packaging and launch-content decisions easier to coordinate." />
          <div className="card-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <div className="solution-card-art"><img src={asset(solution.image)} alt={`${solution.title} solution`} /></div>
                <div className="solution-card-copy">
                  <h3>{solution.title}</h3>
                  <p><strong>Best for:</strong> {solution.audience}</p>
                  <p><strong>Development goal:</strong> {solution.goal}</p>
                  <div className="delivery-strip" style={{marginTop: 18}}>{solution.outputs.slice(0,4).map((item) => <span style={{color:'#696a67',borderColor:'#ded8cb'}} key={item}>{item}</span>)}</div>
                  <div className="solution-actions"><Link href={solution.href}>Explore Solution →</Link><InquiryButton className="text-link" context={{ solution: solution.title, source: 'Solutions page' }}>Discuss This Direction</InquiryButton></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="What Is Included" title="A Practical Development Package" text="The exact scope is confirmed per project, but the solution process is designed to connect the strategic and operational work." />
          <div className="card-grid">
            {[
              ['Market & Consumer Insight','Target market, consumer, channel, competitor and trend review.'],
              ['Product Concept & Range Architecture','Hero product, supporting SKUs, use sequence, claims direction and bundle logic.'],
              ['Formula & Manufacturing Route','Private label, semi-custom or full custom route with matched manufacturing partners.'],
              ['Packaging & Presentation','Format, capacity, decoration, cartons, inserts and set-building recommendations.'],
              ['Document Coordination','Available product, testing and manufacturer-related documents reviewed by market and project.'],
              ['Launch Content Support','Product naming, packaging copy, key selling points, image direction and listing structure.']
            ].map((item) => <article className="info-card" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}
          </div>
          <div className="hero-actions"><InquiryButton context={{ source: 'Solutions deliverables' }}>Talk to Our Product Team</InquiryButton><Link className="button button-outline" href="/how-we-work">See the Delivery Process</Link></div>
        </div>
      </section>
    </>
  );
}
