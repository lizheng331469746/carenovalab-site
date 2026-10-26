import type { Metadata } from 'next';
import { InsightsLibrary } from '@/components/insights-library';

export const metadata: Metadata = {
  title: 'Beauty Business Intelligence & OEM/ODM Insights',
  description: 'Explore CareNova Lab insights on formulation, OEM/ODM manufacturing, packaging, compliance and beauty market opportunities.'
};

export default function InsightsPage() {
  return <InsightsLibrary />;
}

