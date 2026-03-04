# 🎨 Component Showcase

Visual guide to all new 3D-enhanced components with usage examples.

---

## 🎭 3D Components

### Scene3D
**Base 3D canvas wrapper for all 3D content**

```tsx
import { Scene3D } from '@/components/3d';

<Scene3D>
  {/* Your 3D content here */}
</Scene3D>
```

**Features:**
- Optimized Canvas setup
- Suspense boundaries
- Performance settings
- Alpha transparency

---

### TireModel
**Interactive 3D tire that responds to mouse movement**

```tsx
import { TireModel } from '@/components/3d';

<Scene3D>
  <TireModel mouseX={0.5} mouseY={0.3} />
</Scene3D>
```

**Features:**
- Mouse-responsive rotation
- Metallic materials
- Gold accent lighting
- Smooth animations

**Props:**
- `mouseX`: number (-1 to 1)
- `mouseY`: number (-1 to 1)

---

### OilDroplet
**Animated morphing oil droplet**

```tsx
import { OilDroplet } from '@/components/3d';

<Scene3D>
  <OilDroplet />
</Scene3D>
```

**Features:**
- Floating animation
- Morphing shape
- Reflective material
- Highlight sphere

---

### FloatingGeometry
**Background 3D shapes for atmosphere**

```tsx
import { FloatingGeometry } from '@/components/3d';

<Scene3D>
  <FloatingGeometry 
    position={[-3, 2, -2]} 
    color="#D4AF37" 
    size={0.3} 
    speed={0.5} 
  />
</Scene3D>
```

**Props:**
- `position`: [x, y, z]
- `color`: string (hex)
- `size`: number
- `speed`: number

---

### Hero3D
**Complete 3D hero scene with tire and floating elements**

```tsx
import { Hero3D } from '@/components/3d';

<div className="relative h-screen">
  <Hero3D />
</div>
```

**Features:**
- Auto mouse tracking
- Multiple floating shapes
- Performance detection
- Auto-disable on mobile

---

## ✨ Animation Components

### ScrollReveal
**Reveal elements on scroll with direction**

```tsx
import { ScrollReveal } from '@/components/animations';

<ScrollReveal direction="up" delay={0.2} duration={0.6}>
  <div>Content reveals on scroll</div>
</ScrollReveal>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right'
- `delay`: number (seconds)
- `duration`: number (seconds)
- `className`: string

**Use Cases:**
- Section headings
- Card grids
- Feature lists
- Call-to-actions

---

### ParallaxLayer
**Create depth with parallax scrolling**

```tsx
import { ParallaxLayer } from '@/components/animations';

<ParallaxLayer speed={0.5}>
  <div>Scrolls at 50% speed</div>
</ParallaxLayer>
```

**Props:**
- `speed`: number (0-1, lower = slower)
- `className`: string

**Use Cases:**
- Background images
- Decorative elements
- Section backgrounds
- Hero content

---

### MagneticButton
**Button that follows cursor on hover**

```tsx
import { MagneticButton } from '@/components/animations';

<MagneticButton strength={0.4}>
  <button>Magnetic Effect</button>
</MagneticButton>
```

**Props:**
- `strength`: number (0-1)
- `className`: string

**Use Cases:**
- Primary CTAs
- Important links
- Hero buttons
- Contact buttons

---

## 🪟 UI Components

### GlassCard
**Glassmorphism card with backdrop blur**

```tsx
import { GlassCard } from '@/components/ui';

<GlassCard hover={true}>
  <h3>Card Title</h3>
  <p>Card content with glass effect</p>
</GlassCard>
```

**Props:**
- `hover`: boolean (enable hover effect)
- `className`: string

**Features:**
- Backdrop blur
- Translucent background
- Gradient border
- Hover lift effect
- Dark mode adaptive

**Use Cases:**
- Service cards
- Feature cards
- Testimonials
- Pricing cards

**Visual Example:**
```
┌─────────────────────────┐
│  ╔═══════════════════╗  │ ← Gradient border
│  ║                   ║  │
│  ║   Card Content    ║  │ ← Blurred background
│  ║                   ║  │
│  ╚═══════════════════╝  │
└─────────────────────────┘
```

---

### GlassPanel
**Large glassmorphism panel for sections**

```tsx
import { GlassPanel } from '@/components/ui';

