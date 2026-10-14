/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { cpus: 1 },
  staticPageGenerationTimeout: 120,
  async redirects() {
    return [
      ['/products/skincare/cleansers', '/products/skincare/facial-cleansers'],
      ['/products/skincare/toners', '/products/skincare/toners-facial-mists'],
      ['/products/skincare/serums', '/products/skincare/active-serums'],
      ['/products/skincare/face-creams', '/products/skincare/moisturizers-face-creams'],
      ['/products/skincare/masks', '/products/skincare/face-masks-hydrogel-masks'],
      ['/products/body-care/body-wash', '/products/body-care/body-wash-shower-oils'],
      ['/products/body-care/body-lotion', '/products/body-care/body-lotions-butters'],
      ['/products/body-care/body-scrub', '/products/body-care/body-scrubs-exfoliators'],
      ['/products/body-care/deodorant', '/products/body-care/deodorants-antiperspirants'],
      ['/products/hair-care/shampoo', '/products/hair-care/shampoos-scalp-cleansers'],
      ['/products/hair-care/conditioner', '/products/hair-care/conditioners-hair-masks'],
      ['/products/hair-care/scalp-care', '/products/hair-care/scalp-serums-exfoliants'],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_R2_HOST || 'assets.carenovalab.com'
      }
    ]
  }
};

export default nextConfig;
