'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem { name: string; href: string; }
interface MegaColumn { title: string; items: NavItem[]; }

interface TabData {
  id: string;
  label: string;
  columns: MegaColumn[];
  featured?: { title: string; items: NavItem[] };
  viewAllHref: string;
}

const groupSlug = (name: string) => name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

const tabs: TabData[] = [
  {
    id: 'makeup',
    label: 'MAKEUP',
    columns: [
      { title: 'FACE & CHEEK', items: [
        { name: 'Foundation', href: '/products/makeup/face-cheek' }, { name: 'Concealer', href: '/products/makeup/face-cheek' },
        { name: 'Face Primers', href: '/products/makeup/face-cheek' }, { name: 'Setting Sprays', href: '/products/makeup/face-cheek' },
        { name: 'Face Powders', href: '/products/makeup/face-cheek' }, { name: 'Blush', href: '/products/makeup/face-cheek' },
        { name: 'Highlighter', href: '/products/makeup/face-cheek' }, { name: 'Bronzer', href: '/products/makeup/face-cheek' },
      ]},
      { title: 'EYES & BROWS', items: [
        { name: 'Palettes', href: '/products/makeup/eyes-brows' }, { name: 'Single Eyeshadow', href: '/products/makeup/eyes-brows' },
        { name: 'Mascara', href: '/products/makeup/eyes-brows' }, { name: 'Eyeliners', href: '/products/makeup/eyes-brows' },
        { name: 'Pencils', href: '/products/makeup/eyes-brows' }, { name: 'Brow Gels', href: '/products/makeup/eyes-brows' },
        { name: 'Eye Primers', href: '/products/makeup/eyes-brows' },
      ]},
      { title: 'LIPS', items: [
        { name: 'Liquid Lipsticks', href: '/products/makeup/lips' }, { name: 'Lip Gloss', href: '/products/makeup/lips' },
        { name: 'Bullet Lipsticks', href: '/products/makeup/lips' }, { name: 'Lip Liners', href: '/products/makeup/lips' },
        { name: 'Lip Tints', href: '/products/makeup/lips' }, { name: 'Lip Oils', href: '/products/makeup/lips' },
        { name: 'Lip Kits', href: '/products/makeup/lips' },
      ]},
      { title: 'TOOLS & ACCESSORIES', items: [
        { name: 'Brushes', href: '/products/makeup/tools-accessories' }, { name: 'Sponges', href: '/products/makeup/tools-accessories' },
        { name: 'Makeup Bags', href: '/products/makeup/tools-accessories' },
      ]},
    ],
    featured: {
      title: 'BUSINESS STARTER',
      items: [
        { name: 'Sample Kits', href: '/contact' }, { name: 'Makeup Sets', href: '/products/makeup' },
        { name: 'New Arrivals', href: '/products/makeup' }, { name: 'PL Process', href: '/how-we-work' },
        { name: 'Pricing Guide', href: '/contact' },
      ],
    },
    viewAllHref: '/products/makeup',
  },
  {
    id: 'skincare',
    label: 'SKINCARE',
    columns: [
      { title: 'BY CATEGORY', items: [
        { name: 'Cleansers', href: '/products/skincare/facial-cleansers' }, { name: 'Makeup Removers', href: '/products/skincare/makeup-removers' }, { name: 'Toners & Mists', href: '/products/skincare/toners-facial-mists' },
        { name: 'Serums', href: '/products/skincare/active-serums' }, { name: 'Moisturizers', href: '/products/skincare/moisturizers-face-creams' },
        { name: 'Masks', href: '/products/skincare/face-masks-hydrogel-masks' }, { name: 'Eye & Lip Care', href: '/products/skincare' },
        { name: 'Hair Care', href: '/products/hair-care' },
      ]},
      { title: 'BY CONCERN', items: [
        { name: 'Anti-Aging', href: '/products/skincare' }, { name: 'Soothing', href: '/products/skincare' },
        { name: 'Glow', href: '/products/skincare' }, { name: 'Dryness', href: '/products/skincare' },
        { name: 'Oil Control', href: '/products/skincare' },
      ]},
      { title: 'TOOLS & ACCESSORIES', items: [
        { name: 'Stock Packaging', href: '/contact' }, { name: 'Accessories', href: '/contact' },
      ]},
    ],
    viewAllHref: '/products/skincare',
  },
  ...([
    ['sun-care', 'SUN CARE', ['SPF Creams & Lotions', 'SPF Gels & Serums', 'SPF Sprays & Mists', 'Sunscreen Sticks & Cushions', 'After-Sun & Cooling Care']],
    ['body-care', 'BODY CARE', ['Body Wash & Shower Oils', 'Body Lotions & Butters', 'Body Scrubs & Exfoliators', 'Body Serums & Targeted Care', 'Deodorants & Antiperspirants']],
    ['hair-care', 'HAIR CARE', ['Shampoos & Scalp Cleansers', 'Conditioners & Hair Masks', 'Scalp Serums & Exfoliants', 'Hair Oils & Leave-In Care', 'Styling & Heat Protection']],
    ['soap', 'SOAP & BARS', ['Botanical & Moisturizing Soaps', 'Kojic Acid & Brightening Soaps', 'Clarifying & Exfoliating Soaps', 'Handmade & Artisan Soaps', 'Syndet & Solid Cleansing Bars']],
    ['essential-oils-fragrance', 'OILS & AROMA', ['Single Essential Oils', 'Essential Oil Blends', 'Carrier & Botanical Oils', 'Aroma Roll-Ons & Gift Sets']],
    ['home-care', 'HOME CARE', ['Laundry Detergents & Pods', 'Fabric Care & Stain Treatment', 'Household Surface Cleaners', 'Reed Diffusers & Fragrance Oils', 'Room & Linen Sprays']]
  ] as [string, string, string[]][]).map(([id, label, groups]) => ({
    id,
    label,
    columns: [{ title: 'CORE PRODUCTS', items: groups.map((name) => ({ name, href: `/products/${id}/${name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}` })) }],
    featured: { title: 'BUILD YOUR BRAND', items: [{ name: 'Private Label', href: '/start-your-project' }, { name: 'Custom Formulation', href: '/start-your-project' }, { name: 'Packaging Solutions', href: '/contact' }] },
    viewAllHref: `/products/${id}`
  })),
];

