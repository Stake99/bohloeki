/**
 * Section Component
 * Reusable section wrapper component for consistent page sections with background variants and spacing
 * Validates: Requirements 13.3, 14.1
 */

import React from 'react';

/**
 * Section component props interface
 * @property children - Content to be displayed inside the section
 * @property className - Additional CSS classes
 * @property background - Background color variant (white, gray, dark, gradient)
 * @property spacing - Vertical spacing size (sm, md, lg, xl)
 */
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Section component with background variants and responsive spacing
 * 
 * Spacing scale:
 * - sm: 2rem (32px)
 * - md: 4rem (64px)
 * - lg: 6rem (96px)
 * - xl: 8rem (128px)
 * 
 * Responsive padding:
 * - Mobile: py-12 (48px)
 * - Tablet: py-16 (64px)
 * - Desktop: py-24 (96px)
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  spacing = 'md',
}) => {
  // Base styles with responsive padding
  const baseStyles = 'w-full py-12 md:py-16 lg:py-24';

  // Background variant styles
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-neutral-gray-50',
    dark: 'bg-neutral-black text-white',
    gradient: 'bg-gradient-to-br from-primary-forest to-primary-forest-dark text-white',
  };

  // Spacing styles (additional vertical spacing beyond base padding)
  const spacingStyles = {
    sm: 'space-y-8',   // 2rem (32px)
    md: 'space-y-16',  // 4rem (64px)
    lg: 'space-y-24',  // 6rem (96px)
    xl: 'space-y-32',  // 8rem (128px)
  };

  // Combine all styles
  const sectionClasses = `${baseStyles} ${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`;

  return <section className={sectionClasses}>{children}</section>;
};

Section.displayName = 'Section';
