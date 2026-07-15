import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { productCategories } from '@/lib/products';
import { insights } from '@/lib/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/solutions', '/solutions/device-companion-skincare', '/solutions/fragrance-body-care', '/solutions/scenario-based-care', '/products', '/who-we-help', '/how-we-work', '/insights', '/about', '/contact', '/start-your-project', '/privacy', '/terms'];
  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : .7 })),
    ...productCategories.map((item) => ({ url: `${siteConfig.url}/products/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .7 })),
    ...insights.map((item) => ({ url: `${siteConfig.url}/insights/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .65 }))
  ];
}
