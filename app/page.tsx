import Link from 'next/link';
import { FlaskConical, ShieldCheck, Leaf, Box, Globe, ChevronRight } from 'lucide-react';
import { InquiryButton } from '@/components/inquiry-provider';
import { SectionHeading } from '@/components/section-heading';
import { ProductVisual } from '@/components/product-visual';
import { productCategories } from '@/lib/products';
import { insights } from '@/lib/insights';
import { asset } from '@/lib/assets';

const audiences = [
  ['Startup Beauty Brands','Build your first product line with clearer choices on product direction, formula, packaging, MOQ and launch priorities.','Plan My First Product'],
  ['E-commerce Beauty Brands','Develop products designed for clear online communication, visual demonstration, bundles and repeat purchase potential.','Explore E-commerce Ideas'],
  ['Beauty Device Companies','Create companion skincare for use before, during and after at-home beauty device routines.','Build a Device Care System'],
  ['Distributors & Importers','Build a product range that fits your market, price level, channel and documentation needs.','Plan a Product Range'],
  ['Salons, Clinics & Chains','Extend professional services into retail and home-care products with coordinated formulas, packaging and sets.','Develop Professional Care']
];

const problems = [
  'Unsure which products are worth developing',
  'Difficulty finding the right manufacturer',
  'Limited knowledge of formulas and packaging',
  'Unclear target-market document requirements',
  'No packaging or sales copy for launch',
  'Samples, packaging and production are hard to manage'
];

const solutions = [
  {
    title: 'Device Companion Skincare',
    href: '/solutions/device-companion-skincare',
    image: '/images/site/formula-ampoules.webp',
    text: 'Build cleansers, device gels, comfort-focused serums, masks, creams and body-care products around the full device-use journey.'
  },
  {
    title: 'Fragrance Body Care',
    href: '/solutions/fragrance-body-care',
    image: '/images/categories/body-care.webp',
    text: 'Create body mist, hair mist, shower gel, lotion, scrub and hand-care collections through one coordinated scent story.'
  },
  {
    title: 'Scenario-Based Personal Care',
    href: '/solutions/scenario-based-care',
    image: '/images/hero-scenario.svg',
    text: 'Develop routines around a real consumer, climate, occasion or usage problem instead of relying on generic benefit claims.'
  }
];

const process = [
  ['01','Market Insight','Review the target market, consumer, category signals and competitive context.'],
  ['02','Product Concept','Define the consumer, use scenario, product role, range architecture and selling story.'],
  ['03','Formula Matching','Match mature, semi-custom or full-custom development routes with suitable partners.'],
  ['04','Packaging','Coordinate practical bottles, tubes, jars, pumps, cartons, labels and gift sets.'],
  ['05','Documents','Organize available product and manufacturer documents according to the target market.'],
  ['06','Production','Follow sampling, approvals, packaging, manufacturing, quality checkpoints and schedule.'],
  ['07','Launch Content','Prepare naming, packaging copy, key selling points, product visuals and listing direction.']
];

