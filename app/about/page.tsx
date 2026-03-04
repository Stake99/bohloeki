'use client';

import { ValueCards } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp } from 'lucide-react';
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
      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/waste management pictures for website backgrounds, with tires as plantation containers.jpg"
            alt="About Bohloeki"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Bohloeki
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-accent-goldLight font-semibold mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                &ldquo;Bohloeki&rdquo; means &ldquo;Purity&rdquo; in Sesotho
              </motion.p>
              <motion.p
                className="text-lg lg:text-xl text-gray-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Founded with a vision to transform Lesotho&apos;s waste management landscape, 
                Bohloeki Enterprises embodies the principle of purity - turning waste into 
                clean, sustainable energy. We are committed to environmental stewardship, 
                community empowerment, and economic development.
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission, Vision, Values Section */}
      <Section spacing="lg" background="gray">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <FadeIn>
              <motion.div
                className="bg-white rounded-xl p-8 shadow-md"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="pulse" className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide innovative, eco-friendly waste management solutions that 
                  protect the environment, create sustainable employment, and contribute 
                  to Lesotho&apos;s economic development through the production of high-quality 
                  industrial burner oil.
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="bg-white rounded-xl p-8 shadow-md"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon variant="float" className="w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading waste-to-energy company in Southern Africa, 
                  setting the standard for sustainable waste management practices and 
                  demonstrating that environmental responsibility and economic prosperity 
                  can go hand in hand.
                </p>
              </motion.div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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

      {/* Company Growth Timeline */}
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
                Our Growth Journey
              </motion.h2>
              <motion.p
                className="text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From humble beginnings to becoming a leader in sustainable waste management
              </motion.p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-8">
            <FadeIn delay={0.2}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <AnimatedIcon variant="bounce" className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      Foundation
                    </h3>
                    <p className="text-base lg:text-lg text-gray-100 leading-relaxed">
                      Bohloeki Enterprises was founded with a vision to transform waste 
                      management in Lesotho, starting with tire collection and recycling 
                      in Maseru.
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <AnimatedIcon variant="pulse" className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      Growth & Expansion
                    </h3>
                    <p className="text-base lg:text-lg text-gray-100 leading-relaxed">
                      Expanded operations to include industrial burner oil production, 
                      partnering with 60 local suppliers and achieving 24,000 liters 
                      monthly production capacity.
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <AnimatedIcon variant="float" className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      Future Vision
                    </h3>
                    <p className="text-base lg:text-lg text-gray-100 leading-relaxed">
                      Planning countrywide expansion with a goal to reach 100,000 liters 
                      monthly production, creating more jobs and serving communities across 
                      all of Lesotho.
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
