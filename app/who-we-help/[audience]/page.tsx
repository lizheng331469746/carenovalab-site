import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/page-hero';
import { InquiryButton } from '@/components/inquiry-provider';
import { audienceGroups, getAudience } from '@/lib/audiences';

export function generateStaticParams() {
  return audienceGroups.map((group) => ({ audience: group.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ audience: string }> }): Promise<Metadata> {
  const { audience } = await params;
  const group = getAudience(audience);
  if (!group) return { title: 'Client Type Not Found' };
  return {
    title: `${group.title} | Who We Help`,
    description: `${group.problem} See how CareNova Lab supports ${group.title.toLowerCase()} with product development, packaging and OEM/ODM coordination.`
  };
}

export default async function AudiencePage({ params }: { params: Promise<{ audience: string }> }) {
  const { audience } = await params;
  const group = getAudience(audience);
  if (!group) notFound();
  const index = audienceGroups.findIndex((item) => item.id === group.id);

  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title={group.title}
        description={group.problem}
        backgroundImage="https://sc02.alicdn.com/kf/H1edba2089b1447468063dd5821dd8dfaf.jpg"
        primaryLabel={group.cta}
        primaryContext={{ source: `Who We Help: ${group.title}`, message: `I would like to discuss support for ${group.title}.` }}
        secondaryLabel="View All Client Types"
        secondaryHref="/who-we-help"
      />
      <section className="section section-white">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <Link href="/who-we-help">Who We Help</Link> <span>/</span> {group.title}</div>
          <div className="split-grid" style={{ marginTop: 36 }}>
            <div className={`product-visual ${index % 2 ? 'tone-rose' : 'tone-sage'}`}>
              <div className="visual-orb orb-one"/><div className="visual-orb orb-two"/>
              <div className="bottle bottle-tall"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="bottle bottle-short"><span>TEAM</span></div>
              <div className="jar"><span>PLAN</span></div>
            </div>
            <div>
              <span className="eyebrow">Client Type {String(index + 1).padStart(2, '0')}</span>
              <h2>Product Development Support for {group.title}</h2>
              <p>{group.problem}</p>
              <div className="list-check">{group.help.map((item) => <div key={item}>{item}</div>)}</div>
              <div className="hero-actions"><InquiryButton context={{ source: `Who We Help: ${group.title}`, message: `I would like to discuss support for ${group.title}.` }}>{group.cta}</InquiryButton></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

