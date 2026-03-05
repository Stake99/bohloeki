import Link from 'next/link';
import { companyInfo, navigationLinks } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-primary-forestDark text-white ${className}`}
      role="contentinfo"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Leading the way in sustainable waste management and energy
              production in Lesotho.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-accent-gold transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <address className="text-sm text-neutral-300 not-italic">
                  {companyInfo.address.street}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.country}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 text-accent-gold flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                  className="text-sm text-neutral-300 hover:text-accent-gold transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-5 w-5 text-accent-gold flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-sm text-neutral-300 hover:text-accent-gold transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Business Hours</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>{companyInfo.businessHours.weekdays}</li>
              <li>{companyInfo.businessHours.weekend}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-neutral-400">
              <p>
                &copy; {currentYear} {companyInfo.name}. All rights reserved.
              </p>
              <p className="hidden sm:block">•</p>
              <p>
                Developed by{' '}
                <a
                  href="https://smartmacmane.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold hover:text-accent-goldLight transition-colors font-medium"
                >
                  Smart Macmane
                </a>
              </p>
            </div>
            <p className="text-sm text-neutral-400 text-center md:text-right">
              Committed to environmental sustainability and community
              empowerment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
