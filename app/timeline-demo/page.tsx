'use client';

import { TimelineSection } from '@/components/sections/TimelineSection';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { Briefcase, Award, Users, TrendingUp, Target, Leaf, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TimelineDemoPage() {
  const timelineItems = [
    {
      id: '1',
      position: 'First Position — Dates',
      title: 'Bohloeki Achieves Major Milestone',
      subtitle: 'Subtitle: A key achievement in our journey',
      description: 'First achievement or milestone description. Can describe what was accomplished and its impact. For example: Reached 24,000 liters of monthly production.',
      icon: <Award className="w-8 h-8" />,
      badge: '8.3 / 10',
    },
    {
      id: '2',
      position: 'First Position — Franchise Milestone',
      title: 'Bohloeki Achieves Major Milestone',
      subtitle: 'Subtitle: A key achievement in our journey',
      description: 'Completed the rollout of waste tire collection across 10 districts. For Bohloeki Enterprises.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: '3',
      position: 'Second Position — Consistency of Taste',
      title: 'Bohloeki Achieves Major Milestone',
      subtitle: 'Subtitle: A key achievement in our journey',
      description: 'Maintained exceptional standards of quality across all operations.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      id: '4',
      position: 'Second Position — Analytical Compliance',
      title: 'Bohloeki Achieves Major Milestone',
      subtitle: 'Subtitle: A key achievement in our journey',
      description: 'Achieved industry-leading analytical compliance standards.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      id: '5',
      position: 'Managing Director\'s Award — Best Sales Team & Notice',
      title: 'Bohloeki Achieves Major Milestone',
      subtitle: 'Subtitle: A key achievement in our journey',
      description: 'Major Milestone: Received industry award for best team and outstanding performance in the field.',
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Parallax Background Layer 1 - Slowest */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark via-primary-forest to-black" />
      </ParallaxLayer>

      {/* Parallax Background Layer 2 - Background Image */}
      <ParallaxLayer speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/background/waste management pictures for website backgrounds.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
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
          className="absolute top-20 left-10 w-32 h-32 border-2 border-accent-gold/20 rounded-lg backdrop-blur-sm"
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
          className="absolute top-40 right-20 w-40 h-40 border-2 border-accent-gold/10 rounded-full backdrop-blur-sm"
        />

        {/* Middle Left Hexagon */}
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
          <Leaf className="w-full h-full text-accent-gold/10" />
        </motion.div>

        {/* Middle Right Shape */}
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
          <Recycle className="w-full h-full text-accent-gold/15" />
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
          className="absolute bottom-40 left-1/3 w-36 h-36 border-2 border-accent-gold/10 rounded-full backdrop-blur-sm"
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
          className="absolute bottom-60 right-1/4 w-20 h-20 border-2 border-accent-gold/20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
      </ParallaxLayer>

      {/* Gradient Overlays - Layer 4 */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        
        {/* Middle gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
        />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </ParallaxLayer>

      {/* Subtle Shadow Overlays */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Main Content - Normal Speed */}
      <div className="relative z-10">
        <TimelineSection
          items={timelineItems}
          title="Our Journey"
          description="Key milestones and achievements in Bohloeki's sustainable transformation"
        />
      </div>

      {/* Floating Particles - Foreground */}
      <ParallaxLayer speed={0.8} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 bg-accent-gold/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </ParallaxLayer>
    </main>
  );
}
