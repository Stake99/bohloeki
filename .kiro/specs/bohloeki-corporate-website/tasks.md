# Implementation Plan: Bohloeki Corporate Website

## Overview

This implementation plan breaks down the Bohloeki Enterprises corporate website into actionable development tasks. The website is a production-ready, multi-page Next.js 14+ application with TypeScript, Tailwind CSS, and Framer Motion animations. The implementation follows a bottom-up approach: design system → UI primitives → animations → layout components → section components → pages → SEO → testing.

## Tasks

- [x] 1. Project setup and configuration
  - Initialize Next.js 14+ project with TypeScript and App Router
  - Configure Tailwind CSS with custom design tokens
  - Install dependencies: framer-motion, react-hook-form, zod, @hookform/resolvers
  - Set up TypeScript strict mode configuration
  - Create directory structure (components/, lib/, types/, public/)
  - Configure ESLint and Prettier
  - _Requirements: 17.4, 17.5_

- [x] 2. Design system implementation
  - [x] 2.1 Create design tokens in Tailwind config
    - Define color palette (forest green, charcoal, gold accent, grays)
    - Define typography scale (font sizes, weights, line heights)
    - Define spacing system (0-32 scale)
    - Define breakpoints (sm, md, lg, xl, 2xl)
    - Define border radius and shadow tokens
    - _Requirements: 13.1, 13.2, 13.3, 13.6_

  - [x] 2.2 Create global styles file
    - Import Tailwind directives
    - Define CSS custom properties for colors
    - Set up base typography styles
    - Configure font loading (Inter font family)
    - _Requirements: 13.2, 13.4_

  - [x] 2.3 Create constants file for app-wide data
    - Define navigation links array
    - Define company information object
    - Define production metrics
    - Define color constants matching design tokens
    - _Requirements: 14.4, 20.4_


- [x] 3. TypeScript type definitions
  - [x] 3.1 Create shared types in types/index.ts
    - Define NavLink interface
    - Define CompanyInfo interface
    - Define ProductionMetrics interface
    - Define ServiceDetail interface
    - Define ImpactData interface
    - Define PageMetadata interface
    - _Requirements: 17.2, 17.3_

  - [x] 3.2 Create form types in types/forms.ts
    - Define ContactFormData interface
    - Define form field props interfaces
    - _Requirements: 17.2, 17.3_

- [x] 4. Core UI primitive components
  - [x] 4.1 Create Button component
    - Implement ButtonProps interface with variant, size, isLoading, icons
    - Implement variant styles (primary, secondary, outline, ghost)
    - Implement size variants (sm, md, lg)
    - Add loading state with spinner
    - Add hover animations
    - _Requirements: 14.1, 14.3, 27.1_

  - [ ]* 4.2 Write property test for Button component
    - **Property 27: Component props type safety**
    - **Validates: Requirements 14.3, 17.2**

  - [x] 4.3 Create Card component
    - Implement CardProps interface with variant, padding, hoverable
    - Implement variant styles (default, elevated, outlined)
    - Implement padding options (none, sm, md, lg)
    - Add hover effects for hoverable cards
    - _Requirements: 14.1, 14.3_

  - [x] 4.4 Create Container component
    - Implement ContainerProps interface with size options
    - Implement max-width constraints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
    - Add responsive padding (px-4 mobile, px-6 tablet, px-8 desktop)
    - _Requirements: 2.3, 2.6, 14.1_

  - [ ]* 4.5 Write property test for Container component
    - **Property 3: Container max-width constraints**
    - **Validates: Requirements 2.3, 2.6**

  - [x] 4.6 Create Section component
    - Implement SectionProps interface with background and spacing options
    - Implement background variants (white, gray, dark, gradient)
    - Implement spacing scale (sm: 2rem, md: 4rem, lg: 6rem, xl: 8rem)
    - Add responsive padding (py-12 mobile, py-16 tablet, py-24 desktop)
    - _Requirements: 13.3, 14.1_

  - [x] 4.7 Create AnimatedCounter component
    - Implement AnimatedCounterProps interface
    - Implement counter animation from 0 to target value
    - Add easing function for smooth motion
    - Add prefix/suffix support
    - Add decimal support
    - Implement viewport trigger using Intersection Observer
    - Add ARIA live region for screen reader announcement
    - _Requirements: 12.3, 16.1_

  - [ ]* 4.8 Write property test for AnimatedCounter
    - **Property 8: Viewport-triggered animations**
    - **Validates: Requirements 4.3, 12.1, 12.3**


