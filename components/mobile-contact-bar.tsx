'use client';

import { siteConfig } from '@/lib/site';
import { useInquiry } from './inquiry-provider';

export function MobileContactBar() {
  const { openInquiry } = useInquiry();
  return (
    <div className="mobile-contact-bar">
      <a href={`mailto:${siteConfig.email}`}>Email Us</a>
      <button onClick={() => openInquiry({ source: 'Mobile fixed bar' })}>WhatsApp Our Team</button>
    </div>
  );
}
