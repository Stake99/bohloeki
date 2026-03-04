'use client';

import { TimelineSection } from './TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { Rocket, Users, Award, Target, Zap, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const journeyItems = [
  {
    id: '1',
    position: 'The Beginning — 2020',
    title: 'A Vision for Purity',
    subtitle: 'Bohloeki means "Purity" in Sesotho',
    description: 'Founded with a bold vision to transform Lesotho\'s waste management landscape. Starting from Maseru, we began collecting waste tires and turning environmental challenges into opportunities for sustainable energy.',
    icon: <Rocket className="w-8 h-8" />,
    badge: 'Founded',
  },
  {
    id: '2',
    position: 'Building Partnerships — 2021',
    title: 'Community Network Established',
    subtitle: 'Growing our supplier base',
    description: 'Established partnerships with local waste collectors across Maseru. Built a network of 20 initial suppliers, creating sustainable livelihoods and demonstrating that environmental responsibility and economic prosperity go hand in hand.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: '3',
    position: 'Production Milestone — 2022',
    title: 'First Production Facility',
    subtitle: '24,000 liters monthly capacity',
    description: 'Launched our first industrial burner oil production facility. Achieved consistent monthly production of 24,000 liters, providing clean-burning alternatives to traditional fuels for industries across Lesotho.',
    icon: <Zap className="w-8 h-8" />,
    badge: '24K L/month',
  },
  {
    id: '4',
    position: 'Network Expansion — 2023',
    title: 'Supplier Network Triples',
    subtitle: '60 active community partners',
    description: 'Expanded our supplier network to 60 active partners across multiple districts. Each supplier represents families and communities thriving through sustainable waste collection and recycling partnerships.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: '5',
    position: 'Recognition — 2024',
    title: 'Industry Leadership',
    subtitle: 'Setting standards for excellence',
    description: 'Recognized as a leader in sustainable waste management in Lesotho. Achieved industry-leading quality standards and became a model for waste-to-energy innovation in Southern Africa.',
    icon: <Award className="w-8 h-8" />,
    badge: 'Excellence',
  },
  {
    id: '6',
    position: 'Future Vision — 2025',
    title: 'Countrywide Expansion',
    subtitle: 'Scaling to 100,000 liters monthly',
    description: 'Planning ambitious expansion to serve all of Lesotho. Targeting 100,000 liters monthly production capacity, creating hundreds of jobs, and bringing sustainable energy solutions to every community.',
    icon: <Target className="w-8 h-8" />,
    badge: '100K Goal',
  },
];

/**
 * Our Journey Timeline with cinematic parallax
 */
export function OurJourneyTimeline() {
  return (
    <div className="relative overflow-hidden">
      {/* Parallax Background Layer 1 - Slowest */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark via-primary-forest to-black" />
      </ParallaxLayer>

      {/* Parallax Background Layer 2 - Background Image */}
      <ParallaxLayer speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/background/waste management pictures for website backgrounds, with tires as plantation containers.jpg"
            alt="Our Journey"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
        </div>
      </ParallaxLayer>

      {/* Floating Geometric Shapes - Layer 3 */}
      <ParallaxLayer speed={0.4} className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top Left Heart */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-32 h-32"
        >
          <Heart className="w-full h-full text-accent-gold/10" />
        </motion.div>

        {/* Top Right Circle */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-40 right-20 w-40 h-40 border-2 border-accent-gold/10 rounded-full backdrop-blur-sm"
        />

        {/* Middle Left Rocket */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24"
        >
          <Rocket className="w-full h-full text-accent-gold/15" />
        </motion.div>

        {/* Middle Right Star */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 right-1/3 w-28 h-28 border-2 border-accent-gold/20"
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />

        {/* Bottom Left */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 left-1/3 w-36 h-36 border-2 border-accent-gold/10 rounded-full backdrop-blur-sm"
        />

        {/* Bottom Right Diamond */}
        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-60 right-1/4 w-20 h-20 border-2 border-accent-gold/20 backdrop-blur-sm"
          style={{ transform: 'rotate(45deg)' }}
        />
      </ParallaxLayer>

      {/* Gradient Overlays - Layer 4 */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top gradient blob */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"
        />
        
        {/* Middle gradient blob */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
        />

        {/* Bottom gradient blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 6,
          }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-gold/15 rounded-full blur-3xl"
        />
      </ParallaxLayer>

      {/* Floating Particles - Foreground */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-accent-gold/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Main Content - Normal Speed */}
      <div className="relative z-10">
        <TimelineSection
          items={journeyItems}
          title="Our Journey"
          description="From vision to reality - the story of Bohloeki's transformation"
        />
      </div>
    </div>
  );
}