- [x] 5. Animation components
  - [x] 5.1 Create FadeIn component
    - Implement FadeInProps interface with delay, duration, threshold
    - Implement Intersection Observer hook
    - Define fade-in animation variants (hidden/visible)
    - Trigger animation once on viewport entry
    - Add reduced motion support
    - _Requirements: 12.1, 12.4_

  - [x] 5.2 Create SlideIn component
    - Implement SlideInProps interface
    - Define slide-in animation variants (opacity + y transform)
    - Implement viewport trigger with Intersection Observer
    - Add configurable direction support
    - Add reduced motion support
    - _Requirements: 12.1, 12.4_

  - [ ]* 5.3 Write property test for animation duration
    - **Property 9: Animation duration constraint**
    - **Validates: Requirements 12.4**

  - [ ]* 5.4 Write property test for hover transitions
    - **Property 10: Hover transition smoothness**
    - **Validates: Requirements 12.2**

- [x] 6. Form validation and utilities
  - [x] 6.1 Create validation schemas in lib/validation.ts
    - Define contactFormSchema with Zod
    - Add name validation (min 2, max 100 characters)
    - Add email validation (email format)
    - Add phone validation (optional, regex pattern)
    - Add company validation (optional, max 100 characters)
    - Add message validation (min 10, max 1000 characters)
    - Export ContactFormData type from schema
    - _Requirements: 10.2, 10.6, 10.7_

  - [ ]* 6.2 Write property test for form validation
    - **Property 12: Form validation round-trip**
    - **Validates: Requirements 10.2, 10.3, 10.6, 10.7**

  - [ ]* 6.3 Write property test for email validation
    - **Property 13: Email format validation**
    - **Validates: Requirements 10.6**

  - [ ]* 6.4 Write property test for required fields
    - **Property 14: Required field validation**
    - **Validates: Requirements 10.7**

  - [x] 6.5 Create metadata utilities in lib/metadata.ts
    - Define PageMetadataConfig interface
    - Implement generatePageMetadata function
    - Generate title, description, OpenGraph tags
    - Generate Twitter card tags
    - Generate canonical URL
    - Add environment variable for base URL
    - _Requirements: 11.1, 11.2, 11.3_

  - [ ]* 6.6 Write property test for metadata completeness
    - **Property 15: Page metadata completeness**
    - **Validates: Requirements 11.1, 11.2, 11.3**

  - [x] 6.7 Create structured data in lib/structured-data.ts
    - Define organizationSchema JSON-LD object
    - Create StructuredData component
    - Include organization name, description, URL, logo
    - Include address and contact point
    - _Requirements: 11.4_

  - [x] 6.8 Create utility functions in lib/utils.ts
    - Implement cn() function for className merging
    - Implement formatNumber() for number formatting
    - Implement useReducedMotion() hook
    - _Requirements: 12.6_


- [x] 7. Layout components
  - [x] 7.1 Create Header component
    - Implement HeaderProps interface
    - Add sticky positioning with backdrop blur
    - Implement scroll detection for background transition
    - Add desktop horizontal navigation
    - Add mobile hamburger menu icon
    - Implement active link highlighting based on current route
    - Add ARIA labels for navigation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.6, 16.1_

  - [ ]* 7.2 Write property test for sticky header
    - **Property 4: Sticky header visibility**
    - **Validates: Requirements 3.1**

  - [ ]* 7.3 Write property test for header background transition
    - **Property 5: Header background transition on scroll**
    - **Validates: Requirements 3.2**

  - [ ]* 7.4 Write property test for active link highlighting
    - **Property 6: Active navigation link highlighting**
    - **Validates: Requirements 3.6**

  - [x] 7.5 Create MobileMenu component
    - Implement MobileMenuProps interface with isOpen, onClose, links
    - Add slide-in animation from right using Framer Motion
    - Implement full-screen overlay
    - Add close on link click
    - Add close on outside click
    - Add close on Escape key
    - Implement focus trap when open
    - Add ARIA attributes for accessibility
    - _Requirements: 3.5, 16.3_

  - [ ]* 7.6 Write property test for mobile menu interaction
    - **Property 7: Mobile menu interaction**
    - **Validates: Requirements 3.5**

  - [x] 7.7 Create Footer component
    - Implement FooterProps interface
    - Add company address, phone, email
    - Add quick navigation links
    - Add mission statement/tagline
    - Add copyright notice with dynamic year
    - Add semantic footer element
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5_

  - [ ]* 7.8 Write property test for footer presence
    - **Property 30: Footer presence on all pages**
    - **Validates: Requirements 19.1**

