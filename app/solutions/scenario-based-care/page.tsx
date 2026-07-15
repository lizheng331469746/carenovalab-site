import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = { title: 'Scenario-Based Beauty Product Development', description: 'Create beauty and personal care product systems for specific consumers, climates, routines and usage occasions.' };

const scenarios = [
  ['Dry & Hot Climate Body Care','A body wash, lotion, butter or oil system designed around frequent cleansing, dry-feeling skin and regional fragrance preferences.'],
  ['Post-Workout Scalp & Body Care','Scalp scrub, refreshing shampoo, body wash, deodorant and mist formats built around exercise and quick refresh.'],
  ['Beauty Device Before & After Care','Cleanser, device gel, soothing serum, mask and cream linked to a clear device-use sequence.'],
  ['Men’s Oil-Control Cleansing','Facial cleanser, scalp tonic, shampoo, charcoal soap and deodorant directions for a straightforward men’s routine.'],
  ['Overnight Radiance Routine','Toner, vitamin C or niacinamide serum, sleeping mask and morning-care products for tired-looking skin.'],
  ['Dark-Area Body Care','Exfoliating body wash, scrub, targeted cream, deodorant and body lotion for a focused body-care routine.'],
  ['Sensitive Minimal Care','Gentle cleanser, soothing toner, centella serum and barrier-support cream with a shorter ingredient story.'],
  ['Professional-to-Home Care','Retail and home-use products that extend salon, clinic or chain services into the customer’s daily routine.']
];

export default function ScenarioPage(){return <>
  <PageHero eyebrow="Scenario-Based Beauty & Personal Care" title="Develop Products Around a Real Person, Place and Use Moment" description="Instead of starting with generic claims such as moisturizing or brightening, we define who the product is for, when it is used, what problem the routine addresses and how the products work together." image="/images/hero-scenario.svg" primaryLabel="Develop My Scenario-Based Range" primaryContext={{solution:'Scenario-Based Personal Care',source:'Scenario solution page'}} secondaryLabel="Browse Product Library" secondaryHref="/products" />
  <section className="section section-white"><div className="container split-grid"><div><SectionHeading eyebrow="Why It Works" title="A Clear Scenario Makes the Product Easier to Develop and Easier to Sell" text="Scenario-led development gives formula, packaging, claims and launch content one shared direction. The customer can quickly understand who the product is for and where it fits in daily life."/><div className="list-check">{['Clear target consumer','Recognizable use moment','More relevant product bundles','Stronger content and demonstration ideas','Better range expansion logic','Less dependence on generic benefit claims'].map(x=><div key={x}>{x}</div>)}</div></div><div><img src="/images/hero-scenario.svg" alt="Scenario based personal care product development"/></div></div></section>
  <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Priority Scenarios" title="Eight Directions That Can Become a Hero Product or a Full Routine" text="Each direction can start with one high-priority SKU and expand after sample, pricing and market feedback are reviewed."/><div className="scenario-grid">{scenarios.map((x,i)=><article className="scenario-card" key={x[0]}><span>Scenario {String(i+1).padStart(2,'0')}</span><h3>{x[0]}</h3><p>{x[1]}</p><InquiryButton className="text-link" context={{solution:'Scenario-Based Personal Care',source:`Scenario: ${x[0]}`,message:`I would like to develop products around the ${x[0]} scenario.`}}>Build This Direction →</InquiryButton></article>)}</div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="What We Define" title="From One Hero Product to a Coherent Routine" text="Before formula selection, the brief should clarify the consumer, climate, channel, routine, texture preference, packaging, quantity and launch story."/><div className="trust-grid">{[
    ['01','Consumer','Age, lifestyle, habits, pain points and purchase motivations.'],
    ['02','Environment','Climate, season, water exposure, exercise, device use or professional service context.'],
    ['03','Routine','When the product is used, what comes before and after, and how often it is repurchased.'],
    ['04','Execution','Formula route, packaging, documents, production plan and launch-content requirements.']
  ].map(x=><article className="trust-item" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><div className="hero-actions"><InquiryButton context={{solution:'Scenario-Based Personal Care',source:'Scenario definition section'}}>Build My Product Concept</InquiryButton></div></div></section>
</>}
