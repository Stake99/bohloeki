import React from 'react';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bohloeki Enterprises',
  description: 'Eco-friendly waste management and industrial burner oil producer in Lesotho',
  url: 'https://bohloeki.com',
  logo: 'https://bohloeki.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Maseru',
    addressLocality: 'Maseru',
    addressCountry: 'LS',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+266-XXXX-XXXX',
    email: 'info@bohloeki.com',
    contactType: 'customer service',
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