- [x] 8. Checkpoint - Core components complete
  - Ensure all tests pass, ask the user if questions arise.


- [x] 9. Section components
  - [x] 9.1 Create Hero component
    - Implement HeroProps interface with headline, subheadline, CTA
    - Add full viewport height option
    - Add background image with overlay support
    - Implement centered content with max-width
    - Add FadeIn animation for entrance
    - Implement responsive typography scaling
    - _Requirements: 4.1, 13.4_

  - [x] 9.2 Create StatsSection component
    - Implement Stat and StatsSectionProps interfaces
    - Add grid layout (1-2-3 columns responsive)
    - Integrate AnimatedCounter for stat values
    - Add icon support for each stat
    - Implement accessible number formatting
    - Add FadeIn animations with stagger
    - _Requirements: 4.2, 4.3, 12.3_

  - [x] 9.3 Create ServicesOverview component
    - Implement Service and ServicesOverviewProps interfaces
    - Add card-based grid layout
    - Implement hover animations on cards
    - Add icon integration
    - Add benefits list display
    - Add environmental impact text
    - Support grid and list variants
    - _Requirements: 4.4, 6.4_

  - [ ]* 9.4 Write property test for service section completeness
    - **Property 11: Service section completeness**
    - **Validates: Requirements 6.4**

  - [x] 9.5 Create ValueCards component
    - Implement Value and ValueCardsProps interfaces
    - Add responsive grid layout
    - Implement staggered entrance animations
    - Add icon support
    - Add hover effects
    - _Requirements: 5.4_

  - [x] 9.6 Create ImpactMetrics component
    - Implement ImpactMetric and ImpactMetricsProps interfaces
    - Add category-based grouping (environmental, social, economic)
    - Implement visual hierarchy
    - Add animated progress bars for percentages
    - Add category icons
    - _Requirements: 7.5, 8.1, 8.2, 8.3, 8.4, 8.6_

  - [x] 9.7 Create ContactForm component
    - Implement ContactFormProps interface
    - Integrate React Hook Form with Zod resolver
    - Create FormField component for reusable form inputs
    - Add field-level error display
    - Add loading state during submission
    - Add success/error feedback messages
    - Implement accessible form labels and ARIA attributes
    - Add form submission handler (console.log for now)
    - _Requirements: 10.1, 10.2, 10.3, 10.6, 10.7, 16.1_


- [x] 10. Root layout and error pages
  - [x] 10.1 Create root layout (app/layout.tsx)
    - Import global styles
    - Configure Inter font with next/font
    - Add HTML lang attribute
    - Include StructuredData component in head
    - Render Header, children, and Footer
    - Add metadata configuration
    - _Requirements: 1.4, 1.5, 11.4, 11.6_

  - [ ]* 10.2 Write property test for semantic HTML structure
    - **Property 17: Semantic HTML structure**
    - **Validates: Requirements 11.6, 16.5**

  - [x] 10.3 Create error boundary (app/error.tsx)
    - Implement client-side error boundary
    - Add error display with reset button
    - Add user-friendly error message
    - _Requirements: N/A (best practice)_

  - [x] 10.4 Create 404 page (app/not-found.tsx)
    - Add 404 heading and message
    - Add "Return Home" link
    - Style with centered layout
    - _Requirements: N/A (best practice)_

- [x] 11. Home page implementation
  - [x] 11.1 Create home page (app/page.tsx)
    - Generate page metadata with title and description
    - Add Hero section with "Turning Waste Into Sustainable Energy" headline
    - Add StatsSection with production statistics (24,000L, 60 suppliers, 100,000L projection)
    - Add ServicesOverview section with core services
    - Add sustainability commitment section
    - Add CTA section for partner inquiries
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 11.5_

  - [ ]* 11.2 Write property test for single H1
    - **Property 16: Single H1 per page**
    - **Validates: Requirements 11.5**

