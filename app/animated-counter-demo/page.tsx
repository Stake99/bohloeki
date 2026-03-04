/**
 * AnimatedCounter Demo Page
 * Demonstrates the AnimatedCounter component with various configurations
 */

import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AnimatedCounterDemoPage() {
  return (
    <main className="min-h-screen bg-neutral-gray-50">
      <Section spacing="lg">
        <Container size="lg">
          <h1 className="text-4xl font-bold text-neutral-black mb-8">
            AnimatedCounter Component Demo
          </h1>

          {/* Basic Counter */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Basic Counter
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary-forest">
                <AnimatedCounter value={24000} />
              </div>
              <p className="text-neutral-gray-600 mt-2">
                Simple counter from 0 to 24,000
              </p>
            </div>
          </div>

          {/* Counter with Suffix */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Counter with Suffix
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary-forest">
                <AnimatedCounter value={24000} suffix="L" />
              </div>
              <p className="text-neutral-gray-600 mt-2">
                Monthly production in liters
              </p>
            </div>
          </div>

          {/* Counter with Prefix */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Counter with Prefix
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary-forest">
                <AnimatedCounter value={100000} prefix="$" />
              </div>
              <p className="text-neutral-gray-600 mt-2">
                Revenue projection
              </p>
            </div>
          </div>

          {/* Counter with Decimals */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Counter with Decimals
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary-forest">
                <AnimatedCounter value={98.5} decimals={1} suffix="%" />
              </div>
              <p className="text-neutral-gray-600 mt-2">
                Efficiency rate
              </p>
            </div>
          </div>

          {/* Multiple Counters in Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Statistics Grid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-forest mb-2">
                  <AnimatedCounter value={24000} suffix="L" />
                </div>
                <p className="text-neutral-gray-600">Monthly Production</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-forest mb-2">
                  <AnimatedCounter value={60} suffix="+" />
                </div>
                <p className="text-neutral-gray-600">Suppliers</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary-forest mb-2">
                  <AnimatedCounter value={100000} suffix="L" />
                </div>
                <p className="text-neutral-gray-600">Growth Projection</p>
              </div>
            </div>
          </div>

          {/* Custom Duration */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Custom Animation Duration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-forest mb-2">
                  <AnimatedCounter value={1000} duration={1000} />
                </div>
                <p className="text-neutral-gray-600">Fast (1 second)</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary-forest mb-2">
                  <AnimatedCounter value={1000} duration={3000} />
                </div>
                <p className="text-neutral-gray-600">Slow (3 seconds)</p>
              </div>
            </div>
          </div>

          {/* Viewport Trigger Test */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-black mb-4">
              Viewport Trigger Test
            </h2>
            <p className="text-neutral-gray-600 mb-4">
              Scroll down to see the counter animate when it enters the viewport
            </p>
            <div style={{ height: '100vh' }} className="flex items-center justify-center bg-neutral-gray-100 rounded-lg">
              <p className="text-neutral-gray-500">Scroll down ↓</p>
            </div>
            <div className="bg-white p-12 rounded-lg shadow-md text-center mt-8">
              <div className="text-6xl font-bold text-primary-forest mb-4">
                <AnimatedCounter value={50000} suffix="+" />
              </div>
              <p className="text-neutral-gray-600">
                This counter animates when it enters the viewport
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
