'use client';

import { StatsSection } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { productionMetrics } from '@/lib/constants';
import { Factory, TrendingUp, Users, MapPin } from 'lucide-react';
import Image from 'next/image';
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
      {/* Page Header with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/hermes-rivera-R1_ibA4oXiI-unsplash.jpg"
            alt="Operations facility"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark/85 via-primary-forest/75 to-primary-forestDark/90" />
        </div>
        
        <Container size="lg" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Operations
              </motion.h1>
              <motion.p
                className="text-lg lg:text-xl text-gray-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Driving sustainable growth through efficient operations and strategic expansion
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Current Production Metrics */}
      <StatsSection
        stats={stats}
        title="Current Operations"
        description="Our established production capacity and supplier network in Maseru"
      />

      {/* Production Details */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <motion.div
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="pulse" className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                    <Factory className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Production Capacity
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Current Monthly Output</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-primary-forest">
                        <AnimatedCounter value={24000} suffix="L" />
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Our facility in Maseru consistently produces 24,000 liters of 
                    high-quality industrial burner oil each month, serving industries 
                    across Lesotho with reliable energy solutions.
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="bounce" className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Growth Projection
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Target Monthly Capacity</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-primary-forest">
                        <AnimatedCounter value={100000} suffix="L" />
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We are strategically expanding our operations to reach 100,000 liters 
                    monthly production capacity, representing a 316% growth in output to 
                    meet increasing demand.
                  </p>
                </div>
              </motion.div>
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

      {/* Supplier Network */}
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
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <AnimatedIcon variant="float" className="inline-flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </AnimatedIcon>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    60 Active Suppliers
                  </h3>
                  <p className="text-base text-gray-600">
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
                      <span className="text-primary-forest mt-1">✓</span>
                      <span className="text-base text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.div
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <AnimatedIcon variant="pulse" className="inline-flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </AnimatedIcon>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Current Coverage
                  </h3>
                  <p className="text-base text-gray-600">
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
                      <span className="text-primary-forest mt-1">✓</span>
                      <span className="text-base text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
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
