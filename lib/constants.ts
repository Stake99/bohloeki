/**
 * App-wide constants for Bohloeki Enterprises website
 * Contains navigation links, company information, production metrics, and design tokens
 */

// Navigation Links
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Operations', href: '/operations' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

// Company Information
export interface CompanyInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    name: string;
  };
  businessHours: {
    weekdays: string;
    weekend: string;
  };
  social?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: 'Bohloeki Enterprises',
  tagline: 'Turning Waste Into Sustainable Energy',
  address: {
    street: 'Maseru Industrial Area',
    city: 'Maseru',
    country: 'Lesotho',
  },
  contact: {
    phone: '(+266) 5840 5122',
    email: 'temohok@gmail.com',
    name: 'Mr. Temoho Khetleli',
  },
  businessHours: {
    weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM',
    weekend: 'Saturday - Sunday: Closed',
  },
};

// Production Metrics
export interface ProductionMetrics {
  currentMonthlyProduction: number; // liters
  projectedProduction: number; // liters
  supplierCount: number;
  operationalRegions: string[];
  growthRate?: number; // percentage
}

export const productionMetrics: ProductionMetrics = {
  currentMonthlyProduction: 24000, // 24,000 liters per month
  projectedProduction: 100000, // 100,000 liters projection
  supplierCount: 60, // 60 suppliers in Maseru
  operationalRegions: ['Maseru'],
  growthRate: 316.67, // Growth from 24,000L to 100,000L
};

// Color Constants (matching design tokens)
export const colors = {
  // Primary colors
  primary: {
    forest: '#1B4332', // Deep forest green
    forestLight: '#2D6A4F', // Lighter forest green
    forestDark: '#081C15', // Darker forest green
  },
  // Neutral colors
  neutral: {
    black: '#1C1C1C', // Charcoal black
    white: '#FFFFFF', // Pure white
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  // Accent colors
  accent: {
    gold: '#D4AF37', // Subtle gold
    goldLight: '#E5C158', // Lighter gold
  },
  // Semantic colors
  semantic: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
};

// Typography Scale
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing System
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
};

// Breakpoints
export const breakpoints = {
  sm: '640px', // Mobile landscape
  md: '768px', // Tablet
  lg: '1024px', // Desktop
  xl: '1280px', // Large desktop
  '2xl': '1536px', // Extra large desktop
};
