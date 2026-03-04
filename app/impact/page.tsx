'use client';

import { ImpactMetrics } from '@/components/sections';
import { ImpactTimeline } from '@/components/sections/ImpactTimeline';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { StaggeredList } from '@/components/animations/StaggeredList';
import { Leaf, Users, TrendingUp, Heart, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ImpactPage() {
  const impactMetrics = [
    {
      id: 'waste-reduced',
      category: 'environmental' as const,
      value: '1000+',
      label: 'Tons of Waste Recycled',
      description: 'Preventing environmental pollution through proper waste management',
    },
    {
      id: 'co2-prevented',
      category: 'environmental' as const,
      value: '500+',
      label: 'Tons CO₂ Emissions Prevented',
      description: 'Reducing carbon footprint through sustainable energy production',
    },
    {
      id: 'jobs-created',
      category: 'social' as const,
      value: 60,
      label: 'Jobs Created',
      description: 'Supporting families through sustainable employment',
    },
    {
      id: 'suppliers-supported',
      category: 'social' as const,
      value: 60,
      label: 'Suppliers Supported',
      description: 'Empowering local entrepreneurs and collectors',
    },
    {
      id: 'local-sourcing',
      category: 'economic' as const,
      value: '100%',
      label: 'Local Sourcing',
      description: 'All materials sourced from within Lesotho',
    },
    {
      id: 'production-value',
      category: 'economic' as const,
      value: '24,000L',
      label: 'Monthly Production',
      description: 'Contributing to local energy independence',
    },
  ];

  return (
    <>
      {/* Circular Progress Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-forestDark via-black to-primary-forest">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-forestLight/25 rounded-full blur-3xl"
        />

        <Container size="xl" className="relative z-10 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 backdrop-blur-md rounded-full border border-accent-gold/30 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-accent-gold rounded-full"
                />
                <span className="text-sm font-semibold text-accent-goldLight">Real Impact Metrics</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6"
            >
              Measuring Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-goldLight">
                Positive Impact
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Environmental, social, and economic transformation through sustainable practices
            </motion.p>
          </div>

          {/* Circular Progress Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Environmental Impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold to-primary-forestLight rounded-full blur-2xl opacity-20" />
                
                <div className="relative bg-gradient-to-br from-primary-forest/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-accent-gold/20">
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background Circle */}
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient1)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 552" }}
                        animate={{ strokeDasharray: "414 552" }} // 75% of 552
                        transition={{ duration: 2, delay: 1 }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#E5C158" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Leaf className="w-12 h-12 text-accent-gold mb-2" />
                      <div className="text-4xl font-extrabold text-white">75%</div>
                      <div className="text-sm text-gray-400">Impact</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Environmental</h3>
                    <p className="text-gray-300 mb-4">Waste reduction & carbon prevention</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Waste Recycled</span>
                        <span className="text-accent-goldLight font-semibold">1000+ tons</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">CO₂ Prevented</span>
                        <span className="text-accent-goldLight font-semibold">500+ tons</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-forestLight to-accent-gold rounded-full blur-2xl opacity-20" />
                
                <div className="relative bg-gradient-to-br from-primary-forestDark/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-primary-forestLight/20">
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background Circle */}
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient2)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 552" }}
                        animate={{ strokeDasharray: "469 552" }} // 85% of 552
                        transition={{ duration: 2, delay: 1.2 }}
                      />
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2D5016" />
                          <stop offset="100%" stopColor="#3D6B1F" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Heart className="w-12 h-12 text-primary-forestLight mb-2" />
                      <div className="text-4xl font-extrabold text-white">85%</div>
                      <div className="text-sm text-gray-400">Impact</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Social</h3>
                    <p className="text-gray-300 mb-4">Jobs & community empowerment</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Jobs Created</span>
                        <span className="text-primary-forestLight font-semibold">60+</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Families Supported</span>
                        <span className="text-primary-forestLight font-semibold">100+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Economic Impact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold to-primary-forestLight rounded-full blur-2xl opacity-20" />
                
                <div className="relative bg-gradient-to-br from-primary-forest/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-accent-gold/20">
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background Circle */}
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient3)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 552" }}
                        animate={{ strokeDasharray: "552 552" }} // 100% of 552
                        transition={{ duration: 2, delay: 1.4 }}
                      />
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#E5C158" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-accent-gold mb-2" />
                      <div className="text-4xl font-extrabold text-white">100%</div>
                      <div className="text-sm text-gray-400">Local</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Economic</h3>
                    <p className="text-gray-300 mb-4">Local sourcing & production</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Local Materials</span>
                        <span className="text-accent-goldLight font-semibold">100%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Production</span>
                        <span className="text-accent-goldLight font-semibold">24,000L</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Impact Metrics */}
      <ImpactMetrics metrics={impactMetrics} groupByCategory={true} />

      {/* Impact Timeline */}
      <ImpactTimeline />

      {/* Waste Reduction Section with Glassmorphism */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <AnimatedIcon variant="rotate" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-accent-gold/30 backdrop-blur-md rounded-full border border-accent-gold/40">
                  <Recycle className="w-8 h-8 text-accent-goldLight" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Waste Reduction Achievements
              </h2>
              <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                Transforming waste into valuable resources
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideIn delay={0.2} direction="left">
              <GlassCard className="p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">
                  Tire Recycling Impact
                </h3>
                <StaggeredList delay={0.3} staggerDelay={0.15} className="space-y-3">
                  {[
                    'Thousands of tires diverted from landfills annually',
                    'Prevention of illegal dumping and burning',
                    'Elimination of mosquito breeding grounds',
                    'Conversion into clean-burning industrial fuel',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <span className="text-accent-goldLight mt-1">✓</span>
                      <span className="text-base text-gray-100">{text}</span>
                    </div>
                  ))}
                </StaggeredList>
              </GlassCard>
            </SlideIn>

            <SlideIn delay={0.4} direction="right">
              <GlassCard className="p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">
                  Liquid Waste Management
                </h3>
                <StaggeredList delay={0.5} staggerDelay={0.15} className="space-y-3">
                  {[
                    'Safe disposal of used engine and hydraulic oils',
                    'Prevention of soil and water contamination',
                    'Protection of groundwater sources',
                    'Recycling into valuable energy products',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <span className="text-accent-goldLight mt-1">✓</span>
                      <span className="text-base text-gray-100">{text}</span>
                    </div>
                  ))}
                </StaggeredList>
              </GlassCard>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Job Creation Section */}
      <Section spacing="lg" background="gray">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <AnimatedIcon variant="pulse" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Job Creation & Economic Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Building sustainable livelihoods across Lesotho
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SlideIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="text-4xl font-extrabold text-primary-forest mb-3">
                  60+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Direct Jobs
                </h3>
                <p className="text-base text-gray-600">
                  Suppliers, collectors, and operational staff earning sustainable income
                </p>
              </div>
            </SlideIn>

            <SlideIn delay={0.4} direction="up">
              <div className="bg-white rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="text-4xl font-extrabold text-primary-forest mb-3">
                  100+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Families Supported
                </h3>
                <p className="text-base text-gray-600">
                  Providing for families and contributing to community well-being
                </p>
              </div>
            </SlideIn>

            <SlideIn delay={0.6} direction="up">
              <div className="bg-white rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="text-4xl font-extrabold text-primary-forest mb-3">
                  100%
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Local Employment
                </h3>
                <p className="text-base text-gray-600">
                  All positions filled by Basotho, keeping economic benefits local
                </p>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Community Empowerment Section */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <AnimatedIcon variant="scale" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Community Empowerment Initiatives
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Investing in the future of Lesotho&apos;s communities
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideIn delay={0.2} direction="left">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <AnimatedIcon variant="bounce" delay={0.3}>
                    <div className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </AnimatedIcon>
                  <h3 className="text-xl font-bold text-gray-900">
                    Supplier Development
                  </h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  We provide training, equipment support, and fair pricing to our 
                  network of 60 suppliers, helping them build sustainable businesses.
                </p>
                <StaggeredList delay={0.4} staggerDelay={0.1} className="space-y-2">
                  {[
                    'Business skills training',
                    'Equipment and tools support',
                    'Fair and timely payments',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2">
                      <span className="text-primary-forest">•</span>
                      <span className="text-sm text-gray-600">{text}</span>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </SlideIn>

            <SlideIn delay={0.4} direction="right">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <AnimatedIcon variant="float" delay={0.5}>
                    <div className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                  </AnimatedIcon>
                  <h3 className="text-xl font-bold text-gray-900">
                    Environmental Education
                  </h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Raising awareness about proper waste management and environmental 
                  protection throughout our communities.
                </p>
                <StaggeredList delay={0.6} staggerDelay={0.1} className="space-y-2">
                  {[
                    'Community workshops',
                    'School education programs',
                    'Best practices sharing',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2">
                      <span className="text-primary-forest">•</span>
                      <span className="text-sm text-gray-600">{text}</span>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Local Sourcing Section */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedIcon variant="swing" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                100% Local Sourcing Commitment
              </h2>
              <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
                Every liter of industrial burner oil we produce comes from waste materials 
                collected right here in Lesotho. We believe in keeping economic benefits 
                local, supporting Basotho entrepreneurs, and building a circular economy 
                that benefits all.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <SlideIn delay={0.2} direction="up">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-extrabold text-accent-gold mb-2">
                      100%
                    </div>
                    <p className="text-sm text-gray-100">
                      Materials from Lesotho
                    </p>
                  </div>
                </SlideIn>
                <SlideIn delay={0.4} direction="up">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-extrabold text-accent-gold mb-2">
                      100%
                    </div>
                    <p className="text-sm text-gray-100">
                      Basotho workforce
                    </p>
                  </div>
                </SlideIn>
                <SlideIn delay={0.6} direction="up">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-extrabold text-accent-gold mb-2">
                      100%
                    </div>
                    <p className="text-sm text-gray-100">
                      Local economic impact
                    </p>
                  </div>
                </SlideIn>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
