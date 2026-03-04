# Technical Design Document

## Overview

This document specifies the technical design for the Bohloeki Enterprises corporate website - a production-ready, multi-page Next.js application showcasing an eco-friendly waste management and industrial burner oil producer in Lesotho, Africa.

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Image Optimization**: Next.js Image component
- **Deployment Target**: Vercel or similar edge platform

### Design Principles

1. **Mobile-First**: All layouts designed for mobile, progressively enhanced for larger screens
2. **Performance**: Static generation, code splitting, optimized assets
3. **Accessibility**: WCAG 2.1 AA compliance, semantic HTML, keyboard navigation
4. **Type Safety**: Comprehensive TypeScript interfaces for all data structures
5. **Maintainability**: Reusable components, clear separation of concerns
6. **Scalability**: Architecture supports future CMS integration

## Architecture

### Application Structure

```
bohloeki-website/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── operations/
│   │   └── page.tsx              # Operations page
│   ├── impact/
│   │   └── page.tsx              # Impact page
│   ├── partners/
│   │   └── page.tsx              # Partners page
│   └── contact/
│       └── page.tsx              # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky navigation header
│   │   ├── Footer.tsx            # Site footer
│   │   └── MobileMenu.tsx        # Mobile navigation menu
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section component
│   │   ├── StatsSection.tsx     # Statistics display
│   │   ├── ServicesOverview.tsx # Services cards
│   │   ├── ValueCards.tsx       # Company values display
│   │   ├── ImpactMetrics.tsx    # Impact statistics
│   │   └── ContactForm.tsx      # Contact form
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button
│   │   ├── Card.tsx             # Reusable card
│   │   ├── Container.tsx        # Max-width container
│   │   ├── Section.tsx          # Section wrapper
│   │   └── AnimatedCounter.tsx  # Number counter animation
│   └── animations/
│       ├── FadeIn.tsx           # Fade-in on scroll
│       └── SlideIn.tsx          # Slide-in on scroll
├── lib/
│   ├── constants.ts             # App-wide constants
│   ├── metadata.ts              # SEO metadata generators
│   └── validation.ts            # Form validation schemas
├── types/
│   ├── index.ts                 # Shared TypeScript types
│   └── forms.ts                 # Form data types
├── styles/
│   └── globals.css              # Global styles and Tailwind
└── public/
    ├── images/                  # Optimized images
    └── icons/                   # SVG icons
```

### Routing Architecture

Next.js App Router provides file-system based routing:

- `/` → Home page (hero, stats, services overview, CTA)
- `/about` → Company story, mission, vision, values, leadership
- `/services` → Detailed service offerings
- `/operations` → Production metrics, growth strategy
- `/impact` → Environmental and social impact
- `/partners` → Partnership opportunities
- `/contact` → Contact form and company information

All routes use static generation (SSG) for optimal performance.

### Layout Hierarchy

```
RootLayout (app/layout.tsx)
├── Metadata configuration
├── Font loading
├── Global styles
└── Children
    ├── Header (sticky navigation)
    ├── Main content (page-specific)
    └── Footer (company info, links)
```

## Components and Interfaces

### Core Layout Components

#### Header Component

```typescript
interface HeaderProps {
  className?: string;
}

interface NavLink {
  label: string;
  href: string;
}
```

**Behavior**:
- Sticky positioning with backdrop blur
- Transparent background at top, solid on scroll
- Desktop: horizontal navigation links
- Mobile: hamburger menu icon
- Active link highlighting based on current route
- Smooth scroll behavior for anchor links

#### Footer Component

```typescript
interface FooterProps {
  className?: string;
}

interface FooterSection {
  title: string;
  links: NavLink[];
}
```

**Content**:
- Company address, phone, email
- Quick navigation links
- Mission statement
- Copyright notice with dynamic year
- Social media links (prepared for future)

#### MobileMenu Component

```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}
```

**Behavior**:
- Slide-in animation from right
- Full-screen overlay
- Close on link click or outside click
- Keyboard accessible (Escape to close)

### Section Components

#### Hero Component

```typescript
interface HeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}
```

**Features**:
- Full viewport height option
- Background image with overlay
- Centered content with max-width
- Animated entrance
- Responsive typography scaling

#### StatsSection Component

```typescript
interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  description?: string;
}
```

**Features**:
- Animated counters on viewport entry
- Grid layout (responsive: 1-2-3 columns)
- Icon support
- Accessible number formatting

#### ServicesOverview Component

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits?: string[];
  environmentalImpact?: string;
}

