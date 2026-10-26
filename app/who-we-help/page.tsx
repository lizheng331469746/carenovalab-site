import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';
import { audienceGroups } from '@/lib/audiences';

export const metadata: Metadata = {
  title: 'Product Development for Beauty Businesses',
  description: 'See how CareNova Lab supports beauty startups, established brands, distributors, e-commerce sellers, salons and spa businesses.'
};

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero eyebrow="Who We Help" title="Different Business Models Need Different Product Development Paths" description="A beauty startup, an established brand, a distributor and an e-commerce seller need different product strategies. We adjust the project route according to your channel, market, quantity, timeline and commercial goal." image="/images/hero-about.svg" backgroundImage="https://sc02.alicdn.com/kf/H1edba2089b1447468063dd5821dd8dfaf.jpg" primaryLabel="Start Your Project" primaryContext={{ source: 'Who We Help page' }} secondaryLabel="Explore Product Solutions" secondaryHref="/solutions" />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Client Types" title="How We Support Each Type of Partner" text="The goal is not to add more services. It is to identify the decisions that matter most for your type of project." />
          <div className="category-groups">
            {audienceGroups.map((group, index) => (
              <div className="split-grid anchor-target" id={group.id} key={group.title}>
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

