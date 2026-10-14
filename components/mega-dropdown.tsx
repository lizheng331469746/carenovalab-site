'use client';

import { useState } from 'react';
import Link from 'next/link';
import { productTaxonomy } from '@/lib/product-taxonomy';
import { categoryPath, groupPath } from '@/lib/product-paths';

interface NavItem { name: string; href: string; }
interface MegaColumn { title: string; items: NavItem[]; }

interface TabData {
  id: string;
  label: string;
  columns: MegaColumn[];
  featured?: { title: string; items: NavItem[] };
  viewAllHref: string;
}

const tabs: TabData[] = productTaxonomy.map(({ slug, label, groups }) => ({
  id: slug,
  label,
  columns: [{ title: label, items: groups.map((name) => ({ name, href: groupPath(slug, name) })) }],
  viewAllHref: categoryPath(slug),
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


