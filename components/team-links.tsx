'use client';

import { buildWhatsAppUrl } from '@/lib/whatsapp';
import type { siteConfig } from '@/lib/site';

type Consultant = (typeof siteConfig.consultants)[number];

export function DirectConsultantLink({ consultant }: { consultant: Consultant }) {
  return (
    <a
      href={buildWhatsAppUrl(consultant.phoneUrl, consultant.name, { source: 'Website footer' })}
      target="_blank"
      rel="noreferrer"
    >
      {consultant.name}: {consultant.phoneDisplay}
    </a>
  );
}
