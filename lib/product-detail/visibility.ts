/** Empty optional objects/arrays must not create empty product sections. */
export function hasSectionData(value: unknown): boolean {
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.some(hasSectionData);
  if (value && typeof value === 'object') return Object.values(value).some(hasSectionData);
  return false;
}
