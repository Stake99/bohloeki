/**
 * Container Component Demo Page
 * Visual demonstration of the Container component with different sizes
 */

import { Container } from '@/components/ui/Container';

export default function ContainerDemoPage() {
  return (
    <div className="min-h-screen bg-neutral-gray-100 py-12">
      <div className="space-y-12">
        {/* Full width container */}
        <Container size="full">
          <div className="bg-primary-forest text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Full Width Container</h2>
            <p>This container spans the full width with responsive padding.</p>
            <p className="text-sm mt-2 opacity-75">
              Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
            </p>
          </div>
        </Container>

        {/* XL container (default) */}
        <Container size="xl">
          <div className="bg-primary-forest text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">XL Container (Default)</h2>
            <p>Max-width: 1280px with responsive padding.</p>
            <p className="text-sm mt-2 opacity-75">
              Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
            </p>
          </div>
        </Container>

        {/* LG container */}
        <Container size="lg">
          <div className="bg-primary-forest-light text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">LG Container</h2>
            <p>Max-width: 1024px with responsive padding.</p>
            <p className="text-sm mt-2 opacity-75">
              Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
            </p>
          </div>
        </Container>

        {/* MD container */}
        <Container size="md">
          <div className="bg-accent-gold text-neutral-black p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">MD Container</h2>
            <p>Max-width: 768px with responsive padding.</p>
            <p className="text-sm mt-2 opacity-75">
              Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
            </p>
          </div>
        </Container>

        {/* SM container */}
        <Container size="sm">
          <div className="bg-neutral-gray-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">SM Container</h2>
            <p>Max-width: 640px with responsive padding.</p>
            <p className="text-sm mt-2 opacity-75">
              Padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)
            </p>
          </div>
        </Container>

        {/* Nested content example */}
        <Container size="lg">
          <div className="bg-white border-2 border-primary-forest p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-forest">
              Container with Nested Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Feature 1</h3>
                <p className="text-sm text-neutral-gray-600">
                  Containers provide consistent max-width constraints across all pages.
                </p>
              </div>
              <div className="bg-neutral-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Feature 2</h3>
                <p className="text-sm text-neutral-gray-600">
                  Responsive padding adapts to different screen sizes automatically.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
