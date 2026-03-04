'use client';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: string;
  position: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title?: string;
  description?: string;
}

/**
 * Timeline section with alternating cards and scroll animations
 */
export function TimelineSection({ items, title, description }: TimelineSectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-primary-forestDark via-primary-forest to-primary-forestDark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <Container size="xl" className="relative z-10">
        {/* Section header */}
        {title && (
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </ScrollReveal>
        )}

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-accent-goldLight to-accent-gold transform -translate-x-1/2 hidden lg:block" />

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={item.id} className="relative">
                  {/* Desktop layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left side */}
                    {isLeft ? (
                      <>
                        <ScrollReveal direction="right" delay={0.2}>
                          <div className="text-right pr-8">
                            <TimelineCard item={item} align="right" />
                          </div>
                        </ScrollReveal>
                        <div className="relative">
                          <TimelineIndicator number={index + 1} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <TimelineIndicator number={index + 1} />
                        </div>
                        <ScrollReveal direction="left" delay={0.2}>
                          <div className="text-left pl-8">
                            <TimelineCard item={item} align="left" />
                          </div>
                        </ScrollReveal>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden">
                    <ScrollReveal direction="up" delay={0.2}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center text-primary-forestDark font-bold text-lg shadow-lg">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <TimelineCard item={item} align="left" />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Timeline indicator (center dot with number)
 */
function TimelineIndicator({ number }: { number: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent-gold rounded-full blur-xl opacity-50 animate-pulse" />
        
        {/* Number circle */}
        <div className="relative w-16 h-16 rounded-full bg-accent-gold flex items-center justify-center text-primary-forestDark font-bold text-2xl shadow-2xl border-4 border-primary-forestDark">
          {number}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Timeline card content
 */
function TimelineCard({ item }: { item: TimelineItem; align?: 'left' | 'right' }) {
  return (
    <GlassCard hover={true} className="relative">
      {/* Badge */}
      {item.badge && (
        <div className="absolute -top-3 -right-3 bg-accent-gold text-primary-forestDark px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          {item.badge}
        </div>
      )}

      {/* Icon */}
      {item.icon && (
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-accent-gold/20 text-accent-gold"
        >
          {item.icon}
        </motion.div>
      )}

      {/* Position label */}
      <div className="text-accent-gold font-semibold text-sm uppercase tracking-wider mb-2">
        {item.position}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-2">
        {item.title}
      </h3>

      {/* Subtitle */}
      {item.subtitle && (
        <p className="text-accent-goldLight font-medium mb-3">
          {item.subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-gray-300 leading-relaxed">
        {item.description}
      </p>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mt-6"
      />
    </GlassCard>
  );
}
