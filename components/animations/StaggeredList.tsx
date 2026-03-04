'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface StaggeredListProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredList({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}: StaggeredListProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.ul
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children.map((child, index) => (
        <motion.li key={index} variants={item}>
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}
