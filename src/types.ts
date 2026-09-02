export interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  badge?: string;
  ctaText: string;
  accentColor: 'neon' | 'agua' | 'muted';
}

export interface FrictionPoint {
  id: string;
  title: string;
  description: string;
  highlightWords?: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  metric1: string;
  metric2: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  fullStory: {
    challenge: string;
    solution: string;
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  headline: string;
  quote: string;
  avatar: string;
  rating?: number;
}

export interface Specialty {
  number: string;
  title: string;
  highlighted?: boolean;
  tagline: string;
  details: string[];
}

export interface InsightArticle {
  id: string;
  tag: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ToolCapability {
  dimension?: string;
  feature?: string;
  description: string;
  icon?: string;
}

export interface ToolProduct {
  id: 'vision' | 'alfredo';
  name: string;
  tagline: string;
  status: 'active' | 'coming_soon';
  badge: string;
  short_description: string;
  url: string | null;
  details_route: string;
  accentColor?: string;
  capabilities: ToolCapability[];
}

export interface AuditResult {
  url: string;
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  coreWebVitals: {
    lcp: string;
    fid: string;
    cls: string;
    fcp: string;
    ttfb: string;
  };
  recommendations: Array<{
    category: 'SEO' | 'Performance' | 'CRM' | 'Analytics' | 'Dev';
    title: string;
    impact: 'Alto' | 'Médio' | 'Crítico';
    description: string;
  }>;
}