interface ServicesOverviewProps {
  services: Service[];
  variant?: 'grid' | 'list';
}
```

**Features**:
- Card-based layout
- Hover animations
- Icon integration
- Expandable details option

#### ValueCards Component

```typescript
interface Value {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ValueCardsProps {
  values: Value[];
  animationDelay?: number;
}
```

**Features**:
- Staggered entrance animations
- Grid layout (responsive)
- Icon support
- Hover effects

#### ImpactMetrics Component

```typescript
interface ImpactMetric {
  id: string;
  category: 'environmental' | 'social' | 'economic';
  value: string | number;
  label: string;
  description?: string;
}

interface ImpactMetricsProps {
  metrics: ImpactMetric[];
  groupByCategory?: boolean;
}
```

**Features**:
- Category-based grouping
- Visual hierarchy
- Animated progress bars for percentages
- Icon integration per category

#### ContactForm Component

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
}
```

**Features**:
- React Hook Form integration
- Zod schema validation
- Field-level error display
- Loading state during submission
- Success/error feedback
- Accessible form labels and ARIA attributes

### UI Primitives

#### Button Component

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

#### Card Component

```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hoverable?: boolean;
}
```

#### Container Component

```typescript
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}
```

**Max-widths**:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- full: 100%

#### Section Component

```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Spacing scale**:
- sm: 2rem (32px)
- md: 4rem (64px)
- lg: 6rem (96px)
- xl: 8rem (128px)

### Animation Components

#### FadeIn Component

```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
}
```

**Behavior**:
- Uses Intersection Observer
- Triggers on viewport entry
- Configurable threshold (default: 0.1)
- Once animation (doesn't repeat)

#### AnimatedCounter Component

```typescript
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}
```

**Behavior**:
- Animates from 0 to target value
- Easing function for smooth motion
- Triggers on viewport entry
- Accessible (announces final value to screen readers)

## Data Models

### Navigation Data

```typescript
interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Operations', href: '/operations' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];
```

### Company Data

```typescript
interface CompanyInfo {
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
```

### Production Metrics

```typescript
interface ProductionMetrics {
  currentMonthlyProduction: number; // liters
  projectedProduction: number; // liters
  supplierCount: number;
  operationalRegions: string[];
  growthRate?: number; // percentage
}
```

### Service Data

```typescript
interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // icon identifier
  benefits: string[];
  environmentalImpact: string;
  targetClients: string[];
  category: 'collection' | 'production' | 'disposal';
}
```

### Impact Data

```typescript
interface ImpactData {
  environmental: {
    wasteReduced: number; // tons
    co2Prevented: number; // tons
    tiresRecycled: number;
  };
  social: {
    jobsCreated: number;
    suppliersSupported: number;
    communitiesServed: number;
  };
  economic: {
    localSourcingPercentage: number;
    economicImpact: string;
  };
}
```

### Form Validation Schemas

```typescript
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
```

### Metadata Types

```typescript
interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    email: string;
    contactType: 'customer service';
  };
}
```


## Design System

### Color Palette

```typescript
const colors = {
  // Primary colors
  primary: {
    forest: '#1B4332',      // Deep forest green
    forestLight: '#2D6A4F', // Lighter forest green
    forestDark: '#081C15',  // Darker forest green
  },
  // Neutral colors
  neutral: {
    black: '#1C1C1C',       // Charcoal black
    white: '#FFFFFF',       // Pure white
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
    gold: '#D4AF37',        // Subtle gold
    goldLight: '#E5C158',   // Lighter gold
  },
  // Semantic colors
  semantic: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
};
```

**Usage Guidelines**:
- Primary forest green for headers, CTAs, and brand elements
- Charcoal black for body text
- White for backgrounds and contrast
- Gold accent sparingly for highlights and hover states
- Neutral grays for borders, secondary text, and backgrounds

### Typography

```typescript
const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
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
```

**Typography Scale**:
- H1: 4xl-6xl (responsive), extrabold, tight line-height
- H2: 3xl-5xl (responsive), bold, tight line-height
- H3: 2xl-3xl (responsive), semibold, normal line-height
- H4: xl-2xl (responsive), semibold, normal line-height
- Body: base-lg (responsive), normal weight, relaxed line-height
- Small: sm, normal weight, normal line-height

### Spacing System

```typescript
const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
};
```

**Section Spacing**:
- Mobile: py-12 (48px)
- Tablet: py-16 (64px)
- Desktop: py-24 (96px)

**Component Spacing**:
- Card padding: p-6 (24px) mobile, p-8 (32px) desktop
- Container padding: px-4 (16px) mobile, px-6 (24px) tablet, px-8 (32px) desktop
- Element gaps: gap-4 (16px) mobile, gap-6 (24px) desktop

### Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large desktop
};
```

