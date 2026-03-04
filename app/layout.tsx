import type { Metadata } from 'next';
import { Bad_Script } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/lib/structured-data';

const badScript = Bad_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bad-script',
});

export const metadata: Metadata = {
  title: 'Bohloeki Enterprises | Sustainable Waste Management in Lesotho',
  description:
    'Turning waste into sustainable energy. Eco-friendly waste management and industrial burner oil production in Lesotho, Africa.',
  keywords: [
    'waste management',
    'Lesotho',
    'sustainable energy',
    'tire recycling',
    'industrial burner oil',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={badScript.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={`${badScript.className} bg-black`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
