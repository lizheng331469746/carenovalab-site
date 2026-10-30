'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const initial = { name: '', contact: '', category: '', market: '', quantity: '', message: '', website: '' };

export function BeautyStartupInquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const update = (field: keyof typeof initial, value: string) => setForm((current) => ({ ...current, [field]: value }));

  function submit(event: FormEvent) {
    event.preventDefault();
    if (form.website || !form.name || !form.contact || !form.category || !form.market || !form.quantity || !form.message) { setStatus('error'); return; }
    const consultant = siteConfig.consultants[0];
    const message = [`Hello ${consultant.name},`, '', 'I would like to start a beauty brand project with CareNova Lab.', `Name: ${form.name}`, `Email / WhatsApp: ${form.contact}`, `Product category: ${form.category}`, `Target market: ${form.market}`, `Estimated order quantity: ${form.quantity}`, `Brand idea: ${form.message}`, 'Source page: beauty-startups'].join('\n');
    window.open(`https://wa.me/${consultant.phoneUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return <form className="startup-inquiry-form" onSubmit={submit} noValidate>
    <input className="startup-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => update('website', e.target.value)} />
    <div className="startup-form-grid">
      <label>Your Name<input required value={form.name} onChange={(e) => update('name', e.target.value)} /></label>
      <label>Email / WhatsApp<input required value={form.contact} onChange={(e) => update('contact', e.target.value)} /></label>
      <label>Product Category<select required value={form.category} onChange={(e) => update('category', e.target.value)}><option value="">Select a category</option><option>Skincare</option><option>Body Care</option><option>Hair Care</option><option>Makeup</option><option>Home Care</option><option>Other / Not Sure</option></select></label>
      <label>Target Market<input required value={form.market} onChange={(e) => update('market', e.target.value)} placeholder="United States, EU, Middle East…" /></label>
      <label className="startup-form-wide">Estimated Order Quantity<select required value={form.quantity} onChange={(e) => update('quantity', e.target.value)}><option value="">Select an estimated quantity</option><option>Not Sure Yet</option><option>500–1,000 Units</option><option>1,000–3,000 Units</option><option>Above 3,000 Units</option></select></label>
      <label className="startup-form-wide">Tell Us About Your Brand<textarea required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about your product idea, target customer and brand direction." /></label>
    </div>
    {status === 'error' && <p className="startup-form-error" role="alert">Please complete all required fields before continuing.</p>}
    <button className="button button-dark" type="submit">Start My Beauty Brand</button>
    <p className="form-note">Submitting opens a pre-filled WhatsApp message to our product team. By continuing, you agree to our <Link href="/privacy">Privacy Policy</Link>.</p>
  </form>;
}