**Responsive Strategy**:
- Base styles: Mobile portrait (< 640px)
- sm: Mobile landscape and small tablets
- md: Tablets
- lg: Desktop
- xl+: Large screens

### Border Radius

```typescript
const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',   // Fully rounded
};
```

### Shadows

```typescript
const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  none: 'none',
};
```

## Animation System

### Framer Motion Configuration

```typescript
const animationConfig = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
  },
  easing: {
    easeOut: [0.16, 1, 0.3, 1],
    easeInOut: [0.43, 0.13, 0.23, 0.96],
  },
  threshold: 0.1, // Intersection observer threshold
};
```

### Animation Variants

#### Fade In

```typescript
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
```

#### Slide In (from bottom)

```typescript
const slideInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

#### Stagger Children

```typescript
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
```

#### Counter Animation

```typescript
// Uses react-spring or custom hook
const useCounterAnimation = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      setCount(Math.floor(start + (end - start) * eased));
      
      if (progress === 1) {
        clearInterval(timer);
        setHasAnimated(true);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration, start, hasAnimated]);

  return count;
};
```

#### Hover Animations

```typescript
const hoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};
```

### Animation Guidelines

1. **Performance**: Use `transform` and `opacity` for animations (GPU-accelerated)
2. **Duration**: Keep animations under 800ms
3. **Easing**: Use ease-out for entrances, ease-in-out for interactions
4. **Reduced Motion**: Respect `prefers-reduced-motion` media query
5. **Viewport Triggers**: Use Intersection Observer for scroll-triggered animations
6. **Once**: Animations should trigger once, not on every scroll

### Reduced Motion Support

```typescript
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};
```

## SEO Implementation

### Metadata Generation

```typescript
// lib/metadata.ts
import { Metadata } from 'next';

interface PageMetadataConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata(config: PageMetadataConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bohloeki.com';
  const fullUrl = `${baseUrl}${config.path}`;
  const ogImage = config.ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: 'Bohloeki Enterprises',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
```

### Page-Specific Metadata

```typescript
// Example: app/about/page.tsx
export const metadata = generatePageMetadata({
  title: 'About Bohloeki | Sustainable Waste Management in Lesotho',
  description: 'Learn about Bohloeki Enterprises - turning waste into sustainable energy in Lesotho. Our mission, values, and commitment to environmental innovation.',
  path: '/about',
  keywords: ['waste management Lesotho', 'sustainable energy', 'tire recycling', 'industrial burner oil'],
});
```

### Structured Data (JSON-LD)

```typescript
// lib/structured-data.ts
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bohloeki Enterprises',
  description: 'Eco-friendly waste management and industrial burner oil producer in Lesotho',
  url: 'https://bohloeki.com',
  logo: 'https://bohloeki.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Company Address]',
    addressLocality: 'Maseru',
    addressCountry: 'LS',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '[Phone Number]',
    email: '[Email Address]',
    contactType: 'customer service',
  },
  sameAs: [
    // Social media URLs when available
  ],
};

// Include in root layout
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
```

### Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bohloeki.com';
  const pages = ['', '/about', '/services', '/operations', '/impact', '/partners', '/contact'];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }));
}
```

### Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bohloeki.com/sitemap.xml',
  };
}
```

## Form Handling

### Contact Form Implementation

```typescript
// components/sections/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validation';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Future: API route for form submission
      console.log('Form data:', data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      // Show success message
    } catch (error) {
      // Show error message
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Form fields implementation */}
    </form>
  );
}
```

### Validation Schema

```typescript
// lib/validation.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### Form Field Component

```typescript
interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  error?: string;
  required?: boolean;
  register: any;
  placeholder?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  error,
  required,
  register,
  placeholder,
}: FormFieldProps) {
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Component
        id={name}
        type={type !== 'textarea' ? type : undefined}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full px-4 py-2 border rounded-lg ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
```

## Responsive Layout Strategy

### Container System

