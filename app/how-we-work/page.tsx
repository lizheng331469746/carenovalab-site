import type { Metadata } from 'next';
import Link from 'next/link';
import { asset } from '@/lib/assets';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = {
  title: 'OEM/ODM Beauty Product Development Process',
  description: 'Understand CareNova Lab OEM/ODM services, three development models, six-step collaboration process, packaging, production support and project consultation.'
};

const models = [
  ['Private Label', 'Choose from proven product directions and adapt packaging, presentation and selected formula options for a faster launch.'],
  ['Semi-Custom', 'Start from an existing formula platform and adjust selected ingredients, texture, fragrance, claims direction or packaging.'],
  ['Full Custom', 'Develop from a detailed brief with a dedicated formula, sampling pathway, packaging system and project-specific testing plan.']
];

const steps = [
  ['01', 'Project Brief', 'Confirm the product, target market, channel, quantity, price direction and expected launch timing.'],
  ['02', 'Development Route', 'Select private label, semi-custom or full custom and match the project with suitable manufacturing resources.'],
  ['03', 'Formula & Sampling', 'Prepare samples, collect structured feedback and coordinate revisions toward an approved product direction.'],
  ['04', 'Packaging & Compliance', 'Match packaging to the formula and organize claims, artwork, testing and available document requirements.'],
  ['05', 'Production & Quality', 'Coordinate approved specifications, bulk production, filling, packaging and agreed quality checkpoints.'],
  ['06', 'Delivery & Launch Support', 'Prepare delivery coordination and organize product information for packaging, listings and sales presentation.']
];

const faqs = [
  ['What information should I prepare?', 'Product type, target market, estimated quantity, customization route, packaging needs and launch timing are the most useful starting points.'],
  ['Can I start with a low MOQ?', 'MOQ depends on the formula, packaging, decoration and factory route. We compare practical options after reviewing the project brief.'],
  ['Do you support packaging sourcing?', 'Yes. We can coordinate stock and custom packaging directions, decoration options, cartons, inserts and set presentation.'],
  ['Can you support target-market documents?', 'We organize project-specific document and testing questions according to the product, manufacturer and destination market.']
];

export default function HowWeWorkPage() {
  return <>
    <PageHero eyebrow="How We Work" title="A Clear OEM/ODM Path From Product Brief to Market-Ready Launch" description="We connect the commercial brief, development model, formula, packaging, compliance questions and production plan in one coordinated process." backgroundImage="/images/how-we-work-hero.jpg" primaryLabel="Start Your Project" primaryContext={{source:'How We Work page'}} secondaryLabel="Complete a Project Brief" secondaryHref="/start-your-project"/>

    <section className="section section-white anchor-target" id="oem-odm-services"><div className="container"><SectionHeading eyebrow="OEM/ODM Services" title="One Project Team Across Product Development and Execution" text="CareNova Lab helps beauty businesses turn a product idea into a workable development route. The scope is confirmed around your product category, market, quantity, packaging and schedule."/><div className="card-grid">{[
      ['Product Strategy', 'Clarify the consumer, channel, product role, range structure and commercial priorities.'],
      ['Development Coordination', 'Connect formula, samples, packaging and manufacturing decisions through one project brief.'],
      ['Market Preparation', 'Coordinate claims, available documents and launch-facing product information for the target market.']
    ].map(item => <article className="info-card" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

    <section className="section section-muted anchor-target" id="product-development-models"><div className="container"><SectionHeading eyebrow="Three Product Development Models" title="Choose the Right Level of Customization" text="The best route depends on differentiation needs, budget, timing, MOQ and the availability of suitable formula and packaging platforms."/><div className="card-grid">{models.map((model, index) => <article className="info-card" key={model[0]}><span className="eyebrow">Model {String(index + 1).padStart(2, '0')}</span><h3>{model[0]}</h3><p>{model[1]}</p></article>)}</div></div></section>

    <section className="section section-white anchor-target" id="six-step-process"><div className="container"><SectionHeading eyebrow="Six-Step Collaboration Process" title="From First Brief to Coordinated Delivery" text="The exact schedule depends on formula route, packaging, sample revisions, testing, documents and production availability."/><div className="category-groups">{steps.map((step) => <article className="system-row" style={{display:'grid',gridTemplateColumns:'90px .8fr 1.4fr',border:'1px solid #ded8cb',borderRadius:20,overflow:'hidden'}} key={step[0]}><span>{step[0]}</span><div><h3>{step[1]}</h3></div><p>{step[2]}</p></article>)}</div></div></section>

    <section className="section section-muted anchor-target" id="packaging-production-support"><div className="container split-grid"><div><SectionHeading eyebrow="Packaging & Production Support" title="Keep Formula, Packaging and Production Decisions Connected" text="Packaging choices affect formula compatibility, MOQ, decoration, filling, freight and launch presentation. We coordinate these decisions as part of the same project."/><div className="list-check">{['Bottle, jar, tube, pump, spray, sachet and set options','Stock packaging and project-specific customization routes','Artwork, decoration, carton and insert coordination','Approved sample and specification confirmation','Production schedule and quality checkpoint follow-up','Delivery preparation and project communication'].map(item => <div key={item}>{item}</div>)}</div></div><div><img className="content-photo content-photo-portrait" src={asset('/images/site/home-hero-lab-serum.webp')} alt="Packaging and beauty product production support"/></div></div></section>

    <section className="section section-dark anchor-target" id="project-consultation"><div className="container"><SectionHeading eyebrow="FAQ / Project Consultation" title="Prepare the Right Information for a Useful First Discussion" text="Share what is already decided and what still needs recommendations. We will identify the next questions and the most practical route."/><div className="trust-grid">{faqs.map((faq, index) => <article className="trust-item" key={faq[0]}><span>{String(index + 1).padStart(2, '0')}</span><h3>{faq[0]}</h3><p>{faq[1]}</p></article>)}</div><div className="hero-actions"><InquiryButton context={{source:'How We Work FAQ'}}>Start a Project Consultation</InquiryButton><Link className="button button-outline" href="/start-your-project">Send a Structured Brief</Link></div></div></section>
  </>;
}