- [x] 12. About page implementation
  - [x] 12.1 Create about page (app/about/page.tsx)
    - Generate page metadata
    - Add company story section with "Bohloeki" meaning (Purity in Sesotho)
    - Add mission, vision, and values section
    - Add ValueCards component with job creation, innovation, economic development
    - Add leadership profile section for Temoho Khatleli
    - Add company growth timeline
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 5.1, 5.2, 5.3, 5.4, 11.5_

- [x] 13. Services page implementation
  - [x] 13.1 Create services page (app/services/page.tsx)
    - Generate page metadata
    - Add detailed section for waste tire collection and recycling
    - Add detailed section for industrial burner oil production
    - Add detailed section for liquid waste disposal (engine oil, hydraulic oil, contaminated diesel, gear oil, petroleum products)
    - Use ServicesOverview component with full service details
    - Include icons, descriptions, benefits, and environmental impact for each service
    - Organize in visually distinct card layouts
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5, 11.5_


- [x] 14. Operations page implementation
  - [x] 14.1 Create operations page (app/operations/page.tsx)
    - Generate page metadata
    - Add current production metrics section (24,000 liters/month)
    - Add projected production section (100,000 liters)
    - Add supplier network overview (60 suppliers in Maseru)
    - Add countrywide expansion plan section
    - Add animated progress bars for growth metrics
    - Visualize operational data in clean metrics sections
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 11.5_

- [x] 15. Impact page implementation
  - [x] 15.1 Create impact page (app/impact/page.tsx)
    - Generate page metadata
    - Add ImpactMetrics component with environmental metrics
    - Add waste reduction achievements section
    - Add job creation statistics section
    - Add community empowerment initiatives section
    - Add local sourcing advocacy messaging
    - Organize impact data in statistic cards with visual hierarchy
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 11.5_

- [x] 16. Partners page implementation
  - [x] 16.1 Create partners page (app/partners/page.tsx)
    - Generate page metadata
    - Add current supplier base section (60 suppliers in Maseru)
    - Add expansion strategy section
    - Add partnership benefits section
    - Add CTA for new supplier inquiries
    - Organize partnership information in clean card layouts
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 9.1, 9.2, 9.3, 9.4, 9.5, 11.5_

- [x] 17. Contact page implementation
  - [x] 17.1 Create contact page (app/contact/page.tsx)
    - Generate page metadata
    - Add ContactForm component
    - Add company contact information section (phone, address, business hours)
    - Add map placeholder for location visualization
    - Ensure single H1 element
    - _Requirements: 1.1, 1.2, 1.3, 10.1, 10.4, 10.5, 11.5_

- [x] 18. Checkpoint - All pages complete
  - Ensure all tests pass, ask the user if questions arise.


- [x] 19. SEO implementation
  - [x] 19.1 Create sitemap (app/sitemap.ts)
    - Define all page routes (/, /about, /services, /operations, /impact, /partners, /contact)
    - Set lastModified to current date
    - Set changeFrequency to monthly
    - Set priority (1 for home, 0.8 for others)
    - _Requirements: 11.1_

  - [x] 19.2 Create robots.txt (app/robots.ts)
    - Allow all user agents
    - Include sitemap URL
    - _Requirements: 11.1_

  - [x] 19.3 Add page-specific metadata to all pages
    - Verify each page has unique title
    - Verify each page has unique description
    - Verify each page has OpenGraph tags
    - Verify each page has Twitter card tags
    - Verify each page has canonical URL
    - _Requirements: 11.1, 11.2, 11.3_

- [x] 20. Image optimization setup
  - [x] 20.1 Create placeholder images in public/images/
    - Add hero background image
    - Add service icons
    - Add team photos
    - Add impact visuals
    - Add company logo
    - _Requirements: 15.1_

  - [x] 20.2 Implement Next.js Image components across all pages
    - Replace any img tags with Next.js Image
    - Add width and height props
    - Add sizes attribute for responsive loading
    - Add priority prop for above-fold images
    - Add alt text for all images
    - _Requirements: 15.1, 15.2, 15.3, 15.5_

  - [ ]* 20.3 Write property test for Image component usage
    - **Property 18: Image component usage**
    - **Validates: Requirements 15.1**

  - [ ]* 20.4 Write property test for image lazy loading
    - **Property 19: Image lazy loading**
    - **Validates: Requirements 15.2**

  - [ ]* 20.5 Write property test for image alt text
    - **Property 20: Image alt text presence**
    - **Validates: Requirements 15.5**

  - [ ]* 20.6 Write property test for image responsive sizing
    - **Property 21: Image responsive sizing**
    - **Validates: Requirements 15.3**


