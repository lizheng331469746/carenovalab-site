import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { productCategories } from '@/lib/products';
import { insights } from '@/lib/insights';

function toSlug(value: string) {
  return value.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/solutions', '/solutions/device-companion-skincare', '/solutions/fragrance-body-care', '/solutions/scenario-based-care', '/products', '/who-we-help', '/how-we-work', '/insights', '/about', '/contact', '/start-your-project', '/privacy', '/terms'];
  const productPaths = productCategories.flatMap((category) =>
    category.groups.flatMap((group) => {
      const groupPath = `/products/${category.slug}/${toSlug(group.name)}`;
      return [
        groupPath,
        ...group.products.map((product) => `${groupPath}/${toSlug(product.name)}`)
      ];
    })
  );

  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : .7 })),
    ...productCategories.map((item) => ({ url: `${siteConfig.url}/products/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .7 })),
    ...productPaths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .6 })),
    ...insights.map((item) => ({ url: `${siteConfig.url}/insights/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .65 }))
  ];
}
