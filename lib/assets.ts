const base = (process.env.NEXT_PUBLIC_R2_BASE_URL || '').replace(/\/$/, '');

export function asset(path: string) {
  if (!base) return path.startsWith('/') ? path : `/${path}`;
  return `${base}/${path.replace(/^\//, '')}`;
}