export function MegaDropdown({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('skincare');
  const active = tabs.find((t) => t.id === activeTab) || tabs[0];
  const orderedTabs = [...tabs].sort((a, b) => (a.id === 'skincare' ? -1 : b.id === 'skincare' ? 1 : 0));

  return (
    <>
      <div className="mega-overlay" onClick={onClose} />
      <div className="mega-dropdown">
        <div className="mega-inner">
          <div className="mega-sidebar">
            {orderedTabs.map((tab) => (
              <button
                key={tab.id}
                className={`mega-tab ${activeTab === tab.id ? 'mega-tab-active' : ''}`}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mega-body">
            <div className="mega-columns">
              {active.columns.map((col) => (
                <div className="mega-column" key={col.title}>
                  <h4 className="mega-col-title">{col.title}</h4>
                  <ul className="mega-col-list">
                    {col.items.map((item) => (
                      <li key={item.name}><Link href={item.href} onClick={onClose}>{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {active.featured && (
              <div className="mega-featured">
                <h4 className="mega-featured-title">{active.featured.title}</h4>
                <ul className="mega-featured-list">
                  {active.featured.items.map((item) => (
                    <li key={item.name}><Link href={item.href} onClick={onClose}>{item.name}</Link></li>
                  ))}
                </ul>
                <div className="mega-featured-divider" />
                <Link href="/start-your-project" className="mega-featured-cta" onClick={onClose}>Start Your Brand &rarr;</Link>
                <p className="mega-featured-hint">Low MOQ available</p>
                <Link href={active.viewAllHref} className="mega-view-all" onClick={onClose}>VIEW ALL {active.label}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