<GlassPanel variant="light">
  <h2>Section Title</h2>
  <p>Section content</p>
</GlassPanel>
```

**Props:**
- `variant`: 'light' | 'dark'
- `className`: string

**Features:**
- Extra backdrop blur
- Larger padding
- Border styling
- Shadow effects

**Use Cases:**
- CTA sections
- Contact forms
- Feature highlights
- Testimonial sections

---

### DarkModeToggle
**Theme switcher button**

```tsx
import { DarkModeToggle } from '@/components/ui';

<DarkModeToggle />
```

**Features:**
- System preference detection
- Persistent state
- Smooth icon rotation
- Glass background
- Hover effects

**Placement:**
- Header navigation
- Footer
- Settings panel

---

## 📄 Section Components

### Hero3DEnhanced
**Premium hero section with 3D integration**

```tsx
import { Hero3DEnhanced } from '@/components/sections';

<Hero3DEnhanced
  headline="Your Headline"
  subheadline="Your subheadline"
  ctaText="Get Started"
  ctaHref="/services"
  show3D={true}
  backgroundImage="/images/hero.jpg"
/>
```

**Props:**
- `headline`: string (required)
- `subheadline`: string
- `ctaText`: string
- `ctaHref`: string
- `show3D`: boolean
- `backgroundImage`: string

**Features:**
- 3D tire model
- Parallax background
- Staggered text animation
- Floating shapes
- Magnetic CTAs
- Scroll indicator

**Layout:**
```
┌─────────────────────────────────┐
│     [3D Tire Model]             │
│                                 │
│   LARGE HEADLINE TEXT           │
│   Subheadline text              │
│                                 │
│   [CTA Button] [Secondary]      │
│                                 │
│         ↓ Scroll                │
└─────────────────────────────────┘
```

---

### StatsSection3D
**Animated statistics with glass cards**

```tsx
import { StatsSection3D } from '@/components/sections';

const stats = [
  {
    value: 24000,
    suffix: 'L',
    label: 'Monthly Production',
    icon: <Droplet className="w-12 h-12" />,
    description: 'Sustainable burner oil',
  },
];

<StatsSection3D
  stats={stats}
  title="Our Impact"
  description="Making a difference"
/>
```

**Props:**
- `stats`: Stat[] (required)
- `title`: string
- `description`: string

**Stat Interface:**
```typescript
interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
  description?: string;
}
```

**Features:**
- Animated counters
- Glass card design
- Icon glow effects
- Staggered reveal
- Decorative lines

**Layout:**
```
┌─────────────────────────────────┐
│         Section Title           │
│       Section Description       │
│                                 │
│  ┌─────┐  ┌─────┐  ┌─────┐    │
│  │ 🔵  │  │ 🔵  │  │ 🔵  │    │
│  │24000│  │  60 │  │100K │    │
│  │Label│  │Label│  │Label│    │
│  └─────┘  └─────┘  └─────┘    │
└─────────────────────────────────┘
```

---

### ServicesOverview3D
**Service cards with 3D elements**

```tsx
import { ServicesOverview3D } from '@/components/sections';

const services = [
  {
    id: 'service-1',
    title: 'Service Title',
    description: 'Service description',
    icon: <Icon className="w-12 h-12" />,
    environmentalImpact: 'Impact description',
  },
];

<ServicesOverview3D
  services={services}
  title="Our Services"
  description="What we offer"
/>
```

**Props:**
- `services`: Service[] (required)
- `title`: string
- `description`: string

**Service Interface:**
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  environmentalImpact?: string;
}
```

**Features:**
- 3D oil droplet integration
- Glass card hover effects
- Impact badges
- Animated grid background
- Learn more links

**Layout:**
```
┌─────────────────────────────────┐
│         Section Title           │
│                                 │
│  ┌─────────┐ ┌─────────┐      │
│  │  Icon   │ │  Icon   │      │
│  │ Title   │ │ Title   │      │
│  │ Desc    │ │ Desc    │      │
│  │ Impact  │ │ Impact  │      │
│  │ [More→] │ │ [More→] │      │
│  └─────────┘ └─────────┘      │
└─────────────────────────────────┘
```

---

## 🎨 Styling Patterns

### Typography Scale
```tsx
// Headlines
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
  Massive Headline
</h1>

// Subheadings
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
  Section Title
</h2>

// Body
<p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
  Body text
</p>
```

