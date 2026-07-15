import Link from 'next/link';
import { InquiryButton } from './inquiry-provider';
import { asset } from '@/lib/assets';

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryLabel = 'Talk to Our Team',
  primaryContext,
  secondaryLabel,
  secondaryHref
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryLabel?: string;
  primaryContext?: { source?: string; solution?: string; product?: string; message?: string };
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <InquiryButton context={primaryContext || { source: title }}>{primaryLabel}</InquiryButton>
            {secondaryLabel && secondaryHref ? (
              <Link className="button button-outline" href={secondaryHref}>{secondaryLabel}</Link>
            ) : null}
          </div>
        </div>
        <div className="page-hero-art">
          <img src={asset(image)} alt="" />
        </div>
      </div>
    </section>
  );
}
