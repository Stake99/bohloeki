/**
 * Container Component
 * Reusable container component for consistent max-width layouts with responsive padding
 * Validates: Requirements 2.3, 2.6, 14.1
 */

import React from 'react';

/**
 * Container component props interface
 * @property children - Content to be displayed inside the container
 * @property size - Max-width size variant (sm, md, lg, xl, full)
 * @property className - Additional CSS classes
 */
export interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

/**
 * Container component with max-width constraints and responsive padding
 * 
 * Max-widths:
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 * - xl: 1280px
 * - full: 100%
 * 
 * Responsive padding:
 * - Mobile: px-4 (16px)
 * - Tablet: px-6 (24px)
 * - Desktop: px-8 (32px)
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className = '',
}) => {
  // Base styles with responsive padding
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';

  // Size-based max-width styles
  const sizeStyles = {
    sm: 'max-w-screen-sm',   // 640px
    md: 'max-w-screen-md',   // 768px
    lg: 'max-w-screen-lg',   // 1024px
    xl: 'max-w-screen-xl',   // 1280px
    full: 'max-w-full',
  };

  // Combine all styles
  const containerClasses = `${baseStyles} ${sizeStyles[size]} ${className}`;

  return <div className={containerClasses}>{children}</div>;
};

Container.displayName = 'Container';
