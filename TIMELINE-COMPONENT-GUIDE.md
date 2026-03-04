# 📅 Timeline Component Guide

## Overview

The `TimelineSection` component creates a beautiful alternating card layout with scroll animations, perfect for displaying milestones, achievements, or journey stories.

## Features

✨ **Alternating Layout** - Cards alternate left/right on desktop
📱 **Mobile Responsive** - Stacked layout on mobile
🎬 **Scroll Animations** - Cards reveal as you scroll
💫 **Glassmorphism** - Premium glass card effects
🎯 **Timeline Indicators** - Numbered circles with glow
📊 **Flexible Content** - Icons, badges, subtitles

---

## Basic Usage

```tsx
import { TimelineSection } from '@/components/sections/TimelineSection';
import { Award, Briefcase } from 'lucide-react';

const items = [
  {
    id: '1',
    position: 'First Position — 2023',
    title: 'Major Milestone Achieved',
    subtitle: 'Subtitle text here',
    description: 'Description of the achievement...',
    icon: <Award className="w-8 h-8" />,
    badge: '8.3 / 10',
  },
  {
    id: '2',
    position: 'Second Position — 2024',
    title: 'Another Achievement',
    description: 'Description text...',
    icon: <Briefcase className="w-8 h-8" />,
  },
];

<TimelineSection
  items={items}
  title="Our Journey"
  description="Key milestones in our story"
/>
```

---

## Props

### TimelineSectionProps

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `TimelineItem[]` | Yes | Array of timeline items |
| `title` | `string` | No | Section title |
| `description` | `string` | No | Section description |

### TimelineItem

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier |
| `position` | `string` | Yes | Position label (e.g., "First Position — 2023") |
| `title` | `string` | Yes | Card title |
| `subtitle` | `string` | No | Card subtitle |
| `description` | `string` | Yes | Card description |
| `icon` | `ReactNode` | No | Icon component |
| `badge` | `string` | No | Badge text (e.g., "8.3 / 10") |

---

## Layout Behavior

### Desktop (lg+)
```
┌─────────────────────────────────────┐
│                                     │
│  [Card 1]  ←  ① →                  │
│                                     │
│              ←  ② →  [Card 2]      │
│                                     │
│  [Card 3]  ←  ③ →                  │
│                                     │
│              ←  ④ →  [Card 4]      │
│                                     │
└─────────────────────────────────────┘
```

### Mobile
```
┌─────────────────┐
│  ① [Card 1]     │
│                 │
│  ② [Card 2]     │
│                 │
│  ③ [Card 3]     │
│                 │
│  ④ [Card 4]     │
└─────────────────┘
```

---

## Examples

### Company Milestones

```tsx
const milestones = [
  {
    id: '1',
    position: 'January 2023',
    title: 'Company Founded',
    subtitle: 'The Beginning',
    description: 'Bohloeki Enterprises was established with a vision...',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    id: '2',
    position: 'June 2023',
    title: 'First Production Facility',
    subtitle: '24,000L Monthly Capacity',
    description: 'Opened our first waste-to-energy facility...',
    icon: <Factory className="w-8 h-8" />,
    badge: 'Milestone',
  },
];

<TimelineSection
  items={milestones}
  title="Our Story"
  description="From vision to reality"
/>
```

---

### Awards & Recognition

```tsx
const awards = [
  {
    id: '1',
    position: 'Best Eco Initiative — 2023',
    title: 'Environmental Excellence Award',
    subtitle: 'National Recognition',
    description: 'Recognized for outstanding contribution...',
    icon: <Award className="w-8 h-8" />,
    badge: '9.5 / 10',
  },
];

<TimelineSection
  items={awards}
  title="Awards & Recognition"
/>
```

---

### Product Journey

```tsx
const journey = [
  {
    id: '1',
    position: 'Phase 1 — Research',
    title: 'Market Research',
    description: 'Conducted extensive market analysis...',
    icon: <Search className="w-8 h-8" />,
  },
  {
    id: '2',
    position: 'Phase 2 — Development',
    title: 'Product Development',
    description: 'Developed innovative waste processing...',
    icon: <Cog className="w-8 h-8" />,
  },
];

<TimelineSection items={journey} />
```

---

## Customization

### Change Colors

Edit `components/sections/TimelineSection.tsx`:

```tsx
// Timeline line color
className="bg-gradient-to-b from-accent-gold via-accent-goldLight to-accent-gold"

// Indicator color
className="bg-accent-gold"

// Card text colors
className="text-white"  // Title
className="text-gray-300"  // Description
```

---

### Adjust Spacing

```tsx
// Between items
<div className="space-y-16 lg:space-y-24">  // Change 16/24

// Section padding
<section className="py-24 lg:py-32">  // Change 24/32
```

---

### Animation Timing

```tsx
// Card reveal delay
<ScrollReveal direction="right" delay={0.2}>  // Change 0.2

// Indicator animation
transition={{ duration: 0.5, delay: 0.3 }}  // Change values
```

---

## Styling Tips

### Background Options

```tsx
// Dark gradient (current)
className="bg-gradient-to-b from-primary-forestDark via-primary-forest to-primary-forestDark"

// Light gradient
className="bg-gradient-to-b from-gray-50 via-white to-gray-50"

// Solid color
className="bg-primary-forest"
```

---

### Card Alignment

Cards automatically alternate left/right based on index:
- Even index (0, 2, 4...) → Left side
- Odd index (1, 3, 5...) → Right side

To change pattern, edit:
```tsx
const isLeft = index % 2 === 0;  // Change logic here
```

---

## Integration Examples

### In About Page

```tsx
// app/about/page.tsx
import { TimelineSection } from '@/components/sections/TimelineSection';

export default function AboutPage() {
  return (
    <>
      <Hero {...} />
      
      <TimelineSection
        items={companyHistory}
        title="Our History"
        description="How we grew from vision to reality"
      />
      
      <OtherSections />
    </>
  );
}
```

---

### In Impact Page

```tsx
// app/impact/page.tsx
<TimelineSection
  items={impactMilestones}
  title="Environmental Impact"
  description="Key achievements in sustainability"
/>
```

---

## Demo Page

Visit `/timeline-demo` to see the component in action with sample data.

---

## Accessibility

The component includes:
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ ARIA labels where needed

---

## Performance

- ✅ Lazy animations (only when in viewport)
- ✅ GPU-accelerated transforms
- ✅ Optimized re-renders
- ✅ Responsive images support

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## Tips & Best Practices

1. **Keep descriptions concise** - 2-3 sentences max
2. **Use consistent icons** - Same style/size
3. **Limit items** - 5-7 items for best UX
4. **Test on mobile** - Ensure readability
5. **Use meaningful badges** - Scores, dates, labels

---

## Troubleshooting

### Cards not animating?
- Check if ScrollReveal is imported
- Verify viewport settings
- Test scroll position

### Layout broken on mobile?
- Check responsive classes (lg:)
- Test on actual device
- Verify container width

### Timeline line not showing?
- Only visible on desktop (lg+)
- Check z-index layering
- Verify gradient colors

---

## Related Components

- `GlassCard` - Used for card styling
- `ScrollReveal` - Handles animations
- `Container` - Page width management

---

**Ready to create your timeline!** 🚀

Check out `/timeline-demo` to see it in action.
