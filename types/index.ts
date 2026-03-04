/**
 * Shared TypeScript type definitions for Bohloeki Enterprises website
 * These interfaces define the data structures used across the application
 */

// ============================================================================
// Navigation Types
// ============================================================================

/**
 * Navigation link interface for header and footer menus
 * @property label - Display text for the link
 * @property href - URL path or external URL
 * @property external - Optional flag for external links
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ============================================================================
// Company Information Types
// ============================================================================

/**
 * Company information interface containing business details
 * @property name - Company name
 * @property tagline - Company tagline or mission statement
 * @property address - Physical address details
 * @property contact - Contact information (phone, email)
 * @property businessHours - Operating hours
 * @property social - Optional social media links
 */
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

// ============================================================================
// Production Metrics Types
// ============================================================================

/**
 * Production metrics interface for operational data
 * @property currentMonthlyProduction - Current monthly production in liters
 * @property projectedProduction - Projected production capacity in liters
 * @property supplierCount - Number of active suppliers
 * @property operationalRegions - List of regions where company operates
 * @property growthRate - Optional growth rate percentage
 */
export interface ProductionMetrics {
  currentMonthlyProduction: number; // liters
  projectedProduction: number; // liters
  supplierCount: number;
  operationalRegions: string[];
  growthRate?: number; // percentage
}

// ============================================================================
// Service Types
// ============================================================================

/**
 * Service detail interface for service offerings
 * @property id - Unique identifier for the service
 * @property title - Service title
 * @property shortDescription - Brief description for overview sections
 * @property fullDescription - Detailed description for service pages
 * @property icon - Icon identifier or path
 * @property benefits - List of service benefits
 * @property environmentalImpact - Description of environmental impact
 * @property targetClients - List of target client types
 * @property category - Service category classification
 */
export interface ServiceDetail {
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

// ============================================================================
// Impact Data Types
// ============================================================================

/**
 * Impact data interface for environmental and social metrics
 * @property environmental - Environmental impact metrics
 * @property social - Social impact metrics
 * @property economic - Economic impact metrics
 */
export interface ImpactData {
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

// ============================================================================
// SEO and Metadata Types
// ============================================================================

/**
 * Page metadata interface for SEO optimization
 * @property title - Page title for SEO
 * @property description - Meta description for search engines
 * @property keywords - Optional array of keywords
 * @property ogImage - Optional Open Graph image URL
 * @property canonical - Optional canonical URL
 */
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

/**
 * Organization schema interface for structured data (JSON-LD)
 * @property @context - Schema.org context URL
 * @property @type - Schema type (Organization)
 * @property name - Organization name
 * @property description - Organization description
 * @property url - Organization website URL
 * @property logo - Organization logo URL
 * @property address - Postal address details
 * @property contactPoint - Contact information
 */
export interface OrganizationSchema {
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

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Statistics item interface for stats sections
 * @property value - Numeric value to display
 * @property suffix - Optional suffix (e.g., "L", "%", "+")
 * @property label - Label describing the statistic
 * @property icon - Optional React node for icon
 */
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

/**
 * Value card interface for company values display
 * @property id - Unique identifier
 * @property title - Value title
 * @property description - Value description
 * @property icon - Optional React node for icon
 */
export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

/**
 * Impact metric interface for impact page
 * @property id - Unique identifier
 * @property category - Impact category
 * @property value - Metric value (string or number)
 * @property label - Metric label
 * @property description - Optional detailed description
 */
export interface ImpactMetric {
  id: string;
  category: 'environmental' | 'social' | 'economic';
  value: string | number;
  label: string;
  description?: string;
}

/**
 * Service interface for services overview
 * @property id - Unique identifier
 * @property title - Service title
 * @property description - Service description
 * @property icon - React node for icon
 * @property benefits - Optional list of benefits
 * @property environmentalImpact - Optional environmental impact description
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits?: string[];
  environmentalImpact?: string;
}

/**
 * Footer section interface for footer organization
 * @property title - Section title
 * @property links - Array of navigation links
 */
export interface FooterSection {
  title: string;
  links: NavLink[];
}