```typescript
// components/ui/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const containerSizes = {
  sm: 'max-w-screen-sm',   // 640px
  md: 'max-w-screen-md',   // 768px
  lg: 'max-w-screen-lg',   // 1024px
  xl: 'max-w-screen-xl',   // 1280px
  full: 'max-w-full',
};

export function Container({ children, size = 'xl', className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerSizes[size]} ${className}`}>
      {children}
    </div>
  );
}
```

### Grid System

```typescript
// Responsive grid patterns
const gridPatterns = {
  // 1 column mobile, 2 tablet, 3 desktop
  '1-2-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  // 1 column mobile, 2 desktop
  '1-2': 'grid grid-cols-1 lg:grid-cols-2',
  // 1 column mobile, 3 desktop
  '1-3': 'grid grid-cols-1 lg:grid-cols-3',
  // 2 columns mobile, 4 desktop
  '2-4': 'grid grid-cols-2 lg:grid-cols-4',
};
```

### Responsive Typography

```typescript
// Tailwind classes for responsive text
const responsiveText = {
  hero: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
  h1: 'text-3xl sm:text-4xl lg:text-5xl',
  h2: 'text-2xl sm:text-3xl lg:text-4xl',
  h3: 'text-xl sm:text-2xl lg:text-3xl',
  h4: 'text-lg sm:text-xl lg:text-2xl',
  body: 'text-base lg:text-lg',
  small: 'text-sm lg:text-base',
};
```

### Mobile Menu Strategy

- Desktop (lg+): Horizontal navigation in header
- Mobile/Tablet (< lg): Hamburger menu icon
- Menu slides in from right with overlay
- Full-screen menu on mobile
- Close on route change
- Trap focus within menu when open
- Escape key closes menu

### Image Responsive Strategy

```typescript
// Next.js Image component usage
<Image
  src="/images/hero.jpg"
  alt="Waste management facility"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority={isAboveFold}
  className="object-cover"
/>
```


## File and Folder Organization

### Directory Structure

```
bohloeki-website/
├── .next/                      # Next.js build output (gitignored)
├── app/                        # App Router pages and layouts
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── operations/page.tsx
│   ├── impact/page.tsx
│   ├── partners/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts             # Sitemap generation
│   ├── robots.ts              # Robots.txt generation
│   └── globals.css            # Global styles
├── components/
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/              # Page section components
│   │   ├── Hero.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── ValueCards.tsx
│   │   ├── ImpactMetrics.tsx
│   │   └── ContactForm.tsx
│   ├── ui/                    # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── AnimatedCounter.tsx
│   └── animations/            # Animation wrappers
│       ├── FadeIn.tsx
│       └── SlideIn.tsx
├── lib/                       # Utility functions
│   ├── constants.ts           # App constants
│   ├── metadata.ts            # SEO metadata generators
│   ├── validation.ts          # Form validation schemas
│   └── utils.ts               # Helper functions
├── types/                     # TypeScript type definitions
│   ├── index.ts               # Shared types
│   └── forms.ts               # Form types
├── public/                    # Static assets
│   ├── images/                # Image assets
│   ├── icons/                 # SVG icons
│   └── favicon.ico
├── .gitignore
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json
└── README.md
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ContactForm.tsx`)
- **Utilities**: camelCase (e.g., `generateMetadata`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `NAVIGATION_LINKS`)
- **Types/Interfaces**: PascalCase (e.g., `ContactFormData`)
- **CSS Classes**: kebab-case via Tailwind utilities

### Import Organization

```typescript
// 1. External dependencies
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Internal components
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

// 3. Utilities and types
import { cn } from '@/lib/utils';
import type { ServiceDetail } from '@/types';

// 4. Styles (if any)
import styles from './Component.module.css';
```

## Integration Points for Future CMS

### Content Structure

The application is structured to support future CMS integration with minimal refactoring:

```typescript
// Current: Static data in constants
// lib/constants.ts
export const services: ServiceDetail[] = [
  {
    id: 'tire-collection',
    title: 'Waste Tire Collection & Recycling',
    // ...
  },
];

// Future: CMS data fetching
// lib/cms.ts
export async function getServices(): Promise<ServiceDetail[]> {
  const response = await fetch('https://cms.bohloeki.com/api/services');
  return response.json();
}

// Page component (minimal change)
// app/services/page.tsx
const services = await getServices(); // Just change data source
```

### CMS-Ready Data Models

All data models are defined as TypeScript interfaces that can be directly mapped to CMS schemas:

- `ServiceDetail` → CMS Service content type
- `ImpactData` → CMS Impact Metrics content type
- `CompanyInfo` → CMS Site Settings
- `PageMetadata` → CMS SEO fields

### Content Separation

- All content is separated from presentation logic
- Components accept data via props
- No hardcoded content in component files
- Content lives in `lib/constants.ts` for easy migration

### API Route Preparation

```typescript
// Future API routes for CMS
// app/api/services/route.ts
export async function GET() {
  const services = await cms.getServices();
  return Response.json(services);
}
```

## Error Handling

### Client-Side Error Boundaries

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
      </div>
    </div>
  );
}
```

