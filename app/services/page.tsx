import { generatePageMetadata } from '@/lib/metadata';
import { ServicesOverview } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Recycle, Droplet, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generatePageMetadata({
  title: 'Our Services | Bohloeki Enterprises',
  description:
    'Comprehensive waste management services in Lesotho: tire collection & recycling, industrial burner oil production, and liquid waste disposal.',
  path: '/services',
  keywords: [
    'tire recycling Lesotho',
    'industrial burner oil',
    'waste disposal',
    'engine oil recycling',
    'hydraulic oil disposal',
  ],
});

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
      {/* Page Header with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/man-collecting-scattered-plastic-bottles-from-ground.jpg"
            alt="Waste collection services"
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
                Our Services
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed">
                Comprehensive waste management and energy production solutions 
                designed to protect the environment and serve Lesotho&apos;s industries
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Services Overview */}
      <ServicesOverview services={services} variant="grid" />

      {/* Why Choose Us Section */}
      <Section spacing="lg" background="gray">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Bohloeki?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine environmental responsibility with reliable service delivery
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Local Expertise
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Deep understanding of Lesotho&apos;s waste management needs and 
                  environmental challenges, with operations rooted in local communities.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proven Track Record
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Successfully producing 24,000 liters monthly with 60 active suppliers, 
                  demonstrating reliability and consistent quality.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Environmental Commitment
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Every service we provide contributes to environmental protection, 
                  waste reduction, and sustainable energy production.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community Impact
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Creating jobs, supporting local suppliers, and contributing to 
                  economic development across Lesotho.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Rigorous quality control processes ensure consistent, high-grade 
                  industrial burner oil that meets industry standards.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Growth Vision
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Expanding to 100,000L monthly capacity with countrywide operations, 
                  positioning for long-term partnership and service reliability.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container size="lg">
          <FadeIn>
            <div className="bg-primary-forest rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Ready to Work With Us?
              </h2>
              <p className="text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our services or to discuss 
                how we can meet your waste management and energy needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white text-primary-forest font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/partners"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Become a Supplier
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
