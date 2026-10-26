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
  },
  'active-skincare-formula-brief': {
    intro:'A useful formulation brief gives the laboratory enough commercial and technical direction to develop the right product without unnecessary rounds of sampling.',
    sections:[
      {title:'Define the consumer and product role',paragraphs:['Explain who will use the product, where it sits in the routine and which problem it should address. This helps the development team choose a suitable format and sensorial direction.','Include the target price, sales channel and market position so the formula is designed for the intended offer.']},
      {title:'Prioritize texture, ingredients and claims',paragraphs:['Separate essential requirements from preferences. List the texture, finish, fragrance direction, hero ingredients and claims that matter most to the launch.','A short prioritized brief is more useful than a long list of ingredients that may not work together or fit the target cost.']},
      {title:'Set clear sample review criteria',paragraphs:['Agree how the team will review spreadability, absorption, residue, fragrance, color and packaging compatibility. Record feedback against the same criteria for every sample.','This gives each revision a clear purpose and makes approval easier to document.']}
    ],solution:'Skincare Product Development',solutionHref:'/products/skincare'
  },
  'choose-product-development-model': {
    intro:'Private label, semi-custom and full custom development offer different balances of speed, differentiation, cost and project input. The right route depends on the launch brief.',
    sections:[
      {title:'Use private label for speed and simplicity',paragraphs:['A proven base formula can shorten development and reduce technical uncertainty. The brand focuses on product selection, packaging, artwork and commercial positioning.','This route works best when fast market entry matters more than a unique formula.']},
      {title:'Use semi-custom for focused differentiation',paragraphs:['A semi-custom route may adjust fragrance, color, selected ingredients or texture within an established development framework. It can create a clearer brand fit without starting every technical decision from zero.','Confirm which changes are available and how they affect MOQ, testing and timing.']},
      {title:'Use full custom when the concept requires it',paragraphs:['Full custom development supports a specific formula brief and stronger differentiation, but usually needs more sampling, testing and decision time.','Choose it when the formula itself is central to the product promise and the project can support the required investment.']}
    ],solution:'Product Development Models',solutionHref:'/how-we-work#product-development-models'
  },
  'stock-packaging-vs-custom-molds': {
    intro:'Packaging affects cost, lead time, formula compatibility and brand expression. Comparing stock components with custom molds early prevents late changes to the launch plan.',
    sections:[
      {title:'Understand the advantage of stock packaging',paragraphs:['Existing bottles, jars and pumps can reduce tooling cost and shorten sourcing time. Decoration, color, labels and secondary packaging can still create a distinctive presentation.','Stock packaging is often suitable for early launches, smaller ranges and projects that need flexibility.']},
      {title:'Know when a custom mold is justified',paragraphs:['A proprietary shape can strengthen recognition and protect a long-term packaging system. It also introduces tooling, development, testing and higher quantity commitments.','The business case should consider future volume and range expansion, not only the first purchase order.']},
      {title:'Test the complete pack with the formula',paragraphs:['Material, pump output, closure, leakage, decoration and transportation performance should be reviewed with the intended formula.','Approve compatibility and final artwork before production quantities are released.']}
    ],solution:'Packaging & Production Support',solutionHref:'/how-we-work#packaging-production-support'
  },
  'cosmetic-claims-labels-documents-review': {
    intro:'Claims, labels and supporting documents should be reviewed together before packaging artwork is approved. A late compliance change can affect both schedule and cost.',
    sections:[
      {title:'Check claims against the product route',paragraphs:['Confirm that the marketing language fits the product classification, formula and available evidence in the target market. Avoid committing to unsupported performance or medical language.','Claims should be reviewed before they are built into front-label design and campaign content.']},
      {title:'Verify required label information',paragraphs:['Ingredient naming, warnings, net contents, responsible-party details, batch information and language requirements vary by market and product type.','Use a market-specific checklist and leave enough artwork space for required information.']},
      {title:'Confirm document availability',paragraphs:['Ask which product, ingredient, testing and manufacturing documents will be available and when they can be issued.','Record any documents that depend on final formula, packaging or production details so they are tracked through the project.']}
    ],solution:'Quality & Compliance',solutionHref:'/about#quality-compliance'
  },
  'turn-beauty-trend-into-product-direction': {
    intro:'A broad beauty trend becomes commercially useful only when it is translated into a defined consumer, occasion, product format and range plan.',
    sections:[
      {title:'Identify the underlying consumer need',paragraphs:['Look beyond the trend name and define the behavior or problem driving it. This may be convenience, sensory pleasure, climate adaptation, simplified routines or ingredient awareness.','A clear need gives the product concept more staying power than a short-lived visual reference.']},
      {title:'Choose one hero product direction',paragraphs:['Select the format that communicates the idea most clearly and fits the channel, price and expected use frequency. Avoid launching too many weakly connected SKUs at once.','The hero product should be easy to explain and capable of supporting future extensions.']},
      {title:'Build a scalable range architecture',paragraphs:['Plan which products could logically follow the hero SKU and how the packaging, naming and claims will stay consistent.','This turns an isolated trend response into a product platform that can grow with customer feedback and demand.']}
    ],solution:'Product Solutions',solutionHref:'/solutions'
  }
};

