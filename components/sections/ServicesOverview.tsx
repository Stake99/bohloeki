'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits?: string[];
  environmentalImpact?: string;
}

export interface ServicesOverviewProps {
  services: Service[];
  variant?: 'grid' | 'list';
}

/**
 * Enhanced ServicesOverview with animated icons and smooth hover effects.
 * Features scale animations and rotating icon effects.
 */
export function ServicesOverview({
  services,
  variant = 'grid',
}: ServicesOverviewProps) {
  const gridClass =
    variant === 'grid'
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      : 'space-y-8';

  const iconVariants = ['rotate', 'pulse', 'float'] as const;

  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className={gridClass}>
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card variant="elevated" padding="lg" hoverable className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Animated Icon */}
                    <AnimatedIcon
                      variant={iconVariants[index % iconVariants.length]}
                      delay={index * 0.2}
                      className="flex justify-center mb-6 text-primary-forest"
                    >
                      <div className="w-16 h-16 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </AnimatedIcon>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 text-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="text-sm lg:text-base text-gray-600 flex items-start"
                            >
                              <span className="text-primary-forest mr-2 mt-1">
                                ✓
                              </span>
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Environmental Impact */}
                    {service.environmentalImpact && (
                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 text-lg">🌱</span>
                          <p className="text-sm text-gray-600 italic">
                            {service.environmentalImpact}
                          </p>
                        </div>
                      </div>
                    )}
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