- [x] 21. Accessibility implementation
  - [x] 21.1 Add ARIA labels to interactive elements
    - Add aria-label to hamburger menu button
    - Add aria-label to icon-only buttons
    - Add aria-labelledby to form sections
    - Add aria-describedby to form fields with errors
    - Add aria-live regions for dynamic content
    - _Requirements: 16.1_

  - [ ]* 21.2 Write property test for ARIA labels
    - **Property 24: Interactive element ARIA labels**
    - **Validates: Requirements 16.1**

  - [ ]* 21.3 Write property test for text alternatives
    - **Property 25: Text alternative for non-text content**
    - **Validates: Requirements 16.6**

  - [x] 21.2 Implement keyboard navigation
    - Ensure all interactive elements are focusable
    - Add focus trap to mobile menu
    - Add Escape key handler for mobile menu
    - Test Tab navigation flow
    - _Requirements: 16.3_

  - [ ]* 21.4 Write property test for keyboard accessibility
    - **Property 22: Interactive element keyboard accessibility**
    - **Validates: Requirements 16.3**

  - [x] 21.3 Add visible focus indicators
    - Define focus ring styles in global CSS
    - Apply focus-visible styles to all interactive elements
    - Ensure sufficient contrast for focus indicators
    - _Requirements: 16.4_

  - [ ]* 21.5 Write property test for focus indicators
    - **Property 23: Focus indicator visibility**
    - **Validates: Requirements 16.4**

  - [x] 21.4 Verify color contrast compliance
    - Check body text contrast (4.5:1 minimum)
    - Check heading contrast
    - Check button text contrast
    - Adjust colors if needed to meet WCAG AA
    - _Requirements: 16.2_

  - [ ]* 21.6 Write property test for color contrast
    - **Property 26: Color contrast compliance**
    - **Validates: Requirements 16.2**


- [x] 22. Responsive design testing and refinement
  - [x] 22.1 Test and refine mobile layouts (320px - 640px)
    - Verify all pages render without overflow
    - Check typography scaling
    - Verify touch target sizes (minimum 44x44px)
    - Test mobile menu functionality
    - _Requirements: 2.1, 2.2, 2.4, 2.5_

  - [x] 22.2 Test and refine tablet layouts (641px - 1023px)
    - Verify grid layouts adapt correctly
    - Check spacing and padding
    - Test navigation behavior
    - _Requirements: 2.1, 2.2, 2.4, 2.5_

  - [x] 22.3 Test and refine desktop layouts (1024px+)
    - Verify max-width containers
    - Check horizontal navigation
    - Test hover states
    - Verify content doesn't stretch too wide
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [ ]* 22.4 Write property test for responsive overflow
    - **Property 2: Responsive layout adapts without overflow**
    - **Validates: Requirements 2.2, 2.4, 2.5**

- [x] 23. Route rendering and navigation testing
  - [x]* 23.1 Write property test for route rendering
    - **Property 1: All routes render successfully with consistent layout**
    - **Validates: Requirements 1.3, 1.4, 1.5**

  - [x]* 23.2 Write property test for link prefetching
    - **Property 31: Link prefetching**
    - **Validates: Requirements 18.5**

- [x] 24. TypeScript type safety verification
  - [ ]* 24.1 Write property test for component props type safety
    - **Property 27: Component props type safety**
    - **Validates: Requirements 14.1, 14.3, 17.2**

  - [ ]* 24.2 Write property test for data structure types
    - **Property 28: Data structure type definitions**
    - **Validates: Requirements 17.3**

  - [x] 24.3 Run TypeScript compiler check
    - Run `tsc --noEmit` to verify zero type errors
    - Fix any type errors found
    - _Requirements: 17.5_

  - [ ]* 24.4 Write property test for TypeScript compilation
    - **Property 29: TypeScript compilation success**
    - **Validates: Requirements 17.5**


