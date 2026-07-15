import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';
import { InquiryProvider } from '@/components/inquiry-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileContactBar } from '@/components/mobile-contact-bar';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Beauty Product Development & OEM/ODM Supply Chain Partner | CareNova Lab',
    template: '%s | CareNova Lab'
  },
  description: siteConfig.description,
  openGraph: {
    title: 'CareNova Lab',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'CareNova Lab',
    images: ['/images/og-default.svg'],
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <InquiryProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <MobileContactBar />
        </InquiryProvider>
      </body>
    </html>
  );
}
