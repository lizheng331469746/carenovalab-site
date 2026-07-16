const base = (process.env.NEXT_PUBLIC_R2_BASE_URL || '').replace(/\/$/, '');

export function asset(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (!base) return path.startsWith('/') ? path : `/${path}`;
  return `${base}/${path.replace(/^\//, '')}`;
}
