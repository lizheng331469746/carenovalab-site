import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'About CareNova Lab | Beauty R&D and OEM/ODM Partner',
  description: 'Learn about CareNova Lab, our beauty R&D approach, manufacturing coordination, quality and compliance process, and global partnerships.'
};

export default function AboutPage() {
  const aboutVideoUrl = process.env.NEXT_PUBLIC_ABOUT_VIDEO_URL;

  return <>
    <section className="about-video-hero">
      <div className="about-video-media">
        <video autoPlay={Boolean(aboutVideoUrl)} loop muted playsInline poster="/images/homepage-laboratory-hero.webp" aria-label="CareNova Lab product development and laboratory film">
          {aboutVideoUrl ? <source src={aboutVideoUrl} type="video/mp4" /> : null}
        </video>
        <div className="about-video-overlay" aria-hidden="true" />
      </div>
      <div className="container about-video-content">
        <span className="eyebrow eyebrow-light">ABOUT CARENOVA LAB</span>
        <h1>A Product Development and China Supply Chain Partner for Beauty Brands</h1>
        <p>CareNova Lab helps overseas beauty and personal care brands clarify product opportunities and execute them through coordinated OEM/ODM supply chains in China.</p>
        <div className="hero-actions">
          <InquiryButton context={{source:'About page'}}>Meet the Product Team</InquiryButton>
        </div>
      </div>
    </section>

    <section className="section section-white anchor-target" id="brand-introduction"><div className="container split-grid"><div><SectionHeading eyebrow="Brand Introduction" title="A Product Development Partner Built Around Better Decisions" text="CareNova Lab connects product strategy, R&D coordination, packaging, manufacturing and market preparation for beauty and personal care projects."/><p>We begin with the target consumer, channel, product role, quantity and launch objective. From there, we help define a practical route and coordinate the partners and information required to move the project forward.</p></div><div><img src="/images/hero-about.svg" alt="CareNova Lab beauty product development team"/></div></div></section>

    <section className="section section-muted anchor-target" id="rd-innovation"><div className="container"><SectionHeading eyebrow="R&D & Innovation" title="Translate Market Opportunities Into Workable Product Directions" text="Innovation becomes useful when it connects consumer demand with formula feasibility, sensory experience, packaging and a clear commercial position."/><div className="card-grid">{[
      ['Market-Led Concepts', 'Use target-market signals, consumer needs and channel context to shape the product brief.'],
      ['Formula Direction', 'Define ingredient, texture, sensory and claims directions before sampling begins.'],
      ['Range Architecture', 'Connect hero products, supporting SKUs, routines and bundles into a coherent launch plan.']
    ].map(item => <article className="info-card" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>

    <section className="section section-white anchor-target" id="manufacturing"><div className="container split-grid"><div><img className="content-photo content-photo-portrait" src={asset('/images/site/insight-step-5.webp')} alt="Beauty product manufacturing and production coordination"/></div><div><SectionHeading eyebrow="Manufacturing" title="Match Each Project With the Right Production Route" text="Different products, quantities, packaging formats and customization levels require different manufacturing capabilities."/><div className="list-check">{['Private label, semi-custom and full custom routes','Manufacturing partner matching by product and project need','Formula, packaging and filling compatibility coordination','Sampling, production schedule and quality checkpoint follow-up','Project-specific MOQ and quotation confirmation'].map(item => <div key={item}>{item}</div>)}</div></div></div></section>

    <section className="section section-dark anchor-target" id="quality-compliance"><div className="container"><SectionHeading eyebrow="Quality & Compliance" title="Confirm Requirements at the Project Level" text="Product specifications, claims, testing, documents and market requirements must be reviewed for the actual product and destination."/><div className="trust-grid">{[
      ['01', 'Approved Direction', 'Align the sample, packaging and product specifications before production.'],
      ['02', 'Quality Checkpoints', 'Coordinate agreed checks through bulk, filling, packing and delivery preparation.'],
      ['03', 'Document Review', 'Organize available product and manufacturer documents around the project need.'],
      ['04', 'Market Preparation', 'Identify claims, testing and regulatory questions for the target country or region.']
    ].map(item => <article className="trust-item" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></div></section>

    <section className="section section-white anchor-target" id="global-partnerships"><div className="container"><SectionHeading eyebrow="Global Partnerships" title="Support Different Business Models and Target Markets" text="We work with beauty startups, established brands, distributors, e-commerce sellers, salons and spas that need clear communication across markets and supply-chain partners."/><div className="card-grid">{[
      ['Market Context', 'Plan product direction around the destination market, sales channel and customer expectations.'],
      ['Project Communication', 'Keep decisions, feedback, approvals and open questions visible across multiple parties.'],
      ['Long-Term Development', 'Create a practical path from first samples to repeat orders and future range expansion.']
    ].map(item => <article className="info-card" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div><div className="hero-actions"><InquiryButton context={{source:'About global partnerships'}}>Discuss a Partnership</InquiryButton></div></div></section>
  </>;
}
