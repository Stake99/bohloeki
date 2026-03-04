import { generatePageMetadata } from '@/lib/metadata';
import { ImpactMetrics } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { StaggeredList } from '@/components/animations/StaggeredList';
import { Leaf, Users, TrendingUp, Heart, Recycle } from 'lucide-react';
import Image from 'next/image';

export const metadata = generatePageMetadata({
  title: 'Our Impact | Bohloeki Enterprises',
  description:
    'Environmental and social impact: waste reduction, job creation, community empowerment, and sustainable development in Lesotho.',
  path: '/impact',
  keywords: [
    'environmental impact',
    'job creation Lesotho',
    'community empowerment',
    'waste reduction',
    'sustainable development',
  ],
});

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
      {/* Page Header with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/sustainable-travel-concept.jpg"
            alt="Environmental impact"
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
                Our Impact
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed">
                Creating positive change for the environment, communities, and economy of Lesotho
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics metrics={impactMetrics} groupByCategory={true} />

      {/* Waste Reduction Section */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <AnimatedIcon variant="rotate" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Waste Reduction Achievements
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transforming waste into valuable resources
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideIn delay={0.2} direction="left">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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
                      <span className="text-primary-forest mt-1">✓</span>
                      <span className="text-base text-gray-600">{text}</span>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </SlideIn>

            <SlideIn delay={0.4} direction="right">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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
                      <span className="text-primary-forest mt-1">✓</span>
                      <span className="text-base text-gray-600">{text}</span>
                    </div>
                  ))}
                </StaggeredList>
              </div>
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
