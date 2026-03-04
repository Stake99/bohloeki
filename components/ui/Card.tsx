/**
 * Card Component
 * Reusable card component for displaying content in various layouts
 * Validates: Requirements 14.1, 14.3
 */

import React from 'react';

/**
 * Card component props interface
 * @property children - Content to be displayed inside the card
 * @property variant - Visual style variant (default, elevated, outlined)
 * @property padding - Padding size (none, sm, md, lg)
 * @property className - Additional CSS classes
 * @property hoverable - Enable hover effects
 */
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hoverable?: boolean;
}

/**
 * Card component with variants, padding options, and hover effects
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hoverable = false,
}) => {
  // Base styles
  const baseStyles = 'rounded-lg transition-all duration-200';

  // Variant styles
  const variantStyles = {
    default: 'bg-white border border-neutral-gray-200',
    elevated: 'bg-white shadow-md',
    outlined: 'bg-transparent border-2 border-primary-forest',
  };

  // Padding styles
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  // Hover styles
  const hoverStyles = hoverable
    ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer'
    : '';

  // Combine all styles
  const cardClasses = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`;

  return <div className={cardClasses}>{children}</div>;
};

Card.displayName = 'Card';
