import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { productCategories } from '@/lib/products';
import { insightCategories, insights } from '@/lib/insights';
import { categoryPath, groupPath, productPath } from '@/lib/product-paths';


export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/solutions', '/solutions/device-companion-skincare', '/solutions/fragrance-body-care', '/solutions/scenario-based-care', '/products', '/who-we-help', '/who-we-help/beauty-startups', '/who-we-help/established-beauty-brands', '/who-we-help/distributors-wholesalers', '/who-we-help/ecommerce-sellers', '/who-we-help/salons-spas', '/how-we-work', '/insights', '/about', '/contact', '/start-your-project', '/privacy', '/terms'];
  const productPaths = productCategories.flatMap((category) =>
    category.groups.flatMap((group) => {
      const groupUrl = groupPath(category.slug, group.name);
      return [
        groupUrl,
        ...group.products.map((product) => productPath(category.slug, group.name, product.name))
      ];
    })
  );

  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : .7 })),
    ...productCategories.map((item) => ({ url: `${siteConfig.url}${categoryPath(item.slug)}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .7 })),
    ...productPaths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .6 })),
    ...insightCategories.map((item) => ({ url: `${siteConfig.url}/insights/${item.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: .65 })),
    ...insights.map((item) => ({ url: `${siteConfig.url}/insights/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .65 }))
  ];
}

