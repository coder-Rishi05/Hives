import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: {
    monthly: string;
    quarterly: string;
  };
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  colSpan: number; // 1, 2, or 3
  type: 'ui' | 'ai' | 'dev';
}

export interface CaseStudy {
  id: number;
  client: string;
  title: string;
  image: string;
  tags: string[];
}
