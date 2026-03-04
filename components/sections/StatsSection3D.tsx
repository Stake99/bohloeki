'use client';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
  description?: string;
}

interface StatsSection3DProps {
  stats: Stat[];
  title?: string;
  description?: string;
}

/**
 * Enhanced stats section with 3D cards and animated counters
 */
export function StatsSection3D({ stats, title, description }: StatsSection3DProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-forest/10 rounded-full blur-3xl"
        />
      </div>

      <Container size="xl" className="relative z-10">
        {title && (
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.2}
            >
              <GlassCard className="text-center group">
                {/* Icon with glow effect */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-goldLight text-primary-forestDark shadow-lg group-hover:shadow-accent-gold/50 transition-shadow duration-300"
                >
                  {stat.icon}
                </motion.div>

                {/* Animated counter */}
                <div className="mb-4 text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                {stat.description && (
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                )}

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className="h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mt-6"
                />
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
