'use client';

import { TimelineSection } from './TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { Leaf, Heart, Users, Sparkles, TreePine, Droplet, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const impactMilestones = [
  {
    id: '1',
    position: 'Environmental',
    title: 'Waste Reduction',
    subtitle: '1000+ tons recycled',
    description: 'Diverted thousands of tires and liquid waste from landfills, preventing environmental pollution and protecting Lesotho\'s natural beauty. Every ton recycled is a step toward a cleaner future.',
    icon: <Leaf className="w-8 h-8" />,
    badge: '1000+ Tons',
  },
  {
    id: '2',
    position: 'Environmental',
    title: 'Carbon Footprint',
    subtitle: '500+ tons CO₂ prevented',
    description: 'Our clean-burning industrial burner oil reduces carbon emissions compared to traditional fuels. Contributing to global climate action while serving local industries sustainably.',
    icon: <TreePine className="w-8 h-8" />,
    badge: '500+ Tons',
  },
  {
    id: '3',
    position: 'Social',
    title: 'Job Creation',
    subtitle: '60 sustainable jobs',
    description: 'Created meaningful employment for 60 suppliers and collectors across Maseru. Each job supports a family and contributes to community prosperity and economic stability.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: '4',
    position: 'Social',
    title: 'Community Empowerment',
    subtitle: '100+ families supported',
    description: 'Beyond direct employment, our operations support over 100 families through sustainable livelihoods. We provide training, equipment support, and fair compensation to all partners.',
    icon: <Heart className="w-8 h-8" />,
    badge: '100+ Families',
  },
  {
    id: '5',
    position: 'Economic',
    title: 'Local Sourcing',
    subtitle: '100% from Lesotho',
    description: 'Every material we process comes from within Lesotho. We keep economic benefits local, support Basotho entrepreneurs, and build a circular economy that benefits all.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: '6',
    position: 'Economic',
    title: 'Energy Independence',
    subtitle: '24,000L monthly production',
    description: 'Contributing to Lesotho\'s energy independence with locally-produced industrial burner oil. Reducing reliance on imports while creating value from waste materials.',
    icon: <Droplet className="w-8 h-8" />,
    badge: '24K L/month',
  },
];

/**
 * Impact Timeline with environmental-themed parallax
 */
export function ImpactTimeline() {
  return (
    <div className="relative overflow-hidden">
      {/* Parallax Layer 1 - Background Gradient */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-forest via-primary-forestDark to-black" />
      </ParallaxLayer>

      {/* Parallax Layer 2 - Background Image */}
      <ParallaxLayer speed={0.24} className="absolute inset-0 -z-40">
        <div className="absolute inset-0 opacity-18">
          <Image
            src="/images/background/sustainable-travel-concept.jpg"
            alt="Impact Journey"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-transparent to-black/90" />
        </div>
      </ParallaxLayer>

      {/* Floating Environmental Icons - Layer 3 */}
      <ParallaxLayer speed={0.37} className="absolute inset-0 -z-30 pointer-events-none">
        {/* Top Left - Leaf */}
        <motion.div
          animate={{
            y: [0, -38, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-24 left-[10%] w-30 h-30"
        >
          <Leaf className="w-full h-full text-accent-gold/25 fill-accent-gold/10" />
        </motion.div>

        {/* Top Right - Heart */}
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-28 right-[12%] w-32 h-32"
        >
          <Heart className="w-full h-full text-primary-forestLight/28 fill-primary-forestLight/12" />
        </motion.div>

        {/* Middle Left - TreePine */}
        <motion.div
          animate={{
            y: [0, 35, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[42%] left-[8%] w-28 h-28"
        >
          <TreePine className="w-full h-full text-accent-gold/22" />
        </motion.div>

        {/* Middle Right - Sparkles */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-[45%] right-[10%] w-30 h-30"
        >
          <Sparkles className="w-full h-full text-accent-gold/28" />
        </motion.div>

        {/* Bottom Left - Droplet */}
        <motion.div
          animate={{
            y: [0, -32, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 left-[18%] w-28 h-28"
        >
          <Droplet className="w-full h-full text-primary-forestLight/25 fill-primary-forestLight/10" />
        </motion.div>

        {/* Bottom Right - Globe */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-44 right-[16%] w-30 h-30"
        >
          <Globe className="w-full h-full text-accent-gold/24" />
        </motion.div>
      </ParallaxLayer>

      {/* Gradient Orbs - Layer 4 */}
      <ParallaxLayer speed={0.47} className="absolute inset-0 -z-20 pointer-events-none">
        {/* Top Orb */}
        <motion.div
          animate={{
            scale: [1, 1.46, 1],
            opacity: [0.16, 0.34, 0.16],
            x: [0, 56, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-gold/19 rounded-full blur-3xl"
        />

        {/* Middle Orb */}
        <motion.div
          animate={{
            scale: [1, 1.44, 1],
            opacity: [0.2, 0.37, 0.2],
            y: [0, -64, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/24 rounded-full blur-3xl"
        />

        {/* Bottom Orb */}
        <motion.div
          animate={{
            scale: [1, 1.34, 1],
            opacity: [0.18, 0.33, 0.18],
            x: [0, -52, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent-gold/21 rounded-full blur-3xl"
        />
      </ParallaxLayer>

      {/* Floating Particles - Layer 5 */}
      <ParallaxLayer speed={0.66} className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -198, 0],
              x: [0, Math.random() * 76 - 38, 0],
              opacity: [0, 0.76, 0],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: 7.6 + Math.random() * 7.6,
              repeat: Infinity,
              delay: Math.random() * 7.6,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-accent-gold/76 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 13px rgba(212, 175, 55, 0.64)',
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Geometric Shapes - Layer 6 */}
      <ParallaxLayer speed={0.53} className="absolute inset-0 -z-15 pointer-events-none">
        {/* Heart shape */}
        <motion.div
          animate={{
            scale: [1, 1.26, 1],
            opacity: [0.14, 0.27, 0.14],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/3 w-34 h-34 border-2 border-accent-gold/14 backdrop-blur-sm rounded-full"
        />

        {/* Leaf shape (triangle) */}
        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, -36, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 left-1/3 w-32 h-32 border-2 border-primary-forestLight/17 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        {/* Star (impact) */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-accent-gold/13 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />
      </ParallaxLayer>

      {/* Main Content */}
      <div className="relative z-10">
        <TimelineSection
          items={impactMilestones}
          title="Our Impact Story"
          description="Environmental, social, and economic transformation through sustainable practices"
        />
      </div>
    </div>
  );
}
