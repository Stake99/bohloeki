# Requirements Document

## Introduction

This document specifies the requirements for the Bohloeki Enterprises corporate website - a production-ready, multi-page website for an eco-friendly waste management and industrial burner oil producer based in Lesotho, Africa. The website will communicate the company's sustainability mission, attract industrial clients and partners, and position Bohloeki as a future African leader in waste-to-energy solutions.

## Glossary

- **Website**: The Bohloeki Enterprises corporate web application
- **User**: Any person visiting the website
- **Navigation_System**: The website navigation component including header and menu
- **Page**: A distinct route in the website application
- **Form_Handler**: The contact form processing component
- **Animation_System**: The Framer Motion-based animation implementation
- **Responsive_Layout**: The mobile-first responsive design system
- **SEO_System**: The search engine optimization metadata implementation
- **Component**: A reusable React/Next.js UI element
- **Route**: A URL path in the Next.js App Router
- **Metadata_Generator**: The system that generates page-specific SEO metadata

## Requirements

### Requirement 1: Multi-Page Website Structure

**User Story:** As a user, I want to navigate between different pages, so that I can access specific information about the company.

#### Acceptance Criteria

1. THE Website SHALL implement seven distinct pages using Next.js App Router
2. THE Website SHALL provide routes for home, about, services, operations, impact, partners, and contact pages
3. WHEN a user navigates to any route, THE Website SHALL render the corresponding page component
4. THE Website SHALL maintain consistent layout structure across all pages
5. FOR ALL pages, THE Website SHALL preserve navigation and footer components

### Requirement 2: Responsive Design Implementation

**User Story:** As a user on any device, I want the website to display properly, so that I can access content regardless of screen size.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL implement mobile-first design patterns
2. THE Responsive_Layout SHALL render correctly on iPhone, Android, tablet, and desktop viewports
3. THE Responsive_Layout SHALL use flexible containers with max-width constraints
4. THE Responsive_Layout SHALL prevent horizontal overflow on all viewport sizes
5. WHEN viewport width changes, THE Responsive_Layout SHALL adapt content layout without breaking
6. THE Responsive_Layout SHALL use relative units instead of fixed pixel widths for content containers

### Requirement 3: Navigation System

**User Story:** As a user, I want to navigate the website easily, so that I can find information quickly.

#### Acceptance Criteria

1. THE Navigation_System SHALL display a sticky header that remains visible during scroll
2. WHEN a user scrolls down, THE Navigation_System SHALL transition from transparent to solid background
3. WHERE viewport width is desktop size, THE Navigation_System SHALL display horizontal menu links
4. WHERE viewport width is mobile size, THE Navigation_System SHALL display a hamburger menu icon
5. WHEN a user clicks the hamburger icon, THE Navigation_System SHALL animate open a mobile menu
6. THE Navigation_System SHALL highlight the current active page in the menu

### Requirement 4: Home Page Content

**User Story:** As a visitor, I want to understand what Bohloeki does immediately, so that I can decide if the company meets my needs.

#### Acceptance Criteria

1. THE Website SHALL display a hero section with the headline "Turning Waste Into Sustainable Energy"
2. THE Website SHALL present production statistics including 24,000 liters per month, 60 suppliers, and 100,000L growth projection
3. WHEN production statistics are visible in viewport, THE Animation_System SHALL animate counters from zero to target values
4. THE Website SHALL display core services overview section
5. THE Website SHALL display sustainability commitment section
6. THE Website SHALL display a call-to-action section for partner inquiries

### Requirement 5: About Page Content

**User Story:** As a potential partner, I want to learn about the company's background and values, so that I can assess alignment with my organization.

#### Acceptance Criteria

1. THE Website SHALL display the company story and meaning of "Bohloeki" (Purity in Sesotho)
2. THE Website SHALL present mission, vision, and core values including job creation, innovation, and economic development
3. THE Website SHALL display leadership profile for Founder & Managing Director Temoho Khatleli
4. WHEN value cards are visible in viewport, THE Animation_System SHALL animate card entrance
5. THE Website SHALL present company growth in timeline-style layout

### Requirement 6: Services Page Content

