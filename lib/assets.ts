const base = (process.env.NEXT_PUBLIC_R2_BASE_URL || '').replace(/\/$/, '');

export function asset(path: string) {
  // These product assets are deployed with the app rather than the optional R2 bucket.
  if (path.startsWith('/images/products/cleansing/')) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (!base) return path.startsWith('/') ? path : `/${path}`;
  return `${base}/${path.replace(/^\//, '')}`;
}