### Form Error Handling

```typescript
// Validation errors (field-level)
{errors.email && (
  <p className="text-sm text-red-500">{errors.email.message}</p>
)}

// Submission errors (form-level)
{submitError && (
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
    <p className="text-red-800">{submitError}</p>
  </div>
)}

// Success feedback
{submitSuccess && (
  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
    <p className="text-green-800">Message sent successfully!</p>
  </div>
)}
```

### 404 Page

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: All routes render successfully with consistent layout

*For any* valid route in the application (/, /about, /services, /operations, /impact, /partners, /contact), navigating to that route should render the page component successfully without errors, and the rendered output should include both the Header and Footer components from the root layout.

**Validates: Requirements 1.3, 1.4, 1.5**

### Property 2: Responsive layout adapts without overflow

*For any* viewport width between 320px and 2560px, the website should render without horizontal scrollbars and all content should remain within the viewport bounds.

**Validates: Requirements 2.2, 2.4, 2.5**

### Property 3: Container max-width constraints

*For any* Container component in the application, it should have a max-width CSS property set (not using fixed pixel widths for the container itself), ensuring flexible responsive behavior.

**Validates: Requirements 2.3, 2.6**

### Property 4: Sticky header visibility

*For any* scroll position on any page, the Header component should remain visible in the viewport (position: sticky or fixed).

**Validates: Requirements 3.1**

### Property 5: Header background transition on scroll

*For any* page, when the scroll position changes from top (scrollY = 0) to scrolled (scrollY > 0), the Header component should transition from transparent background to solid background.

**Validates: Requirements 3.2**

### Property 6: Active navigation link highlighting

*For any* page route, the corresponding navigation link in the Header should have active styling (distinct visual indicator) to show the current page.

**Validates: Requirements 3.6**

### Property 7: Mobile menu interaction

*For any* viewport width below the mobile breakpoint (< 1024px), clicking the hamburger menu icon should toggle the mobile menu visibility state (closed → open or open → closed).

**Validates: Requirements 3.5**

### Property 8: Viewport-triggered animations

*For any* element with scroll-triggered animation (counters, fade-ins, progress bars, card entrances), when that element enters the viewport (intersection ratio > threshold), the animation should trigger exactly once.

**Validates: Requirements 4.3, 5.4, 7.5, 12.1, 12.3**

### Property 9: Animation duration constraint

*For any* animation in the Animation_System, the animation duration should not exceed 800 milliseconds.

**Validates: Requirements 12.4**

### Property 10: Hover transition smoothness

*For any* interactive element (buttons, cards, links), applying hover state should trigger a CSS transition with duration > 0 (smooth transition, not instant).

**Validates: Requirements 12.2**

### Property 11: Service section completeness

*For any* service displayed on the services page, the rendered output should contain an icon element, description text, benefits list, and environmental impact text.

**Validates: Requirements 6.4**

### Property 12: Form validation round-trip

*For any* form data submitted to the ContactForm, if the data passes Zod schema validation (contactFormSchema.parse succeeds), then the form should accept the submission without displaying validation errors. Conversely, if the data fails validation, field-specific error messages should be displayed.

**Validates: Requirements 10.2, 10.3, 10.6, 10.7**

### Property 13: Email format validation

*For any* string submitted in the email field, it should be validated against email format rules (contains @, valid domain structure), and invalid formats should be rejected with an error message.

**Validates: Requirements 10.6**

### Property 14: Required field validation

*For any* required field in the contact form (name, email, message), submitting the form with that field empty should prevent submission and display a field-specific error message.

**Validates: Requirements 10.7**

### Property 15: Page metadata completeness

*For any* page in the application, the rendered HTML should contain a unique title tag, meta description tag, and OpenGraph meta tags (og:title, og:description, og:url, og:image).

**Validates: Requirements 11.1, 11.2, 11.3**

### Property 16: Single H1 per page

*For any* page in the application, the rendered HTML should contain exactly one H1 element (not zero, not multiple).

**Validates: Requirements 11.5**

### Property 17: Semantic HTML structure

*For any* page in the application, the rendered HTML should use semantic elements (header, nav, main, section, article, footer) rather than generic div elements for major structural components.

**Validates: Requirements 11.6, 16.5**

### Property 18: Image component usage

*For any* image rendered in the application, it should use the Next.js Image component (next/image) rather than standard HTML img tags.

