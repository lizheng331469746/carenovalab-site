import Link from 'next/link';
import { Instagram, Linkedin, MapPin, Music2, Youtube } from 'lucide-react';

const socialChannels = [
  { label: 'LinkedIn', Icon: Linkedin },
  { label: 'Instagram', Icon: Instagram },
  { label: 'YouTube', Icon: Youtube },
  { label: 'TikTok', Icon: Music2 }
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo" aria-label="CareNova Lab home">
            <span className="brand-mark" aria-hidden="true">CNL</span>
            <span className="brand-copy"><span>CARENOVA LAB</span><small>Cosmetic R&amp;D · OEM/ODM</small></span>
          </Link>
          <p>Your partner in cosmetic formulation, private label manufacturing, packaging customization, and global product development.</p>
          <p className="footer-location"><MapPin aria-hidden="true" size={18} />Guangzhou, China</p>
        </div>
        <div>
          <h3>OEM &amp; ODM Services</h3>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/how-we-work#product-development-models">Custom Formulation</Link>
          <Link href="/how-we-work#product-development-models">Private Label Manufacturing</Link>
          <Link href="/how-we-work#packaging-production-support">Packaging Customization</Link>
          <Link href="/how-we-work#oem-odm-services">Low MOQ Solutions</Link>
          <Link href="/who-we-help/beauty-startups">Start Your Brand</Link>
        </div>
        <div>
          <h3>Product Library</h3>
          <Link href="/products/skincare">Skincare</Link>
          <Link href="/products/makeup">Makeup</Link>
          <Link href="/products/sun-care">Sun Care</Link>
          <Link href="/products/body-care">Body Care</Link>
          <Link href="/products/hair-care">Hair Care</Link>
          <Link href="/products/soap">Soap &amp; Cleansing Bars</Link>
          <Link href="/products/essential-oils-fragrance">Oils &amp; Aromatherapy</Link>
          <Link href="/products/home-care">Home Care</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/insights">Knowledge Center</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="footer-connect">
          <h3>Stay Connected</h3>
          <p>Get the latest insights on cosmetic trends, new formulations, packaging innovations, and OEM/ODM solutions.</p>
          <form className="footer-subscribe" action="/contact" method="get">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" name="email" type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social-list" aria-label="CareNova Lab social channels">
            {socialChannels.map(({ label, Icon }) => <div className="footer-social-item" key={label}>
              <span><Icon aria-hidden="true" size={20} strokeWidth={1.8} /></span>
              <small>{label}</small>
            </div>)}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CareNova Lab. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
          <i aria-hidden="true" />
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
