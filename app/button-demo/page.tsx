/**
 * Button Component Demo Page
 * Visual demonstration of all Button component variants, sizes, and states
 */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function ButtonDemoPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Sample icons
  const LeftArrow = () => <span>←</span>;
  const RightArrow = () => <span>→</span>;
  const PlusIcon = () => <span>+</span>;

  return (
    <div className="min-h-screen bg-neutral-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Button Component Demo</h1>

        {/* Variants Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </section>

        {/* Loading State Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Loading State</h2>
          <div className="flex flex-wrap gap-4">
            <Button isLoading>Loading Button</Button>
            <Button variant="secondary" isLoading>
              Loading Secondary
            </Button>
            <Button variant="outline" onClick={handleLoadingClick} isLoading={isLoading}>
              Click to Load
            </Button>
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<LeftArrow />}>Back</Button>
            <Button rightIcon={<RightArrow />}>Next</Button>
            <Button leftIcon={<PlusIcon />} variant="secondary">
              Add Item
            </Button>
            <Button leftIcon={<LeftArrow />} rightIcon={<RightArrow />} variant="outline">
              Both Icons
            </Button>
          </div>
        </section>

        {/* Disabled State Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Disabled State</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
            <Button variant="ghost" disabled>
              Disabled Ghost
            </Button>
          </div>
        </section>

        {/* Combined Examples Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Combined Examples</h2>
          <div className="flex flex-wrap gap-4">
            <Button size="sm" leftIcon={<PlusIcon />}>
              Small with Icon
            </Button>
            <Button size="lg" variant="secondary" rightIcon={<RightArrow />}>
              Large Secondary
            </Button>
            <Button variant="outline" size="sm">
              Small Outline
            </Button>
            <Button variant="ghost" size="lg">
              Large Ghost
            </Button>
          </div>
        </section>

        {/* Hover Animation Demo */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Hover Animations</h2>
          <p className="text-neutral-gray-600 mb-4">
            Hover over these buttons to see smooth transitions (200ms duration)
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Hover Primary</Button>
            <Button variant="secondary">Hover Secondary</Button>
            <Button variant="outline">Hover Outline</Button>
            <Button variant="ghost">Hover Ghost</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
