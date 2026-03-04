'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

export interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  description?: string;
}

/**
 * Enhanced StatsSection with animated icons and counters.
 * Features floating icon animations and staggered entrance effects.
 */
export function StatsSection({ stats, title, description }: StatsSectionProps) {
  const iconVariants = ['float', 'pulse', 'bounce'] as const;

  return (
    <Section spacing="lg" background="gray">
      <Container size="xl">
        {(title || description) && (
          <FadeIn>
            <div className="text-center mb-12 lg:mb-16">
              {title && (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                {stat.icon && (
                  <AnimatedIcon
                    variant={iconVariants[index % iconVariants.length]}
                    delay={index * 0.2}
                    className="flex justify-center mb-6 text-primary-forest"
                  >
                    {stat.icon}
                  </AnimatedIcon>
                )}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-forest mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-lg lg:text-xl text-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
