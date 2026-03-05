'use client';

import { ServicesOverview } from '@/components/sections';
import { ServiceProcessTimeline } from '@/components/sections/ServiceProcessTimeline';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { Recycle, Droplet, Trash2, Award, Users, TrendingUp, Shield, Zap, Target, Leaf } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      id: 'tire-collection',
      title: 'Waste Tire Collection & Recycling',
      description:
        'We provide comprehensive tire collection services across Lesotho, transforming waste tires into valuable resources. Our efficient collection network ensures proper disposal and recycling of used tires, preventing environmental pollution and creating economic value.',
      icon: <Recycle className="w-12 h-12" />,
      benefits: [
        'Free tire collection from businesses and communities',
        'Proper disposal preventing environmental hazards',
        'Conversion into industrial burner oil',
        'Support for local suppliers and collectors',
        'Reduction of landfill waste',
      ],
      environmentalImpact:
        'Prevents tire dumping, reduces landfill waste, and eliminates breeding grounds for disease-carrying insects',
    },
    {
      id: 'burner-oil-production',
      title: 'Industrial Burner Oil Production',
      description:
        'Our state-of-the-art facility produces high-quality industrial burner oil from recycled materials. This sustainable energy source provides an eco-friendly alternative to traditional fuels, serving industries across Lesotho with reliable, cost-effective energy solutions.',
      icon: <Droplet className="w-12 h-12" />,
      benefits: [
        'High-quality, consistent fuel grade',
        'Cost-effective alternative to imported fuels',
        'Reliable supply with 24,000L monthly production',
        'Technical support and delivery services',
        'Competitive pricing for bulk orders',
      ],
      environmentalImpact:
        'Clean-burning fuel that reduces carbon emissions compared to traditional fossil fuels',
    },
    {
      id: 'plastic-recycling',
      title: 'Plastic Recycling Services',
      description:
        'We collect and recycle various types of plastic waste, transforming discarded plastics into reusable materials. Our plastic recycling program helps reduce environmental pollution while creating value from waste materials and supporting a circular economy in Lesotho.',
      icon: <Recycle className="w-12 h-12" />,
      benefits: [
        'Collection of PET bottles and containers',
        'HDPE and LDPE plastic recycling',
        'Community collection programs',
        'Partnership with local collectors',
        'Sorting and processing facilities',
        'Contribution to circular economy',
      ],
      environmentalImpact:
        'Reduces plastic pollution in communities, prevents ocean contamination, and decreases landfill burden',
    },
    {
      id: 'liquid-waste-disposal',
      title: 'Liquid Waste Disposal Services',
      description:
        'We offer safe and environmentally responsible disposal of various liquid wastes, including used engine oil, hydraulic oil, contaminated diesel, gear oil, and other petroleum products. Our certified processes ensure proper handling and recycling of hazardous materials.',
      icon: <Trash2 className="w-12 h-12" />,
      benefits: [
        'Safe collection of used engine oil',
        'Hydraulic oil disposal and recycling',
        'Contaminated diesel treatment',
        'Gear oil and transmission fluid handling',
        'Compliance with environmental regulations',
        'Certified disposal documentation',
      ],
      environmentalImpact:
        'Prevents soil and water contamination, protects groundwater sources, and ensures safe recycling of hazardous materials',
    },
  ];

  return (
    <>
      {/* Floating Service Cards Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/60 to-black" />
        </div>

        {/* Pulsing Gradient Orbs */}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
        />

        <Container size="xl" className="relative z-10">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6"
            >
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
              <span className="text-accent-gold text-sm font-medium">Comprehensive Solutions</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming waste into value through innovative recycling and energy production
            </p>
          </motion.div>

          {/* Floating Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 - Tire Collection */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <GlassCard className="h-full p-8 bg-gradient-to-br from-primary-forest/40 to-primary-forestDark/40 border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-accent-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-all"
                  >
                    <Recycle className="w-10 h-10 text-accent-gold" />
                  </motion.div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-bold mb-4">
                    CORE SERVICE
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tire Collection & Recycling
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Comprehensive tire collection across Lesotho, transforming waste into valuable industrial burner oil.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent-gold">60+</div>
                      <div className="text-xs text-gray-400">Suppliers</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent-gold">Free</div>
                      <div className="text-xs text-gray-400">Pickup</div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-accent-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Card 2 - Burner Oil Production */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <GlassCard className="h-full p-8 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 border-2 border-accent-gold/30 hover:border-accent-gold/50 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                    className="w-20 h-20 bg-accent-gold/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/40 transition-all"
                  >
                    <Droplet className="w-10 h-10 text-accent-gold fill-accent-gold/30" />
                  </motion.div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-accent-gold/30 rounded-full text-white text-xs font-bold mb-4">
                    FEATURED
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Industrial Burner Oil
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    High-quality, eco-friendly fuel alternative for industries. Reliable supply with consistent quality.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent-gold">24K</div>
                      <div className="text-xs text-gray-400">Liters/Month</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent-gold">100%</div>
                      <div className="text-xs text-gray-400">Quality</div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-accent-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Card 3 - Liquid Waste Disposal */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ 
                y: -10,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                <GlassCard className="h-full p-8 bg-gradient-to-br from-primary-forest/40 to-primary-forestDark/40 border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-accent-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-all"
                  >
                    <Trash2 className="w-10 h-10 text-accent-gold" />
                  </motion.div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-bold mb-4">
                    CERTIFIED
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Liquid Waste Disposal
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Safe disposal of engine oil, hydraulic oil, and petroleum products with full compliance.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent-gold">Safe</div>
                      <div className="text-xs text-gray-400">Certified</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-2xl font-bold text-accent-gold">24/7</div>
                      <div className="text-xs text-gray-400">Available</div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-accent-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-primary-forestDark font-bold rounded-xl hover:bg-accent-goldLight transition-all duration-200 hover:scale-105 shadow-lg shadow-accent-gold/20"
            >
              <span>Get Started Today</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Services Overview */}
      <ServicesOverview services={services} variant="grid" />

      {/* Service Process Timeline */}
      <ServiceProcessTimeline />

      {/* Why Choose Us Section with Glassmorphism */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Bohloeki?
              </h2>
              <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                We combine environmental responsibility with reliable service delivery
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <GlassCard className="p-6 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent-goldLight" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Local Expertise
                  </h3>
                </div>
                <p className="text-base text-gray-100 leading-relaxed">
                  Deep understanding of Lesotho&apos;s waste management needs and 
                  environmental challenges, with operations rooted in local communities.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="p-6 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-goldLight" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Proven Track Record
                  </h3>
                </div>
                <p className="text-base text-gray-100 leading-relaxed">
                  Successfully producing 24,000 liters monthly with 60 active suppliers, 
                  demonstrating reliability and consistent quality.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <GlassCard className="p-6 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-accent-goldLight" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Environmental Commitment
                  </h3>
                </div>
                <p className="text-base text-gray-100 leading-relaxed">
                  Every service we provide contributes to environmental protection, 
                  waste reduction, and sustainable energy production.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.4}>
              <GlassCard className="p-6 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-goldLight" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Community Impact
                  </h3>
                </div>
                <p className="text-base text-gray-100 leading-relaxed">
                  Creating jobs, supporting local suppliers, and contributing to 
                  economic development across Lesotho.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.5}>
              <GlassCard className="p-6 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-goldLight" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Quality Assurance
                  </h3>
                </div>
                <p className="text-base text-gray-100 leading-relaxed">
                  Rigorous quality control processes ensure consistent, high-grade 
                  industrial burner oil that meets industry standards.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.6}>
              <GlassCard className="p-6 hover:scale-[1.03] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent-goldLight" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Growth Vision
                  </h3>
                </div>
                <p className="text-base text-gray-100 leading-relaxed">
                  Expanding to 100,000L monthly capacity with countrywide operations, 
                  positioning for long-term partnership and service reliability.
                </p>
              </GlassCard>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Enhanced CTA Section */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-forest via-primary-forestDark to-black" />
              
              {/* Animated background elements */}
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
                className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"
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
                className="absolute bottom-0 left-0 w-80 h-80 bg-primary-forestLight/20 rounded-full blur-3xl"
              />

              <div className="relative z-10 p-8 lg:p-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/30 backdrop-blur-md rounded-full border-2 border-accent-gold/40 mb-6"
                >
                  <Zap className="w-10 h-10 text-accent-goldLight" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg lg:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Contact us today to learn more about our services or to discuss 
                  how we can meet your waste management and energy needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-4 bg-accent-gold text-primary-forestDark font-bold rounded-xl hover:bg-accent-goldLight transition-all shadow-lg hover:shadow-xl"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/partners"
                      className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                    >
                      Become a Supplier
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
