'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface NavItem { name: string; href: string; }
interface MegaColumn { title: string; items: NavItem[]; }

interface TabData {
  id: string;
  label: string;
  columns: MegaColumn[];
  featured?: { title: string; items: NavItem[] };
  viewAllHref: string;
}

const tabs: TabData[] = [
  {
    id: 'makeup',
    label: 'MAKEUP',
    columns: [
      {
        title: 'FACE & CHEEK',
        items: [
          { name: 'Foundation', href: '/products/makeup' },
          { name: 'Concealer', href: '/products/makeup' },
          { name: 'Face Primers', href: '/products/makeup' },
          { name: 'Setting Sprays', href: '/products/makeup' },
          { name: 'Face Powders', href: '/products/makeup' },
          { name: 'Blush', href: '/products/makeup' },
          { name: 'Highlighter', href: '/products/makeup' },
          { name: 'Bronzer', href: '/products/makeup' },
        ],
      },
      {
        title: 'EYES & BROWS',
        items: [
          { name: 'Palettes', href: '/products/makeup' },
          { name: 'Single Eyeshadow', href: '/products/makeup' },
          { name: 'Mascara', href: '/products/makeup' },
          { name: 'Eyeliners', href: '/products/makeup' },
          { name: 'Pencils', href: '/products/makeup' },
          { name: 'Brow Gels', href: '/products/makeup' },
          { name: 'Eye Primers', href: '/products/makeup' },
        ],
      },
      {
        title: 'LIPS',
        items: [
          { name: 'Liquid Lipsticks', href: '/products/makeup' },
          { name: 'Lip Gloss', href: '/products/makeup' },
          { name: 'Bullet Lipsticks', href: '/products/makeup' },
          { name: 'Lip Liners', href: '/products/makeup' },
          { name: 'Lip Tints', href: '/products/makeup' },
          { name: 'Lip Oils', href: '/products/makeup' },
          { name: 'Lip Kits', href: '/products/makeup' },
        ],
      },
      {
        title: 'TOOLS & ACCESSORIES',
        items: [
          { name: 'Brushes', href: '/products/makeup' },
          { name: 'Sponges', href: '/products/makeup' },
          { name: 'Makeup Bags', href: '/products/makeup' },
        ],
      },
    ],
    featured: {
      title: 'BUSINESS STARTER',
      items: [
        { name: 'Sample Kits', href: '/contact' },
        { name: 'Makeup Sets', href: '/products/makeup' },
        { name: 'New Arrivals', href: '/products/makeup' },
        { name: 'PL Process', href: '/how-we-work' },
        { name: 'Pricing Guide', href: '/contact' },
      ],
    },
    viewAllHref: '/products/makeup',
  },
  {
    id: 'skincare',
    label: 'SKINCARE',
    columns: [
      {
        title: 'BY CATEGORY',
        items: [
          { name: 'Cleansers', href: '/products/skincare' },
          { name: 'Toners & Mists', href: '/products/skincare' },
          { name: 'Serums', href: '/products/skincare' },
          { name: 'Moisturizers', href: '/products/skincare' },
          { name: 'Masks', href: '/products/skincare' },
          { name: 'Eye & Lip Care', href: '/products/skincare' },
          { name: 'Hair Care', href: '/products/hair-care' },
        ],
      },
      {
        title: 'BY CONCERN',
        items: [
          { name: 'Anti-Aging', href: '/products/skincare' },
          { name: 'Soothing', href: '/products/skincare' },
          { name: 'Glow', href: '/products/skincare' },
          { name: 'Dryness', href: '/products/skincare' },
          { name: 'Oil Control', href: '/products/skincare' },
        ],
      },
      {
        title: 'TOOLS & ACCESSORIES',
        items: [
          { name: 'Stock Packaging', href: '/contact' },
          { name: 'Accessories', href: '/contact' },
        ],
      },
    ],
    viewAllHref: '/products/skincare',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function ProductCategoryBrowser() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Toggle: clicking same tab again closes it
  const handleTabClick = (tabId: string) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  const active = tabs.find((t) => t.id === activeTab);

  return (
    <div className="pcb-root">
      {/* Tab Bar */}
      <div className="pcb-tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pcb-tab-btn ${activeTab === tab.id ? 'pcb-tab-active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <span className="pcb-tab-divider" />
        <Link href="/products" className="pcb-browse-all">
          Browse All Products →
        </Link>
      </div>

      {/* Dropdown Panel */}
      {active && (
        <div className="pcb-panel">
          <div className="pcb-panel-inner">
            {/* Left sidebar */}
            <div className="pcb-sidebar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`pcb-sidebar-tab ${activeTab === tab.id ? 'pcb-sidebar-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main columns */}
            <div className="pcb-body">
              <div className="pcb-columns">
                {active.columns.map((col) => (
                  <div className="pcb-column" key={col.title}>
                    <h4 className="pcb-col-title">{col.title}</h4>
                    <ul className="pcb-col-list">
                      {col.items.map((item) => (
                        <li key={item.name}>
                          <Link href={item.href}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured panel */}
              {active.featured && (
                <div className="pcb-featured">
                  <h4 className="pcb-featured-title">{active.featured.title}</h4>
                  <ul className="pcb-featured-list">
                    {active.featured.items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className="pcb-featured-divider" />
                  <Link href="/start-your-project" className="pcb-featured-cta">
                    Start Your Brand &rarr;
                  </Link>
                  <p className="pcb-featured-hint">Low MOQ available</p>
                  <Link href={active.viewAllHref} className="pcb-view-all">
                    VIEW ALL {active.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
