import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';
import Link from 'next/link';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Device Companion Skincare Development',
  description: 'Develop cleansers, device gels, comfort-focused serums, masks, creams and body-care products for at-home beauty device routines.'
};

const system = [
  ['Before Use','Pre-Care Cleanser','Removes surface residue and prepares a clean, comfortable use routine.'],
  ['During Use','Conductive / Device Gel','Provides the texture, slip and device compatibility required by the selected device type.'],
  ['Immediately After','Soothing Serum or Spray','Supports a comfort-focused post-use routine with a lightweight, easy-layering format.'],
  ['Intensive Care','Repair Mask','Adds a visible ritual step and supports sets, refills and repeat purchase.'],
  ['Daily Maintenance','Barrier Support Cream','Extends the routine beyond the device session and helps build a complete skincare system.'],
  ['Body Device Care','Post-Hair-Removal Body Care','Can include a pre-cleanse, soothing spray, body lotion and targeted body-care set.']
];

export default function DevicePage() {
  return <>
    <PageHero eyebrow="Device + Skincare Companion System" title="Build Skincare Around the Full Beauty Device Journey" description="We help beauty device brands develop products for use before, during and after at-home device routines—turning a hardware purchase into a more complete and repeatable care system." image="/images/site/formula-ampoules.webp" primaryLabel="Build a Device Care System" primaryContext={{solution:'Device Companion Skincare',source:'Device solution page'}} secondaryLabel="Browse Skincare Products" secondaryHref="/products/skincare" />
    <section className="section section-white"><div className="container split-grid"><div><SectionHeading eyebrow="Who This Is For" title="For Brands That Need More Than a Generic Conductive Gel" text="This solution is designed for home laser, hair-removal, radio-frequency, microcurrent, LED and other beauty-device companies that want a clearer skincare ecosystem."/><div className="list-check">{['At-home beauty device companies','Beauty-device distributors and importers','Salons and professional-care brands','Brands extending hardware into consumable products','Companies building pre-care and aftercare kits'].map(x=><div key={x}>{x}</div>)}</div></div><div><img className="content-photo" src={asset("/images/site/formula-ampoules.webp")} alt="Ampoule formula concept for device companion skincare"/></div></div></section>
    <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Recommended Product System" title="A Routine That Can Grow From One Hero Product Into a Full Range" text="The final SKU architecture depends on the device mechanism, use instructions, target consumer, market and claims strategy."/><div className="system-table">{system.map(row=><div className="system-row" key={row[0]}><span>{row[0]}</span><strong>{row[1]}</strong><p>{row[2]}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Concept Routes" title="Choose the Commercial Story Before Finalizing the Formula" text="A clear route helps the range feel intentional instead of becoming a collection of unrelated skincare products."/><div className="scenario-grid">{[
      ['Comfort & Barrier Support','A gentle, low-complexity route focused on comfortable use, lightweight hydration and daily barrier maintenance.'],
      ['Post-Hair-Removal Body Care','A body-focused route with pre-cleanse, post-use spray, body lotion and targeted dark-area care.'],
      ['Premium Device Ritual','A more complete routine with cleanser, device gel, serum, hydrogel mask, cream and gift-set presentation.'],
      ['Brightening Routine','A radiance-focused route for devices positioned around tone, glow and consistent home-care use.'],
      ['Sensitive Minimal System','A shorter routine with fewer products, mild textures and straightforward ingredient communication.'],
      ['Professional-to-Home Extension','Retail products that extend salon or clinic services into daily home-care use.']
    ].map((x,i)=><article className="scenario-card" key={x[0]}><span>Route 0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p><InquiryButton className="text-link" context={{solution:'Device Companion Skincare',source:`Device concept: ${x[0]}`,message:`I would like to develop the ${x[0]} concept route.`}}>Discuss This Route →</InquiryButton></article>)}</div></div></section>
    <section className="section section-dark"><div className="container split-grid"><div><span className="eyebrow">Packaging & Execution</span><h2>Design the Product and the Usage System Together</h2><p>Packaging must work with the texture, dispensing method, device use instructions, set architecture and shipping requirements. We can coordinate tubes, pump bottles, airless packaging, sprays, mask pouches, cartons, inserts and home-care kits.</p><div className="hero-actions"><InquiryButton context={{solution:'Device Companion Skincare',source:'Device packaging section'}}>Request a Device Skincare Quote</InquiryButton><Link className="button button-outline" href="/start-your-project">Complete a Project Brief</Link></div></div><div><ProductVisual tone="sage" label="DEVICE"/></div></div></section>
  </>;
}

function ProductVisual({tone,label}:{tone:string;label:string}) { return <div className={`product-visual tone-${tone}`}><div className="visual-orb orb-one"/><div className="visual-orb orb-two"/><div className="bottle bottle-tall"><span>{label}</span></div><div className="bottle bottle-short"><span>GEL</span></div><div className="jar"><span>MASK</span></div></div> }
