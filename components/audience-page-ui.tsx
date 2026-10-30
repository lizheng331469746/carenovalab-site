import Link from 'next/link';

const paths = [
  <><path d="M9 18h6M10 21h4"/><path d="M8.2 14.5A6 6 0 1 1 15.8 14.5c-.9.7-1.3 1.5-1.4 2.5h-4.8c-.1-1-.5-1.8-1.4-2.5Z"/></>,
  <><path d="M9 3h6M10 3v6l-5 10h14L14 9V3"/><path d="M8 14h8"/></>,
  <><path d="m4 8 8-5 8 5-8 5-8-5Z"/><path d="m4 8v9l8 5 8-5V8M12 13v9"/></>,
  <><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M16 10h5v6h-5a3 3 0 0 1 0-6ZM7 3h10"/></>,
];

export function AudienceLineIcon({ index }: { index: number }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[index % paths.length]}</svg>;
}

export function AudienceProcess({ steps, texts, linkLabel = 'Explore Our Full Process' }: { steps: string[]; texts: string[]; linkLabel?: string }) {
  return <><div className="startup-roadmap-track">{steps.map((title,index)=><article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{texts[index]}</p>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div><div className="startup-center-link"><Link href="/how-we-work">{linkLabel} →</Link></div></>;
}

