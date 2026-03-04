# 🔄 Migration Guide: Upgrading Other Pages to 3D

This guide helps you apply the new 3D-enhanced components to other pages in the Bohloeki website.

---

## 📋 Quick Reference

### Replace Old Components with New

| Old Component | New Component | Location |
|--------------|---------------|----------|
| `Hero` | `Hero3DEnhanced` | `@/components/sections/Hero3DEnhanced` |
| `StatsSection` | `StatsSection3D` | `@/components/sections/StatsSection3D` |
| `ServicesOverview` | `ServicesOverview3D` | `@/components/sections/ServicesOverview3D` |
| `<div>` cards | `GlassCard` | `@/components/ui/GlassCard` |
| `<section>` | `GlassPanel` | `@/components/ui/GlassPanel` |
| `FadeIn` | `ScrollReveal` | `@/components/animations/ScrollReveal` |

---

## 🎯 Step-by-Step Migration

### 1. Update Imports

**Before:**
```tsx
import { Hero, StatsSection, ServicesOverview } from '@/components/sections';
import { FadeIn } from '@/components/animations/FadeIn';
```

**After:**
```tsx
import { Hero3DEnhanced, StatsSection3D, ServicesOverview3D } from '@/components/sections';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard, GlassPanel } from '@/components/ui';
import { MagneticButton } from '@/components/animations/MagneticButton';
```

---

### 2. Upgrade Hero Section

**Before:**
```tsx
<Hero
  headline="Your Headline"
  subheadline="Your subheadline"
  ctaText="Learn More"
  ctaHref="/services"
/>
```

**After:**
```tsx
<Hero3DEnhanced
  headline="Your Headline"
  subheadline="Your subheadline"
  ctaText="Learn More"
  ctaHref="/services"
  show3D={true}  // Enable 3D model
  backgroundImage="/images/background/your-image.jpg"
/>
```

---

### 3. Upgrade Stats Section

**Before:**
```tsx
<StatsSection
  stats={stats}
  title="Our Impact"
  description="Making a difference"
/>
```

**After:**
```tsx
<StatsSection3D
  stats={statsWithDescriptions}  // Add description field
  title="Our Impact"
  description="Making a difference"
/>
```

**Update Stats Data:**
```tsx
const stats = [
  {
    value: 24000,
    suffix: 'L',
    label: 'Monthly Production',
    icon: <Droplet className="w-12 h-12" />,
    description: 'Sustainable burner oil produced monthly',  // NEW
  },
  // ... more stats
];
```

---

### 4. Upgrade Service Cards

**Before:**
```tsx
<div className="bg-gray-50 rounded-xl p-8">
  <h3>Service Title</h3>
  <p>Service description</p>
</div>
```

**After:**
```tsx
<GlassCard hover={true}>
  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
    Service Title
  </h3>
  <p className="text-base text-gray-600 dark:text-gray-300">
    Service description
  </p>
</GlassCard>
```

---

### 5. Upgrade CTA Sections

**Before:**
```tsx
<div className="bg-primary-forest rounded-2xl p-8">
  <h2>Call to Action</h2>
  <Link href="/contact">
    <button>Get Started</button>
  </Link>
</div>
```

**After:**
```tsx
<GlassPanel variant="dark" className="bg-gradient-to-br from-primary-forest to-primary-forestDark">
  <h2 className="text-4xl font-bold text-white mb-6">
    Call to Action
  </h2>
  <MagneticButton>
    <Link
      href="/contact"
      className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-accent-gold text-primary-forestDark hover:bg-accent-goldLight transition-all duration-300 shadow-xl hover:shadow-accent-gold/50"
    >
      Get Started
    </Link>
  </MagneticButton>
</GlassPanel>
```

---

### 6. Add Scroll Animations

**Before:**
```tsx
<FadeIn>
  <div>Content</div>
</FadeIn>
```

**After:**
```tsx
<ScrollReveal direction="up" delay={0.2}>
  <div>Content</div>
</ScrollReveal>
```

**Options:**
- `direction`: 'up', 'down', 'left', 'right'
- `delay`: 0, 0.2, 0.4, etc. (in seconds)
- `duration`: 0.6 (default)

---

### 7. Add Dark Mode Support

**Update Tailwind Classes:**
```tsx
// Before
<div className="bg-white text-gray-900">

// After
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

**Common Patterns:**
```tsx
// Backgrounds
bg-white dark:bg-gray-900
bg-gray-50 dark:bg-gray-800
bg-gray-100 dark:bg-gray-700

// Text
text-gray-900 dark:text-white
text-gray-600 dark:text-gray-300
text-gray-500 dark:text-gray-400

// Borders
border-gray-200 dark:border-gray-700
border-gray-300 dark:border-gray-600
```

---

## 📄 Page-Specific Examples

### About Page

```tsx
import { Hero3DEnhanced } from '@/components/sections/Hero3DEnhanced';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

