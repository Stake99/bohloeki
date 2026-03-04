'use client';

import { ValueCards, OurJourneyTimeline } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { Target, Eye, Users, Lightbulb, TrendingUp, Recycle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      id: 'job-creation',
      title: 'Job Creation',
      description:
        'Empowering local communities through sustainable employment opportunities and economic development.',
      icon: <Users className="w-10 h-10" />,
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'Pioneering waste-to-energy solutions that transform environmental challenges into opportunities.',
      icon: <Lightbulb className="w-10 h-10" />,
    },
    {
      id: 'economic-development',
      title: 'Economic Development',
      description:
        'Driving local economic growth through sustainable business practices and community partnerships.',
      icon: <TrendingUp className="w-10 h-10" />,
    },
  ];

  return (
    <>
      {/* Split-Screen Storytelling Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background with animated gradient */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-forestDark/50 to-black" />
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <Container size="xl" className="relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-accent-gold/10 border border-accent-gold/30"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 bg-accent-gold rounded-full"
                />
                <span className="text-accent-gold font-semibold text-sm">EST. 2020</span>
              </motion.div>

              {/* Main Heading with Staggered Animation */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
                >
                  Transforming
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-goldLight to-accent-gold"
                  >
                    Waste into Value
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="h-1 w-24 bg-gradient-to-r from-accent-gold to-transparent"
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Since 2020, we&apos;ve been pioneering sustainable waste management in Lesotho. 
                From a vision of purity to a network of 60 suppliers, we&apos;re building a 
                cleaner, more prosperous future for our communities.
              </motion.p>

              {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-6 pt-6"
              >
                <div className="space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring' }}
                    className="text-4xl font-bold text-accent-gold"
                  >
                    60+
                  </motion.div>
                  <div className="text-sm text-gray-400">Suppliers</div>
                </div>
                <div className="space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, type: 'spring' }}
                    className="text-4xl font-bold text-accent-gold"
                  >
                    24K
                  </motion.div>
                  <div className="text-sm text-gray-400">Liters/Month</div>
                </div>
                <div className="space-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: 'spring' }}
                    className="text-4xl font-bold text-accent-gold"
                  >
                    316%
                  </motion.div>
                  <div className="text-sm text-gray-400">Growth</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="pt-4"
              >
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-primary-forestDark font-bold rounded-xl hover:bg-accent-goldLight transition-all duration-200 hover:scale-105 shadow-lg shadow-accent-gold/20">
                  <span>Explore Our Journey</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Central Feature Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <GlassCard className="w-80 p-8 bg-gradient-to-br from-primary-forest/60 to-primary-forestDark/60 border-2 border-accent-gold/30">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/20 rounded-full"
                    >
                      <Recycle className="w-10 h-10 text-accent-gold" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Bohloeki</h3>
                    <p className="text-accent-gold font-semibold">Purity in Sesotho</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Our name reflects our mission: bringing purity to waste management 
                      and creating clean energy for Lesotho
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Orbiting Value Cards */}
              {[
                { icon: Target, label: 'Mission', angle: 0, delay: 0 },
                { icon: Eye, label: 'Vision', angle: 120, delay: 0.2 },
                { icon: Users, label: 'Values', angle: 240, delay: 0.4 },
              ].map((item, i) => {
                const radius = 200;
                const angle = item.angle;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: [0, 360],
                    }}
                    transition={{
                      opacity: { delay: 1 + item.delay },
                      scale: { delay: 1 + item.delay, type: 'spring' },
                      rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                    }}
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        y: {
                          duration: 4 + i,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <GlassCard className="w-24 h-24 flex flex-col items-center justify-center bg-accent-gold/10 border border-accent-gold/30 hover:border-accent-gold/50 transition-all cursor-pointer">
                        <item.icon className="w-8 h-8 text-accent-gold mb-1" />
                        <div className="text-white text-xs font-medium">{item.label}</div>
                      </GlassCard>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connecting Lines */}
              {[0, 120, 240].map((angle, i) => {
                const radius = 200;

                return (
                  <motion.div
                    key={angle}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-accent-gold/40 to-transparent origin-left z-0"
                    style={{
                      width: `${radius - 40}px`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    }}
                  />
                );
              })}

              {/* Floating Particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                  className="absolute w-2 h-2 bg-accent-gold/50 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-accent-gold text-xs font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-accent-gold/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-1.5 h-1.5 bg-accent-gold rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values Section with Glassmorphism */}
      <Section spacing="lg" background="gradient">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <FadeIn>
              <GlassCard className="p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="pulse" className="w-12 h-12 bg-accent-gold rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-100 leading-relaxed">
                  To provide innovative, eco-friendly waste management solutions that 
                  protect the environment, create sustainable employment, and contribute 
                  to Lesotho&apos;s economic development through the production of high-quality 
                  industrial burner oil.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="float" className="w-12 h-12 bg-accent-gold rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-100 leading-relaxed">
                  To become the leading waste-to-energy company in Southern Africa, 
                  setting the standard for sustainable waste management practices and 
                  demonstrating that environmental responsibility and economic prosperity 
                  can go hand in hand.
                </p>
              </GlassCard>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </FadeIn>

          <ValueCards values={values} animationDelay={0.1} />
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Leadership
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Meet the visionary behind Bohloeki Enterprises
                </motion.p>
              </div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 lg:p-12"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    className="relative w-32 h-32 flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/team-founder.svg"
                      alt="Temoho Khatleli - Founder & Managing Director"
                      width={128}
                      height={128}
                      className="rounded-full"
                      sizes="128px"
                    />
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Temoho Khatleli
                    </h3>
                    <p className="text-lg text-primary-forest font-semibold mb-4">
                      Founder & Managing Director
                    </p>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      With a passion for environmental sustainability and community development, 
                      Temoho founded Bohloeki Enterprises to address Lesotho&apos;s waste management 
                      challenges while creating economic opportunities. Under his leadership, 
                      the company has grown from a small operation to a leading waste-to-energy 
                      producer, partnering with 60 suppliers and producing 24,000 liters of 
                      industrial burner oil monthly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Company Growth Timeline - Cinematic Parallax */}
      <OurJourneyTimeline />
    </>
  );
}