export function InsightArticle({ slug }: { slug: string }) {
  const item = insights.find((x) => x.slug === slug)!;
  const body = bodies[slug];
  const itemIndex = insights.findIndex((x) => x.slug === slug);
  const previous = itemIndex > 0 ? insights[itemIndex - 1] : insights[insights.length - 1];
  const next = itemIndex < insights.length - 1 ? insights[itemIndex + 1] : insights[0];
  const related = insights.filter((article) => article.categorySlug === item.categorySlug && article.slug !== slug).slice(0, 2);
  const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <main className="insight-detail">
      <header className="insight-detail-header">
        <div className="container">
          <Link className="insight-detail-breadcrumb" href={`/insights/${item.categorySlug}`}>Knowledge Center / {item.category}</Link>
          <h1>{item.title}</h1>
          <p>{body.intro}</p>
          <div className="insight-detail-meta"><span>{item.category}</span><time>{item.published}</time><span>{item.readTime}</span></div>
        </div>
      </header>

      <div className="container insight-detail-content">
        <figure className="insight-detail-image">
          <img src={asset(item.image)} alt={item.title} />
        </figure>

        <div className="insight-detail-reading">
          <aside className="insight-detail-toc">
            <span>TABLE OF CONTENTS</span>
            <nav>
              {body.sections.map((section, index) => <a href={`#${sectionId(section.title)}`} key={section.title}><b>{String(index + 1).padStart(2, '0')}</b>{section.title}</a>)}
            </nav>
          </aside>

          <article className="article insight-article-body">
            <div className="insight-key-takeaways">
              <span>KEY TAKEAWAYS</span>
              <ul>{body.sections.map((section) => <li key={section.title}>{section.title}</li>)}</ul>
            </div>
            {body.sections.map(section => <section id={sectionId(section.title)} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}
            <div className="article-callout"><strong>Project note</strong><p>Formula, claims, testing, documents, compatibility, MOQ and timeline must be confirmed according to the specific product, target market and manufacturing partner.</p></div>
          </article>
        </div>
      </div>

      <section className="insight-market-cta" id="consult-our-team">
        <div className="container">
          <span>BRING THIS INSIGHT TO MARKET</span>
          <h2>Turn this direction into a product brief.</h2>
          <p>Talk with CareNova Lab about formula development, packaging, manufacturing and the practical route to your target market.</p>
          <div className="hero-actions">
            <InquiryButton className="button button-gold" context={{source:`Insight: ${item.title}`,solution:body.solution}}>Consult Our Team</InquiryButton>
            <Link className="button button-outline button-outline-light" href={body.solutionHref}>Explore {body.solution}</Link>
          </div>
        </div>
      </section>

      <nav className="container insight-post-navigation" aria-label="Article navigation">
        <Link href={`/insights/${previous.slug}`}><span>OLDER INSIGHT</span><strong>{previous.title}</strong></Link>
        <Link href={`/insights/${next.slug}`}><span>NEWER INSIGHT</span><strong>{next.title}</strong></Link>
      </nav>

      {related.length > 0 && <section className="container insight-related">
        <div className="insight-related-heading"><span>CONTINUE READING</span><h2>More from {item.category}</h2></div>
        <div className="insight-related-grid">
          {related.map((article) => <Link href={`/insights/${article.slug}`} key={article.slug}>
            <img src={asset(article.image)} alt="" />
            <div><span>{article.readTime}</span><h3>{article.title}</h3><strong>Read Insight →</strong></div>
          </Link>)}
        </div>
      </section>}
    </main>
  );
}
