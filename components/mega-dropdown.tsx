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

const categoryTabs: [string, string, string[]][] = [
  ['skincare', 'SKINCARE', ['Facial Cleansers', 'Makeup Removers', 'Toners & Facial Mists', 'Toner & Treatment Pads', 'Active Serums', 'Ampoules & Boosters', 'Freeze-Dried Skincare', 'Moisturizers & Face Creams', 'Face Masks & Hydrogel Masks', 'Facial Treatment Oils', 'Eye & Lip Treatments']],
  ['makeup', 'MAKEUP', ['Cushion & Base Makeup', 'Lip Makeup & Lip Oils', 'Eye & Brow Makeup', 'Cheek & Contour Makeup', 'Makeup Primers & Setting', 'Multi-Use Makeup Sticks', 'Private Label Makeup Sets']],
  ['sun-care', 'SUN CARE', ['SPF Creams & Lotions', 'SPF Gels & Serums', 'SPF Sprays & Mists', 'Sunscreen Sticks & Cushions', 'Tinted & Hybrid Sunscreens', 'After-Sun & Cooling Care']],
  ['body-care', 'BODY CARE', ['Body Wash & Shower Oils', 'Body Lotions & Butters', 'Body Scrubs & Exfoliators', 'Body Serums & Targeted Care', 'Body Mists & Moisturizing Sprays', 'Deodorants & Antiperspirants', 'Massage & Spa Oils']],
  ['hair-care', 'HAIR CARE', ['Shampoos & Scalp Cleansers', 'Conditioners & Hair Masks', 'Scalp Serums & Exfoliants', 'Hair Oils & Leave-In Care', 'Density & Root Care', 'Styling & Heat Protection', "Men's Hair & Beard Care"]],
  ['soap', 'SOAP & CLEANSING BARS', ['Botanical & Moisturizing Soaps', 'Kojic Acid & Brightening Soaps', 'Clarifying & Exfoliating Soaps', 'Functional & Deodorizing Soaps', 'Handmade & Artisan Soaps', "Men's & Sports Soap Bars", 'Syndet & Solid Cleansing Bars']],
  ['essential-oils-fragrance', 'OILS & AROMATHERAPY', ['Single Essential Oils', 'Essential Oil Blends', 'Carrier & Botanical Oils', 'Aroma Roll-Ons & Gift Sets']],
  ['home-care', 'HOME CARE', ['Laundry Detergents & Pods', 'Fabric Care & Stain Treatment', 'Household Surface Cleaners', 'Reed Diffusers & Fragrance Oils', 'Room & Linen Sprays', 'Home Scent Accessories & Sets']],
];

const tabs: TabData[] = categoryTabs.map(([id, label, groups]) => ({
  id,
  label,
  columns: [{ title: label, items: groups.map((name) => ({ name, href: `/products/${id}/${groupSlug(name)}` })) }],
  viewAllHref: `/products/${id}`,
}));

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
              <Link
                key={tab.id}
                href={tab.viewAllHref}
                className={`mega-tab ${activeTab === tab.id ? 'mega-tab-active' : ''}`}
                onMouseEnter={() => setActiveTab(tab.id)}
                onFocus={() => setActiveTab(tab.id)}
                onClick={onClose}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div className="mega-body">
            <div className="mega-columns">
              {active.columns.map((col) => (
                <div className="mega-column" key={col.title}>
                  <ul className="mega-col-list">
                    {col.items.map((item) => (
                      <li key={item.name}><Link href={item.href} onClick={onClose}>{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


