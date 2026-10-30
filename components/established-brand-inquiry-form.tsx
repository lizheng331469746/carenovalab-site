'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const initial = { name:'', company:'', contact:'', project:'', product:'', market:'', quantity:'', requirements:'', consent:false, website:'' };

export function EstablishedBrandInquiryForm() {
  const [form,setForm] = useState(initial);
  const [status,setStatus] = useState<'idle'|'error'|'preview'>('idle');
  const consultant = siteConfig.consultants[0];
  const brief = useMemo(()=>[
    `Contact name: ${form.name}`, `Company / brand: ${form.company || 'Not provided'}`, `Business email / WhatsApp: ${form.contact}`,
    `Project type: ${form.project}`, `Product category: ${form.product}`, `Target market: ${form.market || 'Not confirmed'}`,
    `Estimated quantity: ${form.quantity}`, `Project requirements: ${form.requirements}`, 'Source page: established-beauty-brands'
  ].join('\n'),[form]);
  const update=(field:keyof typeof initial,value:string|boolean)=>{setForm(current=>({...current,[field]:value})); if(status!=='idle')setStatus('idle');};
  function preview(event:FormEvent){event.preventDefault();if(form.website||!form.name||!form.contact||!form.project||!form.product||!form.quantity||!form.requirements||!form.consent){setStatus('error');return;}setStatus('preview');}
  function sendWhatsApp(){window.open(`https://wa.me/${consultant.phoneUrl}?text=${encodeURIComponent(`Hello ${consultant.name},\n\nI would like to discuss an established beauty brand project.\n\n${brief}`)}`,'_blank','noopener,noreferrer');}
  const mailto=`mailto:${siteConfig.email}?subject=${encodeURIComponent('Established beauty brand project inquiry')}&body=${encodeURIComponent(`Hello CareNova Lab,\n\n${brief}`)}`;
  return <div className="startup-conversation established-conversation">
    <aside className="startup-contact-rail"><span className="eyebrow">PREFER DIRECT COMMUNICATION?</span><h3>Discuss your product requirements with our team.</h3><p>Share your current product range, development priorities or manufacturing needs. We can begin with the information you already have.</p><button className="button button-outline startup-whatsapp-button" type="button" onClick={sendWhatsApp}>Chat on WhatsApp</button><div className="startup-review-note">Your brief remains in this browser. Opening WhatsApp or email creates a draft and does not send it until you confirm.</div><div className="startup-email-box"><h4>Prefer email?</h4><p>Send the same project brief to our CareNova Lab inbox.</p><a href={mailto}>{siteConfig.email}</a><a className="button button-outline" href={mailto}>Open Email Draft</a></div><Link className="startup-contact-link" href="/contact">Contact Our Team →</Link></aside>
    <form className="startup-inquiry-form" onSubmit={preview} noValidate><input className="startup-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={e=>update('website',e.target.value)}/><header className="startup-form-header"><h3>Tell us about your next project.</h3><p>Review your project brief before choosing WhatsApp or email.</p></header><p className="startup-form-privacy">Your information is not uploaded by this form. <Link href="/privacy">Privacy details</Link></p><div className="startup-form-grid">
      <label>Contact Name *<input required value={form.name} onChange={e=>update('name',e.target.value)}/></label><label>Company / Brand Name<input value={form.company} onChange={e=>update('company',e.target.value)}/></label>
      <label className="startup-form-wide">Business Email / WhatsApp *<input required value={form.contact} onChange={e=>update('contact',e.target.value)}/></label>
      <label>Project Type *<select required value={form.project} onChange={e=>update('project',e.target.value)}><option value="">Select a project type</option>{['New Product Development','Existing Product Upgrade','Product Line Expansion','Packaging Development','Manufacturing / Supply Chain','Other'].map(x=><option key={x}>{x}</option>)}</select></label>
      <label>Product Category *<select required value={form.product} onChange={e=>update('product',e.target.value)}><option value="">Select a category</option>{['Skincare','Body Care','Hair Care','Makeup','Home Care','Other'].map(x=><option key={x}>{x}</option>)}</select></label>
      <label>Target Market<input value={form.market} onChange={e=>update('market',e.target.value)} placeholder="Country or region"/></label><label>Estimated Order Quantity *<select required value={form.quantity} onChange={e=>update('quantity',e.target.value)}><option value="">Select an estimate</option>{['Not Confirmed Yet','500–1,000 Units','1,000–5,000 Units','5,000–10,000 Units','Above 10,000 Units'].map(x=><option key={x}>{x}</option>)}</select></label>
      <label className="startup-form-wide">Project Requirements *<textarea required rows={6} value={form.requirements} onChange={e=>update('requirements',e.target.value)} placeholder="Tell us about your existing products, development goals, formula requirements or manufacturing needs."/></label><label className="startup-consent startup-form-wide"><input type="checkbox" checked={form.consent} onChange={e=>update('consent',e.target.checked)}/><span>I agree to share these details after review so CareNova Lab can respond to this project inquiry.</span></label>
    </div>{status==='error'&&<p className="startup-form-error" role="alert">Please complete the required fields and consent checkbox.</p>}<button className="button button-dark" type="submit">Discuss My Project →</button>{status==='preview'&&<section className="startup-brief-preview" aria-live="polite"><span className="eyebrow">YOUR PROJECT BRIEF</span><pre>{brief}</pre><div className="hero-actions"><button className="button button-dark" type="button" onClick={sendWhatsApp}>Continue with WhatsApp</button><a className="button button-outline" href={mailto}>Continue with Email</a></div></section>}</form>
  </div>;
}

