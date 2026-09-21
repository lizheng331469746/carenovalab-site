import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import type { Product } from './types';
import { isDisplayText } from './visibility';

export function productMetadata(product: Product): Metadata {
  const url = new URL(product.seo.canonicalPath, siteConfig.url).toString();
  const image = product.seo.image?.src ? product.seo.image : product.gallery?.find(item => item.src) ?? product.heroImage;
  return {
    title: { absolute: product.seo.title },
    description: product.seo.description,
    alternates: { canonical: url },
    robots: product.demo ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: product.seo.title, description: product.seo.description,
      url, siteName: siteConfig.name, type: 'website',
      images: image?.src ? [{ url: new URL(image.src, siteConfig.url).toString(), alt: image.alt }] : []
    }
  };
}

export function faqJsonLd(product: Product): string {
  return JSON.stringify({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: (product.faq ?? []).filter(item => isDisplayText(item.question) && isDisplayText(item.answer)).map(({ question, answer }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  }).replace(/</g, '\\u003c');
}
