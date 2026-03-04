'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { useRef, Suspense, lazy } from 'react';

// Lazy load 3D component for performance
const Hero3D = lazy(() => import('@/components/3d/Hero3D').then(mod => ({ default: mod.Hero3D })));

export interface Hero3DEnhancedProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  show3D?: boolean;
}

/**
 * Premium 3D-enhanced Hero with parallax, interactive elements, and cinematic feel
 */
export function Hero3DEnhanced({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  backgroundImage = '/images/background/waste management pictures for website backgrounds.jpg',
  show3D = true,
}: Hero3DEnhancedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={backgroundImage}
          alt="Bohloeki sustainable waste management"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark/90 via-primary-forest/80 to-primary-forestDark/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* 3D Interactive Element */}
      {show3D && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>
      )}

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-gold/20 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-32 right-20 w-32 h-32 border-2 border-accent-gold/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent-gold/5 backdrop-blur-sm rounded-lg"
        />
      </div>

      {/* Content */}
      <Container size="xl" className="relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center max-w-6xl mx-auto px-4"
        >
          {/* Headline with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 text-white leading-tight">
              {headline.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-100 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
            >
              {subheadline}
            </motion.p>
          )}

          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MagneticButton strength={0.4}>
                <Link
                  href={ctaHref}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-accent-gold text-primary-forestDark overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-gold/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {ctaText}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-accent-goldLight"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-white/30 text-white backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  Our Story
                </Link>
              </MagneticButton>
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-sm font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
