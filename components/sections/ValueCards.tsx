'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ValueCardsProps {
  values: Value[];
  animationDelay?: number;
}

/**
 * Enhanced ValueCards with animated icons and hover effects.
 * Features scale animations and icon motion on hover.
 */
export function ValueCards({ values, animationDelay = 0.1 }: ValueCardsProps) {
  const iconVariants = ['swing', 'pulse', 'float'] as const;

  return (
    <Section spacing="lg" background="white">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FadeIn key={value.id} delay={index * animationDelay}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="elevated" padding="lg" hoverable>
                  <div className="text-center">
                    {/* Animated Icon */}
                    {value.icon && (
                      <AnimatedIcon
                        variant={iconVariants[index % iconVariants.length]}
                        delay={index * 0.2}
                        className="flex justify-center mb-6 text-primary-forest"
                      >
                        <div className="w-16 h-16 flex items-center justify-center">
                          {value.icon}
                        </div>
                      </AnimatedIcon>
                    )}

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
