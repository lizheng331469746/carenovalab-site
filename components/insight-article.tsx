import Link from 'next/link';
import { insights } from '@/lib/insights';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

const bodies: Record<string, { intro:string; sections:{title:string; paragraphs:string[]}[]; solution:string; solutionHref:string }> = {
  'beauty-device-companion-skincare': {
    intro:'A beauty device is often sold as a one-time hardware purchase. Companion skincare changes the business model by adding consumable products, a clearer usage ritual and more opportunities for repeat purchase.',
    sections:[
      {title:'The commercial gap in hardware-only offers',paragraphs:['Many device brands provide instructions for operating the hardware but leave the skincare steps vague. The customer may use an unsuitable cleanser, gel or aftercare product, which makes the routine feel incomplete.','A companion range gives the brand more control over the experience. It can also create refill, bundle and gifting opportunities without changing the core device.']},
      {title:'Build around the usage journey',paragraphs:['The product system should reflect what happens before, during and after device use. A typical sequence may include a pre-care cleanser, compatible gel, lightweight soothing serum, repair mask and barrier-support cream.','The correct formulas and claims depend on the device mechanism, target market and instructions for use. Device compatibility should be treated as a project requirement, not assumed from a generic gel formula.']},
      {title:'Start with one hero SKU, then expand',paragraphs:['A brand does not need to launch six products immediately. One device-use gel or post-use serum can become the entry product. Additional SKUs can be added after user feedback and commercial performance are reviewed.','The important point is to define the future routine before finalizing the first product, so the packaging and product story can support later expansion.']}
    ],solution:'Device Companion Skincare',solutionHref:'/solutions/device-companion-skincare'
  },
  'fragrance-body-care-collection': {
    intro:'Fragrance is increasingly part of how consumers choose body care. A coordinated scent story can connect multiple everyday formats and make the range easier to bundle, gift and repurchase.',
    sections:[
      {title:'Do not start with unrelated SKUs',paragraphs:['A body mist, scrub and lotion should not feel like three separate products that happen to share a logo. They should express one scent direction, one mood and one consumer occasion.','This gives the brand a clearer launch story and helps customers understand how to use the products together.']},
      {title:'Use a fragrance layering sequence',paragraphs:['A practical sequence can begin with shower gel, continue with lotion or body oil and finish with body mist or hair mist. Hand cream and scrub add treatment and gifting opportunities.','Each format may need a slightly different fragrance intensity and technical approach, even when the scent direction is consistent.']},
      {title:'Scenario matters as much as scent family',paragraphs:['Middle Eastern musk, sleep and relax, summer fresh, date night, post-workout and dry-skin ritual are examples of scenarios that influence fragrance intensity, texture, packaging color and content.','The final fragrance brief should explain not only which perfume is liked, but what emotional and functional experience the collection should create.']}
    ],solution:'Fragrance Body Care',solutionHref:'/solutions/fragrance-body-care'
  },
  'scenario-based-personal-care': {
    intro:'Generic benefit claims such as moisturizing, brightening and anti-aging are not always enough to create a clear product concept. A scenario explains who the product is for, when it is used and why the routine matters.',
    sections:[
      {title:'A scenario connects product and communication',paragraphs:['A post-workout scalp scrub, a dry-hot-climate body lotion and a sensitive minimal serum can all use familiar cosmetic technologies. What makes the concept clearer is the consumer context and routine.','That context guides the formula texture, packaging, fragrance, SKU combination and launch content.']},
      {title:'Define the consumer before the formula',paragraphs:['The brief should describe habits, environment, channel, price level and expected use frequency. These details help determine whether the hero product should be a wash-off product, treatment, spray, serum, oil or set.','They also help reduce unnecessary sampling because the project team understands the desired user experience.']},
      {title:'Build from a hero product to a routine',paragraphs:['A scenario can launch with one hero product and later expand into complementary products. For example, post-workout care may begin with a scalp scrub and later add shampoo, body wash, deodorant and mist.','Planning the architecture early makes later expansion more consistent and easier to communicate.']}
    ],solution:'Scenario-Based Personal Care',solutionHref:'/solutions/scenario-based-care'
  },
  'evaluate-cosmetic-oem-odm-partner': {
    intro:'Choosing an OEM/ODM partner is not only a price comparison. The right partner must fit the product type, customization level, quantity, target market, packaging route and launch schedule.',
    sections:[
      {title:'Compare capability against the actual brief',paragraphs:['A factory may have broad capability but limited experience with the exact dosage form, packaging component or testing requirement in your project. Begin with a structured brief and ask how similar products are developed and produced.','Review whether the proposed route is private label, semi-custom or full custom, because each route changes sampling time, MOQ, cost and differentiation.']},
      {title:'Review samples and quality checkpoints',paragraphs:['A useful sample review covers texture, color, fragrance, application, packaging compatibility and any measurable performance requirements. Agree how feedback will be recorded and how revisions will be approved.','Before production, confirm the approved sample, specification, artwork, packaging components and quality checkpoints in writing.']},
      {title:'Evaluate communication and delivery readiness',paragraphs:['Clear project ownership matters when formula, packaging, compliance questions and production timing must move together. Ask who coordinates each decision and how changes are documented.','The most reliable proposal explains assumptions, exclusions and dependencies instead of offering an unsupported timeline or universal MOQ.']}
    ],solution:'OEM/ODM Development Process',solutionHref:'/how-we-work'
  },
  'beauty-market-entry-compliance-checklist': {
    intro:'The target market affects formula choices, claims, labels, testing and documents. Confirming the destination early helps the product team identify questions before packaging and production are finalized.',
    sections:[
      {title:'Start with the destination and product classification',paragraphs:['Requirements differ by market and product type. A cosmetic, OTC product, sunscreen, soap or device companion product may follow different pathways.','Define where the product will be sold, who will act as the responsible local party and which product claims are commercially essential.']},
      {title:'Align claims, formula and testing',paragraphs:['Marketing language should be reviewed alongside the formula and available evidence. Testing needs may include stability, compatibility, microbiological quality or claim support depending on the product and market.','Avoid finalizing front-label claims before the technical and regulatory route has been reviewed.']},
      {title:'Confirm labels and available documents',paragraphs:['Ingredient naming, warnings, net contents, responsible-party information and language requirements can affect artwork. Document availability also depends on the selected manufacturer and product.','Create a market-entry checklist before production so required information can be gathered without delaying launch preparation.']}
    ],solution:'Quality & Compliance',solutionHref:'/about#quality-compliance'
  }
};

export function InsightArticle({ slug }: { slug: string }) {
  const item = insights.find((x) => x.slug === slug)!;
  const body = bodies[slug];
  return (
    <section className="section section-white"><article className="container article">
      <span className="eyebrow">{item.category} · {item.readTime}</span><h1>{item.title}</h1><p className="article-lead">{body.intro}</p>
      <div className="insight-art" style={{height:460,borderRadius:28,margin:'45px 0',overflow:'hidden'}}>
        <img src={asset((item as any).image)} alt={item.title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
      </div>
      {body.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}
      <div className="article-callout"><strong>Project note:</strong><p>Formula, claims, testing, documents, compatibility, MOQ and timeline must be confirmed according to the specific product, target market and manufacturing partner.</p></div>
      <div className="hero-actions"><Link className="button button-outline" href={body.solutionHref}>Explore {body.solution}</Link><InquiryButton context={{source:`Insight: ${item.title}`,solution:body.solution}}>Discuss This Product Direction</InquiryButton></div>
    </article></section>
  );
}

