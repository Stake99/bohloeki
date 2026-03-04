# Button Component

A reusable button component with multiple variants, sizes, loading states, and icon support.

## Features

- **4 Variants**: primary, secondary, outline, ghost
- **3 Sizes**: sm, md, lg
- **Loading State**: Built-in spinner with loading text
- **Icon Support**: Left and right icon slots
- **Hover Animations**: Smooth 200ms transitions
- **Accessibility**: Proper ARIA attributes and keyboard support
- **TypeScript**: Fully typed with ButtonProps interface

## Usage

```tsx
import { Button } from '@/components/ui/Button';

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With size
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With loading state
<Button isLoading>Loading...</Button>

// With icons
<Button leftIcon={<Icon />}>Back</Button>
<Button rightIcon={<Icon />}>Next</Button>

// Disabled
<Button disabled>Disabled</Button>

// Combined
<Button 
  variant="secondary" 
  size="lg" 
  leftIcon={<Icon />}
  onClick={handleClick}
>
  Click me
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `isLoading` | `boolean` | `false` | Shows loading spinner and disables button |
| `leftIcon` | `React.ReactNode` | - | Icon to display on the left |
| `rightIcon` | `React.ReactNode` | - | Icon to display on the right |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| ...rest | `ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Variants

### Primary
Deep forest green background with white text. Used for primary actions.

### Secondary
Light gray background with dark text. Used for secondary actions.

### Outline
Transparent background with forest green border. Fills with green on hover.

### Ghost
Transparent background with forest green text. Light gray background on hover.

## Sizes

- **Small (sm)**: `px-3 py-1.5 text-sm` - Compact buttons for tight spaces
- **Medium (md)**: `px-4 py-2 text-base` - Default size for most use cases
- **Large (lg)**: `px-6 py-3 text-lg` - Prominent buttons for key actions

## Accessibility

- Proper semantic `<button>` element
- Keyboard accessible (Tab, Enter, Space)
- Focus ring with 2px offset
- Disabled state prevents interaction
- Loading state announces "Loading..." to screen readers
- Icons are wrapped in spans for proper spacing

## Design Tokens

The Button component uses the following design tokens from the Tailwind config:

- Colors: `primary-forest`, `primary-forest-light`, `primary-forest-dark`, `neutral-gray-*`, `accent-gold`
- Spacing: Tailwind spacing scale
- Border radius: `rounded-lg` (0.5rem)
- Transitions: `transition-all duration-200`

## Requirements Validated

- **Requirement 14.1**: Reusable section components with TypeScript interfaces
- **Requirement 14.3**: Typed props for all components
- **Requirement 27.1**: Component architecture (from design document Property 27)

## Demo

Visit `/button-demo` to see all button variants, sizes, and states in action.