---

### Color Patterns
```tsx
// Primary colors
<div className="bg-primary-forest text-white">
<div className="bg-primary-forestLight">
<div className="bg-primary-forestDark">

// Accent colors
<div className="bg-accent-gold text-primary-forestDark">
<div className="bg-accent-goldLight">

// Dark mode
<div className="bg-white dark:bg-gray-900">
<div className="text-gray-900 dark:text-white">
```

---

### Spacing Patterns
```tsx
// Section padding
<section className="py-16 lg:py-24">  // Standard
<section className="py-24 lg:py-32">  // Large

// Container
<Container size="lg">  // 1024px max
<Container size="xl">  // 1280px max

// Element gaps
<div className="gap-6 lg:gap-8">   // Standard
<div className="gap-8 lg:gap-12">  // Large
```

---

### Gradient Patterns
```tsx
// Background gradients
<div className="bg-gradient-to-br from-primary-forest to-primary-forestDark">
<div className="bg-gradient-to-r from-accent-gold to-accent-goldLight">

// Text gradients
<h1 className="bg-gradient-to-r from-accent-gold to-accent-goldLight bg-clip-text text-transparent">
  Gradient Text
</h1>
```

---

## 🎬 Animation Patterns

### Stagger Pattern
```tsx
<div className="grid grid-cols-3 gap-8">
  {items.map((item, i) => (
    <ScrollReveal key={i} delay={i * 0.2}>
      <GlassCard>{item}</GlassCard>
    </ScrollReveal>
  ))}
</div>
```

---

### Parallax Pattern
```tsx
<section className="relative">
  <ParallaxLayer speed={0.3}>
    <div className="absolute inset-0">
      <Image src="/bg.jpg" fill />
    </div>
  </ParallaxLayer>
  
  <div className="relative z-10">
    <Content />
  </div>
</section>
```

---

### Magnetic CTA Pattern
```tsx
<div className="flex gap-6">
  <MagneticButton strength={0.4}>
    <Link href="/primary" className="btn-primary">
      Primary Action
    </Link>
  </MagneticButton>
  
  <MagneticButton strength={0.3}>
    <Link href="/secondary" className="btn-secondary">
      Secondary Action
    </Link>
  </MagneticButton>
</div>
```

---

## 🎯 Common Layouts

### Hero Layout
```tsx
<Hero3DEnhanced {...props} />
```

### Stats Layout
```tsx
<StatsSection3D stats={stats} />
```

### Services Grid
```tsx
<ServicesOverview3D services={services} />
```

### CTA Section
```tsx
<section className="py-24">
  <Container>
    <ScrollReveal>
      <GlassPanel variant="dark">
        <h2>Call to Action</h2>
        <p>Description</p>
        <MagneticButton>
          <Link href="/contact">Get Started</Link>
        </MagneticButton>
      </GlassPanel>
    </ScrollReveal>
  </Container>
</section>
```

### Feature Cards
```tsx
<section className="py-24">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <ScrollReveal key={i} delay={i * 0.2}>
          <GlassCard hover={true}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  </Container>
</section>
```

---

## 🎨 Design Tokens

### Colors
```typescript
primary: {
  forest: '#1B4332',
  forestLight: '#2D6A4F',
  forestDark: '#081C15',
}
accent: {
  gold: '#D4AF37',
  goldLight: '#E5C158',
}
```

### Shadows
```typescript
sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
md: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
```

### Border Radius
```typescript
sm: '0.125rem'  // 2px
md: '0.375rem'  // 6px
lg: '0.5rem'    // 8px
xl: '0.75rem'   // 12px
2xl: '1rem'     // 16px
```

---

## 📱 Responsive Patterns

### Mobile First
```tsx
<div className="
  text-base      // Mobile
  sm:text-lg     // 640px+
  md:text-xl     // 768px+
  lg:text-2xl    // 1024px+
">
  Responsive Text
</div>
```

### Grid Responsive
```tsx
<div className="
  grid
  grid-cols-1      // Mobile: 1 column
  md:grid-cols-2   // Tablet: 2 columns
  lg:grid-cols-3   // Desktop: 3 columns
  gap-6 lg:gap-8
">
  {items}
</div>
```

---

**Component showcase complete! Use these patterns to build consistent, premium experiences across all pages.**