export default function AboutPage() {
  return (
    <>
      <Hero3DEnhanced
        headline="Our Story"
        subheadline="Building a sustainable future for Lesotho"
        ctaText="Meet Our Team"
        ctaHref="/team"
        show3D={false}  // Optional: disable 3D on this page
      />

      <section className="py-24">
        <Container>
          <ScrollReveal direction="up">
            <GlassCard>
              <h2>About Bohloeki</h2>
              <p>Our mission and vision...</p>
            </GlassCard>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
```

---

### Services Page

```tsx
import { ServicesOverview3D } from '@/components/sections/ServicesOverview3D';

export default function ServicesPage() {
  const services = [
    {
      id: 'tire-collection',
      title: 'Waste Tire Collection',
      description: 'Comprehensive tire collection...',
      icon: <Recycle className="w-12 h-12" />,
      environmentalImpact: 'Reduces landfill waste',
    },
    // ... more services
  ];

  return (
    <>
      <Hero3DEnhanced
        headline="Our Services"
        subheadline="Sustainable solutions for waste management"
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <ServicesOverview3D
        services={services}
        title="What We Offer"
        description="Comprehensive waste management solutions"
      />
    </>
  );
}
```

---

### Contact Page

```tsx
import { GlassPanel } from '@/components/ui/GlassPanel';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function ContactPage() {
  return (
    <>
      <Hero3DEnhanced
        headline="Get in Touch"
        subheadline="Let's build a sustainable future together"
        show3D={false}
      />

      <section className="py-24">
        <Container>
          <ScrollReveal direction="up">
            <GlassPanel variant="light">
              <ContactForm />
            </GlassPanel>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
```

---

## 🎨 Styling Guidelines

### Typography Scale
```tsx
// Headlines
text-5xl sm:text-6xl lg:text-7xl xl:text-8xl

// Subheadings
text-xl sm:text-2xl lg:text-3xl

// Body
text-base lg:text-lg

// Small
text-sm lg:text-base
```

### Spacing
```tsx
// Section padding
py-16 lg:py-24  // Standard
py-24 lg:py-32  // Large

// Container
px-4 sm:px-6 lg:px-8

// Element gaps
gap-6 lg:gap-8   // Standard
gap-8 lg:gap-12  // Large
```

### Colors
```tsx
// Primary
bg-primary-forest
text-primary-forest
border-primary-forest

// Accent
bg-accent-gold
text-accent-gold
border-accent-gold

// Gradients
bg-gradient-to-br from-primary-forest to-primary-forestDark
bg-gradient-to-r from-accent-gold to-accent-goldLight
```

---

## ⚡ Performance Tips

### 1. Lazy Load 3D Components
```tsx
import { lazy, Suspense } from 'react';

const Hero3D = lazy(() => import('@/components/3d/Hero3D'));

<Suspense fallback={<div>Loading...</div>}>
  <Hero3D />
</Suspense>
```

### 2. Optimize Images
```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority  // For above-fold images
  quality={90}
/>
```

### 3. Reduce Motion on Mobile
```tsx
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

<Hero3DEnhanced
  show3D={!isMobile}  // Disable 3D on mobile
/>
```

---

## 🧪 Testing Checklist

After migrating a page:

- [ ] Page loads without errors
- [ ] 3D elements render (if enabled)
- [ ] Animations trigger on scroll
- [ ] Dark mode works correctly
- [ ] Mobile responsive
- [ ] Lighthouse score 90+
- [ ] No console errors
- [ ] Images optimized
- [ ] Links work correctly
- [ ] Forms submit properly

---

## 🐛 Common Issues & Solutions

### Issue: 3D Model Not Showing
**Solution:**
```tsx
// Check if show3D is true
<Hero3DEnhanced show3D={true} />

// Check browser console for WebGL errors
// Try in a different browser
```

### Issue: Animations Not Triggering
**Solution:**
```tsx
// Ensure ScrollReveal is wrapping content
<ScrollReveal direction="up">
  <YourContent />
</ScrollReveal>

// Check if element is in viewport
// Try adjusting delay prop
```

### Issue: Dark Mode Not Working
**Solution:**
```tsx
// Add dark: prefix to all color classes
className="bg-white dark:bg-gray-900"

// Check if DarkModeToggle is in Header
// Clear localStorage and refresh
```

### Issue: Glass Effect Not Visible
**Solution:**
```tsx
// Ensure backdrop-blur is supported
// Check if background has content behind it
// Try adjusting opacity values
```

---

## 📚 Additional Resources

- [Full 3D Upgrade Guide](./3D-UPGRADE-GUIDE.md)
- [Quick Start Guide](./QUICK-START-3D.md)
- [Features Summary](./3D-FEATURES-SUMMARY.md)
- [Component Documentation](./components/)

---

## 🎯 Migration Priority

1. **High Priority** (Do First)
   - Homepage (✅ Already done)
   - About page
   - Services page

2. **Medium Priority**
   - Contact page
   - Impact page
   - Partners page

3. **Low Priority**
   - Operations page
   - Demo pages

---

## 💡 Pro Tips

1. **Start Small**: Migrate one section at a time
2. **Test Often**: Check after each change
3. **Use Git**: Commit after each successful migration
4. **Mobile First**: Test on mobile devices
5. **Performance**: Monitor Lighthouse scores
6. **Consistency**: Use same patterns across pages

---

**Happy Migrating! 🚀**

Transform your pages into immersive 3D experiences one component at a time.
