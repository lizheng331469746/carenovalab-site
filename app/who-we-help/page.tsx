import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = {
  title: 'Product Development for Beauty Brands, Devices & Distributors',
  description: 'See how CareNova Lab supports startup brands, e-commerce sellers, beauty device companies, distributors, salons and beauty chains.'
};

const groups = [
  {
    title: 'Startup Beauty Brands',
    problem: 'You need to narrow many ideas into a first launch that is commercially realistic.',
    help: ['Prioritize one hero product and supporting SKUs','Compare private label, semi-custom and full custom routes','Review packaging, MOQ and launch timing together','Prepare product names, packaging copy and launch content'],
    cta: 'Plan My First Product'
  },
  {
    title: 'E-commerce Beauty Brands',
    problem: 'You need products that can be explained visually, bundled clearly and replenished regularly.',
    help: ['Develop products with strong demonstration potential','Build bundles and routine-based collections','Coordinate packaging that supports online presentation','Prepare listing structure and key selling points'],
    cta: 'Explore E-commerce Ideas'
  },
  {
    title: 'Beauty Device Companies',
    problem: 'Hardware alone does not create a complete home-care routine or repeat-purchase system.',
    help: ['Map pre-device, during-device and post-device care','Develop gels, serums, masks, creams and sprays','Build device care kits and refill opportunities','Coordinate technical use and packaging requirements'],
    cta: 'Build a Device Care System'
  },
  {
    title: 'Distributors & Importers',
    problem: 'You need a product range that fits local price points, channels, consumer habits and documentation needs.',
    help: ['Plan a focused range instead of a random catalog','Match product formats to the market and channel','Coordinate multiple SKUs and packaging formats','Organize project-specific document questions'],
    cta: 'Plan a Product Range'
  },
  {
    title: 'Salons, Clinics & Chains',
    problem: 'You want to extend professional services into retail and home-use products without losing routine logic.',
    help: ['Develop professional-to-home product systems','Create treatment support and maintenance products','Build branded sets and retail extensions','Coordinate training and launch-content direction'],
    cta: 'Develop Professional Care'
  }
];

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero eyebrow="Who We Help" title="Different Business Models Need Different Product Development Paths" description="A startup brand, a beauty device company and a distributor should not receive the same product recommendation. We adjust the project route according to your channel, market, quantity, timeline and commercial goal." image="/images/hero-about.svg" primaryLabel="Talk to Our Team" primaryContext={{ source: 'Who We Help page' }} secondaryLabel="Explore Product Solutions" secondaryHref="/solutions" />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Client Types" title="How We Support Each Type of Partner" text="The goal is not to add more services. It is to identify the decisions that matter most for your type of project." />
          <div className="category-groups">
            {groups.map((group, index) => (
              <div className="split-grid" key={group.title}>
                <div className={`product-visual ${index % 2 ? 'tone-rose' : 'tone-sage'}`}>
                  <div className="visual-orb orb-one"/><div className="visual-orb orb-two"/>
                  <div className="bottle bottle-tall"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="bottle bottle-short"><span>TEAM</span></div>
                  <div className="jar"><span>PLAN</span></div>
                </div>
                <div>
                  <span className="eyebrow">Client Type {String(index + 1).padStart(2, '0')}</span>
                  <h2>{group.title}</h2>
                  <p>{group.problem}</p>
                  <div className="list-check">{group.help.map((item) => <div key={item}>{item}</div>)}</div>
                  <div className="hero-actions"><InquiryButton context={{ source: `Who We Help: ${group.title}`, message: `I would like to discuss support for ${group.title}.` }}>{group.cta}</InquiryButton></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
