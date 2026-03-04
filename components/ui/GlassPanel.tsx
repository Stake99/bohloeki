'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Glassmorphism panel for overlays and sections
 */
export function GlassPanel({ children, className, variant = 'light' }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-2xl rounded-3xl p-8',
        variant === 'light'
          ? 'bg-white/80 dark:bg-gray-900/80 border border-white/30 dark:border-gray-700/30'
          : 'bg-black/60 dark:bg-black/80 border border-white/10',
        'shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}
