import Link from 'next/link';
import { insights } from '@/lib/insights';
import { InquiryButton } from '@/components/inquiry-provider';

const bodies: Record<string, { intro:string; sections:{title:string; paragraphs:string[]; products?:{brand:string; name:string; image:string; alt:string; productUrl:string; sourceName:string; sourceUrl:string}[]}[]; solution:string; solutionHref:string; sources?:{label:string;url:string}[] }> = {
  'global-anti-aging-skincare-market-2026': {
    "intro": "Anti-aging skincare is not running out of opportunities. It is changing what consumers expect from a product: visible results, comfortable daily use, stronger evidence and a routine that supports healthy-looking skin over time. For beauty brands, the next opportunity is not simply adding a higher concentration of a popular active. It is building a commercially viable age-support platform around the right consumer, market, formula, packaging and evidence.",
    "sections": [
      {
        "title": "1. The global anti-aging market in 2026",
        "paragraphs": [
          "Grand View Research estimates the anti-aging products market at US$55.6 billion in 2025 and US$59.3 billion in 2026, with a forecast of US$107.6 billion by 2033 and an annualized growth rate of 8.9% for 2026–2033. Its estimates cover the anti-aging product category, not the entire beauty, supplement or medical-aesthetics market. North America represented 35.9% of 2025 category revenue in its model, while Asia Pacific is projected to grow the fastest. [1]",
          "Demand is also visible in retail performance. Circana reported that US prestige skincare reached US$7.4 billion through September 2026, up 7% year on year. Mass skincare dollar sales increased by nearly 8%, with facial anti-aging products among the categories contributing strong gains. [2] More broadly, McKinsey's 2026 outlook projects the four core beauty categories to reach US$590 billion by 2030, growing around 5% annually. [3] These estimates describe different markets and should not be added together.",
          "The combination of demographic aging, daily preventive-care habits and greater scrutiny of product value creates space for a wide range of price positions. WHO projects that one in six people globally will be aged 60 or over by 2030. [4] But an aging population alone is not a product strategy: the challenge is converting a specific skin concern into a credible, repeatable daily routine."
        ]
      },
      {
        "title": "2. From anti-wrinkle products to skin longevity",
        "paragraphs": [
          "In our market-development framework, anti-aging has evolved through four overlapping stages: basic moisturization; recognizable actives such as retinol and vitamin C; combinations of actives supported by formula science and testing; and a longer-term approach that connects appearance, hydration, comfort, daily protection and skin resilience.",
          "Skin longevity is a useful commercial concept when it refers to maintaining healthy-looking skin over time. It does not mean that a cosmetic can reverse biological aging, extend cellular lifespan or replace medical treatment. Brands should translate the concept into tangible consumer benefits: smoother-looking fine lines, a more even-looking complexion, better moisturization and a comfortable skin barrier.",
          "The competitive question is therefore shifting from 'What is the strongest ingredient?' to 'Which formula can provide a clearly defined benefit, remain comfortable in everyday use and earn repeat purchase?'"
        ]
      },
      {
        "title": "3. Regional opportunities: one strategy does not fit every market",
        "paragraphs": [
          "North America — a priority market for efficacy-led products. Consider peptide firming serums, retinol night treatments, antioxidant serums and companion moisturizers. Define a differentiated hero claim and design an evidence package that can support product pages and retail education. Test value at the intended price tier.",
          "Europe — a promising direction for tolerability-led performance. Develop fragrance-free or low-fragrance options, barrier-support creams and carefully formulated age-support serums. Pay particularly close attention to ingredient restrictions, responsible-person requirements and claims substantiation.",
          "East Asia — an opportunity to evaluate technology-led formats such as ampoules, essences, hydrogel masks and peptide or fermentation-based serums. Consider sodium DNA and PDRN-related positioning as emerging development concepts, but verify the precise ingredient identity, source, specifications and claim evidence before commercializing.",
          "Southeast Asia and India — test lightweight textures for hot and humid environments, with fast absorption, comfortable layering and accessible pricing. Hydration, uneven-looking tone, antioxidant care and daily sun-care routines can provide a more relevant starting point than a single wrinkle message.",
          "Middle East — explore climate-adapted formulas that combine lasting moisturization with elegant, non-greasy textures. Premium serum-and-cream sets, dry-skin comfort and daily photoaging-related care are plausible product directions. Confirm local registration, language, fragrance preference, packaging and any halal requirements for the selected country and channel.",
          "Latin America — evaluate accessible daily care, antioxidant and tone-evening concepts, moisturization and body-care extensions. A routine that is easy to understand and replenish may compete more effectively than a technically complex multi-step program.",
          "These are CareNova Lab's product-development hypotheses, not uniform descriptions of every consumer in each region. Validate them using local competitor audits, channel pricing, customer interviews and sample feedback."
        ]
      },
      {
        "title": "4. Which anti-aging ingredients deserve investment?",
        "paragraphs": [
          "Established active platforms: retinol and selected retinoid derivatives, vitamin C and suitable derivatives, niacinamide and specific peptides are useful starting points for visible signs of aging and uneven-looking tone. A formula brief must address stability, delivery, tolerability and the evidence for the exact active and concentration, rather than relying on a generic ingredient reputation.",
          "Daily skin-support platforms: ceramides and complementary lipids, glycerin, hyaluronic acid, panthenol, ectoin and other suitable moisturization or comfort ingredients can help build products that consumers enjoy using regularly. Barrier support is not merely an accessory to an active serum; it can be the central commercial proposition.",
          "Emerging technology platforms: sodium DNA, PDRN-related ingredients, recombinant collagen, biomimetic peptides, fermented extracts and other biotechnology-derived actives are worth screening for differentiated premium concepts. Evidence for an injectable procedure, a laboratory experiment or a supplier ingredient cannot be automatically transferred to a topical finished product.",
          "Bakuchiol illustrates how an emerging active can be assessed responsibly. A small 12-week randomized study comparing topical bakuchiol and retinol found improvements in the measured signs of photoaging for both groups, with more scaling and stinging reported by retinol users. [5] That finding is informative, but does not establish equivalence for every concentration or finished formula.",
          "Daily photoaging protection remains important. A randomized study of sunscreen use found less measured skin aging in the daily-use group than in the discretionary-use group. [6] SPF is therefore a meaningful complementary category, but sunscreen development must follow the product classification and testing pathway of the intended destination."
        ]
      },
      {
        "title": "5. What leading brands are teaching the market",
        "products": [
          {
            "brand": "The Ordinary",
            "name": "GF 15% Solution",
            "image": "https://media.ulta.com/i/ulta/2637073",
            "alt": "The Ordinary GF 15% Solution serum in its original dropper bottle",
            "productUrl": "https://theordinary.com/en-us/gf-15-solution-growth-factors-serum-100702.html",
            "sourceName": "Ulta Beauty",
            "sourceUrl": "https://www.ulta.com/p/gf-15-serum-visible-skin-repair-wrinkles-pimprod2050414?sku=2637073"
          },
          {
            "brand": "SHISEIDO",
            "name": "Ultimune Power Infusing Serum",
            "image": "https://www.shiseido.co.jp/resources/sw/products/img/20241121/SHOHIN_PL_C1_H61303.jpg",
            "alt": "Shiseido Ultimune Power Infusing Serum in its original red bottle",
            "productUrl": "https://www.shiseido.com/us/en/ultimune-power-infusing-serum-0768614223900.html",
            "sourceName": "Shiseido official store",
            "sourceUrl": "https://www.shiseido.co.jp/sw/onlinestore/products/H61303.html"
          }
        ],
        "paragraphs": [
          "Accessible biotechnology positioning: The Ordinary introduced GF 15% Solution, a serum centered on a blend of biomimetic peptides. [7] The strategic lesson is that an advanced ingredient story can be communicated through a single recognizable product at an accessible position. Its brand-specific formula and claims should not be copied or assumed to apply to other products.",
          "Premium science storytelling: Shiseido's 2025 renewal of Ultimune features a proprietary fermented-camellia technology linked to its long-running research program. [8] The commercial lesson is to connect a specific technology with a consistent product identity, rather than repeatedly changing the hero ingredient to chase trends.",
          "Biotechnology-inspired textures and routines: PDRN-themed serums, ampoules and masks have made science-inspired skincare easier to present as a recognizable daily routine. For a new brand, the opportunity is to create an original formulation and user experience with appropriate claim support, not imitate another brand's formula, identity or packaging."
        ]
      },
      {
        "title": "6. Inside-out beauty: a growing adjacent opportunity, not a shortcut",
        "paragraphs": [
          "Consumers increasingly encounter topical skincare alongside wellness products, oral beauty and aesthetic services. This broadening definition of beauty is also reflected in the global market research. [3] It suggests that future product ecosystems may include complementary categories, education and partnerships beyond the traditional cosmetic shelf.",
          "However, oral beauty should be assessed separately from cosmetics. Collagen peptides and oral hyaluronic acid have been studied, but research findings and quality vary. A 2025 systematic review of collagen trials found that outcomes were sensitive to study funding and quality; trials without pharmaceutical-company funding did not show the same benefits reported by funded trials. [9] An ingredient's popularity is not proof that a supplement will deliver anti-aging results.",
          "CareNova Lab's immediate opportunity is in topical cosmetic development. Brands exploring oral nutrition or aesthetic procedures should work with appropriately qualified partners and independently confirm the evidence, manufacturing standards and applicable regulatory classifications. Topical products can complement a broader care experience without claiming to substitute for those categories."
        ]
      },
      {
        "title": "7. Build a product portfolio around three levels of demand",
        "paragraphs": [
          "Level 1: Daily prevention and maintenance. Start with a hydrating antioxidant serum and a barrier-support moisturizer, supported by a market-appropriate sun-care product where the required pathway is available. This is the foundation for accessible everyday repeat purchase.",
          "Level 2: Targeted visible age support. Add a peptide firming serum, a carefully designed evening retinol or bakuchiol product and a richer night cream. Each SKU should have one primary consumer benefit and a complementary role in the routine.",
          "Level 3: Premium innovation. Explore a sodium-DNA or biotechnology-inspired ampoule, an advanced peptide serum, a hydrogel mask or a focused professional-use cosmetic companion product. Use this tier to test differentiation and willingness to pay before committing to a broad premium range.",
          "A lean launch may begin with just three products: a 30 ml hero age-support serum, a 50 g daily barrier moisturizer and a targeted night treatment. Expand to eye care, neck care, hand care or body care after feedback indicates demand. Final sizes, formulas, claims, packaging and production quantities must be confirmed through development."
        ]
      },
      {
        "title": "8. How beauty brands should enter the market",
        "paragraphs": [
          "Phase 1 — define the commercial brief: select one destination country, one consumer segment, one channel and one core concern. Compare retail prices, review gaps, competing formats and claim language. Set an achievable target cost and price before selecting ingredients.",
          "Phase 2 — validate the hero formula: choose private label, semi-custom or full custom development according to differentiation, budget and time. Develop samples with criteria for appearance, spreadability, absorption, residue, fragrance, compatibility and consumer satisfaction. Do not approve a formula based on the active list alone.",
          "Phase 3 — substantiate and prepare for launch: establish stability, microbiological quality and packaging compatibility requirements, and build an appropriate claims-support plan. Depending on the promise, finished-product testing can include hydration measurements, standardized photography, wrinkle-appearance assessments and consumer-use feedback. Select endpoints and time points before testing; do not promise results that have not been measured.",
          "Phase 4 — learn and scale: start with a focused launch, monitor reviews, returns, repeat purchase, cost of acquisition and product margin, and then use that evidence to decide which additional SKUs to develop. Localize textures, packaging and communication only where the market requires it."
        ]
      },
      {
        "title": "9. Compliance is part of the anti-aging strategy",
        "paragraphs": [
          "In the United States, FDA distinguishes appearance-related cosmetic claims from claims intended to affect bodily structure or function. Cosmetic messaging should avoid unsupported language about reversing aging, restoring cellular function or increasing collagen production. [10] In the European Union, cosmetic claims must satisfy common criteria including evidence appropriate to the claim. [11] Regulation (EU) 2024/996 also introduced specific Vitamin A restrictions and labeling requirements, so retinol-related products require an up-to-date market review. [12]",
          "Claims, ingredient eligibility, labeling, safety evaluation and documentation must be verified for every destination. A cosmetic manufacturer is not automatically a supplement manufacturer, and an aesthetic-device claim does not automatically transfer to a companion cosmetic."
        ]
      },
      {
        "title": "10. CareNova Lab's approach: from insight to market execution",
        "paragraphs": [
          "CareNova Lab connects market research and practical cosmetic OEM/ODM execution. We help brands translate a broad anti-aging trend into a focused consumer concept, a suitable formulation brief, an appropriate packaging direction, a sampling plan and coordinated manufacturing support.",
          "Our recommended direction is to build a reliable everyday age-support platform first, then add targeted active products and carefully selected technology-led premium concepts. We evaluate the target country, intended claims, consumer experience, cost, packaging feasibility and documentation requirements together. MOQ, timing, testing and document availability are confirmed for each project with the selected manufacturing partner.",
          "The next generation of anti-aging products will not be defined by the longest ingredient list. It will be defined by products that consumers understand, enjoy using and trust enough to buy again. Whether you are creating a private-label anti-aging line or developing an original skincare brand, the best starting point is a clear market brief and a realistic hero-product strategy."
        ]
      }
    ],
    "solution": "Anti-Aging Skincare OEM/ODM",
    "solutionHref": "/products/skincare",
    "sources": [
      {
        "label": "[1] Grand View Research — Anti-Aging Products Market, 2026–2033",
        "url": "https://www.grandviewresearch.com/industry-analysis/anti-aging-products-market"
      },
      {
        "label": "[2] Circana — US Beauty Market Through Q3 2026",
        "url": "https://www.circana.com/post/beauty-industry-maintains-momentum-as-u-s-consumers-balance-self-indulgence-and-value-seeking-ahead"
      },
      {
        "label": "[3] McKinsey — From Aisle to Algorithm: State of Beauty 2026",
        "url": "https://www.mckinsey.com/industries/consumer-packaged-goods/our-insights/state-of-beauty"
      },
      {
        "label": "[4] World Health Organization — Ageing and Health",
        "url": "https://www.who.int/en/news-room/fact-sheets/detail/ageing-and-health"
      },
      {
        "label": "[5] Dhaliwal et al. — Randomized Comparison of Topical Bakuchiol and Retinol (2019)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29947134/"
      },
      {
        "label": "[6] Hughes et al. — Sunscreen and Prevention of Skin Aging: Randomized Trial (2013)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23732711/"
      },
      {
        "label": "[7] The Ordinary — GF 15% Solution, Official Product Information",
        "url": "https://theordinary.com/en-us/gf-15-solution-growth-factors-serum-100702.html"
      },
      {
        "label": "[8] Shiseido — 2025 Ultimune Renewal, Official Company Announcement",
        "url": "https://corp.shiseido.com/en/news/detail.html?n=00000000003953"
      },
      {
        "label": "[9] Effects of Collagen Supplements on Skin Aging: Systematic Review and Meta-Analysis (2025)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40324552/"
      },
      {
        "label": "[10] US FDA — Wrinkle Treatments and Other Anti-Aging Products",
        "url": "https://www.fda.gov/cosmetics/cosmetic-products/wrinkle-treatments-and-other-anti-aging-products"
      },
      {
        "label": "[11] European Union — Regulation (EU) No 655/2013, Cosmetic Claims",
        "url": "https://eur-lex.europa.eu/eli/reg/2013/655/oj/eng"
      },
      {
        "label": "[12] European Union — Regulation (EU) 2024/996, Including Vitamin A",
        "url": "https://eur-lex.europa.eu/eli/reg/2024/996/oj"
      }
    ]
  },
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
  const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <main className="insight-detail insight-detail-simple">
      <article className="container insight-simple-article">
        <header className="insight-simple-header">
          <h1>{item.title}</h1>
          <div className="insight-simple-meta">
            <Link href={`/insights/${item.categorySlug}`}># {item.category}</Link>
            <span>/ {item.published}</span>
            <span>/ {item.readTime}</span>
          </div>
        </header>

        <nav className="insight-simple-index" aria-label="Article sections">
          <span>INDEX &amp; KEY INSIGHTS</span>
          {body.sections.map((section) => <a href={`#${sectionId(section.title)}`} key={section.title}>{section.title}</a>)}
          {body.sources?.length ? <a href="#references">Sources & Further Reading</a> : null}
        </nav>

        <p className="insight-simple-intro">{body.intro}</p>
        <div className="insight-simple-body">
          {body.sections.map(section => <section id={sectionId(section.title)} key={section.title}>
            <h2>{section.title}</h2>
            {section.products?.length ? <div className="insight-product-examples">
              {section.products.map(product => <figure className="insight-product-example" key={product.productUrl}>
                <a className="insight-product-image" href={product.productUrl} target="_blank" rel="noopener noreferrer">
                  <img src={product.image} alt={product.alt} loading="lazy" referrerPolicy="no-referrer" />
                </a>
                <figcaption>
                  <span className="insight-product-brand">{product.brand}</span>
                  <a className="insight-product-name" href={product.productUrl} target="_blank" rel="noopener noreferrer">{product.name}</a>
                  <span className="insight-product-credit">Image: <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer">{product.sourceName}</a></span>
                </figcaption>
              </figure>)}
            </div> : null}
            {section.paragraphs.map(p => <p key={p}>{p}</p>)}
          </section>)}
          {body.sources?.length ? <section id="references" className="insight-simple-references"><h2>Sources & Further Reading</h2><ul>{body.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></section> : null}
        </div>
      </article>

      <section className="insight-market-cta" id="consult-our-team">
        <div className="container">
          <h2>Bring This Insight to Market</h2>
          <p>Partner with CareNova Lab to turn this direction into a focused product brief, with coordinated support for formulation, packaging, manufacturing and target-market preparation.</p>
          <InquiryButton className="button button-gold" context={{source:`Insight: ${item.title}`,solution:body.solution}}>Consult Our Team</InquiryButton>
        </div>
      </section>

      <nav className="container insight-post-navigation" aria-label="Article navigation">
        <Link href={`/insights/${previous.slug}`}><span>OLDER INSIGHT</span><strong>{previous.title}</strong></Link>
        <Link href={`/insights/${next.slug}`}><span>NEWER INSIGHT</span><strong>{next.title}</strong></Link>
      </nav>
    </main>
  );
}
