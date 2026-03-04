import { generatePageMetadata } from '@/lib/metadata';
import { Hero, StatsSection, ServicesOverview } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { productionMetrics } from '@/lib/constants';
import { Recycle, Droplet, Trash2, Leaf, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Bohloeki Enterprises | Turning Waste Into Sustainable Energy',
  description:
    'Leading eco-friendly waste management and industrial burner oil producer in Lesotho. 24,000 liters monthly production, 60 suppliers, expanding to 100,000L capacity.',
  path: '/',
  keywords: [
    'waste management Lesotho',
    'sustainable energy',
    'tire recycling',
    'industrial burner oil',
    'waste to energy',
  ],
});

export default function Home() {
  const stats = [
    {
      value: productionMetrics.currentMonthlyProduction,
      suffix: 'L',
      label: 'Monthly Production',
      icon: <Droplet className="w-12 h-12" />,
    },
    {
      value: productionMetrics.supplierCount,
      label: 'Active Suppliers',
      icon: <Recycle className="w-12 h-12" />,
    },
    {
      value: productionMetrics.projectedProduction,
      suffix: 'L',
      label: 'Growth Projection',
      icon: <Trash2 className="w-12 h-12" />,
    },
  ];

  const services = [
    {
      id: 'tire-collection',
      title: 'Waste Tire Collection',
      description:
        'Comprehensive tire collection and recycling services across Lesotho, turning waste into valuable resources.',
      icon: <Recycle className="w-12 h-12" />,
      environmentalImpact: 'Reduces landfill waste and prevents environmental pollution',
    },
    {
      id: 'burner-oil',
      title: 'Industrial Burner Oil',
      description:
        'High-quality industrial burner oil produced from recycled materials, providing sustainable energy solutions.',
      icon: <Droplet className="w-12 h-12" />,
      environmentalImpact: 'Clean-burning alternative to traditional fuels',
    },
    {
      id: 'waste-disposal',
      title: 'Liquid Waste Disposal',
      description:
        'Safe disposal and recycling of used engine oil, hydraulic oil, contaminated diesel, and other petroleum products.',
      icon: <Trash2 className="w-12 h-12" />,
      environmentalImpact: 'Prevents soil and water contamination',
    },
  ];

  return (
    <>
      <Hero
        headline="Turning Waste Into Sustainable Energy"
        subheadline="Leading eco-friendly waste management and industrial burner oil production in Lesotho"
        ctaText="Learn More About Our Services"
        ctaHref="/services"
        backgroundImage="/images/background/waste management pictures for website backgrounds.jpg"
      />

      <StatsSection
        stats={stats}
        title="Our Impact in Numbers"
        description="Driving sustainable growth through innovation and community partnership"
      />

      <ServicesOverview services={services} variant="grid" />

      {/* Sustainability Commitment Section */}
      <Section spacing="lg" background="gradient">
        <Container size="lg">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedIcon variant="float" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Committed to Sustainability
              </h2>
              <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
                At Bohloeki, we believe in creating a cleaner, greener future for Lesotho. 
                Our innovative waste-to-energy solutions not only protect the environment 
                but also create jobs and empower local communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SlideIn delay={0.3} direction="up">
                  <Link
                    href="/impact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-white text-primary-forest hover:bg-gray-100 hover:scale-105 transition-all duration-200"
                  >
                    View Our Impact
                  </Link>
                </SlideIn>
                <SlideIn delay={0.5} direction="up">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-forest hover:scale-105 transition-all duration-200"
                  >
                    Our Story
                  </Link>
                </SlideIn>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Value Proposition Cards */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Bohloeki
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leading the way in sustainable waste management and energy production
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideIn delay={0.2} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedIcon variant="pulse" delay={0.3} className="inline-block mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                </AnimatedIcon>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Environmental Impact
                </h3>
                <p className="text-base text-gray-600">
                  Reducing waste, preventing pollution, and protecting Lesotho&apos;s natural resources
                </p>
              </div>
            </SlideIn>

            <SlideIn delay={0.4} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedIcon variant="bounce" delay={0.5} className="inline-block mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </AnimatedIcon>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community Empowerment
                </h3>
                <p className="text-base text-gray-600">
                  Creating jobs, supporting suppliers, and building sustainable livelihoods
                </p>
              </div>
            </SlideIn>

            <SlideIn delay={0.6} direction="up">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedIcon variant="swing" delay={0.7} className="inline-block mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-forest rounded-full">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </AnimatedIcon>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sustainable Growth
                </h3>
                <p className="text-base text-gray-600">
                  Expanding operations to serve all of Lesotho with clean energy solutions
                </p>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container size="lg">
          <SlideIn direction="up">
            <div className="bg-primary-forest rounded-2xl p-8 lg:p-12 text-center hover:shadow-2xl transition-shadow duration-300">
              <AnimatedIcon variant="scale" className="inline-block mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
              </AnimatedIcon>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Partner With Us
              </h2>
              <p className="text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Join our growing network of suppliers and partners. Together, we can 
                build a sustainable future for Lesotho.
              </p>
              <SlideIn delay={0.3} direction="up">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-white text-primary-forest hover:bg-gray-100 hover:scale-105 transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </SlideIn>
            </div>
          </SlideIn>
        </Container>
      </Section>
    </>
  );
}
