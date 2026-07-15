'use client';

import Link from 'next/link';
import { useState } from 'react';
import { primaryNav, siteConfig } from '@/lib/site';
import { InquiryButton } from './inquiry-provider';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>Beauty product development and OEM/ODM project coordination for global brands.</span>
        <button onClick={() => setMenuOpen(false)} className="announcement-link">Talk to our product team →</button>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="CareNova Lab home">
            <img src="/images/logo.svg" alt="CareNova Lab" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-email" href={`mailto:${siteConfig.email}`}>Email Us</a>
            <InquiryButton context={{ source: 'Header' }} className="button button-gold button-small">Talk to Our Team</InquiryButton>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Our Team</Link>
            <a href={`mailto:${siteConfig.email}`}>Email Us</a>
          </nav>
        ) : null}
      </header>
    </>
  );
}
