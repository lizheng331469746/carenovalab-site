import Image from 'next/image';
import { SectionHeading } from './section-heading';

const processSteps = [
  {
    number: '01',
    title: 'Market Insight',
    description: 'We explore beauty trends, consumer needs, and market opportunities to identify promising product directions.',
    image: '/images/how-we-work/market-insight.webp',
    alt: 'Concept image of beauty market research materials and product samples'
  },
  {
    number: '02',
    title: 'Product Concept',
    description: 'We turn your ideas into clear product concepts, defining positioning, key benefits, and development goals.',
    image: '/images/how-we-work/product-concept.webp',
    alt: 'Concept image of cosmetic packaging sketches and product prototypes'
  },
  {
    number: '03',
    title: 'Formulation',
    description: 'We develop and refine cosmetic formulas with a focus on performance, texture, and stability.',
    image: '/images/how-we-work/formulation.webp',
    alt: 'Concept image of cosmetic formula textures, droppers, and laboratory glassware'
  },
  {
    number: '04',
    title: 'Packaging',
    description: 'We source and customize packaging to match your brand identity, budget, and production requirements.',
    image: '/images/how-we-work/packaging.webp',
    alt: 'Concept image of unbranded skincare bottles, tubes, jars, and cartons'
  },
  {
    number: '05',
    title: 'Manufacturing',
    description: 'We coordinate production, quality checks, and packaging to support consistent product delivery.',
    image: '/images/how-we-work/manufacturing.webp',
    alt: 'Generic concept image of a clean cosmetic filling and packaging line'
  },
  {
    number: '06',
    title: 'Launch Support',
    description: 'We assist with product documentation, regulatory information, shipping coordination, and future production needs.',
    image: '/images/how-we-work/launch-support.webp',
    alt: 'Concept image of a coordinated beauty product range prepared for launch'
  }
] as const;

export function HowWeWorkProcess() {
  return (
    <section className="section section-white anchor-target how-process-section" id="six-step-process">
      <div className="container">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="From Insight to Launch"
          text="From understanding market opportunities to developing and manufacturing your products, we bring together the expertise and resources needed to build your beauty brand."
        />
        <p className="how-process-swipe" aria-hidden="true">Swipe to explore all six steps <span>→</span></p>
        <div className="how-process-track" role="list" aria-label="From insight to launch process">
          {processSteps.map((step, index) => (
            <article className="how-process-card" role="listitem" key={step.number}>
              <div className="how-process-copy">
                <span className="how-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="how-process-image">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 1050px) 78vw, 17vw"
                />
              </div>
              {index < processSteps.length - 1 ? (
                <span className="how-process-arrow" aria-hidden="true">
                  <svg viewBox="0 0 18 18" fill="none">
                    <path d="M4 9h9M10 5.5 13.5 9 10 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
