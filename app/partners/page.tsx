'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { GlassCard } from '@/components/ui/GlassCard';
import { PartnershipJourneyTimeline } from '@/components/sections/PartnershipJourneyTimeline';
import { Handshake, TrendingUp, DollarSign, Users, MapPin, Target, Network } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Fair Pricing',
      description:
        'Competitive rates for waste materials with transparent pricing and timely payments.',
      variant: 'float' as const,
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: 'Reliable Partnership',
      description:
        'Long-term relationships built on trust, consistency, and mutual growth.',
      variant: 'pulse' as const,
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Growth Support',
      description:
        'Training, equipment support, and business development assistance for suppliers.',
      variant: 'bounce' as const,
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Community Impact',
      description:
        'Be part of a movement creating jobs and protecting the environment in Lesotho.',
      variant: 'swing' as const,
    },
  ];

  return (
    <>
      {/* Network Visualization Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
        </div>

        {/* Pulsing Gradient Orbs */}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
        />

        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6"
              >
                <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
                <span className="text-accent-gold text-sm font-medium">Growing Network</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
                Join Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-goldLight">
                  Supplier Network
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Connect with 60+ suppliers across Lesotho. Build sustainable partnerships, 
                grow your business, and create lasting environmental impact together.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent-gold text-primary-forestDark hover:bg-accent-goldLight transition-all duration-200 hover:scale-105 shadow-lg shadow-accent-gold/20"
                >
                  Become a Supplier
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-accent-gold/30 text-white hover:bg-accent-gold/10 transition-all duration-200">
                  Learn More
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-accent-gold mb-1">60+</div>
                  <div className="text-sm text-gray-400">Active Partners</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-3xl font-bold text-accent-gold mb-1">316%</div>
                  <div className="text-sm text-gray-400">Growth Rate</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-accent-gold mb-1">100%</div>
                  <div className="text-sm text-gray-400">Fair Pricing</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Network Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Central Hub */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <GlassCard className="w-32 h-32 flex flex-col items-center justify-center bg-accent-gold/10 border-2 border-accent-gold/30">
                  <Network className="w-12 h-12 text-accent-gold mb-2" />
                  <div className="text-white font-bold text-sm">Bohloeki</div>
                  <div className="text-accent-gold text-xs">Hub</div>
                </GlassCard>
              </motion.div>

              {/* Supplier Nodes - Arranged in a circle */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8;
                const radius = 220;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Connection Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                      className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-accent-gold/40 to-transparent origin-left"
                      style={{
                        width: `${radius - 40}px`,
                        transform: `translate(-100%, -50%) rotate(${angle + 180}deg)`,
                      }}
                    />

                    {/* Animated pulse along the line */}
                    <motion.div
                      animate={{
                        x: [-radius + 40, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: 'linear',
                      }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent-gold rounded-full"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                      }}
                    />

                    {/* Supplier Node */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3 + i * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <GlassCard className="w-20 h-20 flex flex-col items-center justify-center bg-primary-forest/20 border border-accent-gold/20 hover:border-accent-gold/50 transition-all cursor-pointer">
                        <Users className="w-6 h-6 text-accent-gold mb-1" />
                        <div className="text-white text-xs font-medium">S{i + 1}</div>
                      </GlassCard>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Outer Ring Nodes */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 280;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={`outer-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{
                      delay: 1 + i * 0.05,
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent-gold/40 rounded-full"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  />
                );
              })}

              {/* Stats Overlay Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-8 right-0"
              >
                <GlassCard className="px-4 py-3 bg-primary-forest/30 border-l-4 border-accent-gold">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-accent-gold" />
                    <div>
                      <div className="text-white font-bold text-lg">316%</div>
                      <div className="text-gray-400 text-xs">Network Growth</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-0"
              >
                <GlassCard className="px-4 py-3 bg-primary-forest/30 border-l-4 border-accent-gold">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent-gold" />
                    <div>
                      <div className="text-white font-bold text-lg">Maseru</div>
                      <div className="text-gray-400 text-xs">Expanding Soon</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Current Supplier Base */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Supplier Network
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Building success together through strong partnerships
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SlideIn delay={0.2} direction="left">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="pulse" delay={0.3}>
                    <div className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </AnimatedIcon>
                  <div>
                    <div className="text-3xl font-extrabold text-primary-forest">
                      60
                    </div>
                    <p className="text-sm text-gray-600">Active Suppliers</p>
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our network includes individual collectors, automotive service centers, 
                  industrial facilities, and community collection points across Maseru.
                </p>
              </div>
            </SlideIn>

            <SlideIn delay={0.4} direction="right">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="float" delay={0.5}>
                    <div className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </AnimatedIcon>
                  <div>
                    <div className="text-3xl font-extrabold text-primary-forest">
                      Maseru
                    </div>
                    <p className="text-sm text-gray-600">Current Operations</p>
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Currently operating in Maseru and surrounding areas, with plans to 
                  expand countrywide as we grow our production capacity.
                </p>
              </div>
            </SlideIn>
          </div>

          <SlideIn delay={0.6} direction="up">
            <div className="bg-primary-forest rounded-xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Who We Partner With
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {['Individual Collectors', 'Auto Service Centers', 'Industrial Facilities', 'Community Groups'].map((partner, idx) => (
                  <SlideIn key={partner} delay={0.8 + idx * 0.1} direction="up">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <p className="text-white font-medium">{partner}</p>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </div>
          </SlideIn>
        </Container>
      </Section>

      {/* Partnership Journey Timeline */}
      <PartnershipJourneyTimeline />

      {/* Partnership Benefits */}
      <Section spacing="lg" background="gray">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Partnership Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Why suppliers choose to work with Bohloeki
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <SlideIn 
                key={benefit.title} 
                delay={index * 0.15} 
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <GlassCard hover={true} className="bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <AnimatedIcon
                      variant={benefit.variant}
                      delay={index * 0.2}
                      className="flex-shrink-0 text-primary-forest"
                    >
                      {benefit.icon}
                    </AnimatedIcon>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </SlideIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Expansion Strategy */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <AnimatedIcon variant="swing" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Expansion Strategy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Growing together to serve all of Lesotho
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-8">
            <SlideIn delay={0.2} direction="left">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <AnimatedIcon variant="bounce" delay={0.3}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      Strengthen Maseru Operations
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      Optimize current operations, increase production capacity to 50,000L 
                      monthly, and deepen relationships with existing suppliers.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary-forest font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>Current Phase - Active Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn delay={0.4} direction="right">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <AnimatedIcon variant="pulse" delay={0.5}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      Regional Expansion
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      Establish collection networks in major towns across Lesotho, 
                      partnering with local communities and businesses to expand our reach.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>Next Phase - Planned Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn delay={0.6} direction="left">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <AnimatedIcon variant="float" delay={0.7}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      Nationwide Coverage
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">
                      Achieve 100,000L monthly production capacity with operations across 
                      all districts, creating jobs and serving communities nationwide.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <Target className="w-4 h-4" />
                      <span>Future Vision - National Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedIcon variant="scale" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Become a Supplier?
              </h2>
              <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
                Join our network of suppliers and be part of Lesotho&apos;s sustainable future. 
                Whether you&apos;re an individual collector, business, or community group, 
                we want to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SlideIn delay={0.3} direction="up">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-white text-primary-forest hover:bg-gray-100 hover:scale-105 transition-all duration-200"
                  >
                    Contact Us Today
                  </Link>
                </SlideIn>
                <SlideIn delay={0.5} direction="up">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-forest hover:scale-105 transition-all duration-200"
                  >
                    Learn More About Us
                  </Link>
                </SlideIn>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
