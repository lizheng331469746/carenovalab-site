export const siteConfig = {
  name: 'CareNova Lab',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.carenovalab.com',
  email: 'willowzheng668@gmail.com',
  location: 'Guangzhou, China',
  description:
    'CareNova Lab combines AI-driven product insights with OEM/ODM supply chain execution, helping beauty and personal care brands turn ideas into production-ready products.',
  consultants: [
    {
      id: 'willow',
      name: 'Willow',
      title: 'Senior Product Consultant & Project Coordinator',
      phoneDisplay: '+86 137 1007 9307',
      phoneUrl: '8613710079307',
      shortBio:
        'Discuss product concepts, formula and packaging directions, samples, OEM/ODM execution and project coordination.'
    },
    {
      id: 'jasmine',
      name: 'Jasmine',
      title: 'Product Consultant & Client Support',
      phoneDisplay: '+86 175 2034 9723',
      phoneUrl: '8617520349723',
      shortBio:
        'Discuss product inquiries, samples, quotations, packaging requirements and project follow-up.'
    }
  ]
} as const;

export const primaryNav = [
  { label: 'Product Solutions', href: '/solutions' },
  { label: 'Product Library', href: '/products' },
  { label: 'Who We Help', href: '/who-we-help' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' }
] as const;

// Force rebuild to restore stable state