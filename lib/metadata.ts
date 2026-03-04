import { Metadata } from 'next';

export interface PageMetadataConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata(config: PageMetadataConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bohloeki.com';
  const fullUrl = `${baseUrl}${config.path}`;
  const ogImage = config.ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: 'Bohloeki Enterprises',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
