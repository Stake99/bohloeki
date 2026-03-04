/**
 * Sections Demo Page
 * Demonstrates all section components created in tasks 9.1-9.7
 */

import {
  Hero,
  StatsSection,
  ServicesOverview,
  ValueCards,
  ImpactMetrics,
  ContactForm,
} from '@/components/sections';

export default function SectionsDemoPage() {
  // Sample data for StatsSection
  const stats = [
    { value: 24000, suffix: 'L', label: 'Monthly Production' },
    { value: 60, suffix: '+', label: 'Suppliers' },
    { value: 100000, suffix: 'L', label: 'Growth Projection' },
  ];

  // Sample data for ServicesOverview
  const services = [
    {
      id: 'tire-collection',
      title: 'Waste Tire Collection',
      description:
        'Comprehensive tire collection and recycling services for businesses and communities.',
      icon: <span className="text-5xl">♻️</span>,
      benefits: [
        'Free collection service',
        'Environmentally responsible disposal',
        'Compliance with regulations',
      ],
      environmentalImpact: 'Prevents tire waste from polluting the environment',
    },
    {
      id: 'burner-oil',
      title: 'Industrial Burner Oil',
      description:
        'High-quality burner oil produced from recycled materials for industrial applications.',
      icon: <span className="text-5xl">🔥</span>,
      benefits: [
        'Cost-effective fuel solution',
        'Consistent quality',
        'Sustainable alternative',
      ],
      environmentalImpact: 'Reduces reliance on virgin petroleum products',
    },
    {
      id: 'liquid-waste',
      title: 'Liquid Waste Disposal',
      description:
        'Safe disposal of used engine oil, hydraulic oil, and other petroleum products.',
      icon: <span className="text-5xl">🛢️</span>,
      benefits: [
        'Safe handling procedures',
        'Proper waste management',
        'Environmental protection',
      ],
      environmentalImpact: 'Prevents contamination of soil and water',
    },
  ];

  // Sample data for ValueCards
  const values = [
    {
      id: 'job-creation',
      title: 'Job Creation',
      description:
        'Creating employment opportunities for local communities and contributing to economic growth.',
      icon: <span className="text-5xl">👥</span>,
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'Pioneering sustainable waste management solutions through innovative technology and processes.',
      icon: <span className="text-5xl">💡</span>,
    },
    {
      id: 'economic-development',
      title: 'Economic Development',
      description:
        'Supporting local economic development through sustainable business practices.',
      icon: <span className="text-5xl">📈</span>,
    },
  ];

  // Sample data for ImpactMetrics
  const metrics = [
    {
      id: 'waste-reduced',
      category: 'environmental' as const,
      value: '500+',
      label: 'Tons of Waste Reduced',
      description: 'Annual waste diverted from landfills',
    },
    {
      id: 'co2-prevented',
      category: 'environmental' as const,
      value: '75%',
      label: 'CO2 Emissions Prevented',
      description: 'Compared to traditional disposal methods',
    },
    {
      id: 'jobs-created',
      category: 'social' as const,
      value: '50+',
      label: 'Jobs Created',
      description: 'Direct and indirect employment',
    },
    {
      id: 'suppliers',
      category: 'social' as const,
      value: '60',
      label: 'Suppliers Supported',
      description: 'Active supplier network in Maseru',
    },
    {
      id: 'local-sourcing',
      category: 'economic' as const,
      value: '90%',
      label: 'Local Sourcing',
      description: 'Materials sourced from local suppliers',
    },
    {
      id: 'economic-impact',
      category: 'economic' as const,
      value: 'M2.5',
      label: 'Economic Impact',
      description: 'Annual contribution to local economy',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero
        headline="Turning Waste Into Sustainable Energy"
        subheadline="Leading eco-friendly waste management and industrial burner oil production in Lesotho"
        ctaText="Get in Touch"
        ctaHref="#contact"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Stats Section */}
      <StatsSection
        stats={stats}
        title="Our Impact in Numbers"
        description="Transforming waste into value for businesses and communities"
      />

      {/* Services Overview */}
      <ServicesOverview services={services} variant="grid" />

      {/* Value Cards */}
      <ValueCards values={values} />

      {/* Impact Metrics */}
      <ImpactMetrics metrics={metrics} groupByCategory={true} />

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
