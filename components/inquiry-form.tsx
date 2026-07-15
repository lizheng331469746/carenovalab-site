'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/lib/site';

const initial = {
  name: '', company: '', country: '', email: '', whatsapp: '', market: '', product: '', quantity: '', route: '', packaging: '', launch: '', consultant: 'no-preference', requirements: ''
};

export function InquiryForm() {
  const [form, setForm] = useState(initial);

  function update(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const selected = form.consultant === 'no-preference'
      ? siteConfig.consultants[0]
      : siteConfig.consultants.find((item) => item.id === form.consultant) || siteConfig.consultants[0];
    const message = [
      `Hello ${selected.name},`,
      '',
      'I would like to discuss a product project with CareNova Lab.',
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Target market: ${form.market}`,
      `Product / solution: ${form.product}`,
      `Estimated quantity: ${form.quantity}`,
      `Development route: ${form.route}`,
      `Packaging requirement: ${form.packaging}`,
      `Expected launch date: ${form.launch}`,
      `Additional requirements: ${form.requirements}`,
      'Source page: Start Your Project'
    ].join('\n');
    window.open(`https://wa.me/${selected.phoneUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input required value={form.name} onChange={(e) => update('name', e.target.value)} /></label>
        <label>Company Name<input value={form.company} onChange={(e) => update('company', e.target.value)} /></label>
        <label>Country<input required value={form.country} onChange={(e) => update('country', e.target.value)} /></label>
        <label>Email<input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} /></label>
        <label>WhatsApp Number<input value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} /></label>
        <label>Target Market<input value={form.market} onChange={(e) => update('market', e.target.value)} placeholder="United States, EU, Middle East…" /></label>
        <label className="form-wide">Product or Solution<input required value={form.product} onChange={(e) => update('product', e.target.value)} placeholder="Body mist collection, device gel, serum…" /></label>
        <label>Estimated Quantity<input value={form.quantity} onChange={(e) => update('quantity', e.target.value)} placeholder="e.g. 5,000 pcs per SKU" /></label>
        <label>Development Route<select value={form.route} onChange={(e) => update('route', e.target.value)}><option value="">Select</option><option>Private Label</option><option>Semi-Custom</option><option>Full OEM/ODM</option><option>Not Sure Yet</option></select></label>
        <label>Packaging Required<select value={form.packaging} onChange={(e) => update('packaging', e.target.value)}><option value="">Select</option><option>Yes</option><option>No</option><option>Need Recommendations</option></select></label>
        <label>Expected Launch Date<input value={form.launch} onChange={(e) => update('launch', e.target.value)} placeholder="Month / Year" /></label>
        <label>Preferred Consultant<select value={form.consultant} onChange={(e) => update('consultant', e.target.value)}><option value="no-preference">No Preference</option><option value="willow">Willow</option><option value="jasmine">Jasmine</option></select></label>
        <label className="form-wide">Additional Requirements<textarea rows={5} value={form.requirements} onChange={(e) => update('requirements', e.target.value)} /></label>
      </div>
      <button className="button button-dark" type="submit">Send My Project via WhatsApp</button>
      <p className="form-note">Your information is used only to prepare the WhatsApp message. This form does not upload files or store your project data.</p>
    </form>
  );
}
