'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { siteConfig } from '@/lib/site';
import { buildWhatsAppUrl, type InquiryContext } from '@/lib/whatsapp';

type InquiryValue = {
  openInquiry: (context?: InquiryContext) => void;
};

const InquiryContextObject = createContext<InquiryValue | null>(null);

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<InquiryContext>({});

  const value = useMemo(
    () => ({
      openInquiry(next: InquiryContext = {}) {
        setContext(next);
        setOpen(true);
      }
    }),
    []
  );

  function chooseConsultant(consultant: (typeof siteConfig.consultants)[number]) {
    const url = buildWhatsAppUrl(consultant.phoneUrl, consultant.name, context);
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  return (
    <InquiryContextObject.Provider value={value}>
      {children}
      {open ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            className="consultant-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Choose a Product Consultant"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <span className="eyebrow">CareNova Lab Product Team</span>
            <h2>Choose a Product Consultant</h2>
            <p className="modal-intro">
              Select a team member to continue on WhatsApp. Your message will include the product or solution you are viewing.
            </p>
            <div className="consultant-grid">
              {siteConfig.consultants.map((consultant, index) => (
                <article className="consultant-card" key={consultant.id}>
                  <div className={`avatar avatar-${index + 1}`} aria-hidden="true">
                    {consultant.name.slice(0, 1)}
                  </div>
                  <div>
                    <h3>{consultant.name}</h3>
                    <p className="consultant-title">{consultant.title}</p>
                    <p>{consultant.shortBio}</p>
                    <button className="button button-dark button-small" onClick={() => chooseConsultant(consultant)}>
                      Chat with {consultant.name}
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="email-link"
              href={`mailto:${siteConfig.email}?subject=CareNova%20Lab%20Product%20Inquiry`}
            >
              Not ready to chat? Send an Email Inquiry →
            </a>
          </div>
        </div>
      ) : null}
    </InquiryContextObject.Provider>
  );
}

export function useInquiry() {
  const value = useContext(InquiryContextObject);
  if (!value) throw new Error('useInquiry must be used inside InquiryProvider');
  return value;
}

export function InquiryButton({
  children,
  className = 'button button-dark',
  context = {}
}: {
  children: React.ReactNode;
  className?: string;
  context?: InquiryContext;
}) {
  const { openInquiry } = useInquiry();
  return (
    <button className={className} onClick={() => openInquiry(context)}>
      {children}
    </button>
  );
}
