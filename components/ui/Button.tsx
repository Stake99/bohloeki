/**
 * Button Component
 * Reusable button component with multiple variants, sizes, loading states, and icon support
 * Enhanced with Framer Motion animations
 * Validates: Requirements 14.1, 14.3, 27.1
 */

'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * Button component props interface
 * @property variant - Visual style variant (primary, secondary, outline, ghost)
 * @property size - Size variant (sm, md, lg)
 * @property isLoading - Loading state with spinner
 * @property leftIcon - Optional icon on the left side
 * @property rightIcon - Optional icon on the right side
 */
export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Loading spinner component
 */
const Spinner: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <motion.svg
      className={`${sizeClasses[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </motion.svg>
  );
};

/**
 * Button component with variants, sizes, loading states, icons, and smooth animations
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

    // Variant styles
    const variantStyles = {
      primary:
        'bg-primary-forest text-white hover:bg-primary-forest-light focus:ring-primary-forest active:bg-primary-forest-dark shadow-lg hover:shadow-xl',
      secondary:
        'bg-neutral-gray-200 text-neutral-black hover:bg-neutral-gray-300 focus:ring-neutral-gray-400 active:bg-neutral-gray-400 shadow-md hover:shadow-lg',
      outline:
        'border-2 border-primary-forest text-primary-forest bg-transparent hover:bg-primary-forest hover:text-white focus:ring-primary-forest shadow-sm hover:shadow-md',
      ghost:
        'text-primary-forest bg-transparent hover:bg-neutral-gray-100 focus:ring-primary-forest active:bg-neutral-gray-200',
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };

    // Combine all styles
    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {/* Ripple effect background */}
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 2, 
            opacity: [0, 0.3, 0],
            transition: { duration: 0.6 }
          }}
          style={{ borderRadius: '50%' }}
        />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <>
              <Spinner size={size} />
              <span>Loading...</span>
            </>
          ) : (
            <>
              {leftIcon && (
                <motion.span 
                  className="inline-flex"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {leftIcon}
                </motion.span>
              )}
              {children}
              {rightIcon && (
                <motion.span 
                  className="inline-flex"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {rightIcon}
                </motion.span>
              )}
            </>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
