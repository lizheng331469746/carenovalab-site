import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';
import { DirectConsultantLink } from '@/components/team-links';
import { InquiryForm } from '@/components/inquiry-form';

export const metadata: Metadata = {
  title: 'Contact the CareNova Lab Product Team',
  description: 'Choose Willow or Jasmine on WhatsApp, or send your RFQ by email to discuss beauty product ideas, samples, packaging, MOQ and quotations.'
};

const faqs = [
  ['Are you a factory?','CareNova Lab is a beauty product development and China supply chain coordination partner. Manufacturing is completed by matched manufacturing partners according to the product and project requirements.'],
  ['What products can you help develop?','We coordinate projects across skincare, body care, hair care, sun care, soap, essential oils, fragrance and selected home-care categories.'],
  ['Can you support private label products?','Yes. Depending on the product, we can help review mature formula options, packaging routes, samples and manufacturing partners.'],
  ['Can you develop a custom formula?','Semi-custom and full custom development may be available depending on the product, target quantity, budget, timeline and manufacturing partner.'],
  ['What is the MOQ?','MOQ varies by formula, packaging, decoration, factory and product category. Please send the product and estimated quantity for project-specific guidance.'],
  ['How long does sampling take?','Sampling time depends on whether the formula is mature, semi-custom or newly developed, and how many adjustments are required. A timeline is confirmed after the brief is reviewed.'],
  ['Can you provide packaging?','We can help coordinate bottles, tubes, jars, pumps, sprays, labels, cartons, inserts and gift sets based on the product and quantity.'],
  ['What documents can be provided?','Available documents depend on the product, manufacturer and target market. These may include ingredient lists, specifications, SDS/MSDS, COA, testing documents and manufacturer-related export materials.'],
  ['Can you support US or EU projects?','We can help organize product and document preparation questions for target markets, but final testing, registration and compliance requirements must be confirmed for the specific product and market.'],
  ['Can you sign an NDA?','Yes, confidentiality arrangements can be discussed before confidential formulas, technical files or commercially sensitive information are shared.']
];

export default function ContactPage(){return <>
  <PageHero eyebrow="Contact Our Team" title="Talk to a CareNova Lab Product Consultant" description="Choose a consultant for quick WhatsApp communication, or send your RFQ, product list and reference files by email." image="/images/hero-contact.svg" primaryLabel="Choose a Consultant" primaryContext={{source:'Contact page hero'}} secondaryLabel="Complete a Project Brief" secondaryHref="/start-your-project"/>
  <section className="section section-white"><div className="container"><SectionHeading eyebrow="Product Team" title="Choose Willow or Jasmine" text="Both consultants work under the CareNova Lab team structure. Select the person you prefer based on your existing communication or project needs."/><div className="team-grid">{siteConfig.consultants.map((c,i)=><article className="team-card" key={c.id}><div className={`avatar avatar-${i+1}`}>{c.name[0]}</div><div><h3>{c.name}</h3><p className="consultant-title">{c.title}</p><p>{c.shortBio}</p><DirectConsultantLink consultant={c}/></div></article>)}</div><div className="hero-actions"><a className="button button-outline" href={`mailto:${siteConfig.email}?subject=CareNova%20Lab%20Product%20Inquiry`}>Send an Email Inquiry</a></div></div></section>
  <section className="section section-muted"><div className="container inquiry-layout"><aside className="inquiry-sidebar"><SectionHeading eyebrow="Quick Inquiry" title="Send the Core Project Information" text="Include the product, target market, estimated quantity, packaging requirement and expected launch date. These details improve the first reply."/></aside><InquiryForm/></div></section>
  <section className="section section-white"><div className="container"><SectionHeading eyebrow="FAQ" title="Common Questions Before Quotation"/><div className="faq-list">{faqs.map(x=><details key={x[0]}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></div></section>
</>}
