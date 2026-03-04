import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function LayoutDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section with background to test header transparency */}
      <div className="bg-primary-forest text-white pt-32 pb-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Layout Components Demo
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
            Testing the Header, MobileMenu, and Footer components with sticky
            positioning, scroll effects, and responsive behavior.
          </p>
        </div>
      </div>

      {/* Content sections to test scroll behavior */}
      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-forest mb-6">
              Header Features
            </h2>
            <ul className="space-y-3 text-neutral-700">
              <li>✓ Sticky positioning that stays at top during scroll</li>
              <li>✓ Transparent background at top, solid on scroll</li>
              <li>✓ Desktop horizontal navigation (visible on large screens)</li>
              <li>✓ Mobile hamburger menu (visible on small screens)</li>
              <li>✓ Active link highlighting based on current route</li>
              <li>✓ ARIA labels for accessibility</li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-forest mb-6">
              MobileMenu Features
            </h2>
            <ul className="space-y-3 text-neutral-700">
              <li>✓ Slide-in animation from right using Framer Motion</li>
              <li>✓ Full-screen overlay with backdrop</li>
              <li>✓ Close on link click</li>
              <li>✓ Close on outside click</li>
              <li>✓ Close on Escape key press</li>
              <li>✓ Focus trap when menu is open</li>
              <li>✓ ARIA attributes for accessibility</li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-forest mb-6">
              Footer Features
            </h2>
            <ul className="space-y-3 text-neutral-700">
              <li>✓ Company address, phone, and email with icons</li>
              <li>✓ Quick navigation links</li>
              <li>✓ Mission statement and tagline</li>
              <li>✓ Copyright notice with dynamic year</li>
              <li>✓ Business hours information</li>
              <li>✓ Semantic footer element</li>
              <li>✓ Responsive grid layout</li>
            </ul>
          </div>
        </section>

        {/* Extra content to enable scrolling */}
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-forest mb-6">
              Scroll Test Section
            </h2>
            <p className="text-neutral-700 mb-4">
              Scroll down to see the header background transition from
              transparent to solid white with backdrop blur.
            </p>
            <div className="h-96 bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center">
              <p className="text-neutral-600">Scroll area for testing</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
