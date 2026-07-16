import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';
import { DirectConsultantLink } from '@/components/team-links';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = {
  title: 'About CareNova Lab & Our Product Team',
  description: 'Meet the CareNova Lab product team and learn how we coordinate beauty product concepts, formulas, packaging, samples, documents and manufacturing partners in China.'
};

export default function AboutPage(){return <>
  <PageHero eyebrow="About CareNova Lab" title="A Product Development and China Supply Chain Partner for Beauty Brands" description="CareNova Lab helps overseas beauty and personal care brands clarify product opportunities and execute them through coordinated OEM/ODM supply chains in China." image="/images/hero-about.svg" backgroundImage="https://sc02.alicdn.com/kf/H4a0e9b018274420b8e44727ceb5a5d43y.jpg" primaryLabel="Meet the Product Team" primaryContext={{source:'About page'}} secondaryLabel="See How We Work" secondaryHref="/how-we-work"/>
  <section className="section section-white"><div className="container split-grid"><div><SectionHeading eyebrow="Who We Are" title="Not a Single Factory. A Project Team That Connects the Work." text="CareNova Lab is not presented as the owner of every production capability shown on the website. We work with matched manufacturing partners according to the product, quantity, customization, packaging and target-market requirements."/><p>Our role is to help organize the product brief, identify practical development routes, coordinate formulas and samples, connect packaging and production decisions, and support the market-facing content required for launch.</p></div><div><img src="/images/hero-about.svg" alt="CareNova Lab product development and supply chain coordination team"/></div></div></section>
  <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Our Team" title="Talk Directly With a Product Consultant" text="Willow and Jasmine are part of the CareNova Lab product team. Choose the consultant you prefer, or submit a project brief and select No Preference."/><div className="team-grid">{siteConfig.consultants.map((consultant,index)=><article className="team-card" key={consultant.id}><div className={`avatar avatar-${index+1}`}>{consultant.name[0]}</div><div><h3>{consultant.name}</h3><p className="consultant-title">{consultant.title}</p><p>{consultant.shortBio}</p><DirectConsultantLink consultant={consultant}/></div></article>)}</div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="Why CareNova Lab Exists" title="Because Product Development Is More Than Finding a Formula" text="Brands often receive a product list, a sample and a price—but still lack a clear answer to why the product should exist, how the range should be structured and what must be prepared before launch."/><div className="card-grid">{[
    ['Product Judgment','Connect trends and customer needs to product concepts that can be discussed and sampled.'],
    ['Supply Chain Coordination','Match the project with suitable partners and keep formula, packaging and schedule connected.'],
    ['Commercial Presentation','Translate technical product information into packaging, selling points and launch-content direction.']
  ].map(x=><article className="info-card" key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="Working Principles" title="Practical, Transparent and Project-Specific"/><div className="trust-grid">{[
    ['01','No Unverified Scale Claims','We do not rely on unverified production, brand or country numbers to create trust.'],
    ['02','Partner Transparency','Manufacturing qualifications belong to the matched manufacturing partner.'],
    ['03','Project-Level Confirmation','MOQ, testing, documents, price and timelines are confirmed for the actual project.'],
    ['04','Clear Communication','We separate ideas, recommendations, estimates and confirmed production information.']
  ].map(x=><article className="trust-item" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><div className="hero-actions"><InquiryButton context={{source:'About principles'}}>Talk to Our Team</InquiryButton></div></div></section>
</>}
