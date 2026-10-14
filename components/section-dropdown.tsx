'use client';

import Link from 'next/link';

type DropdownItem = {
  label: string;
  href: string;
};

export function SectionDropdown({
  items,
  onClose
}: {
  items: readonly DropdownItem[];
  onClose: () => void;
}) {
  return (
    <>
      <div className="mega-overlay" onClick={onClose} />
      <div className="section-dropdown">
        <ul className="section-nav-list">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onClose}>
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
