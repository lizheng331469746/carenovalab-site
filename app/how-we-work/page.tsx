import type { Metadata } from 'next';
import Link from 'next/link';
import { asset } from '@/lib/assets';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = {
  title: 'OEM/ODM Beauty Product Development Process',
  description: 'Understand CareNova Lab OEM/ODM services, three development models, six-step collaboration process, packaging, production support and project consultation.'
};

const services = [
  ['01', 'Product Strategy', 'Clarify the consumer, channel, product role, range structure and commercial priorities.'],
  ['02', 'Development Coordination', 'Connect formula, samples, packaging and manufacturing decisions through one project brief.'],
  ['03', 'Market Preparation', 'Coordinate claims, available documents and launch-facing product information for the target market.']
];

const models = [
  ['Private Label', 'Choose from proven product directions and adapt packaging, presentation and selected formula options for a faster launch.', '/images/site/product-library-flatlay.webp'],
  ['Semi-Custom', 'Start from an existing formula platform and adjust selected ingredients, texture, fragrance, claims direction or packaging.', '/images/site/formula-ampoules.webp'],
  ['Full Custom', 'Develop from a detailed brief with a dedicated formula, sampling pathway, packaging system and project-specific testing plan.', '/images/site/insight-step-5.webp']
];

const steps = [
  ['01', 'Project Brief', 'Confirm the product, target market, channel, quantity, price direction and expected launch timing.', '/images/site/insight-step-1.webp'],
  ['02', 'Development Route', 'Select private label, semi-custom or full custom and match the project with suitable manufacturing resources.', '/images/site/insight-step-2.webp'],
  ['03', 'Formula & Sampling', 'Prepare samples, collect structured feedback and coordinate revisions toward an approved product direction.', '/images/site/insight-step-3.webp'],
  ['04', 'Packaging & Compliance', 'Match packaging to the formula and organize claims, artwork, testing and available document requirements.', '/images/site/insight-step-4.webp'],
  ['05', 'Production & Quality', 'Coordinate approved specifications, bulk production, filling, packaging and agreed quality checkpoints.', '/images/site/insight-step-5.webp'],
  ['06', 'Delivery & Launch Support', 'Prepare delivery coordination and organize product information for packaging, listings and sales presentation.', '/images/site/insight-step-6.webp']
];

const faqs = [
  ['What information should I prepare?', 'Product type, target market, estimated quantity, customization route, packaging needs and launch timing are the most useful starting points.'],
  ['Can I start with a low MOQ?', 'MOQ depends on the formula, packaging, decoration and factory route. We compare practical options after reviewing the project brief.'],
  ['Do you support packaging sourcing?', 'Yes. We can coordinate stock and custom packaging directions, decoration options, cartons, inserts and set presentation.'],
  ['Can you support target-market documents?', 'We organize project-specific document and testing questions according to the product, manufacturer and destination market.']
];

const sectionLinks = [
  ['OEM/ODM Services', '#oem-odm-services'],
  ['Development Models', '#product-development-models'],
  ['Six-Step Process', '#six-step-process'],
  ['Packaging & Production', '#packaging-production-support'],
  ['Project Consultation', '#project-consultation']
];

export default function HowWeWorkPage() {
  return <>
    <section className="process-journal-shell">
      <div className="container">
        <div className="process-journal-hero">
          <span className="process-journal-orb" aria-hidden="true" />
          <span className="process-journal-chip">CARENOVA DEVELOPMENT GUIDE</span>
          <h1>A Clear OEM/ODM Path From Product Brief to Market-Ready Launch</h1>
          <p>We connect the commercial brief, development model, formula, packaging, compliance questions and production plan in one coordinated process.</p>
          <Link className="process-brief-link" href="/start-your-project">
            <span>Tell us what you want to develop</span>
            <strong>Start Your Project →</strong>
          </Link>
        </div>
      </div>
    </section>

    <nav className="process-section-nav" aria-label="How We Work sections">
      <div className="container">{sectionLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
    </nav>

    <section className="section section-white anchor-target" id="oem-odm-services">
      <div className="container">
        <SectionHeading align="center" eyebrow="OEM/ODM Services" title="One Project Team Across Product Development and Execution" text="CareNova Lab helps beauty businesses turn a product idea into a workable development route. The scope is confirmed around your product category, market, quantity, packaging and schedule."/>
        <div className="process-service-grid">{services.map((item) => <article className="process-service-card" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
      </div>
    </section>

    <section className="section section-muted anchor-target" id="product-development-models">
      <div className="container">
        <SectionHeading align="center" eyebrow="Three Product Development Models" title="Choose the Right Level of Customization" text="The best route depends on differentiation needs, budget, timing, MOQ and the availability of suitable formula and packaging platforms."/>
        <div className="process-article-grid">{models.map((model, index) => <article className="process-article-card" key={model[0]}><img src={asset(model[2])} alt={`${model[0]} beauty product development`}/><div><span>MODEL {String(index + 1).padStart(2, '0')}</span><h3>{model[0]}</h3><p>{model[1]}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section section-white anchor-target" id="six-step-process">
      <div className="container">
        <SectionHeading align="center" eyebrow="Six-Step Collaboration Process" title="From First Brief to Coordinated Delivery" text="The exact schedule depends on formula route, packaging, sample revisions, testing, documents and production availability."/>
        <div className="process-article-grid process-step-grid">{steps.map((step) => <article className="process-article-card" key={step[0]}><img src={asset(step[3])} alt={`${step[1]} stage`}/><div><span>STEP {step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section section-muted anchor-target" id="packaging-production-support">
      <div className="container split-grid process-support-grid">
        <div><img className="content-photo content-photo-portrait" src={asset('/images/site/home-hero-lab-serum.webp')} alt="Packaging and beauty product production support"/></div>
        <div><SectionHeading eyebrow="Packaging & Production Support" title="Keep Formula, Packaging and Production Decisions Connected" text="Packaging choices affect formula compatibility, MOQ, decoration, filling, freight and launch presentation. We coordinate these decisions as part of the same project."/><div className="list-check">{['Bottle, jar, tube, pump, spray, sachet and set options','Stock packaging and project-specific customization routes','Artwork, decoration, carton and insert coordination','Approved sample and specification confirmation','Production schedule and quality checkpoint follow-up','Delivery preparation and project communication'].map(item => <div key={item}>{item}</div>)}</div></div>
      </div>
    </section>

    <section className="section section-dark anchor-target process-consultation" id="project-consultation">
      <div className="container">
        <SectionHeading align="center" eyebrow="FAQ / Project Consultation" title="Prepare the Right Information for a Useful First Discussion" text="Share what is already decided and what still needs recommendations. We will identify the next questions and the most practical route."/>
        <div className="process-faq-grid">{faqs.map((faq, index) => <article key={faq[0]}><span>{String(index + 1).padStart(2, '0')}</span><h3>{faq[0]}</h3><p>{faq[1]}</p></article>)}</div>
        <div className="process-consultation-actions"><InquiryButton context={{source:'How We Work FAQ'}}>Start a Project Consultation</InquiryButton><Link className="button button-outline" href="/start-your-project">Send a Structured Brief</Link></div>
      </div>
    </section>
  </>;
}

