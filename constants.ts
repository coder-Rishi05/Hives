import { NavLink, PricingTier, ServiceItem, CaseStudy } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: { monthly: '$2,999', quarterly: '$7,999' },
    description: 'Perfect for early-stage startups needing a solid foundation.',
    features: ['One request at a time', 'Average 48h delivery', 'UI/UX Design', 'Basic Webflow Dev'],
  },
  {
    name: 'Pro',
    price: { monthly: '$4,999', quarterly: '$13,999' },
    description: 'For growing teams requiring continuous design & dev flow.',
    features: ['Two requests at a time', 'Priority support', 'Full-stack React/Next.js', 'AI Integration', 'Unlimited revisions'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', quarterly: 'Custom' },
    description: 'Dedicated team for large-scale digital transformation.',
    features: ['Dedicated Project Manager', 'SLA agreements', 'Custom AI Model Training', '24/7 Support'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces that delight users.',
    colSpan: 2,
    type: 'ui',
  },
  {
    title: 'AI Automation',
    description: 'Streamlining workflows with intelligent agents.',
    colSpan: 1,
    type: 'ai',
  },
  {
    title: 'Full Stack Development',
    description: 'Robust, scalable code built for performance.',
    colSpan: 3,
    type: 'dev',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: 'FinFlow',
    title: 'Revolutionizing Fintech Dashboards',
    image: 'https://picsum.photos/1600/900?random=1',
    tags: ['UI/UX', 'React'],
  },
  {
    id: 2,
    client: 'Nebula AI',
    title: 'Generative Art Platform',
    image: 'https://picsum.photos/1600/900?random=2',
    tags: ['AI', 'Python', 'Three.js'],
  },
  {
    id: 3,
    client: 'Apex Health',
    title: 'Patient Telemetry System',
    image: 'https://picsum.photos/1600/900?random=3',
    tags: ['Mobile', 'IoT'],
  },
];

export const CLIENT_LOGOS = [
  'Acme Corp', 'GlobalBank', 'TechNova', 'BioLife', 'SkyNet', 'CyberDyne', 'Umbrella', 'Stark Ind'
];
