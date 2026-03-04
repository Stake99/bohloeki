'use client';

import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ReactNode, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Scene3D = lazy(() => import('@/components/3d/Scene3D').then(mod => ({ default: mod.Scene3D })));
const OilDroplet = lazy(() => import('@/components/3d/OilDroplet').then(mod => ({ default: mod.OilDroplet })));

interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  environmentalImpact?: string;
}

interface ServicesOverview3DProps {
  services: Service[];
  title?: string;
  description?: string;
}

/**
 * Enhanced services section with 3D elements and glassmorphism
 */
export function ServicesOverview3D({ services, title, description }: ServicesOverview3DProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark via-primary-forest to-primary-forestDark" />
      
      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <Container size="xl" className="relative z-10">
        {title && (
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title || 'Our Services'}
            </h2>
            {description && (
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={index * 0.15}
            >
              <Link href={`/services#${service.id}`}>
                <GlassCard className="h-full group cursor-pointer relative overflow-hidden">
                  {/* 3D background element for first service */}
                  {index === 1 && (
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <Suspense fallback={null}>
                        <Scene3D>
                          <OilDroplet />
                        </Scene3D>
                      </Suspense>
                    </div>
                  )}

                  {/* Icon with hover effect */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-accent-gold/20 text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-forestDark transition-all duration-300"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Environmental impact badge */}
                  {service.environmentalImpact && (
                    <div className="mb-6 p-3 rounded-lg bg-primary-forest/50 border border-accent-gold/20">
                      <p className="text-sm text-gray-200">
                        <span className="text-accent-gold font-semibold">Impact: </span>
                        {service.environmentalImpact}
                      </p>
                    </div>
                  )}

                  {/* Learn more link */}
                  <motion.div
                    className="flex items-center gap-2 text-accent-gold font-semibold group-hover:gap-4 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl"
                  />
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