const insightCategories = [
  {
    num: '01',
    title: 'Market Trends',
    desc: 'Analyze global consumer shifts and regional beauty market signals to uncover high-growth opportunities.',
    image: '/images/site/product-library-flatlay.webp'
  },
  {
    num: '02',
    title: 'Product Opportunities',
    desc: 'Identify category gaps and emerging product formats designed for online and retail differentiation.',
    image: '/images/site/home-hero-lab-serum.webp'
  },
  {
    num: '03',
    title: 'Ingredient Insights',
    desc: 'Technical reviews of active ingredients and high-performance formula stories for professional performance.',
    image: '/images/site/formula-ampoules.webp'
  },
  {
    num: '04',
    title: 'Packaging Trends',
    desc: 'Discover practical and sustainable packaging formats designed for protection, usability and brand impact.',
    image: '/images/categories/body-care.webp'
  },
  {
    num: '05',
    title: 'Brand Strategy',
    desc: 'Defining the consumer, positioning, selling points and launch content for scalable product ranges.',
    image: '/images/categories/skincare.webp'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">AI Product Insight + OEM/ODM Execution</span>
            <h1>Turn Beauty Product Ideas Into Production-Ready Products</h1>
            <p>
              CareNova Lab combines AI-driven product insights with OEM/ODM supply chain execution. We help beauty and personal care brands move from market opportunity and product concept to sampling, packaging, documentation, production and launch content.
            </p>
            <div className="hero-actions">
              <InquiryButton context={{ source: 'Home Hero' }}>Discuss Your Project</InquiryButton>
              <Link className="button button-outline" href="/solutions">Explore Product Solutions</Link>
            </div>
            <div className="hero-trust">
              <span>One-to-one project coordination from Guangzhou</span>
              <span>Multi-category manufacturing partner network</span>
              <span>Product, packaging and launch support</span>
            </div>
          </div>
          <div className="hero-art hero-art-photo"><img src={asset("/images/site/home-hero-lab-serum.webp")} alt="Skincare serum concept shown in a bright product development laboratory" /></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Who We Help" title="Built for Brands That Need More Than a Product Catalog" text="Whether you are launching your first product, expanding an online brand, building skincare for a beauty device or creating a regional product line, we help turn commercial goals into a clear development plan." />
          <div className="card-grid-5">
            {audiences.map((item, index) => (
              <article className="audience-card" key={item[0]}>
                <span className="card-index">0{index + 1}</span>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
                <InquiryButton className="text-link" context={{ source: `Home audience: ${item[0]}`, message: `I would like to discuss support for ${item[0]}.` }}>{item[2]} →</InquiryButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container problem-grid">
          <div>
            <span className="eyebrow">What We Help You Solve</span>
            <h2>Less Guesswork. Clearer Product Decisions.</h2>
            <p>Many projects do not fail because a factory cannot make the product. They fail because the product direction, target customer, formula route, packaging and launch requirements were never made clear at the beginning.</p>
            <div className="delivery-strip">
              {['Market Insight','Product Concept','Formula Matching','Packaging','Compliance Documents','Production','Launch Content'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="problem-list">
            {problems.map((problem) => <div className="problem-item" key={problem}>{problem}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Product Solutions" title="Built Around Real Market Opportunities" text="Our solution pages start with a consumer, a routine and a commercial problem. The product formats come after the strategy is clear." />
          <div className="card-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <div className="solution-card-art"><img src={asset(solution.image)} alt={`${solution.title} product development solution`} /></div>
                <div className="solution-card-copy">
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <div className="solution-actions">
                    <Link href={solution.href}>View Solution →</Link>
                    <InquiryButton className="text-link" context={{ solution: solution.title, source: 'Home solutions' }}>Request a Quote</InquiryButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="How We Deliver" title="From Market Insight to Product Launch" text="Each project is organized as a sequence of decisions. This keeps formulas, packaging, documents and production connected to the original product goal." />
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step[0]}>
                <span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions"><Link className="button button-outline" href="/how-we-work">See How We Work</Link><InquiryButton context={{ source: 'Home process' }}>Start Your Product Project</InquiryButton></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Product Library" title="Explore Our Product Capabilities" text="Use the library when you already know the product category. Use Product Solutions when you need help deciding what to launch and how the range should work together." />
          <div className="category-grid">
            {productCategories.map((category) => (
              <article className={`category-card color-${category.color}`} key={category.slug}>
                <img className="category-card-image" src={asset(category.image)} alt={`${category.name} private label and OEM ODM product collection`} />
                <span className="eyebrow">{category.eyebrow}</span>
                <h3>{category.name}</h3>
                <p>{category.groups.slice(0, 3).map((group) => group.name).join(' · ')}</p>
                <Link href={`/products/${category.slug}`}>Explore {category.name} →</Link>
              </article>
            ))}
          </div>
          <div className="hero-actions"><Link className="button button-dark" href="/products">Browse Full Product Library</Link><InquiryButton className="button button-outline" context={{ source: 'Home product library' }}>Ask About a Product</InquiryButton></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Development Paths" title="Choose the Right Level of Customization" text="The practical route depends on the target market, desired differentiation, quantity, budget, packaging and launch date." />
          <div className="path-grid">
            {[
              ['01','Private Label','Choose a mature formula and practical packaging route for a faster first launch.',['Suitable for market tests','Lower development complexity','Project-specific MOQ']],
              ['02','Semi-Custom','Adjust selected formula, texture, fragrance, color, ingredient story or packaging elements.',['More differentiation','Built from an existing base','Balanced time and budget']],
              ['03','Full OEM/ODM','Develop around a clear consumer, performance brief, brand system and target-market plan.',['Best for strategic ranges','More sampling and validation','Requires a stronger project brief']]
            ].map((path) => (
              <article className="path-card" key={path[1] as string}>
                <span className="path-number">{path[0] as string}</span><h3>{path[1] as string}</h3><p>{path[2] as string}</p>
                <ul>{(path[3] as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
                <InquiryButton className="button button-outline button-small" context={{ source: `Home development path: ${path[1]}`, message: `I would like to discuss the ${path[1]} route.` }}>Discuss This Route</InquiryButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Why CareNova Lab" title="Insight, Coordination and Execution in One Project Team" text="CareNova Lab is not presented as a single factory. We match projects with suitable manufacturing partners and coordinate the work required to move a product forward." />
          <div className="trust-grid">
            {[
              ['01','Commercially Clear Concepts','We connect product decisions to a target consumer, channel and usage scenario.'],
              ['02','Practical Factory Matching','The manufacturer is matched according to product type, quantity, customization and document needs.'],
              ['03','Cross-Functional Coordination','Formula, samples, packaging, copy, documents and production are managed as one connected project.'],
              ['04','Transparent Project Language','MOQ, timelines, documents and testing are confirmed at project level—not promised as universal numbers.']
            ].map((item) => <article className="trust-item" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="text-center-serif" style={{ marginBottom: '60px' }}>
            <h2>We identify market opportunities and transform them into scalable products.</h2>
          </div>
          
          <div className="insight-process-grid">
            {insightCategories.map((item, index) => (
              <div className="insight-process-item" key={item.title}>
                <div className="step-num">{item.num}. {item.title}</div>
                <p>{item.desc}</p>
                <div className="insight-process-image">
                  <img src={asset(item.image)} alt={item.title} />
                  {index < insightCategories.length - 1 && (
                    <div className="insight-process-arrow">
                      <ChevronRight />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="insight-features-bar">
            <div className="feature-item"><FlaskConical /> Science-Driven Formulation</div>
            <div className="feature-item"><ShieldCheck /> Global Quality Standards</div>
            <div className="feature-item"><Leaf /> Sustainable Solutions</div>
            <div className="feature-item"><Box /> End-to-End Support</div>
            <div className="feature-item"><Globe /> For Global Brands</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta">
            <div><span className="eyebrow">Start With a Clear Brief</span><h2>Tell Us What You Want to Build</h2><p>Share the product, target market, estimated quantity, packaging requirement and expected launch date. Our team will help identify the practical next questions.</p></div>
            <div className="final-cta-actions"><InquiryButton>Discuss Your Project</InquiryButton><Link className="button button-outline" href="/start-your-project">Complete a Project Brief</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
