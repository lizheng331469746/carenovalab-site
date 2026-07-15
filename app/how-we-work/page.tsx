import type { Metadata } from 'next';
import Link from 'next/link';
import { asset } from '@/lib/assets';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = {
  title: 'Beauty Product Development Process in China',
  description: 'Understand the CareNova Lab process from market insight and product concept to formula matching, packaging, documents, production and launch content.'
};

const steps = [
  ['01','Market Insight','We review the target market, customer, channel, competitor references and the commercial reason for developing the product.','Output: opportunity summary and key development questions.'],
  ['02','Product Concept','We define the target consumer, use scenario, product role, formula direction, range architecture and selling story.','Output: product brief and recommended SKU structure.'],
  ['03','Formula & Factory Matching','We assess whether private label, semi-custom or full custom is practical and match the project with suitable manufacturing partners.','Output: development route, sampling plan and feasibility questions.'],
  ['04','Packaging Coordination','We connect formula characteristics with bottle, tube, jar, pump, spray, carton, insert and set requirements.','Output: packaging direction and quotation inputs.'],
  ['05','Sample & Document Follow-Up','We organize sample feedback, revisions and available product or manufacturer-related documentation.','Output: approved sample direction and document checklist.'],
  ['06','Production Coordination','We follow packaging, bulk, filling, quality checkpoints, delivery schedule and project communication.','Output: production status and coordinated delivery preparation.'],
  ['07','Launch Content Support','We organize naming, packaging copy, key benefits, product-image direction, e-commerce structure and sales presentation content.','Output: a clearer market-facing product package.']
];

export default function HowWeWorkPage(){return <>
  <PageHero eyebrow="How We Work" title="A Clear Product Process From First Brief to Launch Preparation" description="We organize each project as a sequence of decisions. This reduces disconnected sampling, packaging changes, unclear quotations and avoidable production delays." image="/images/site/home-hero-lab-serum.webp" primaryLabel="Start Your Project" primaryContext={{source:'How We Work page'}} secondaryLabel="Complete a Project Brief" secondaryHref="/start-your-project"/>
  <section className="section section-white"><div className="container"><SectionHeading eyebrow="Seven-Step Process" title="Insight → Concept → Execution" text="The exact timeline depends on formula route, packaging, sample revisions, testing, documents, quantity and manufacturing partner availability."/><div className="category-groups">{steps.map((step)=><article className="system-row" style={{display:'grid',gridTemplateColumns:'90px 1fr 1.3fr',border:'1px solid #ded8cb',borderRadius:20,overflow:'hidden'}} key={step[0]}><span>{step[0]}</span><div><h3>{step[1]}</h3><p>{step[2]}</p></div><p>{step[3]}</p></article>)}</div></div></section>
  <section className="section section-muted"><div className="container split-grid"><div><SectionHeading eyebrow="Project Communication" title="What Keeps a Multi-Party Project Moving" text="A beauty product project can involve the brand, product consultant, formula team, packaging supplier, designer, factory, testing party and logistics provider. Clear approvals and written records matter."/><div className="list-check">{['One project brief with agreed priorities','Written sample feedback and approval records','Packaging artwork and technical confirmation','Project-specific quotation and payment terms','Shared timeline with dependency tracking','Clear distinction between confirmed and estimated information'].map(x=><div key={x}>{x}</div>)}</div></div><div><img className="content-photo content-photo-portrait" src={asset("/images/site/home-hero-lab-serum.webp")} alt="Skincare product concept in a laboratory development setting"/></div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="Before You Contact Us" title="Five Details That Improve the First Discussion"/><div className="trust-grid">{[
    ['01','Product','What product or solution are you considering?'],
    ['02','Market','Where will the product be sold?'],
    ['03','Quantity','What is the estimated quantity per SKU?'],
    ['04','Packaging','Do you have packaging, or do you need recommendations?']
  ].map(x=><article className="trust-item" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><div className="hero-actions"><InquiryButton context={{source:'How We Work checklist'}}>Discuss Your Project</InquiryButton><Link className="button button-outline" href="/start-your-project">Send a Structured Brief</Link></div></div></section>
</>}
