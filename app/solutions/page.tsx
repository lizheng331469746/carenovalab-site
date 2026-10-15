import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Custom Beauty Product Solutions',
  description: 'Explore private label cosmetics, custom formulation, packaging and branding, low MOQ manufacturing, and regulatory support from CareNova Lab.'
};

const solutions = [
  {
    id: 'private-label-cosmetics',
    title: 'Private Label Cosmetics',
    image: '/images/site/solution-device.webp',
    problem: 'Launch faster with proven product formats adapted to your brand, target market and commercial plan.',
    outputs: ['Product selection','Formula options','Brand customization','Production coordination']
  },
  {
    id: 'custom-formulation-development',
    title: 'Custom Formulation Development',
    image: '/images/site/solution-fragrance.webp',
    problem: 'Turn a differentiated product brief into a workable formula direction, sample plan and manufacturing route.',
    outputs: ['Concept brief','Ingredient direction','Texture and sensory targets','Sampling plan']
  },
  {
    id: 'packaging-branding-solutions',
    title: 'Packaging & Branding Solutions',
    image: '/images/site/solution-scenario.webp',
    problem: 'Coordinate packaging format, decoration and presentation so the product is practical to produce and clear to sell.',
    outputs: ['Packaging sourcing','Decoration options','Label and carton direction','Set and gift presentation']
  },
  {
    id: 'low-moq-manufacturing',
    title: 'Low MOQ Manufacturing',
    image: '/images/site/formula-ampoules.webp',
    problem: 'Choose a realistic launch route that controls first-order risk while protecting product and packaging quality.',
    outputs: ['MOQ comparison','Stock packaging options','SKU planning','Scale-up pathway']
  },
  {
    id: 'regulatory-compliance-support',
    title: 'Regulatory & Compliance Support',
    image: '/images/site/insight-step-5.webp',
    problem: 'Prepare the product, claims and available documents around the requirements of your target market.',
    outputs: ['Market requirement review','Claims coordination','Document checklist','Testing pathway']
  }
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Solutions"
        title="Custom Solutions for Building Market-Ready Beauty Products"
        description="CareNova Lab connects product selection, formulation, packaging, manufacturing and compliance around the specific problem your brand needs to solve."
        image="/images/site/formula-ampoules.webp"
        backgroundImage="https://sc02.alicdn.com/kf/H71ae70c0f9bb4d3cab585cb8de9f61aaR.jpg"
        primaryLabel="Build My Product Concept"
        primaryContext={{ source: 'Solutions page', message: 'I need help turning a market opportunity into a product concept.' }}
        secondaryLabel="Browse Products"
        secondaryHref="/products"
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Five Ways We Can Help" title="Choose the Support Your Project Needs" text="Each route begins with your target market, product brief, quantity and timeline. We then define the practical development path with you." />
          <div className="solution-service-grid">
            {solutions.map((solution) => (
              <article className="solution-card anchor-target" id={solution.id} key={solution.title}>
                <div className="solution-card-art"><img src={asset(solution.image)} alt={`${solution.title} solution`} /></div>
                <div className="solution-card-copy">
                  <h3>{solution.title}</h3>
                  <p>{solution.problem}</p>
                  <div className="delivery-strip" style={{marginTop: 18}}>{solution.outputs.slice(0,4).map((item) => <span style={{color:'#696a67',borderColor:'#ded8cb'}} key={item}>{item}</span>)}</div>
                  <div className="solution-actions-refined">
                    <InquiryButton className="button-black-sm" context={{ solution: solution.title, source: 'Solutions page' }}>Discuss This Solution</InquiryButton>
                  </div>
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
          <div className="hero-actions"><InquiryButton context={{ source: 'Solutions deliverables' }}>Talk to Our Product Team</InquiryButton></div>
        </div>
      </section>
    </>
  );
}
