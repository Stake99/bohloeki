'use client';

import { ContactForm } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { companyInfo } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Leaf, Droplet, Recycle, Wind, Sparkles, Send } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      {/* Cinematic Parallax Hero */}
      <section className="relative h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:min-h-screen 2xl:h-auto flex items-center justify-center overflow-hidden py-2 sm:py-4 lg:py-6 xl:py-8 2xl:py-20" 
               style={{
                 // For screens with limited height (like 1280x800), use smaller heights
                 height: 'min(60vh, 400px)'
               }}>
        {/* Parallax Layer 1 - Slowest Background */}
        <ParallaxLayer speed={0.1} className="absolute inset-0 -z-50">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-forestDark via-black to-primary-forest" />
        </ParallaxLayer>

        {/* Parallax Layer 2 - Background Image */}
        <ParallaxLayer speed={0.25} className="absolute inset-0 -z-40">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/background/waste management pictures for website backgrounds, with tires as plantation containers (1).jpg"
              alt="Contact us"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />
          </div>
        </ParallaxLayer>

        {/* Parallax Layer 3 - Floating Eco Shapes */}
        <ParallaxLayer speed={0.4} className="absolute inset-0 -z-30 pointer-events-none">
          {/* Top Left - Leaf */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-[8%] w-28 h-28"
          >
            <Leaf className="w-full h-full text-accent-gold/25 fill-accent-gold/10" />
          </motion.div>

          {/* Top Right - Droplet */}
          <motion.div
            animate={{
              y: [0, 35, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-32 right-[12%] w-32 h-32"
          >
            <Droplet className="w-full h-full text-primary-forestLight/30 fill-primary-forestLight/15" />
          </motion.div>

          {/* Middle Left - Recycle */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-[42%] left-[10%] w-30 h-30"
          >
            <Recycle className="w-full h-full text-accent-gold/20" />
          </motion.div>

          {/* Middle Right - Wind */}
          <motion.div
            animate={{
              x: [0, 45, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-[38%] right-[15%] w-36 h-36"
          >
            <Wind className="w-full h-full text-primary-forestLight/25" />
          </motion.div>

          {/* Bottom Left - Sparkles */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-32 left-[18%] w-24 h-24"
          >
            <Sparkles className="w-full h-full text-accent-gold/30" />
          </motion.div>

          {/* Bottom Right - Send Icon */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 25, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-40 right-[14%] w-28 h-28"
          >
            <Send className="w-full h-full text-accent-gold/25" />
          </motion.div>
        </ParallaxLayer>

        {/* Parallax Layer 4 - Gradient Orbs */}
        <ParallaxLayer speed={0.5} className="absolute inset-0 -z-20 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.15, 0.35, 0.15],
              x: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -70, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5,
            }}
            className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-forestLight/25 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
            className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-gold/18 rounded-full blur-3xl"
          />
        </ParallaxLayer>

        {/* Parallax Layer 5 - Floating Particles */}
        <ParallaxLayer speed={0.7} className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -180, 0],
                x: [0, Math.random() * 70 - 35, 0],
                opacity: [0, 0.75, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 7 + Math.random() * 7,
                repeat: Infinity,
                delay: Math.random() * 7,
                ease: 'easeInOut',
              }}
              className="absolute w-2 h-2 bg-accent-gold/70 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
              }}
            />
          ))}
        </ParallaxLayer>

        {/* Main Content - Fastest Layer */}
        <ParallaxLayer speed={0.85} className="relative z-10 w-full">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center max-w-4xl mx-auto px-4">
                {/* Hide icon on very small screens, show on sm and up */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="hidden sm:block mb-1 sm:mb-2 lg:mb-4 xl:mb-6"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24 bg-accent-gold/20 backdrop-blur-md rounded-full border-2 border-accent-gold/30 mb-1 sm:mb-2 lg:mb-4 xl:mb-6">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 text-accent-gold" />
                  </div>
                </motion.div>

                <motion.h1
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-1 sm:mb-2 lg:mb-3 xl:mb-4 text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get in Touch
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 xl:p-6 border border-white/20"
                >
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 leading-tight sm:leading-snug lg:leading-relaxed">
                    Have questions about our services or want to become a supplier? 
                    We&apos;re here to help you make a sustainable impact
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </ParallaxLayer>
      </section>

      {/* Overlapping Contact Form Section with Shadow and Blur */}
      <section className="relative -mt-32 z-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form - Elevated with Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8 lg:p-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-accent-gold/20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </GlassCard>
            </motion.div>

            {/* Company Information - Elevated with Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-8 lg:p-10 bg-gradient-to-br from-primary-forest/95 to-primary-forestDark/95 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-accent-gold/30">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Company Information
                </h2>
                <div className="space-y-6">
                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-accent-goldLight" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Address
                      </h3>
                      <address className="text-base text-gray-200 not-italic leading-relaxed">
                        {companyInfo.address.street}
                        <br />
                        {companyInfo.address.city}, {companyInfo.address.country}
                      </address>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-accent-goldLight" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Phone
                      </h3>
                      <p className="text-sm text-gray-300 mb-1">
                        {companyInfo.contact.name}
                      </p>
                      <a
                        href={`tel:${companyInfo.contact.phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                        className="text-base text-accent-goldLight hover:text-accent-gold transition-colors hover:underline"
                      >
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Mail className="w-6 h-6 text-accent-goldLight" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Email
                      </h3>
                      <a
                        href={`mailto:${companyInfo.contact.email}`}
                        className="text-base text-accent-goldLight hover:text-accent-gold transition-colors hover:underline"
                      >
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Clock className="w-6 h-6 text-accent-goldLight" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Business Hours
                      </h3>
                      <div className="text-base text-gray-200 space-y-1">
                        <p>{companyInfo.businessHours.weekdays}</p>
                        <p>{companyInfo.businessHours.weekend}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Info Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-accent-gold/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What to Expect
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Response within 24 hours during business days',
                      'Professional consultation for your needs',
                      'Transparent pricing and service information',
                    ].map((text, i) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-accent-gold mt-1">✓</span>
                        <span className="text-sm text-gray-200">{text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Spacer for proper flow */}
      <div className="h-24" />

      {/* Map Placeholder Section */}
      <Section spacing="lg" background="gray">
        <Container size="xl">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Location
              </h2>
              <p className="text-base text-gray-600">
                Visit us at our facility in Maseru
              </p>
            </div>
          </FadeIn>

          <SlideIn delay={0.2} direction="up">
            <div className="bg-gray-300 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-forest to-primary-forestLight">
                <div className="text-center text-white p-8 flex flex-col items-center">
                  <AnimatedIcon variant="bounce" className="mb-4">
                    <MapPin className="w-16 h-16 opacity-80" />
                  </AnimatedIcon>
                  <p className="text-xl font-semibold mb-2">
                    {companyInfo.address.street}
                  </p>
                  <p className="text-lg opacity-90">
                    {companyInfo.address.city}, {companyInfo.address.country}
                  </p>
                  <p className="text-sm mt-4 opacity-75">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
        </Container>
      </Section>

      {/* Quick Links Section */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Looking for Something Specific?
              </h2>
              <p className="text-base text-gray-600">
                Quick links to help you find what you need
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SlideIn delay={0.2} direction="up">
              <a
                href="/services"
                className="block bg-gray-50 rounded-xl p-6 hover:bg-primary-forest hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  Our Services
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors">
                  Learn about our waste management and energy production services
                </p>
              </a>
            </SlideIn>

            <SlideIn delay={0.4} direction="up">
              <a
                href="/partners"
                className="block bg-gray-50 rounded-xl p-6 hover:bg-primary-forest hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  Become a Supplier
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors">
                  Join our network of suppliers and partners
                </p>
              </a>
            </SlideIn>

            <SlideIn delay={0.6} direction="up">
              <a
                href="/about"
                className="block bg-gray-50 rounded-xl p-6 hover:bg-primary-forest hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  About Bohloeki
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors">
                  Discover our mission, values, and commitment to sustainability
                </p>
              </a>
            </SlideIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