**Validates: Requirements 15.1**

### Property 19: Image lazy loading

*For any* image that is not above the fold (priority={false} or no priority prop), the Image component should have loading="lazy" behavior.

**Validates: Requirements 15.2**

### Property 20: Image alt text presence

*For any* Image component in the application, it should have a non-empty alt attribute for accessibility.

**Validates: Requirements 15.5**

### Property 21: Image responsive sizing

*For any* Image component in the application, it should have a sizes attribute defined to enable responsive image loading.

**Validates: Requirements 15.3**

### Property 22: Interactive element keyboard accessibility

*For any* interactive element (buttons, links, form inputs, menu triggers), it should be keyboard accessible (focusable via Tab key and activatable via Enter or Space).

**Validates: Requirements 16.3**

### Property 23: Focus indicator visibility

*For any* focusable element, when it receives keyboard focus, it should display a visible focus indicator (outline or custom focus styling with sufficient contrast).

**Validates: Requirements 16.4**

### Property 24: Interactive element ARIA labels

*For any* interactive element that lacks visible text content (icon buttons, hamburger menu), it should have an aria-label or aria-labelledby attribute.

**Validates: Requirements 16.1**

### Property 25: Text alternative for non-text content

*For any* non-text content (images, icons, decorative elements), there should be a text alternative (alt text, aria-label, or aria-hidden="true" for decorative content).

**Validates: Requirements 16.6**

### Property 26: Color contrast compliance

*For any* body text on the website, the color contrast ratio between text and background should be at least 4.5:1 to meet WCAG AA standards.

**Validates: Requirements 16.2**

### Property 27: Component props type safety

*For any* React component in the codebase, its props should be defined with a TypeScript interface or type, and the component should be typed with that props type.

**Validates: Requirements 14.1, 14.3, 17.2**

### Property 28: Data structure type definitions

*For any* data structure used in the application (company info, services, metrics, form data), it should have a corresponding TypeScript interface or type definition.

**Validates: Requirements 17.3**

### Property 29: TypeScript compilation success

*For any* state of the codebase, running the TypeScript compiler (tsc --noEmit) should produce zero type errors.

**Validates: Requirements 17.5**

### Property 30: Footer presence on all pages

*For any* page in the application, the rendered output should include the Footer component.

**Validates: Requirements 19.1**

### Property 31: Link prefetching

*For any* internal navigation link in the application, it should use the Next.js Link component to enable automatic prefetching of linked pages.

**Validates: Requirements 18.5**

## Testing Strategy

### Dual Testing Approach

The testing strategy employs both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit Tests**: Verify specific examples, edge cases, error conditions, and integration points
- **Property Tests**: Verify universal properties across all inputs through randomization

Both approaches are complementary and necessary. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across a wide input space.

### Unit Testing

**Framework**: Jest + React Testing Library

**Focus Areas**:
- Specific page content rendering (Requirements 4.1, 4.2, 5.1, 6.1-6.3, 7.1-7.4, 8.1-8.6, 9.1-9.5, 10.1, 10.4, 10.5, 19.2-19.5, 20.1, 20.4)
- Component integration points
- Edge cases (empty states, error states)
- Accessibility compliance (specific ARIA attributes, semantic HTML)
- Responsive breakpoint behavior (Requirements 3.3, 3.4)
- Design system implementation (Requirements 13.1, 13.4, 13.6)
- File structure and organization (Requirements 14.2, 14.4, 14.5, 17.1, 17.4, 18.1, 18.2, 18.4)

**Example Unit Tests**:
```typescript
describe('Home Page', () => {
  it('displays hero headline "Turning Waste Into Sustainable Energy"', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Turning Waste Into Sustainable Energy'
    );
  });

  it('displays production statistics', () => {
    render(<HomePage />);
    expect(screen.getByText(/24,000 liters/i)).toBeInTheDocument();
    expect(screen.getByText(/60 suppliers/i)).toBeInTheDocument();
    expect(screen.getByText(/100,000L/i)).toBeInTheDocument();
  });
});

describe('Navigation', () => {
  it('displays horizontal menu on desktop viewport', () => {
    global.innerWidth = 1024;
    render(<Header />);
    expect(screen.getByRole('navigation')).toHaveClass('desktop-nav');
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
  });

  it('displays hamburger menu on mobile viewport', () => {
    global.innerWidth = 375;
    render(<Header />);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});

describe('Design System', () => {
  it('defines forest green primary color', () => {
    const colors = require('@/lib/constants').colors;
    expect(colors.primary.forest).toBe('#1B4332');
  });

  it('implements design tokens for spacing', () => {
    const spacing = require('@/lib/constants').spacing;
    expect(spacing).toHaveProperty('4', '1rem');
    expect(spacing).toHaveProperty('8', '2rem');
  });
});
```

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**: Minimum 100 iterations per property test

