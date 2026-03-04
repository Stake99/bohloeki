'use client';

import { TimelineSection } from './TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { MapPin, Factory, TrendingUp, Target, Globe, Cog, BarChart, Network, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const workflowSteps = [
  {
    id: '1',
    position: 'Current State',
    title: 'Maseru Operations',
    subtitle: 'Established foundation',
    description: 'Operating successfully in Maseru with 60 active suppliers and 24,000L monthly production. Strong community partnerships and proven operational model ready for expansion.',
    icon: <MapPin className="w-8 h-8" />,
    badge: 'Active',
  },
  {
    id: '2',
    position: 'Phase 1',
    title: 'Capacity Optimization',
    subtitle: 'Maximize current facility',
    description: 'Enhance production efficiency and strengthen supplier relationships in Maseru. Increase monthly capacity to 50,000L through process improvements and equipment upgrades.',
    icon: <Cog className="w-8 h-8" />,
    badge: '50K Target',
  },
  {
    id: '3',
    position: 'Phase 2',
    title: 'Network Expansion',
    subtitle: 'Regional supplier growth',
    description: 'Establish collection networks in major towns across Lesotho. Partner with local communities and businesses to build sustainable supply chains in new regions.',
    icon: <Network className="w-8 h-8" />,
  },
  {
    id: '4',
    position: 'Phase 3',
    title: 'Production Scaling',
    subtitle: 'Facility enhancement',
    description: 'Expand production infrastructure to handle increased material flow. Implement advanced processing technology and quality control systems for higher output.',
    icon: <Factory className="w-8 h-8" />,
    badge: '75K Target',
  },
  {
    id: '5',
    position: 'Phase 4',
    title: 'National Coverage',
    subtitle: 'Countrywide operations',
    description: 'Achieve full national coverage with operations in all districts. Create hundreds of jobs and serve communities across Lesotho with sustainable waste management.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: '6',
    position: 'Target Achievement',
    title: '100,000L Monthly',
    subtitle: 'Full capacity realized',
    description: 'Reach 100,000L monthly production capacity with nationwide supplier network. Become the leading waste-to-energy company in Southern Africa.',
    icon: <Target className="w-8 h-8" />,
    badge: '100K Goal',
  },
];

/**
 * Operations Workflow Timeline with growth-themed parallax
 */
export function OperationsWorkflowTimeline() {
  return (
    <div className="relative overflow-hidden">
      {/* Parallax Layer 1 - Background Gradient */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-forestDark via-black to-primary-forest" />
      </ParallaxLayer>

      {/* Parallax Layer 2 - Background Image */}
      <ParallaxLayer speed={0.22} className="absolute inset-0 -z-40">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/background/hermes-rivera-R1_ibA4oXiI-unsplash.jpg"
            alt="Operations Workflow"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/90" />
        </div>
      </ParallaxLayer>

      {/* Floating Growth Icons - Layer 3 */}
      <ParallaxLayer speed={0.36} className="absolute inset-0 -z-30 pointer-events-none">
        {/* Top Left - TrendingUp */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-[10%] w-30 h-30"
        >
          <TrendingUp className="w-full h-full text-accent-gold/25" />
        </motion.div>

        {/* Top Right - BarChart */}
        <motion.div
          animate={{
            y: [0, 35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-28 right-[12%] w-32 h-32"
        >
          <BarChart className="w-full h-full text-primary-forestLight/20" />
        </motion.div>

        {/* Middle Left - Network */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[40%] left-[8%] w-28 h-28"
        >
          <Network className="w-full h-full text-accent-gold/20" />
        </motion.div>

        {/* Middle Right - Cog */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[45%] right-[10%] w-30 h-30"
        >
          <Cog className="w-full h-full text-primary-forestLight/25" />
        </motion.div>

        {/* Bottom Left - Factory */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 left-[18%] w-32 h-32"
        >
          <Factory className="w-full h-full text-accent-gold/20" />
        </motion.div>

        {/* Bottom Right - Zap */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-44 right-[16%] w-28 h-28"
        >
          <Zap className="w-full h-full text-accent-gold/25 fill-accent-gold/10" />
        </motion.div>

        {/* Extra - Globe */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[55%] left-[25%] w-26 h-26"
        >
          <Globe className="w-full h-full text-primary-forestLight/18" />
        </motion.div>
      </ParallaxLayer>

      {/* Gradient Orbs - Layer 4 */}
      <ParallaxLayer speed={0.46} className="absolute inset-0 -z-20 pointer-events-none">
        {/* Top Orb */}
        <motion.div
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, 55, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-gold/18 rounded-full blur-3xl"
        />

        {/* Middle Orb */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -65, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/22 rounded-full blur-3xl"
        />

        {/* Bottom Orb */}
        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.18, 0.35, 0.18],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl"
        />
      </ParallaxLayer>

      {/* Floating Particles - Layer 5 */}
      <ParallaxLayer speed={0.68} className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.35, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-accent-gold/75 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 13px rgba(212, 175, 55, 0.65)',
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Geometric Shapes - Layer 6 */}
      <ParallaxLayer speed={0.54} className="absolute inset-0 -z-15 pointer-events-none">
        {/* Arrow pointing up (growth) */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-accent-gold/15 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 75% 100%, 75% 50%, 25% 50%, 25% 100%, 0% 100%)' }}
        />

        {/* Diamond */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 left-1/3 w-30 h-30 border-2 border-primary-forestLight/18 backdrop-blur-sm"
          style={{ transform: 'rotate(45deg)' }}
        />

        {/* Plus sign (expansion) */}
        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-accent-gold/12 backdrop-blur-sm"
          style={{ clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)' }}
        />
      </ParallaxLayer>

      {/* Main Content */}
      <div className="relative z-10">
        <TimelineSection
          items={workflowSteps}
          title="Operations Roadmap"
          description="Strategic expansion from 24,000L to 100,000L monthly capacity"
        />
      </div>
    </div>
  );
}
