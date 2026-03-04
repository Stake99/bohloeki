'use client';

import { TimelineSection } from './TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { Handshake, Users, TrendingUp, Network, Globe, Target, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partnershipSteps = [
  {
    id: '1',
    position: 'Phase 1',
    title: 'Initial Contact',
    subtitle: 'Let\'s start the conversation',
    description: 'Reach out to us through our contact form or visit our facility in Maseru. We\'ll discuss your capabilities, interests, and how we can work together to create sustainable impact.',
    icon: <Handshake className="w-8 h-8" />,
    badge: 'Connect',
  },
  {
    id: '2',
    position: 'Phase 2',
    title: 'Partnership Assessment',
    subtitle: 'Understanding your potential',
    description: 'We evaluate collection capacity, logistics, and operational readiness. This ensures we can provide the right support and create a mutually beneficial partnership from day one.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: '3',
    position: 'Phase 3',
    title: 'Agreement & Training',
    subtitle: 'Setting up for success',
    description: 'Sign partnership agreement with transparent terms and fair pricing. Receive comprehensive training on collection standards, safety protocols, and quality requirements.',
    icon: <Award className="w-8 h-8" />,
    badge: 'Onboard',
  },
  {
    id: '4',
    position: 'Phase 4',
    title: 'Active Collection',
    subtitle: 'Operations begin',
    description: 'Start collecting waste materials with our support. We provide equipment assistance, logistics coordination, and technical guidance to ensure smooth operations.',
    icon: <Network className="w-8 h-8" />,
  },
  {
    id: '5',
    position: 'Phase 5',
    title: 'Growth & Expansion',
    subtitle: 'Scaling together',
    description: 'As your collection capacity grows, we grow with you. Access to expanded territories, increased volumes, and additional support to maximize your business potential.',
    icon: <TrendingUp className="w-8 h-8" />,
    badge: 'Scale',
  },
  {
    id: '6',
    position: 'Phase 6',
    title: 'Long-term Partnership',
    subtitle: 'Building lasting impact',
    description: 'Become part of our nationwide network as we expand across Lesotho. Together we create jobs, protect the environment, and build a sustainable future for our communities.',
    icon: <Globe className="w-8 h-8" />,
    badge: 'Impact',
  },
];

/**
 * Partnership Journey Timeline with collaboration-themed parallax
 */
export function PartnershipJourneyTimeline() {
  return (
    <div className="relative overflow-hidden">
      {/* Parallax Layer 1 - Background Gradient */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-forestDark via-black to-primary-forest" />
      </ParallaxLayer>

      {/* Parallax Layer 2 - Background Image */}
      <ParallaxLayer speed={0.25} className="absolute inset-0 -z-40">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/background/close-up-hand-collecting-bottle.jpg"
            alt="Partnership Journey"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/95" />
        </div>
      </ParallaxLayer>

      {/* Floating Partnership Icons - Layer 3 */}
      <ParallaxLayer speed={0.35} className="absolute inset-0 -z-30 pointer-events-none">
        {/* Top Left - Handshake */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-[10%] w-32 h-32"
        >
          <Handshake className="w-full h-full text-accent-gold/20" />
        </motion.div>

        {/* Top Right - Users */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-32 right-[8%] w-28 h-28"
        >
          <Users className="w-full h-full text-primary-forestLight/25" />
        </motion.div>

        {/* Middle Left - Network */}
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
          className="absolute top-[38%] left-[12%] w-30 h-30"
        >
          <Network className="w-full h-full text-accent-gold/18" />
        </motion.div>

        {/* Middle Right - TrendingUp */}
        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[42%] right-[15%] w-32 h-32"
        >
          <TrendingUp className="w-full h-full text-accent-gold/22" />
        </motion.div>

        {/* Bottom Left - Target */}
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-40 left-[18%] w-28 h-28"
        >
          <Target className="w-full h-full text-primary-forestLight/20" />
        </motion.div>

        {/* Bottom Right - Globe */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-48 right-[12%] w-34 h-34"
        >
          <Globe className="w-full h-full text-accent-gold/25" />
        </motion.div>

        {/* Extra - Zap */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[60%] left-[25%] w-24 h-24"
        >
          <Zap className="w-full h-full text-accent-gold/20 fill-accent-gold/10" />
        </motion.div>
      </ParallaxLayer>

      {/* Gradient Orbs - Layer 4 */}
      <ParallaxLayer speed={0.45} className="absolute inset-0 -z-20 pointer-events-none">
        {/* Top Orb */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl"
        />

        {/* Middle Orb */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.18, 0.35, 0.18],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
        />

        {/* Bottom Orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 6,
          }}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-gold/18 rounded-full blur-3xl"
        />
      </ParallaxLayer>

      {/* Floating Particles - Layer 5 */}
      <ParallaxLayer speed={0.65} className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -160, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.75, 0],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-accent-gold/65 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Geometric Shapes - Layer 6 */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 -z-15 pointer-events-none">
        {/* Hexagon top right */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-accent-gold/12 backdrop-blur-sm"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        />

        {/* Diamond bottom left */}
        <motion.div
          animate={{
            rotate: [0, -360],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 left-1/4 w-28 h-28 border-2 border-primary-forestLight/15 backdrop-blur-sm"
          style={{ transform: 'rotate(45deg)' }}
        />

        {/* Circle middle */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[55%] right-[20%] w-36 h-36 border-2 border-accent-gold/10 rounded-full backdrop-blur-sm"
        />
      </ParallaxLayer>

      {/* Main Content */}
      <div className="relative z-10">
        <TimelineSection
          items={partnershipSteps}
          title="Partnership Journey"
          description="Your path to becoming a valued supplier in our network"
        />
      </div>
    </div>
  );
}
