'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { useRef } from 'react';

export interface HeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

/**
 * Enhanced Hero section with parallax scrolling, animated background patterns,
 * and smooth entrance animations. Features real background images with overlay effects.
 */
export function Hero({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  backgroundImage = '/images/background/waste management pictures for website backgrounds.jpg',
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={backgroundImage}
          alt="Bohloeki waste management"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark/80 via-primary-forest/70 to-primary-forestDark/90" />

      {/* Animated Pattern Overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <Container size="xl" className="relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center max-w-5xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-white leading-tight"
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              {subheadline}
            </motion.p>
          )}

          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent-gold text-primary-forestDark hover:bg-accent-goldLight transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {ctaText}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
