'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const initial = {
  name: '',
  email: '',
  company: '',
  market: '',
  product: '',
  quantity: '',
  requirements: '',
  consent: false,
  website: ''
};

export function BeautyStartupInquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'error' | 'preview'>('idle');
  const consultant = siteConfig.consultants[0];

  const brief = useMemo(() => [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Brand / company: ${form.company || 'Not provided'}`,
    `Target market: ${form.market || 'Not decided'}`,
    `Product: ${form.product}`,
    `Estimated quantity: ${form.quantity}`,
    `Requirements: ${form.requirements}`,
    'Source page: beauty-startups'
  ].join('\n'), [form]);

  function update(field: keyof typeof initial, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  }

  function preview(event: FormEvent) {
    event.preventDefault();
    if (form.website || !form.name || !form.email || !form.product || !form.quantity || !form.requirements || !form.consent) {
      setStatus('error');
      return;
    }
    setStatus('preview');
  }

  function sendWhatsApp() {
    const message = `Hello ${consultant.name},\n\nI would like to discuss a beauty startup project with CareNova Lab.\n\n${brief}`;
    window.open(`https://wa.me/${consultant.phoneUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  const emailSubject = encodeURIComponent('Beauty startup project inquiry');
  const emailBody = encodeURIComponent(`Hello CareNova Lab,\n\nI would like to discuss a beauty startup project.\n\n${brief}`);

  return <div className="startup-conversation">
    <aside className="startup-contact-rail">
      <span className="eyebrow">A CONVERSATION, NOT A CHECKLIST</span>
      <h3>Start with what you know.</h3>
      <p>Choose a product direction and describe the texture, packaging or experience you want. Market and quantity can be discussed later.</p>
      <button className="button button-outline startup-whatsapp-button" type="button" onClick={sendWhatsApp}>Chat on WhatsApp</button>
      <div className="startup-review-note">Review first, then confirm submission. Opening WhatsApp or email does not send a message until you choose to send it.</div>
      <div className="startup-email-box">
        <h4>Prefer email?</h4>
        <p>Send the same project brief to our CareNova Lab inbox.</p>
        <a href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}>{siteConfig.email}</a>
        <a className="button button-outline" href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}>Open Email Draft</a>
      </div>
    </aside>

    <form className="startup-inquiry-form" onSubmit={preview} noValidate>
      <input className="startup-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => update('website', e.target.value)} />
      <header className="startup-form-header">
        <h3>What would you like to develop?</h3>
        <p>An email and product idea are enough to begin. Review first, then choose whether to submit.</p>
      </header>
      <p className="startup-form-privacy">Your entries stay in this browser until you open WhatsApp or email. <Link href="/privacy">Privacy details</Link></p>
      <div className="startup-form-grid">
        <label>Your name<input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. Alex" /></label>
        <label>Email *<input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" /></label>
        <label>Brand / company<input value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Your brand or company name" /></label>
        <label>Sales market (can be decided later)<input value={form.market} onChange={(e) => update('market', e.target.value)} placeholder="e.g. United Kingdom" /></label>
        <label>Select a product<select required value={form.product} onChange={(e) => update('product', e.target.value)}><option value="">Choose a product direction</option><option>Skincare</option><option>Body Care</option><option>Hair Care</option><option>Makeup & Lip Care</option><option>Home Care</option><option>Another product / not decided</option></select></label>
        <label>Estimated quantity (not a quotation)<select required value={form.quantity} onChange={(e) => update('quantity', e.target.value)}><option value="">Not decided</option><option>500–1,000 Units</option><option>1,000–3,000 Units</option><option>Above 3,000 Units</option></select></label>
        <label className="startup-form-wide">Product or customisation requirements *<textarea required rows={5} value={form.requirements} onChange={(e) => update('requirements', e.target.value)} placeholder="Describe the texture, packaging, fragrance or questions you would like to discuss." /></label>
        <label className="startup-consent startup-form-wide"><input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} /><span>I agree to submit these details after review so CareNova Lab can respond to this project inquiry.</span></label>
      </div>
      {status === 'error' && <p className="startup-form-error" role="alert">Please complete the required fields and consent checkbox.</p>}
      <button className="button button-dark" type="submit">Preview Your Brief →</button>
      {status === 'preview' && <section className="startup-brief-preview" aria-live="polite">
        <span className="eyebrow">YOUR PROJECT BRIEF</span>
        <pre>{brief}</pre>
        <div className="hero-actions">
          <button className="button button-dark" type="button" onClick={sendWhatsApp}>Continue with WhatsApp</button>
          <a className="button button-outline" href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}>Continue with Email</a>
        </div>
      </section>}
    </form>
  </div>;
}