**Tag Format**: Each property test must include a comment referencing the design property:
```typescript
// Feature: bohloeki-corporate-website, Property 1: All routes render successfully with consistent layout
```

**Focus Areas**:
- Route rendering across all pages (Property 1)
- Responsive behavior across viewport widths (Properties 2, 3)
- Animation triggers and constraints (Properties 8, 9, 10)
- Form validation with various inputs (Properties 12, 13, 14)
- Metadata generation for all pages (Property 15)
- Image optimization properties (Properties 18-21)
- Accessibility across all interactive elements (Properties 22-26)
- Type safety across all components (Properties 27-29)

**Example Property Tests**:
```typescript
import fc from 'fast-check';

// Feature: bohloeki-corporate-website, Property 1: All routes render successfully with consistent layout
describe('Property 1: Route rendering', () => {
  const routes = ['/', '/about', '/services', '/operations', '/impact', '/partners', '/contact'];
  
  it('all routes render with header and footer', () => {
    fc.assert(
      fc.property(fc.constantFrom(...routes), (route) => {
        const { container } = render(<App initialRoute={route} />);
        const header = container.querySelector('header');
        const footer = container.querySelector('footer');
        expect(header).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: bohloeki-corporate-website, Property 2: Responsive layout adapts without overflow
describe('Property 2: Responsive overflow', () => {
  it('no horizontal overflow at any viewport width', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        fc.constantFrom('/', '/about', '/services', '/operations', '/impact', '/partners', '/contact'),
        (viewportWidth, route) => {
          global.innerWidth = viewportWidth;
          const { container } = render(<App initialRoute={route} />);
          const bodyWidth = document.body.scrollWidth;
          const viewportWidthActual = window.innerWidth;
          expect(bodyWidth).toBeLessThanOrEqual(viewportWidthActual);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: bohloeki-corporate-website, Property 12: Form validation round-trip
describe('Property 12: Form validation', () => {
  it('valid data passes validation, invalid data shows errors', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 2, maxLength: 100 }),
          email: fc.emailAddress(),
          phone: fc.option(fc.string(), { nil: '' }),
          company: fc.option(fc.string(), { nil: '' }),
          message: fc.string({ minLength: 10, maxLength: 1000 }),
        }),
        (validData) => {
          const { getByLabelText, getByRole, queryByRole } = render(<ContactForm />);
          
          // Fill form with valid data
          fireEvent.change(getByLabelText(/name/i), { target: { value: validData.name } });
          fireEvent.change(getByLabelText(/email/i), { target: { value: validData.email } });
          fireEvent.change(getByLabelText(/message/i), { target: { value: validData.message } });
          
          // Submit form
          fireEvent.click(getByRole('button', { name: /submit/i }));
          
          // Should not show validation errors
          expect(queryByRole('alert')).not.toBeInTheDocument();
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: bohloeki-corporate-website, Property 15: Page metadata completeness
describe('Property 15: Metadata completeness', () => {
  const routes = ['/', '/about', '/services', '/operations', '/impact', '/partners', '/contact'];
  
  it('all pages have complete metadata', () => {
    fc.assert(
      fc.property(fc.constantFrom(...routes), (route) => {
        const { container } = render(<App initialRoute={route} />);
        const head = document.head;
        
        expect(head.querySelector('title')).toBeInTheDocument();
        expect(head.querySelector('meta[name="description"]')).toBeInTheDocument();
        expect(head.querySelector('meta[property="og:title"]')).toBeInTheDocument();
        expect(head.querySelector('meta[property="og:description"]')).toBeInTheDocument();
        expect(head.querySelector('meta[property="og:url"]')).toBeInTheDocument();
        expect(head.querySelector('meta[property="og:image"]')).toBeInTheDocument();
      }),
      { numRuns: 100 }
    );
  });
});

// Feature: bohloeki-corporate-website, Property 20: Image alt text presence
describe('Property 20: Image alt text', () => {
  it('all images have non-empty alt text', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('/', '/about', '/services', '/operations', '/impact', '/partners', '/contact'),
        (route) => {
          const { container } = render(<App initialRoute={route} />);
          const images = container.querySelectorAll('img');
          
          images.forEach((img) => {
            const alt = img.getAttribute('alt');
            expect(alt).toBeTruthy();
            expect(alt.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Feature: bohloeki-corporate-website, Property 27: Component props type safety
describe('Property 27: Props type safety', () => {
  it('all components have typed props', () => {
    // This is a compile-time check, but we can verify at runtime
    const components = [Button, Card, Container, Section, Hero, StatsSection];
    
    components.forEach((Component) => {
      // TypeScript will catch missing props at compile time
      // This test verifies the types are enforced
      expect(() => {
        // @ts-expect-error - Testing that invalid props are caught
        render(<Component invalidProp="test" />);
      }).toThrow();
    });
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: 80%+ for component logic and utilities
- **Property Test Coverage**: All 31 correctness properties implemented
- **Integration Coverage**: All page routes and navigation flows
- **Accessibility Coverage**: All WCAG 2.1 AA criteria

### Continuous Integration

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run type-check  # TypeScript compilation
      - run: npm run lint        # ESLint
      - run: npm test            # Jest unit + property tests
      - run: npm run test:a11y   # Accessibility tests
```

