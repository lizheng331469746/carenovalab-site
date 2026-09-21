import type { PackagingOption } from './types';

// Stable IDs provide a boundary for a future shared packaging database.
export const packagingCatalog: Record<string, PackagingOption> = {
  'cleanser-tube': {
    id: 'cleanser-tube', type: 'Soft-Touch Tube', capacity: 'Custom options available',
    decoration: 'Finish and printing to be confirmed',
    description: 'Tube format with a flip-top closure; confirm material, fill size and finish during sampling.',
    image: { alt: 'Cleanser tube packaging', caption: 'Tube packaging' }
  },
  'cleanser-pump': {
    id: 'cleanser-pump', type: 'Pump Bottle', capacity: 'Custom options available',
    description: 'Pump format subject to formula viscosity and dispensing compatibility.',
    image: { alt: 'Cleanser pump bottle packaging', caption: 'Pump packaging' }
  },
  'custom-carton': {
    id: 'custom-carton', type: 'Custom Carton', capacity: 'Custom size',
    decoration: 'Artwork and print finish to be confirmed',
    description: 'Outer packaging sized to the selected primary container.',
    image: { alt: 'Custom cleanser carton packaging', caption: 'Carton packaging' }
  }
};
export function getPackagingOptions(ids: string[]): PackagingOption[] {
  return ids.map(id => {
    const option = packagingCatalog[id];
    if (!option) throw new Error(`Unknown packaging ID: ${id}`);
    return option;
  });
}