**User Story:** As an industrial client, I want to understand available services in detail, so that I can determine if Bohloeki can meet my waste management needs.

#### Acceptance Criteria

1. THE Website SHALL display detailed sections for waste tire collection and recycling
2. THE Website SHALL display detailed sections for industrial burner oil production
3. THE Website SHALL display detailed sections for liquid waste disposal including used engine oil, hydraulic oil, contaminated diesel, gear oil, and other petroleum products
4. FOR ALL service sections, THE Website SHALL include icon, description, benefits, and environmental impact
5. THE Website SHALL organize services in visually distinct card or section layouts

### Requirement 7: Operations Page Content

**User Story:** As an investor, I want to see operational metrics and growth strategy, so that I can evaluate business potential.

#### Acceptance Criteria

1. THE Website SHALL display current monthly production of 24,000 liters
2. THE Website SHALL display projected production of 100,000 liters
3. THE Website SHALL present supplier network overview
4. THE Website SHALL display countrywide expansion plan
5. WHEN progress metrics are visible in viewport, THE Animation_System SHALL animate progress bars
6. THE Website SHALL visualize operational data in clean metrics sections

### Requirement 8: Impact Page Content

**User Story:** As a sustainability-focused stakeholder, I want to understand environmental and social impact, so that I can assess the company's contribution to sustainable development.

#### Acceptance Criteria

1. THE Website SHALL display environmental impact metrics
2. THE Website SHALL present waste reduction achievements
3. THE Website SHALL display job creation statistics
4. THE Website SHALL present community empowerment initiatives
5. THE Website SHALL display local sourcing advocacy messaging
6. THE Website SHALL organize impact data in statistic cards with visual hierarchy

### Requirement 9: Partners Page Content

**User Story:** As a potential supplier, I want to understand partnership opportunities, so that I can decide whether to engage with Bohloeki.

#### Acceptance Criteria

1. THE Website SHALL display current supplier base information (60 suppliers in Maseru)
2. THE Website SHALL present expansion strategy
3. THE Website SHALL display partnership benefits
4. THE Website SHALL provide a call-to-action for new supplier inquiries
5. THE Website SHALL organize partnership information in clean card layouts

### Requirement 10: Contact Page Implementation

**User Story:** As a user, I want to contact the company, so that I can inquire about services or partnerships.

#### Acceptance Criteria

1. THE Website SHALL display a contact form with fields for name, email, phone, company, and message
2. WHEN a user submits the form with invalid data, THE Form_Handler SHALL display field-specific validation errors
3. WHEN a user submits the form with valid data, THE Form_Handler SHALL accept the submission
4. THE Website SHALL display company phone number, address in Lesotho, and business hours
5. THE Website SHALL display a map placeholder for location visualization
6. THE Form_Handler SHALL validate email format before submission
7. THE Form_Handler SHALL validate required fields before submission

### Requirement 11: SEO Metadata Implementation

**User Story:** As a business owner, I want the website to rank well in search engines, so that potential clients can discover Bohloeki.

#### Acceptance Criteria

1. FOR ALL pages, THE Metadata_Generator SHALL generate page-specific title tags
2. FOR ALL pages, THE Metadata_Generator SHALL generate meta description tags
3. FOR ALL pages, THE Metadata_Generator SHALL generate OpenGraph tags for social sharing
4. THE Metadata_Generator SHALL generate structured Organization schema markup
5. FOR ALL pages, THE Website SHALL implement proper heading hierarchy starting with single H1
6. THE Website SHALL use semantic HTML elements for content structure

### Requirement 12: Animation System Implementation

**User Story:** As a user, I want subtle visual feedback, so that the website feels polished and professional.

#### Acceptance Criteria

1. THE Animation_System SHALL implement fade-in animations for sections entering viewport
2. WHEN a user hovers over interactive elements, THE Animation_System SHALL provide smooth hover transitions
3. WHEN numeric statistics are visible in viewport, THE Animation_System SHALL animate counters from zero to target value
4. THE Animation_System SHALL complete all animations within 800 milliseconds
5. THE Animation_System SHALL use Framer Motion library for animation implementation
6. THE Animation_System SHALL avoid animations that distract from content readability

