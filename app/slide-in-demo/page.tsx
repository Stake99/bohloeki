import { SlideIn } from '@/components/animations/SlideIn';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function SlideInDemoPage() {
  return (
    <main>
      <Section background="white" spacing="lg">
        <Container size="lg">
          <h1 className="text-4xl font-bold mb-8 text-center">
            SlideIn Animation Demo
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Scroll down to see elements slide in from different directions
          </p>

          {/* Slide from bottom (default) */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Slide Up (Default)</h2>
            <SlideIn>
              <Card padding="lg" hoverable>
                <h3 className="text-xl font-semibold mb-2">Card sliding up</h3>
                <p className="text-gray-600">
                  This card slides up from the bottom with opacity fade-in.
                </p>
              </Card>
            </SlideIn>
          </div>

          {/* Slide from top */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Slide Down</h2>
            <SlideIn direction="down">
              <Card padding="lg" hoverable>
                <h3 className="text-xl font-semibold mb-2">Card sliding down</h3>
                <p className="text-gray-600">
                  This card slides down from the top with opacity fade-in.
                </p>
              </Card>
            </SlideIn>
          </div>

          {/* Slide from right */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Slide Left</h2>
            <SlideIn direction="left">
              <Card padding="lg" hoverable>
                <h3 className="text-xl font-semibold mb-2">Card sliding left</h3>
                <p className="text-gray-600">
                  This card slides in from the right with opacity fade-in.
                </p>
              </Card>
            </SlideIn>
          </div>

          {/* Slide from left */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Slide Right</h2>
            <SlideIn direction="right">
              <Card padding="lg" hoverable>
                <h3 className="text-xl font-semibold mb-2">Card sliding right</h3>
                <p className="text-gray-600">
                  This card slides in from the left with opacity fade-in.
                </p>
              </Card>
            </SlideIn>
          </div>

          {/* Multiple cards with stagger */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Staggered Animation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SlideIn delay={0}>
                <Card padding="md" hoverable>
                  <h3 className="text-lg font-semibold mb-2">First</h3>
                  <p className="text-gray-600">No delay</p>
                </Card>
              </SlideIn>
              <SlideIn delay={0.1}>
                <Card padding="md" hoverable>
                  <h3 className="text-lg font-semibold mb-2">Second</h3>
                  <p className="text-gray-600">0.1s delay</p>
                </Card>
              </SlideIn>
              <SlideIn delay={0.2}>
                <Card padding="md" hoverable>
                  <h3 className="text-lg font-semibold mb-2">Third</h3>
                  <p className="text-gray-600">0.2s delay</p>
                </Card>
              </SlideIn>
            </div>
          </div>

          {/* Custom duration */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Custom Duration</h2>
            <SlideIn duration={1.2}>
              <Card padding="lg" hoverable>
                <h3 className="text-xl font-semibold mb-2">Slow animation</h3>
                <p className="text-gray-600">
                  This card has a longer animation duration (1.2s).
                </p>
              </Card>
            </SlideIn>
          </div>

          {/* Custom threshold */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Custom Threshold</h2>
            <SlideIn threshold={0.5}>
              <Card padding="lg" hoverable>
                <h3 className="text-xl font-semibold mb-2">
                  Triggers at 50% visibility
                </h3>
                <p className="text-gray-600">
                  This card only animates when 50% of it is visible in the
                  viewport.
                </p>
              </Card>
            </SlideIn>
          </div>
        </Container>
      </Section>
    </main>
  );
}
