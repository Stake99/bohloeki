import { generatePageMetadata } from '@/lib/metadata';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { Handshake, TrendingUp, DollarSign, Users, MapPin, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generatePageMetadata({
  title: 'Partner With Us | Bohloeki Enterprises',
  description:
    'Join our network of 60 suppliers in Maseru. Partnership opportunities, expansion strategy, and benefits of working with Bohloeki.',
  path: '/partners',
  keywords: [
    'supplier partnership',
    'waste collection partnership',
    'business opportunity Lesotho',
    'supplier network',
  ],
});

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
      {/* Page Header with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/close-up-hand-collecting-bottle.jpg"
            alt="Partnership opportunities"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-forestDark/85 via-primary-forest/75 to-primary-forestDark/90" />
        </div>
        
        <Container size="lg" className="relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
                Partner With Us
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed">
                Join our growing network of suppliers and be part of Lesotho&apos;s 
                sustainable waste management revolution
              </p>
            </div>
          </FadeIn>
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
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
                </div>
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
