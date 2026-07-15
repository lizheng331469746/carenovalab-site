import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { DirectConsultantLink } from './team-links';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-light.svg" alt="CareNova Lab" />
          <p>
            A practical product development and China supply chain partner for beauty and personal care brands.
          </p>
          <p className="footer-location">Guangzhou, China</p>
        </div>
        <div>
          <h3>Product Solutions</h3>
          <Link href="/solutions/device-companion-skincare">Device Companion Skincare</Link>
          <Link href="/solutions/fragrance-body-care">Fragrance Body Care</Link>
          <Link href="/solutions/scenario-based-care">Scenario-Based Personal Care</Link>
        </div>
        <div>
          <h3>Product Library</h3>
          <Link href="/products/skincare">Skincare</Link>
          <Link href="/products/body-care">Body Care</Link>
          <Link href="/products/hair-care">Hair Care</Link>
          <Link href="/products/sun-care">Sun Care</Link>
          <Link href="/products/essential-oils-fragrance">Essential Oils & Fragrance</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Contact Our Team</h3>
          {siteConfig.consultants.map((consultant) => (
            <DirectConsultantLink key={consultant.id} consultant={consultant} />
          ))}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CareNova Lab. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
