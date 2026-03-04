'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface AnimatedIconProps {
  children: ReactNode;
  variant?: 'float' | 'pulse' | 'bounce' | 'rotate' | 'scale' | 'swing';
  delay?: number;
  className?: string;
}

const iconVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  scale: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  swing: {
    rotate: [-10, 10, -10],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export function AnimatedIcon({
  children,
  variant = 'float',
  delay = 0,
  className = '',
}: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      animate={iconVariants[variant]}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.15, rotate: 5 }}
    >
      {children}
    </motion.div>
  );
}
