'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export interface ImpactMetric {
  id: string;
  category: 'environmental' | 'social' | 'economic';
  value: string | number;
  label: string;
  description?: string;
}

export interface ImpactMetricsProps {
  metrics: ImpactMetric[];
  groupByCategory?: boolean;
}

/**
 * ImpactMetrics component displays impact statistics with category grouping.
 * Features animated progress bars for percentage values and category icons.
 */
export function ImpactMetrics({
  metrics,
  groupByCategory = true,
}: ImpactMetricsProps) {
  const categoryIcons = {
    environmental: '🌍',
    social: '👥',
    economic: '💼',
  };

  const categoryTitles = {
    environmental: 'Environmental Impact',
    social: 'Social Impact',
    economic: 'Economic Impact',
  };

  const categoryColors = {
    environmental: 'text-green-600',
    social: 'text-blue-600',
    economic: 'text-amber-600',
  };

  // Group metrics by category if needed
  const groupedMetrics = groupByCategory
    ? {
        environmental: metrics.filter((m) => m.category === 'environmental'),
        social: metrics.filter((m) => m.category === 'social'),
        economic: metrics.filter((m) => m.category === 'economic'),
      }
    : { all: metrics };

  return (
    <Section spacing="lg" background="gray">
      <Container size="xl">
        {groupByCategory ? (
          <div className="space-y-16">
            {Object.entries(groupedMetrics).map(([category, categoryMetrics]) => {
              if (categoryMetrics.length === 0) return null;
              const cat = category as 'environmental' | 'social' | 'economic';

              return (
                <div key={category}>
                  <FadeIn>
                    <div className="text-center mb-8">
                      <motion.div
                        className="text-5xl mb-4"
                        animate={{
                          y: [0, -15, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      >
                        {categoryIcons[cat]}
                      </motion.div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {categoryTitles[cat]}
                      </h3>
                    </div>
                  </FadeIn>

                  <div className={`grid grid-cols-1 gap-6 ${
                    categoryMetrics.length === 2 
                      ? 'md:grid-cols-2 max-w-4xl mx-auto' 
                      : 'md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {categoryMetrics.map((metric: ImpactMetric, index: number) => (
                      <FadeIn key={metric.id} delay={index * 0.1}>
                        <MetricCard metric={metric} categoryColor={categoryColors[cat]} />
                      </FadeIn>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric: ImpactMetric, index: number) => (
              <FadeIn key={metric.id} delay={index * 0.1}>
                <MetricCard
                  metric={metric}
                  categoryColor={categoryColors[metric.category]}
                />
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

/**
 * MetricCard component for individual impact metrics
 */
function MetricCard({
  metric,
  categoryColor,
}: {
  metric: ImpactMetric;
  categoryColor: string;
}) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check if value is a percentage
  const isPercentage =
    typeof metric.value === 'string' && metric.value.includes('%');
  const percentageValue = isPercentage
    ? parseInt(metric.value.toString().replace('%', ''))
    : 0;

  // Set up Intersection Observer for progress bar animation
  useEffect(() => {
    if (!cardRef.current || !isPercentage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isPercentage]);

  // Animate progress bar
  useEffect(() => {
    if (!isVisible || !isPercentage) return;

    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min((elapsed / duration) * percentageValue, percentageValue);
      setProgress(progressValue);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, isPercentage, percentageValue]);

  return (
    <Card variant="elevated" padding="lg" hoverable>
      <div ref={cardRef}>
        <div className={`text-3xl lg:text-4xl font-extrabold mb-2 ${categoryColor}`}>
          {metric.value}
        </div>
        <h4 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">
          {metric.label}
        </h4>
        {metric.description && (
          <p className="text-sm lg:text-base text-gray-600 mb-4">
            {metric.description}
          </p>
        )}

        {/* Animated progress bar for percentages */}
        {isPercentage && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary-forest h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
