'use client';

import { useState } from 'react';
import styles from './homepage-inquiry-drawer.module.css';

export function HomepageInquiryDrawer({ triggerLabel = '✉ Talk to Us' }: { triggerLabel?: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button className={styles.trigger} onClick={() => setOpen(true)}>{triggerLabel}</button>
    {open ? <div className={styles.backdrop} onMouseDown={() => setOpen(false)}>
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Start your project" onMouseDown={e => e.stopPropagation()}>
        <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">×</button>
        <span className="eyebrow">START YOUR PROJECT</span><h2>Tell us what you want to develop.</h2>
        <p>Share a few details and our product team will help shape the next step.</p>
        <form className={styles.form} onSubmit={e => { e.preventDefault(); setOpen(false); }}>
          <label>Product Category<select defaultValue=""><option value="" disabled>Select a category</option><option>Skincare</option><option>Body Care</option><option>Hair Care</option><option>Sun Care</option><option>Men&apos;s Care</option></select></label>
          <label>Estimated Quantity<input placeholder="e.g. 1,000 units" /></label>
          <label>Target Market<input placeholder="Country or region" /></label>
          <label>Packaging Requirement<input placeholder="Bottle, jar, tube, sachet or box" /></label>
          <label>Message<textarea rows={3} placeholder="Tell us about your idea" /></label>
          <label>Email / WhatsApp<input required placeholder="How should we reach you?" /></label>
          <button className="button button-dark" type="submit">Start the Conversation →</button>
        </form>
        <a className={styles.whatsapp} href="https://wa.me/8613800000000" target="_blank" rel="noreferrer">WhatsApp Us →</a>
      </aside>
    </div> : null}
  </>;
}
