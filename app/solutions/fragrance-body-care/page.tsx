import type { Metadata } from 'next';
import Link from 'next/link';
import { asset } from '@/lib/assets';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = { title: 'Fragrance Body Care Product Development', description: 'Build body mist, hair mist, shower gel, body lotion, body scrub, hand cream and body oil collections around a coordinated fragrance story.' };

export default function FragrancePage(){return <>
  <PageHero eyebrow="Fragrance-Led Body Care Collections" title="Build a Body Care Range Around Scent, Mood and Daily Ritual" description="We help brands connect body mist, hair mist, shower gel, body lotion, scrub, hand cream and body oil through one fragrance direction and one clear consumer occasion." image="/images/categories/body-care.webp" primaryLabel="Build My Fragrance Collection" primaryContext={{solution:'Fragrance Body Care',source:'Fragrance solution page'}} secondaryLabel="Browse Body Care" secondaryHref="/products/body-care" />
  <section className="section section-white"><div className="container"><SectionHeading eyebrow="Collection Logic" title="One Scent Story, Multiple Repeat-Purchase Formats" text="A fragrance-led range becomes easier to understand when each SKU has a role in a layering ritual. Start with a hero format, then add products that increase use frequency, gifting and bundle value."/><div className="system-table">{[
    ['Cleanse','Fragranced Shower Gel','Introduces the scent at the beginning of the routine.'],
    ['Smooth','Fragranced Body Scrub','Adds a tactile product and strong visual content for e-commerce.'],
    ['Moisturize','Fragranced Body Lotion','Supports daily use and helps the scent story continue after showering.'],
    ['Layer','Body Mist or Hair Mist','Creates a high-frequency scent-refresh format and an accessible hero SKU.'],
    ['Treat','Hand Cream or Body Oil','Adds richer texture, gifting and dry-skin positioning.'],
    ['Bundle','Fragrance Ritual Set','Combines 3–5 products into a launch set, seasonal gift or discovery range.']
  ].map(r=><div className="system-row" key={r[0]}><span>{r[0]}</span><strong>{r[1]}</strong><p>{r[2]}</p></div>)}</div></div></section>
  <section className="section section-muted"><div className="container"><SectionHeading eyebrow="Scent Scenarios" title="Develop the Collection Around a Recognizable Use Occasion" text="The scenario guides fragrance intensity, texture, packaging color, visual content and product combination."/><div className="scenario-grid">{[
    ['Middle Eastern Musk','Rose musk, white musk, powdery musk, amber, vanilla and richer floral directions for layering and gifting.'],
    ['Sleep & Relax','Lavender, soft musk, warm woods and comforting powdery notes expressed as a nighttime body ritual.'],
    ['Summer Fresh','Citrus, green, watery and mint-like directions for a lighter, refreshing daily range.'],
    ['Date Night','Rose, amber, vanilla, gourmand and sensual floral directions for a more expressive scent story.'],
    ['Post-Workout','Fresh, clean and deodorizing-oriented formats for body and hair refresh after exercise.'],
    ['Dry Skin Ritual','Richer body lotion, butter and oil formats combined with a warm, comforting fragrance profile.']
  ].map((x,i)=><article className="scenario-card" key={x[0]}><span>Scenario 0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p><InquiryButton className="text-link" context={{solution:'Fragrance Body Care',source:`Fragrance scenario: ${x[0]}`,message:`I would like to discuss a ${x[0]} fragrance body care collection.`}}>Discuss This Scenario →</InquiryButton></article>)}</div></div></section>
  <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="Scent Brief" title="What We Need to Define Before Sampling" text="A useful fragrance brief is more specific than sending one perfume reference. It explains the intended consumer experience and the role of each product."/><div className="list-check">{['Target customer and market','Desired scent family and intensity','Reference scents and what you like about them','Product formats in the collection','Price level and packaging direction','Claims, allergens and document considerations by market'].map(x=><div key={x}>{x}</div>)}</div><div className="hero-actions"><InquiryButton context={{solution:'Fragrance Body Care',source:'Fragrance brief section'}}>Send a Fragrance Brief</InquiryButton><Link className="button button-outline" href="/start-your-project">Complete a Project Brief</Link></div></div><div><img className="content-photo" src={asset("/images/categories/body-care.webp")} alt="Lavender fragrance body care collection with body butter and sugar scrub"/></div></div></section>
</>}
