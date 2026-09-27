'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site';
import styles from './homepage-inquiry-drawer.module.css';

export function HomepageInquiryDrawer({ triggerLabel = '✉ Talk to Us', floating = false }: { triggerLabel?: string; floating?: boolean }) {
  const [open, setOpen] = useState(false);
  const whatsappHref = `https://wa.me/${siteConfig.consultants[0].phoneUrl}`;
  const emailHref = `mailto:${siteConfig.email}`;
  const copyWechat = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      await navigator.clipboard?.writeText(siteConfig.wechat);
    } catch {
      // Clipboard access can be unavailable in some browsers; the ID remains visible.
    }
  };
  return <>
    <button className={`${styles.trigger} ${floating ? styles.floatingTrigger : ''}`} onClick={() => setOpen(true)}>{floating ? <><img src="/images/logo.svg" alt="CareNova Lab" /><span className={styles.triggerText}>Start a Project</span></> : triggerLabel}</button>
    {open ? <div className={styles.backdrop} onMouseDown={() => setOpen(false)}>
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Start your project" onMouseDown={e => e.stopPropagation()}>
        <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">×</button>
        <span className="eyebrow">START YOUR PROJECT</span><h2>Start Your Product</h2>
        <p>Tell us what you&apos;re looking to develop. We&apos;ll help turn your brief into a workable product direction.</p>
        {floating ? <div className={styles.contactChoices}><a href={whatsappHref} target="_blank" rel="noreferrer"><b>WhatsApp</b><small>{siteConfig.consultants[0].phoneDisplay}</small><span>›</span></a><a href={emailHref}><b>Email</b><small>{siteConfig.email}</small><span>›</span></a><a href="#wechat" onClick={copyWechat}><b>WeChat</b><small>ID: {siteConfig.wechat} · Click to copy</small><span>›</span></a></div> : null}
        <form className={styles.form} onSubmit={e => { e.preventDefault(); setOpen(false); }}>
          <label>Product Category<select defaultValue=""><option value="" disabled>Select a category</option><option>Skincare</option><option>Body Care</option><option>Hair Care</option><option>Sun Care</option><option>Men&apos;s Care</option></select></label>
          <label>Estimated Quantity<input placeholder="e.g. 1,000 units" /></label>
          <label>Target Market<input placeholder="Country or region" /></label>
          <label>Packaging Requirement<input placeholder="Bottle, jar, tube, sachet or box" /></label>
          <label>Message<textarea rows={3} placeholder="Tell us about your idea" /></label>
          <label>Email / WhatsApp<input required placeholder="How should we reach you?" /></label>
          <button className="button button-dark" type="submit">Send Product Brief →</button>
        </form>
        <a className={styles.whatsapp} href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp Us →</a>
      </aside>
    </div> : null}
  </>;
}

