import { FadeIn } from '@/components/animations';
import { Container } from '@/components/ui';

export default function FadeInDemoPage() {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-8">FadeIn Component Demo</h1>
        
        <div className="space-y-16">
          <FadeIn>
            <div className="p-8 bg-primary-forest text-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Default FadeIn</h2>
              <p>This element fades in when it enters the viewport with default settings.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-8 bg-primary-forestLight text-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4">FadeIn with Delay</h2>
              <p>This element has a 0.2s delay before fading in.</p>
            </div>
          </FadeIn>

          <FadeIn duration={1.2}>
            <div className="p-8 bg-accent-gold text-neutral-black rounded-lg">
              <h2 className="text-2xl font-bold mb-4">FadeIn with Custom Duration</h2>
              <p>This element takes 1.2 seconds to fade in (slower animation).</p>
            </div>
          </FadeIn>

          <FadeIn threshold={0.5}>
            <div className="p-8 bg-neutral-gray-700 text-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4">FadeIn with Higher Threshold</h2>
              <p>This element only triggers when 50% of it is visible in the viewport.</p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Multiple Elements</h2>
            {[1, 2, 3, 4, 5].map((num) => (
              <FadeIn key={num} delay={num * 0.1}>
                <div className="p-6 bg-neutral-gray-100 rounded-lg border-2 border-primary-forest">
                  <h3 className="text-xl font-semibold mb-2">Card {num}</h3>
                  <p>This card has a staggered delay of {num * 0.1}s</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="p-8 bg-neutral-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Reduced Motion Support</h2>
            <p className="mb-4">
              The FadeIn component respects the user&apos;s <code>prefers-reduced-motion</code> setting.
              If enabled, animations will be instant (duration and delay set to 0).
            </p>
            <p className="text-sm text-neutral-gray-600">
              To test: Enable &quot;Reduce motion&quot; in your system accessibility settings.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
