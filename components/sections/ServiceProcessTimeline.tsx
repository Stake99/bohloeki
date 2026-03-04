'use client';

import { TimelineSection } from './TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { Truck, Factory, Droplet, CheckCircle, Users, Zap, Package, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const processSteps = [
  {
    id: '1',
    position: 'Step 1',
    title: 'Collection Network',
    subtitle: 'Community-based waste collection',
    description: 'Our network of 60 suppliers across Lesotho collects waste tires and liquid waste from businesses, communities, and collection points. Free pickup services ensure convenient and responsible disposal.',
    icon: <Truck className="w-8 h-8" />,
    badge: '60 Suppliers',
  },
  {
    id: '2',
    position: 'Step 2',
    title: 'Quality Inspection',
    subtitle: 'Rigorous material assessment',
    description: 'All collected materials undergo thorough inspection and sorting. We ensure only suitable materials enter our processing facility, maintaining the highest quality standards for our end products.',
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    id: '3',
    position: 'Step 3',
    title: 'Processing & Production',
    subtitle: 'State-of-the-art facility',
    description: 'Advanced processing technology transforms waste materials into high-quality industrial burner oil. Our facility operates with strict environmental controls and safety protocols.',
    icon: <Factory className="w-8 h-8" />,
    badge: '24K L/month',
  },
  {
    id: '4',
    position: 'Step 4',
    title: 'Quality Assurance',
    subtitle: 'Testing and certification',
    description: 'Every batch undergoes comprehensive quality testing to ensure consistent fuel grade and performance. We provide certification and technical specifications for all our products.',
    icon: <Droplet className="w-8 h-8" />,
  },
  {
    id: '5',
    position: 'Step 5',
    title: 'Distribution',
    subtitle: 'Reliable delivery services',
    description: 'We deliver industrial burner oil directly to industries across Lesotho. Our logistics network ensures timely delivery and continuous supply for your operations.',
    icon: <Package className="w-8 h-8" />,
  },
  {
    id: '6',
    position: 'Step 6',
    title: 'Ongoing Support',
    subtitle: 'Partnership & growth',
    description: 'We provide technical support, usage guidance, and maintain long-term partnerships with our clients. Your success is our success as we grow together sustainably.',
    icon: <Users className="w-8 h-8" />,
    badge: 'Partners',
  },
];

/**
 * Service Process Timeline with industrial-themed parallax
 */
export function ServiceProcessTimeline() {
  return (
    <div className="relative overflow-hidden">
      {/* Parallax Layer 1 - Background Gradient */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-primary-forestDark to-primary-forest" />
      </ParallaxLayer>

      {/* Parallax Layer 2 - Background Image */}
      <ParallaxLayer speed={0.25} className="absolute inset-0 -z-40">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/background/man-collecting-scattered-plastic-bottles-from-ground.jpg"
            alt="Service Process"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
        </div>
      </ParallaxLayer>

      {/* Floating Industrial Icons - Layer 3 */}
      <ParallaxLayer speed={0.35} className="absolute inset-0 -z-30 pointer-events-none">
        {/* Top Left - Recycle */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-24 left-[8%] w-28 h-28"
        >
          <Recycle className="w-full h-full text-accent-gold/15" />
        </motion.div>

        {/* Top Right - Factory */}
        <motion.div
          animate={{
            y: [0, -35, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-32 right-[12%] w-32 h-32"
        >
          <Factory className="w-full h-full text-primary-forestLight/20" />
        </motion.div>

        {/* Middle Left - Droplet */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[40%] left-[15%] w-24 h-24"
        >
          <Droplet className="w-full h-full text-accent-gold/20 fill-accent-gold/10" />
        </motion.div>

        {/* Middle Right - Zap */}
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[45%] right-[10%] w-28 h-28"
        >
          <Zap className="w-full h-full text-accent-gold/25 fill-accent-gold/10" />
        </motion.div>

        {/* Bottom Left - Truck */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-40 left-[20%] w-32 h-32"
        >
          <Truck className="w-full h-full text-primary-forestLight/25" />
        </motion.div>

        {/* Bottom Right - Package */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-48 right-[18%] w-26 h-26"
        >
          <Package className="w-full h-full text-accent-gold/20" />
        </motion.div>
      </ParallaxLayer>

      {/* Gradient Orbs - Layer 4 */}
      <ParallaxLayer speed={0.45} className="absolute inset-0 -z-20 pointer-events-none">
        {/* Left Orb */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl"
        />

        {/* Right Orb */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
        />

        {/* Center Orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl"
        />
      </ParallaxLayer>

      {/* Floating Particles - Layer 5 */}
      <ParallaxLayer speed={0.65} className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -180, 0],
              x: [0, Math.random() * 70 - 35, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: 7 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 7,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-accent-gold/70 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Geometric Shapes - Layer 6 */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 -z-15 pointer-events-none">
        {/* Gear-like shape top */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-36 h-36 border-2 border-accent-gold/10 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />

        {/* Pentagon bottom */}
        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 left-1/4 w-32 h-32 border-2 border-primary-forestLight/15 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
        />

        {/* Octagon middle */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/3 w-28 h-28 border-2 border-accent-gold/12 backdrop-blur-sm"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        />
      </ParallaxLayer>

      {/* Main Content */}
      <div className="relative z-10">
        <TimelineSection
          items={processSteps}
          title="Our Service Process"
          description="From collection to delivery - a seamless journey of transformation"
        />
      </div>
    </div>
  );
}
