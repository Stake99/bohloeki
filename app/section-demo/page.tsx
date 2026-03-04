/**
 * Section Component Demo Page
 * Demonstrates all Section component variants and spacing options
 */

import { Section, Container } from '@/components/ui';

export default function SectionDemoPage() {
  return (
    <main>
      {/* White background with medium spacing */}
      <Section background="white" spacing="md">
        <Container>
          <h2 className="text-3xl font-bold mb-4">White Background - Medium Spacing</h2>
          <p className="text-lg">
            This section demonstrates the default white background with medium spacing (4rem / 64px).
          </p>
        </Container>
      </Section>

      {/* Gray background with small spacing */}
      <Section background="gray" spacing="sm">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Gray Background - Small Spacing</h2>
          <p className="text-lg">
            This section uses a gray background with small spacing (2rem / 32px).
          </p>
        </Container>
      </Section>

      {/* Dark background with large spacing */}
      <Section background="dark" spacing="lg">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Dark Background - Large Spacing</h2>
          <p className="text-lg">
            This section features a dark background with large spacing (6rem / 96px).
          </p>
        </Container>
      </Section>

      {/* Gradient background with extra large spacing */}
      <Section background="gradient" spacing="xl">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Gradient Background - Extra Large Spacing</h2>
          <p className="text-lg">
            This section showcases a gradient background with extra large spacing (8rem / 128px).
          </p>
        </Container>
      </Section>

      {/* Responsive padding demonstration */}
      <Section background="white" spacing="md">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Responsive Padding</h2>
          <p className="text-lg mb-4">
            The Section component includes responsive vertical padding:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Mobile: py-12 (48px)</li>
            <li>Tablet: py-16 (64px)</li>
            <li>Desktop: py-24 (96px)</li>
          </ul>
        </Container>
      </Section>
    </main>
  );
}
