export function productSlug(value: string): string {
  return value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/\s*&\s*/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function categoryPath(categorySlug: string): `/products/${string}` {
  return `/products/${categorySlug}`;
}

export function groupPath(categorySlug: string, groupName: string): `/products/${string}` {
  return `/products/${categorySlug}/${productSlug(groupName)}`;
}

export function productPath(categorySlug: string, groupName: string, productName: string): `/products/${string}` {
  return `/products/${categorySlug}/${productSlug(groupName)}/${productSlug(productName)}`;
}