## Performance Targets

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

**Optimization Strategies**:
- Static generation for all pages
- Image optimization with Next.js Image
- Code splitting by route
- Font optimization with next/font
- Minimal JavaScript bundle size
- CSS optimization with Tailwind purging

## Deployment Configuration

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://bohloeki.com
NEXT_PUBLIC_SITE_NAME=Bohloeki Enterprises
NEXT_PUBLIC_CONTACT_EMAIL=info@bohloeki.com
NEXT_PUBLIC_CONTACT_PHONE=+266-XXXX-XXXX
```

### Build Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for hosting
  images: {
    unoptimized: true, // For static export
    // Or use image optimization service
    domains: ['bohloeki.com'],
  },
  // Enable strict mode
  reactStrictMode: true,
  // Optimize production build
  swcMinify: true,
};

module.exports = nextConfig;
```

### Vercel Deployment

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Accessibility Compliance

### WCAG 2.1 AA Requirements

1. **Perceivable**
   - Text alternatives for non-text content (Property 25)
   - Color contrast minimum 4.5:1 (Property 26)
   - Responsive and zoomable text
   - Semantic HTML structure (Property 17)

2. **Operable**
   - Keyboard accessible (Property 22)
   - Visible focus indicators (Property 23)
   - No keyboard traps
   - Skip to main content link

3. **Understandable**
   - Consistent navigation across pages
   - Clear form labels and error messages
   - Predictable behavior

4. **Robust**
   - Valid HTML
   - ARIA labels where needed (Property 24)
   - Compatible with assistive technologies

### Accessibility Testing Tools

- **Automated**: axe-core, Lighthouse
- **Manual**: Keyboard navigation testing, screen reader testing (NVDA, JAWS, VoiceOver)
- **CI Integration**: axe-playwright for automated accessibility testing

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile (last 2 versions)
- **Progressive Enhancement**: Core content accessible without JavaScript
- **Graceful Degradation**: Animations disabled for users with prefers-reduced-motion

## Security Considerations

1. **Content Security Policy**: Restrict script sources
2. **HTTPS Only**: Enforce secure connections
3. **Form Validation**: Client and server-side validation
4. **XSS Prevention**: React's built-in escaping
5. **Dependency Security**: Regular npm audit and updates

## Maintenance and Scalability

### Code Quality

- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier with consistent rules
- **Type Checking**: Strict TypeScript mode
- **Pre-commit Hooks**: Husky + lint-staged

### Documentation

- **Component Documentation**: JSDoc comments for all public APIs
- **README**: Setup instructions, development workflow
- **Storybook** (Optional): Component library documentation

### Scalability Considerations

- **Component Reusability**: All UI primitives are reusable
- **Type Safety**: Prevents runtime errors as codebase grows
- **CMS Integration**: Architecture supports future CMS
- **Performance**: Static generation scales infinitely
- **Internationalization**: Structure supports future i18n

---

## Summary

This design document specifies a production-ready Next.js 14+ application for Bohloeki Enterprises with:

- **7 static pages** with consistent layout and navigation
- **Responsive design** from mobile to desktop
- **Comprehensive animation system** using Framer Motion
- **SEO optimization** with metadata and structured data
- **Accessibility compliance** meeting WCAG 2.1 AA standards
- **Type-safe architecture** with TypeScript throughout
- **Performance optimization** with static generation and image optimization
- **31 correctness properties** for comprehensive testing
- **CMS-ready structure** for future content management integration

The architecture prioritizes maintainability, performance, and user experience while providing a solid foundation for future enhancements.
