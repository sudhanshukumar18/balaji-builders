

# Enhanced Animations for Services Section

## Overview
Add rich, polished animations to the Services page tabs interface to create a more engaging and premium user experience. The enhancements will build on the existing Framer Motion setup.

## Current State
The Services page has basic animations:
- Simple fade-in/slide transitions when switching tabs (`opacity` and `y` position)
- No entrance animations for the hero section
- No animations on feature list items
- Static tab navigation (no hover or active animations)

## Proposed Animation Enhancements

### 1. Hero Section Entrance Animation
Add staggered entrance animations when the page loads:
- Primary text label fades in with upward motion
- Title scales in with slight blur effect
- Description slides in from below

### 2. Tab Navigation Animations
Enhance the tab bar with interactive animations:
- **Active tab indicator**: Animated underline that slides between tabs using `layoutId`
- **Hover effects**: Subtle scale and background color changes
- **Icons**: Gentle rotation on hover for visual feedback

### 3. Content Panel Animations
More sophisticated transitions for the service content:
- **Media area**: Scale-in effect with slight zoom
- **Icon box**: Bouncy entrance with rotation
- **Title**: Text reveal with blur-to-clear effect
- **Description**: Smooth fade-in from below
- **Feature list**: Staggered cascade animation (each item enters sequentially)
- **CTA button**: Scale-in with glow pulse effect

### 4. Image/Video Hover Effects
Add subtle interactive effects:
- Slight zoom on hover for images
- Overlay gradient that fades in

---

## Technical Implementation

### File Modified
**`src/pages/Services.tsx`**

### Key Animation Components Used
- `FadeInUp`, `ScaleIn`, `BlurIn` from `motion.tsx`
- `staggerContainer` and `staggerChildren` for list items
- `layoutId` for smooth tab indicator transitions
- Custom variants for tab content

### Animation Timeline

```text
Page Load:
  0ms   -> Hero label fades in
  200ms -> Hero title scales in with blur
  400ms -> Hero description slides up

Tab Switch:
  0ms   -> Old content fades out + slides up
  150ms -> New media scales in
  200ms -> New icon bounces in
  250ms -> New title fades in
  300ms -> New description appears
  350ms -> Feature items cascade in (50ms stagger)
  600ms -> CTA button scales in with glow
```

### Code Structure

**Hero Section Animation:**
```typescript
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  Our Services
</motion.p>
```

**Animated Tab Indicator:**
```typescript
{activeTab === service.slug && (
  <motion.div
    layoutId="activeTab"
    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
  />
)}
```

**Staggered Feature List:**
```typescript
<motion.ul
  variants={{
    visible: { transition: { staggerChildren: 0.08 } }
  }}
>
  {features.map((feature, i) => (
    <motion.li
      key={i}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      {feature}
    </motion.li>
  ))}
</motion.ul>
```

**Image Hover Effect:**
```typescript
<motion.div
  className="overflow-hidden"
  whileHover={{ scale: 1.02 }}
>
  <motion.img
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
  />
</motion.div>
```

---

## Visual Preview

The enhanced animations will create this experience:

1. **Page load**: Smooth, staggered reveal of hero content
2. **Tab navigation**: Fluid indicator that slides between tabs
3. **Tab switch**: Content gracefully exits while new content cascades in
4. **Hover states**: Subtle feedback on images and buttons
5. **Feature list**: Professional staggered reveal animation

## Mobile Considerations
- Reduced motion for users with `prefers-reduced-motion`
- Simpler animations on mobile to maintain performance
- Touch-friendly tap states instead of hover effects

