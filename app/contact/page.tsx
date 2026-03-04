import { generatePageMetadata } from '@/lib/metadata';
import { ContactForm } from '@/components/sections';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { AnimatedIcon } from '@/components/animations/AnimatedIcon';
import { StaggeredList } from '@/components/animations/StaggeredList';
import { companyInfo } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export const metadata = generatePageMetadata({
  title: 'Contact Us | Bohloeki Enterprises',
  description:
    'Get in touch with Bohloeki Enterprises. Contact us for waste management services, supplier inquiries, or partnership opportunities.',
  path: '/contact',
  keywords: [
    'contact Bohloeki',
    'waste management inquiry',
    'supplier inquiry',
    'Lesotho contact',
  ],
});

export default function ContactPage() {
  return (
    <>
      {/* Page Header with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/antoine-giret-7_TSzqJms4w-unsplash.jpg"
            alt="Contact us"
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
                Contact Us
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed">
                Get in touch with us for inquiries about our services, supplier 
                partnerships, or any questions you may have
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <Section spacing="lg" background="white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideIn direction="left">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-base text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </SlideIn>

            {/* Company Information */}
            <SlideIn delay={0.2} direction="right">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Company Information
                </h2>
                <div className="space-y-6">
                  {/* Address */}
                  <SlideIn delay={0.3} direction="up">
                    <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <AnimatedIcon variant="bounce" delay={0.4}>
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Address
                        </h3>
                        <address className="text-base text-gray-600 not-italic leading-relaxed">
                          {companyInfo.address.street}
                          <br />
                          {companyInfo.address.city}, {companyInfo.address.country}
                        </address>
                      </div>
                    </div>
                  </SlideIn>

                  {/* Phone */}
                  <SlideIn delay={0.4} direction="up">
                    <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <AnimatedIcon variant="pulse" delay={0.5}>
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Phone
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {companyInfo.contact.name}
                        </p>
                        <a
                          href={`tel:${companyInfo.contact.phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                          className="text-base text-primary-forest hover:text-primary-forestLight transition-colors hover:underline"
                        >
                          {companyInfo.contact.phone}
                        </a>
                      </div>
                    </div>
                  </SlideIn>

                  {/* Email */}
                  <SlideIn delay={0.5} direction="up">
                    <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <AnimatedIcon variant="float" delay={0.6}>
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Email
                        </h3>
                        <a
                          href={`mailto:${companyInfo.contact.email}`}
                          className="text-base text-primary-forest hover:text-primary-forestLight transition-colors hover:underline"
                        >
                          {companyInfo.contact.email}
                        </a>
                      </div>
                    </div>
                  </SlideIn>

                  {/* Business Hours */}
                  <SlideIn delay={0.6} direction="up">
                    <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <AnimatedIcon variant="swing" delay={0.7}>
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-forest rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      </AnimatedIcon>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Business Hours
                        </h3>
                        <div className="text-base text-gray-600 space-y-1">
                          <p>{companyInfo.businessHours.weekdays}</p>
                          <p>{companyInfo.businessHours.weekend}</p>
                        </div>
                      </div>
                    </div>
                  </SlideIn>
                </div>

                {/* Additional Info Box */}
                <SlideIn delay={0.7} direction="up">
                  <div className="mt-8 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What to Expect
                    </h3>
                    <StaggeredList delay={0.8} staggerDelay={0.1} className="space-y-2">
                      {[
                        'Response within 24 hours during business days',
                        'Professional consultation for your needs',
                        'Transparent pricing and service information',
                      ].map((text) => (
                        <div key={text} className="flex items-start gap-2">
                          <span className="text-primary-forest mt-1">✓</span>
                          <span className="text-sm text-gray-600">{text}</span>
                        </div>
                      ))}
                    </StaggeredList>
                  </div>
                </SlideIn>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

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
