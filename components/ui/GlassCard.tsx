'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Glassmorphism card with backdrop blur and translucent effect
 */
export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative backdrop-blur-xl bg-white/10 dark:bg-black/20',
        'border border-white/20 dark:border-white/10',
        'rounded-2xl p-6 shadow-xl',
        'before:absolute before:inset-0 before:rounded-2xl',
        'before:bg-gradient-to-br before:from-white/20 before:to-transparent',
        'before:opacity-50 before:pointer-events-none',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
