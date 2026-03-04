/**
 * Card Component Demo Page
 * Demonstrates all Card component variants and options
 */

import { Card } from '@/components/ui/Card';

export default function CardDemoPage() {
  return (
    <div className="min-h-screen bg-neutral-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Card Component Demo</h1>
          <p className="text-neutral-gray-600">
            Showcasing all variants, padding options, and hover effects
          </p>
        </div>

        {/* Variants Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <h3 className="text-xl font-semibold mb-2">Default Card</h3>
              <p className="text-neutral-gray-600">
                White background with subtle border
              </p>
            </Card>

            <Card variant="elevated">
              <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
              <p className="text-neutral-gray-600">
                White background with shadow
              </p>
            </Card>

            <Card variant="outlined">
              <h3 className="text-xl font-semibold mb-2">Outlined Card</h3>
              <p className="text-neutral-gray-600">
                Transparent background with forest green border
              </p>
            </Card>
          </div>
        </section>

        {/* Padding Options Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Padding Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" padding="none">
              <div className="bg-neutral-gray-100 p-4">
                <h3 className="text-xl font-semibold mb-2">No Padding</h3>
                <p className="text-neutral-gray-600">
                  Content goes edge to edge
                </p>
              </div>
            </Card>

            <Card variant="elevated" padding="sm">
              <h3 className="text-xl font-semibold mb-2">Small Padding</h3>
              <p className="text-neutral-gray-600">p-4 (16px)</p>
            </Card>

            <Card variant="elevated" padding="md">
              <h3 className="text-xl font-semibold mb-2">Medium Padding</h3>
              <p className="text-neutral-gray-600">
                p-6 md:p-8 (24px / 32px)
              </p>
            </Card>

            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold mb-2">Large Padding</h3>
              <p className="text-neutral-gray-600">
                p-8 md:p-12 (32px / 48px)
              </p>
            </Card>
          </div>
        </section>

        {/* Hoverable Cards Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Hoverable Cards</h2>
          <p className="text-neutral-gray-600 mb-4">
            Hover over these cards to see the effect
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" hoverable>
              <h3 className="text-xl font-semibold mb-2">Hoverable Default</h3>
              <p className="text-neutral-gray-600">
                Scales and adds shadow on hover
              </p>
            </Card>

            <Card variant="elevated" hoverable>
              <h3 className="text-xl font-semibold mb-2">
                Hoverable Elevated
              </h3>
              <p className="text-neutral-gray-600">
                Enhanced shadow on hover
              </p>
            </Card>

            <Card variant="outlined" hoverable>
              <h3 className="text-xl font-semibold mb-2">
                Hoverable Outlined
              </h3>
              <p className="text-neutral-gray-600">
                Scales and adds shadow on hover
              </p>
            </Card>
          </div>
        </section>

        {/* Complex Content Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Complex Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" hoverable>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-forest rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Waste Tire Collection
                  </h3>
                  <p className="text-neutral-gray-600 mb-4">
                    We collect waste tires from suppliers across Maseru and
                    process them into industrial burner oil.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-gray-600">
                    <li>✓ 60+ active suppliers</li>
                    <li>✓ 24,000 liters per month</li>
                    <li>✓ Environmentally sustainable</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card variant="outlined" padding="lg" hoverable>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-forest mb-2">
                  100,000L
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Growth Projection
                </h3>
                <p className="text-neutral-gray-600">
                  Our target monthly production capacity as we expand
                  countrywide
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
