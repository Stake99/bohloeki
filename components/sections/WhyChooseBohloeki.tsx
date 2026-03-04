'use client';

import { TimelineSection } from './TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { Leaf, Recycle, Users, TrendingUp, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const whyChooseItems = [
  {
    id: '1',
    position: 'Environmental Leadership',
    title: 'Protecting Lesotho\'s Natural Resources',
    subtitle: 'Sustainable waste management solutions',
    description: 'Reducing waste, preventing pollution, and protecting Lesotho\'s natural resources through innovative recycling and waste-to-energy conversion processes.',
    icon: <Leaf className="w-8 h-8" />,
    badge: 'Eco-Certified',
  },
  {
    id: '2',
    position: 'Community Empowerment',
    title: 'Creating Sustainable Livelihoods',
    subtitle: 'Supporting 60+ local suppliers',
    description: 'Creating jobs, supporting suppliers, and building sustainable livelihoods across Lesotho. Our network of 60 active suppliers represents families and communities thriving through partnership.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: '3',
    position: 'Sustainable Growth',
    title: 'Expanding Clean Energy Access',
    subtitle: 'From 24,000L to 100,000L capacity',
    description: 'Expanding operations to serve all of Lesotho with clean energy solutions. Our projected growth to 100,000 liters monthly will bring sustainable energy to more communities.',
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: '4',
    position: 'Quality Assurance',
    title: 'Industry-Leading Standards',
    subtitle: 'Consistent quality across operations',
    description: 'Maintaining exceptional standards of quality across all operations. Our rigorous quality control ensures every liter of burner oil meets the highest industry standards.',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: '5',
    position: 'Innovation & Technology',
    title: 'Advanced Waste Processing',
    subtitle: 'Cutting-edge conversion technology',
    description: 'Utilizing advanced technology to transform waste tires and petroleum products into valuable industrial burner oil, setting new standards for waste-to-energy innovation in Africa.',
    icon: <Target className="w-8 h-8" />,
  },
];

/**
 * Why Choose Bohloeki section with cinematic parallax
 */
export function WhyChooseBohloeki() {
  return (
    <div className="relative overflow-hidden">
      {/* Parallax Background Layer 1 - Slowest */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      </ParallaxLayer>

      {/* Parallax Background Layer 2 - Background Image */}
      <ParallaxLayer speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/background/sustainable-travel-concept.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 dark:from-black/60 dark:via-transparent dark:to-black/80" />
        </div>
      </ParallaxLayer>

      {/* Floating Geometric Shapes - Layer 3 */}
      <ParallaxLayer speed={0.4} className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top Left Shape */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-forest/10 dark:border-accent-gold/20 rounded-lg backdrop-blur-sm"
        />

        {/* Top Right Circle */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-40 right-20 w-40 h-40 border-2 border-primary-forest/10 dark:border-accent-gold/10 rounded-full backdrop-blur-sm"
        />

        {/* Middle Left Icon */}
        <motion.div
          animate={{
            rotate: [0, -180, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24"
        >
          <Leaf className="w-full h-full text-primary-forest/10 dark:text-accent-gold/10" />
        </motion.div>

        {/* Middle Right Icon */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-1/3 w-28 h-28"
        >
          <Recycle className="w-full h-full text-primary-forest/15 dark:text-accent-gold/15" />
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-40 left-1/3 w-36 h-36 border-2 border-primary-forest/10 dark:border-accent-gold/10 rounded-full backdrop-blur-sm"
        />

        {/* Bottom Right Triangle */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-60 right-1/4 w-20 h-20 border-2 border-primary-forest/20 dark:border-accent-gold/20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
      </ParallaxLayer>

      {/* Gradient Overlays - Layer 4 */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top gradient blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-forest/10 dark:bg-accent-gold/10 rounded-full blur-3xl"
        />
        
        {/* Bottom gradient blob */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/10 dark:bg-primary-forestLight/20 rounded-full blur-3xl"
        />
      </ParallaxLayer>

      {/* Floating Particles - Foreground */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 bg-primary-forest/40 dark:bg-accent-gold/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Main Content - Normal Speed */}
      <div className="relative z-10">
        <TimelineSection
          items={whyChooseItems}
          title="Why Choose Bohloeki"
          description="Leading the way in sustainable waste management and energy production"
        />
      </div>
    </div>
  );
}