### Requirement 13: Design System Implementation

**User Story:** As a user, I want a consistent visual experience, so that the website feels cohesive and professional.

#### Acceptance Criteria

1. THE Website SHALL implement color palette using deep forest green, charcoal black, white, subtle gold accent, and soft neutral grays
2. THE Website SHALL use sans-serif typography with clear visual hierarchy
3. THE Website SHALL implement generous whitespace between content sections
4. THE Website SHALL use large bold typography for hero sections
5. THE Website SHALL maintain minimal, professional, and structured visual style across all pages
6. THE Website SHALL implement design tokens for consistent spacing, colors, and typography

### Requirement 14: Component Architecture

**User Story:** As a developer, I want reusable components, so that the codebase is maintainable and scalable.

#### Acceptance Criteria

1. THE Website SHALL implement reusable section components with TypeScript interfaces
2. THE Website SHALL separate layout components from page components
3. THE Website SHALL implement typed props for all components
4. THE Website SHALL organize components in dedicated components directory
5. THE Website SHALL implement shared navigation and footer components used across all pages
6. THE Website SHALL structure code to support future CMS integration

### Requirement 15: Image Optimization

**User Story:** As a user on slow connection, I want images to load efficiently, so that I can access content quickly.

#### Acceptance Criteria

1. THE Website SHALL use Next.js Image component for all images
2. WHEN images are below viewport, THE Website SHALL lazy-load images
3. THE Website SHALL serve responsive image sizes based on viewport width
4. THE Website SHALL optimize image formats for web delivery
5. THE Website SHALL provide alt text for all images for accessibility

### Requirement 16: Accessibility Compliance

**User Story:** As a user with disabilities, I want to access all website content, so that I can learn about Bohloeki's services.

#### Acceptance Criteria

1. THE Website SHALL implement proper ARIA labels for interactive elements
2. THE Website SHALL maintain minimum color contrast ratio of 4.5:1 for body text
3. THE Website SHALL support keyboard navigation for all interactive elements
4. WHEN a user navigates with keyboard, THE Website SHALL display visible focus indicators
5. THE Website SHALL use semantic HTML elements for proper screen reader interpretation
6. THE Website SHALL provide text alternatives for all non-text content

### Requirement 17: TypeScript Type Safety

**User Story:** As a developer, I want type-safe code, so that I can catch errors during development.

#### Acceptance Criteria

1. THE Website SHALL implement TypeScript for all components and pages
2. THE Website SHALL define interfaces for all component props
3. THE Website SHALL define types for all data structures
4. THE Website SHALL enable strict TypeScript compiler options
5. WHEN code is compiled, THE Website SHALL produce zero TypeScript errors

### Requirement 18: Performance Optimization

**User Story:** As a user, I want fast page loads, so that I can access information without waiting.

#### Acceptance Criteria

1. THE Website SHALL implement code splitting for route-based chunks
2. THE Website SHALL preload critical resources for initial page render
3. THE Website SHALL minimize JavaScript bundle size through tree-shaking
4. THE Website SHALL implement static generation for pages without dynamic data
5. WHEN a user navigates between pages, THE Website SHALL prefetch linked page resources

### Requirement 19: Footer Implementation

**User Story:** As a user, I want to access company information from any page, so that I can find contact details and navigate quickly.

#### Acceptance Criteria

1. THE Website SHALL display footer component on all pages
2. THE Website SHALL include company address, phone, and email in footer
3. THE Website SHALL include quick navigation links in footer
4. THE Website SHALL display company tagline or mission statement in footer
5. THE Website SHALL include copyright notice with current year in footer

### Requirement 20: Content Quality Standards

**User Story:** As a visitor, I want professional content, so that I perceive Bohloeki as credible and established.

#### Acceptance Criteria

1. THE Website SHALL use realistic company copy instead of placeholder text
2. THE Website SHALL maintain professional tone across all content
3. THE Website SHALL use correct grammar and spelling throughout
4. THE Website SHALL present accurate company data including production volumes and supplier counts
5. THE Website SHALL communicate sustainability and innovation messaging consistently
