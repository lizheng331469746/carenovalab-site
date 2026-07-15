import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { InquiryForm } from '@/components/inquiry-form';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Start Your Beauty Product Project',
  description: 'Send your product, target market, quantity, packaging and launch requirements to the CareNova Lab product team through a structured WhatsApp inquiry.'
};

export default function StartPage(){return <>
  <PageHero eyebrow="Start Your Project" title="Send a Clear Product Brief to Our Team" description="The more useful information you provide at the beginning, the faster we can identify the correct questions about formula, packaging, MOQ, documents, sampling and production." image="/images/hero-contact.svg" primaryLabel="Quick WhatsApp Question" primaryContext={{source:'Start Your Project hero'}} secondaryLabel="Browse Product Library" secondaryHref="/products"/>
  <section className="section section-white"><div className="container inquiry-layout"><aside className="inquiry-sidebar"><SectionHeading eyebrow="Project Brief" title="What Happens After You Send It" text="The form creates a structured WhatsApp message. It does not store your data or upload files."/><div className="list-check">{['Your selected consultant receives the brief','The team reviews feasibility questions','We confirm the missing product and quotation details','Reference files can be sent directly in WhatsApp or by email','MOQ, samples and timing are discussed at project level'].map(x=><div key={x}>{x}</div>)}</div></aside><InquiryForm/></div></section>
</>}