- [x] 25. Unit testing implementation
  - [x] 25.1 Set up testing framework
    - Install Jest and React Testing Library
    - Configure Jest for Next.js
    - Create jest.config.js
    - Create test setup file
    - _Requirements: N/A (testing infrastructure)_

  - [x] 25.2 Write unit tests for Home page content
    - Test hero headline "Turning Waste Into Sustainable Energy"
    - Test production statistics display (24,000L, 60 suppliers, 100,000L)
    - Test services overview section presence
    - Test CTA section presence
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 25.3 Write unit tests for About page content
    - Test company story section
    - Test "Bohloeki" meaning display
    - Test mission, vision, values sections
    - Test leadership profile display
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 25.4 Write unit tests for Services page content
    - Test waste tire collection section
    - Test industrial burner oil section
    - Test liquid waste disposal section
    - Test service details completeness
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 25.5 Write unit tests for Operations page content
    - Test current production display (24,000L)
    - Test projected production display (100,000L)
    - Test supplier network section
    - Test expansion plan section
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [x] 25.6 Write unit tests for Impact page content
    - Test environmental metrics display
    - Test waste reduction section
    - Test job creation statistics
    - Test community empowerment section
    - Test local sourcing messaging
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 25.7 Write unit tests for Partners page content
    - Test supplier base information (60 suppliers)
    - Test expansion strategy section
    - Test partnership benefits section
    - Test CTA for supplier inquiries
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 25.8 Write unit tests for Contact page content
    - Test contact form presence
    - Test company information display (phone, address, hours)
    - Test map placeholder presence
    - _Requirements: 10.1, 10.4, 10.5_

  - [x] 25.9 Write unit tests for Footer content
    - Test company address display
    - Test phone and email display
    - Test quick navigation links
    - Test mission statement/tagline
    - Test copyright notice with current year
    - _Requirements: 19.2, 19.3, 19.4, 19.5_

  - [x] 25.10 Write unit tests for Navigation behavior
    - Test horizontal menu on desktop viewport (>= 1024px)
    - Test hamburger menu on mobile viewport (< 1024px)
    - Test mobile menu open/close functionality
    - _Requirements: 3.3, 3.4_

  - [x] 25.11 Write unit tests for Design System
    - Test forest green primary color definition (#1B4332)
    - Test spacing tokens (4: 1rem, 8: 2rem, etc.)
    - Test typography scale
    - Test design token consistency
    - _Requirements: 13.1, 13.6_


- [x] 26. Performance optimization
  - [x] 26.1 Configure static generation for all pages
    - Verify all pages use static generation (no getServerSideProps)
    - Add generateStaticParams if needed
    - _Requirements: 18.4_

  - [x] 26.2 Optimize JavaScript bundle
    - Run build and analyze bundle size
    - Verify code splitting by route
    - Check for unnecessary dependencies
    - Implement tree-shaking where possible
    - _Requirements: 18.1, 18.3_

  - [x] 26.3 Optimize critical resources
    - Add preload for critical fonts
    - Optimize above-fold images with priority prop
    - Minimize render-blocking resources
    - _Requirements: 18.2_

  - [x] 26.4 Run Lighthouse audit
    - Test performance score (target: 90+)
    - Test accessibility score (target: 100)
    - Test best practices score (target: 100)
    - Test SEO score (target: 100)
    - Fix any issues identified
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5_

- [x] 27. Deployment configuration
  - [x] 27.1 Create environment variables file
    - Create .env.local.example
    - Define NEXT_PUBLIC_BASE_URL
    - Define NEXT_PUBLIC_SITE_NAME
    - Define NEXT_PUBLIC_CONTACT_EMAIL
    - Define NEXT_PUBLIC_CONTACT_PHONE
    - _Requirements: N/A (deployment)_

  - [x] 27.2 Configure Next.js for production
    - Update next.config.js with production settings
    - Enable strict mode
    - Enable SWC minification
    - Configure image optimization
    - Add security headers
    - _Requirements: N/A (deployment)_

  - [x] 27.3 Create deployment documentation
    - Document build command
    - Document environment variables
    - Document deployment steps for Vercel
    - Add README with setup instructions
    - _Requirements: N/A (deployment)_

- [x] 28. Final checkpoint - Complete testing and verification
  - Run all unit tests and property tests
  - Run TypeScript compiler check
  - Run ESLint
  - Run Lighthouse audit
  - Test all pages in multiple browsers
  - Test responsive behavior at all breakpoints
  - Test keyboard navigation
  - Test screen reader compatibility
  - Ensure all tests pass, ask the user if questions arise.


## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties across all inputs
- Unit tests validate specific examples, content, and edge cases
- The implementation follows a bottom-up approach: design system → primitives → components → pages → SEO → testing
- All 31 correctness properties from the design document are covered by property tests
- TypeScript strict mode ensures type safety throughout the codebase
- Accessibility compliance targets WCAG 2.1 AA standards
- Performance targets: FCP < 1.5s, LCP < 2.5s, TTI < 3.5s

## Property Test Coverage

This implementation plan includes property-based tests for all 31 correctness properties defined in the design document:

1. Property 1: All routes render successfully (Task 23.1)
2. Property 2: Responsive layout adapts without overflow (Task 22.4)
3. Property 3: Container max-width constraints (Task 4.5)
4. Property 4: Sticky header visibility (Task 7.2)
5. Property 5: Header background transition (Task 7.3)
6. Property 6: Active navigation link highlighting (Task 7.4)
7. Property 7: Mobile menu interaction (Task 7.6)
8. Property 8: Viewport-triggered animations (Task 4.8)
9. Property 9: Animation duration constraint (Task 5.3)
10. Property 10: Hover transition smoothness (Task 5.4)
11. Property 11: Service section completeness (Task 9.4)
12. Property 12: Form validation round-trip (Task 6.2)
13. Property 13: Email format validation (Task 6.3)
14. Property 14: Required field validation (Task 6.4)
15. Property 15: Page metadata completeness (Task 6.6)
16. Property 16: Single H1 per page (Task 11.2)
17. Property 17: Semantic HTML structure (Task 10.2)
18. Property 18: Image component usage (Task 20.3)
19. Property 19: Image lazy loading (Task 20.4)
20. Property 20: Image alt text presence (Task 20.5)
21. Property 21: Image responsive sizing (Task 20.6)
22. Property 22: Interactive element keyboard accessibility (Task 21.4)
23. Property 23: Focus indicator visibility (Task 21.5)
24. Property 24: Interactive element ARIA labels (Task 21.2)
25. Property 25: Text alternative for non-text content (Task 21.3)
26. Property 26: Color contrast compliance (Task 21.6)
27. Property 27: Component props type safety (Tasks 4.2, 24.1)
28. Property 28: Data structure type definitions (Task 24.2)
29. Property 29: TypeScript compilation success (Task 24.4)
30. Property 30: Footer presence on all pages (Task 7.8)
31. Property 31: Link prefetching (Task 23.2)

## Requirements Coverage

All 20 requirements from the requirements document are covered:

- Requirement 1: Multi-Page Website Structure (Tasks 1, 10.1, 11.1, 12.1, 13.1, 14.1, 15.1, 16.1, 17.1)
- Requirement 2: Responsive Design Implementation (Tasks 2, 4.4, 4.6, 22)
- Requirement 3: Navigation System (Tasks 7.1, 7.5)
- Requirement 4: Home Page Content (Task 11.1, 25.2)
- Requirement 5: About Page Content (Task 12.1, 25.3)
- Requirement 6: Services Page Content (Task 13.1, 25.4)
- Requirement 7: Operations Page Content (Task 14.1, 25.5)
- Requirement 8: Impact Page Content (Task 15.1, 25.6)
- Requirement 9: Partners Page Content (Task 16.1, 25.7)
- Requirement 10: Contact Page Implementation (Task 17.1, 9.7, 25.8)
- Requirement 11: SEO Metadata Implementation (Tasks 6.5, 6.7, 19)
- Requirement 12: Animation System Implementation (Tasks 5, 4.7, 9.2)
- Requirement 13: Design System Implementation (Tasks 2, 25.11)
- Requirement 14: Component Architecture (Tasks 3, 4, 9)
- Requirement 15: Image Optimization (Tasks 20)
- Requirement 16: Accessibility Compliance (Tasks 21)
- Requirement 17: TypeScript Type Safety (Tasks 3, 24)
- Requirement 18: Performance Optimization (Tasks 26)
- Requirement 19: Footer Implementation (Task 7.7, 25.9)
- Requirement 20: Content Quality Standards (All page tasks)
