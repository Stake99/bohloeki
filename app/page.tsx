import { generatePageMetadata } from '@/lib/metadata';
import dynamic from 'next/dynamic';
import { WhyChooseBohloeki } from '@/components/sections/WhyChooseBohloeki';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { productionMetrics } from '@/lib/constants';
import { Recycle, Droplet, Trash2, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Dynamic imports for 3D components to prevent SSR issues
const Hero3DEnhanced = dynamic(
  () => import('@/components/sections/Hero3DEnhanced').then(mod => ({ default: mod.Hero3DEnhanced })),
  { ssr: false }
);

const StatsSection3D = dynamic(
  () => import('@/components/sections/StatsSection3D').then(mod => ({ default: mod.StatsSection3D })),
  { ssr: false }
);

const ServicesOverview3D = dynamic(
  () => import('@/components/sections/ServicesOverview3D').then(mod => ({ default: mod.ServicesOverview3D })),
  { ssr: false }
);

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
      description: 'Sustainable burner oil produced monthly',
    },
    {
      value: productionMetrics.supplierCount,
      label: 'Active Suppliers',
      icon: <Recycle className="w-12 h-12" />,
      description: 'Community partners across Lesotho',
    },
    {
      value: productionMetrics.projectedProduction,
      suffix: 'L',
      label: 'Growth Projection',
      icon: <Trash2 className="w-12 h-12" />,
      description: 'Expanding capacity for greater impact',
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
      id: 'plastic-recycling',
      title: 'Plastic Recycling',
      description:
        'Collection and recycling of plastic waste, transforming discarded plastics into reusable materials for a circular economy.',
      icon: <Recycle className="w-12 h-12" />,
      environmentalImpact: 'Reduces plastic pollution and promotes sustainable waste management',
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
      <Hero3DEnhanced
        headline="Turning Waste Into Sustainable Energy"
        subheadline="Leading eco-friendly waste management and industrial burner oil production in Lesotho"
        ctaText="Explore Our Services"
        ctaHref="/services"
        backgroundImage="/images/background/waste management pictures for website backgrounds, with tires as plantation containers.jpg"
        show3D={true}
      />

      <StatsSection3D
        stats={stats}
        title="Our Impact in Numbers"
        description="Driving sustainable growth through innovation and community partnership"
      />

      <ServicesOverview3D
        services={services}
        title="Sustainable Solutions"
        description="Transforming waste into valuable resources for a cleaner future"
      />

      {/* Sustainability Commitment Section with Parallax */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/background/waste management pictures for website backgrounds, with tires.jpg"
            alt="Sustainability commitment"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Content */}
        <Container size="lg" className="relative z-10">
          <ScrollReveal direction="up">
            <GlassPanel variant="dark" className="text-center max-w-4xl mx-auto">
              <AnimatedIcon variant="float" className="inline-block mb-8">
                <div className="flex items-center justify-center w-20 h-20 bg-accent-gold/20 rounded-full backdrop-blur-sm border-2 border-accent-gold/30">
                  <Leaf className="w-10 h-10 text-accent-gold" />
                </div>
              </AnimatedIcon>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Committed to Sustainability
              </h2>
              <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed">
                At Bohloeki, we believe in creating a cleaner, greener future for Lesotho. 
                Our innovative waste-to-energy solutions not only protect the environment 
                but also create jobs and empower local communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton>
                  <Link
                    href="/impact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-accent-gold text-primary-forestDark hover:bg-accent-goldLight transition-all duration-300 shadow-lg hover:shadow-accent-gold/50"
                  >
                    View Our Impact
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    Our Story
                  </Link>
                </MagneticButton>
              </div>
            </GlassPanel>
          </ScrollReveal>
        </Container>
      </section>

      {/* Why Choose Bohloeki - Cinematic Parallax Timeline */}
      <WhyChooseBohloeki />

      {/* CTA Section with Magnetic Effect */}
      <Section spacing="lg">
        <Container size="lg">
          <ScrollReveal direction="up">
            <GlassPanel variant="dark" className="text-center bg-gradient-to-br from-primary-forest to-primary-forestDark">
              <AnimatedIcon variant="scale" className="inline-block mb-8">
                <div className="flex items-center justify-center w-20 h-20 bg-accent-gold/20 rounded-full border-2 border-accent-gold/30">
                  <Recycle className="w-10 h-10 text-accent-gold" />
                </div>
              </AnimatedIcon>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Partner With Us
              </h2>
              <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join our growing network of suppliers and partners. Together, we can 
                build a sustainable future for Lesotho.
              </p>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-accent-gold text-primary-forestDark hover:bg-accent-goldLight transition-all duration-300 shadow-xl hover:shadow-accent-gold/50"
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </GlassPanel>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
