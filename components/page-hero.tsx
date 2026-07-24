import Link from 'next/link';
import { InquiryButton } from './inquiry-provider';
import { asset } from '@/lib/assets';

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  backgroundImage,
  primaryLabel = 'Talk to Our Team',
  primaryContext,
  secondaryLabel,
  secondaryHref
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  backgroundImage?: string;
  primaryLabel?: string;
  primaryContext?: { source?: string; solution?: string; product?: string; message?: string };
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const bgStyle = backgroundImage ? {
    backgroundImage: `url(${asset(backgroundImage)})`,
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center' as const,
    backgroundRepeat: 'no-repeat' as const,
  } : {};

  return (
    <section className={`page-hero ${backgroundImage ? 'page-hero-bg' : ''}`} style={bgStyle}>
      {backgroundImage && <div className="page-hero-overlay" />}
      <div className="container page-hero-grid">
        <div style={backgroundImage ? { position: 'relative', zIndex: 1 } : {}}>
          <span className={`eyebrow ${backgroundImage ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
          <h1 style={backgroundImage ? { color: 'white' } : {}}>{title}</h1>
          <p style={backgroundImage ? { color: 'rgba(255,255,255,.82)' } : {}}>{description}</p>
          <div className="hero-actions">
            <InquiryButton context={primaryContext || { source: title }}>{primaryLabel}</InquiryButton>
            {secondaryLabel && secondaryHref ? (
              <Link
                className={backgroundImage ? 'button button-outline-light' : 'button button-outline'}
                href={secondaryHref}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
        {!backgroundImage && image && (
          <div className="page-hero-art">
            <img src={asset(image)} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
