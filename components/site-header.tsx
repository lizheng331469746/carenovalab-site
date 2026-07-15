'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { primaryNav, siteConfig } from '@/lib/site';
import { InquiryButton } from './inquiry-provider';
import { MegaDropdown } from './mega-dropdown';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onMegaEnter = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const onMegaLeave = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 200);
  };
  useEffect(() => () => { if (megaTimer.current) clearTimeout(megaTimer.current); }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="CareNova Lab home">
            <img src="/images/logo.svg" alt="CareNova Lab" />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryNav.map((item) => {
              if (item.href === '/products') {
                return (
                  <div
                    key={item.href}
                    className="mega-trigger"
                    onMouseEnter={onMegaEnter}
                    onMouseLeave={onMegaLeave}
                  >
                    <Link
                      href={item.href}
                      className={megaOpen ? 'mega-trigger-active' : ''}
                      onClick={(e) => { if (megaOpen) { e.preventDefault(); setMegaOpen(false); } }}
                    >
                      {item.label}
                      <svg className="mega-chevron" width="10" height="6" fill="none" stroke="currentColor" viewBox="0 0 10 6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 1l4 4 4-4" />
                      </svg>
                    </Link>
                    {megaOpen && <MegaDropdown onClose={() => setMegaOpen(false)} />}
                  </div>
                );
              }
              return <Link key={item.href} href={item.href}>{item.label}</Link>;
            })}
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
