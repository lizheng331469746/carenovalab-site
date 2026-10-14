'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { primaryNav } from '@/lib/navigation';
import { MegaDropdown } from './mega-dropdown';
import { SectionDropdown } from './section-dropdown';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onMegaEnter = (href: string) => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setOpenMenu(href);
  };
  const onMegaLeave = () => {
    megaTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };
  useEffect(() => () => { if (megaTimer.current) clearTimeout(megaTimer.current); }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="CareNova Lab home">
            <span className="brand-mark" aria-hidden="true">CNL</span>
            <span className="brand-copy"><span>CARENOVA LAB</span><small>Cosmetic R&amp;D · OEM/ODM</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryNav.map((item) => {
              if ('productMenu' in item || 'children' in item) {
                const isOpen = openMenu === item.href;
                return (
                  <div
                    key={item.href}
                    className="nav-trigger"
                    onMouseEnter={() => onMegaEnter(item.href)}
                    onMouseLeave={onMegaLeave}
                  >
                    <Link
                      href={item.href}
                      className={isOpen ? 'mega-trigger-active' : ''}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenu((value) => value === item.href ? null : item.href);
                      }}
                    >
                      {item.label}
                      <svg className="mega-chevron" width="10" height="6" fill="none" stroke="currentColor" viewBox="0 0 10 6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 1l4 4 4-4" />
                      </svg>
                    </Link>
                    {isOpen && ('productMenu' in item
                      ? <MegaDropdown onClose={() => setOpenMenu(null)} />
                      : <SectionDropdown items={item.children} onClose={() => setOpenMenu(null)} />)}
                  </div>
                );
              }
              return <Link key={item.href} href={item.href}>{item.label}</Link>;
            })}
          </nav>
          <div className="header-actions">
            <Link href="/start-your-project" className="button button-gold button-small">Start Your Project →</Link>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {primaryNav.map((item) => <div className="mobile-nav-group" key={item.href}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
              {'children' in item && <div className="mobile-nav-children">{item.children.map((child) => (
                <Link key={child.href} href={child.href} onClick={() => setMenuOpen(false)}>{child.label}</Link>
              ))}</div>}
            </div>)}
            <Link className="mobile-project-link" href="/start-your-project" onClick={() => setMenuOpen(false)}>Start Your Project →</Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}

