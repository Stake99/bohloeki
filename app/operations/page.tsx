'use client';

import { StatsSection } from '@/components/sections';
import { OperationsWorkflowTimeline } from '@/components/sections/OperationsWorkflowTimeline';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { productionMetrics } from '@/lib/constants';
import { Factory, TrendingUp, Users, MapPin, Cog, BarChart, Network, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OperationsPage() {
  const stats = [
    {
      value: productionMetrics.currentMonthlyProduction,
      suffix: 'L',
      label: 'Current Monthly Production',
      icon: <Factory className="w-12 h-12" />,
    },
    {
      value: productionMetrics.supplierCount,
      label: 'Active Suppliers',
      icon: <Users className="w-12 h-12" />,
    },
    {
      value: 1,
      label: 'Operational Regions',
      icon: <MapPin className="w-12 h-12" />,
    },
  ];

  return (
    <>
      {/* Split-Screen Hero Section with Live Stats */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-forestLight/25 rounded-full blur-3xl"
        />

        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 backdrop-blur-md rounded-full border border-accent-gold/30">
                  <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-accent-goldLight">Live Operations</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  Scaling
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-goldLight">
                    Sustainable
                  </span>
                  Operations
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                From 24,000L to 100,000L monthly capacity. Watch our operations grow in real-time as we expand across Lesotho.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                    <Factory className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1</div>
                    <div className="text-sm text-gray-400">Facility</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">60</div>
                    <div className="text-sm text-gray-400">Suppliers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Maseru</div>
                    <div className="text-sm text-gray-400">Location</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Live Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Stats Card */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold to-primary-forestLight rounded-3xl blur-xl opacity-30" />
                
                <div className="relative bg-gradient-to-br from-primary-forestDark/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-accent-gold/20">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Production Dashboard</h3>
                      <p className="text-sm text-gray-400">Real-time capacity metrics</p>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="w-10 h-10 border-2 border-accent-gold/30 border-t-accent-gold rounded-full"
                    />
                  </div>

                  {/* Current Production */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-goldLight">
                        <AnimatedCounter value={24000} />
                      </span>
                      <span className="text-3xl font-bold text-accent-goldLight">L</span>
                    </div>
                    <p className="text-gray-400 mb-4">Current Monthly Production</p>
                    
                    {/* Progress to Target */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress to 100K Target</span>
                        <span className="text-accent-goldLight font-semibold">24%</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '24%' }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-gradient-to-r from-accent-gold to-accent-goldLight rounded-full relative"
                        >
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-accent-gold" />
                        <span className="text-sm text-gray-400">Growth Rate</span>
                      </div>
                      <div className="text-3xl font-bold text-white">316%</div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart className="w-5 h-5 text-accent-gold" />
                        <span className="text-sm text-gray-400">Target</span>
                      </div>
                      <div className="text-3xl font-bold text-white">100K</div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Network className="w-5 h-5 text-accent-gold" />
                        <span className="text-sm text-gray-400">Network</span>
                      </div>
                      <div className="text-3xl font-bold text-white">60</div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-5 h-5 text-accent-gold" />
                        <span className="text-sm text-gray-400">Expansion</span>
                      </div>
                      <div className="text-2xl font-bold text-white">Soon</div>
                    </motion.div>
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-6 flex items-center justify-between p-4 bg-accent-gold/10 rounded-xl border border-accent-gold/20">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-accent-gold rounded-full"
                      />
                      <span className="text-sm font-semibold text-accent-goldLight">Operational</span>
                    </div>
                    <span className="text-xs text-gray-400">Maseru Facility</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-forest to-primary-forestDark backdrop-blur-xl rounded-2xl p-4 border border-accent-gold/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <Cog className="w-8 h-8 text-accent-gold" />
                  <div>
                    <div className="text-sm text-gray-400">Efficiency</div>
                    <div className="text-xl font-bold text-white">98.5%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-accent-gold/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-accent-gold rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Current Production Metrics */}
      <StatsSection
        stats={stats}
        title="Current Operations"
        description="Our established production capacity and supplier network in Maseru"
      />

      {/* Operations Workflow Timeline */}
      <OperationsWorkflowTimeline />

      {/* Production Details with Glassmorphism */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <GlassCard className="p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <Factory className="w-7 h-7 text-accent-goldLight" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    Production Capacity
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-200 mb-2">Current Monthly Output</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-accent-goldLight">
                        <AnimatedCounter value={24000} suffix="L" />
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-100 leading-relaxed">
                    Our facility in Maseru consistently produces 24,000 liters of 
                    high-quality industrial burner oil each month, serving industries 
                    across Lesotho with reliable energy solutions.
                  </p>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-accent-goldLight" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    Growth Projection
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-200 mb-2">Target Monthly Capacity</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-accent-goldLight">
                        <AnimatedCounter value={100000} suffix="L" />
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-100 leading-relaxed">
                    We are strategically expanding our operations to reach 100,000 liters 
                    monthly production capacity, representing a 316% growth in output to 
                    meet increasing demand.
                  </p>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Growth Progress Bar */}
      <Section spacing="lg" background="gray">
        <Container size="lg">
          <FadeIn>
            <motion.div
              className="bg-white rounded-xl p-8 lg:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                Production Growth Progress
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <motion.span
                    className="text-sm font-medium text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Current: 24,000L
                  </motion.span>
                  <motion.span
                    className="text-sm font-medium text-gray-600"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Target: 100,000L
                  </motion.span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary-forest to-primary-forestLight h-full rounded-full flex items-center justify-end pr-3"
                    initial={{ width: 0 }}
                    whileInView={{ width: '24%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                  >
                    <motion.span
                      className="text-xs font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      24%
                    </motion.span>
                  </motion.div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  On track to achieve 100,000L monthly capacity through strategic expansion
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </Container>
      </Section>

      {/* Supplier Network with Glassmorphism */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Supplier Network
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Building a strong foundation through community partnerships
              </motion.p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-forest to-primary-forestDark" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl"
                />
                <div className="relative z-10 p-8">
                  <div className="text-center mb-6">
                    <AnimatedIcon variant="float" className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/30 backdrop-blur-md rounded-full mb-4 border border-accent-gold/40">
                      <Users className="w-8 h-8 text-accent-goldLight" />
                    </AnimatedIcon>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      60 Active Suppliers
                    </h3>
                    <p className="text-base text-gray-200">
                      Currently operating in Maseru
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {['Individual waste collectors', 'Automotive service centers', 'Industrial facilities', 'Community collection points'].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      >
                        <span className="text-accent-goldLight mt-1">✓</span>
                        <span className="text-base text-gray-100">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-forestDark to-black" />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.35, 0.2],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                  className="absolute bottom-0 left-0 w-64 h-64 bg-primary-forestLight/20 rounded-full blur-3xl"
                />
                <div className="relative z-10 p-8">
                  <div className="text-center mb-6">
                    <AnimatedIcon variant="pulse" className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/30 backdrop-blur-md rounded-full mb-4 border border-accent-gold/40">
                      <MapPin className="w-8 h-8 text-accent-goldLight" />
                    </AnimatedIcon>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Current Coverage
                    </h3>
                    <p className="text-base text-gray-200">
                      Maseru and surrounding areas
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {['Maseru city center', 'Industrial areas', 'Surrounding communities', 'Commercial districts'].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="text-accent-goldLight mt-1">✓</span>
                        <span className="text-base text-gray-100">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Expansion Strategy */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Countrywide Expansion Plan
              </motion.h2>
              <motion.p
                className="text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Strategic growth to serve all of Lesotho
              </motion.p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: 'Phase 1', title: 'Maseru Optimization', desc: 'Maximize efficiency in current operations, strengthen supplier relationships, and increase production capacity to 50,000L monthly.', delay: 0.2 },
              { phase: 'Phase 2', title: 'Regional Expansion', desc: 'Establish collection networks in major towns across Lesotho, partnering with local communities and businesses.', delay: 0.4 },
              { phase: 'Phase 3', title: 'National Coverage', desc: 'Achieve 100,000L monthly capacity with countrywide operations, serving all districts and creating jobs nationwide.', delay: 0.6 }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={item.delay}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="text-4xl font-extrabold text-accent-gold mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay + 0.2, type: 'spring' }}
                  >
                    {item.phase}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-100">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
