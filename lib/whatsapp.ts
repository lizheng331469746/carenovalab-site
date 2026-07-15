export type InquiryContext = {
  source?: string;
  product?: string;
  solution?: string;
  message?: string;
};

export function buildWhatsAppUrl(
  phone: string,
  consultantName: string,
  context: InquiryContext = {}
) {
  const lines = [
    `Hello ${consultantName},`,
    '',
    context.message || 'I would like to discuss a beauty or personal care product project with CareNova Lab.',
    context.solution ? `Solution: ${context.solution}` : '',
    context.product ? `Product: ${context.product}` : '',
    'Target market:',
    'Estimated quantity:',
    'Customization route:',
    'Packaging requirement:',
    'Expected launch date:',
    'Additional requirements:',
    context.source ? `Source page: ${context.source}` : ''
  ].filter(Boolean);

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
