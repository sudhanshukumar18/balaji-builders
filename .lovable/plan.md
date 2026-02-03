
# Enhanced Image Gallery Animations

## Current State
The project gallery currently uses basic CSS hover effects (`hover:scale-105`). All images appear at once without any scroll-triggered entrance animations.

## Proposed Enhancements

### 1. Staggered Entrance Animations
Each image will animate in with a cascading delay effect as the user scrolls, creating a professional "reveal" experience.

### 2. Enhanced Hover Effects
Add smooth scale, shadow lift, and subtle rotation on hover using Framer Motion for buttery-smooth interactions.

### 3. Blur-to-Focus Effect
Images will start slightly blurred and come into focus as they animate in, adding visual polish.

---

## Technical Implementation

### File: `src/pages/Projects.tsx`

**Changes:**
1. Import additional animation components: `StaggerContainer`, `StaggerItem`, `ScaleIn`, `motion`
2. Wrap each gallery grid in `StaggerContainer`
3. Wrap each image card in `StaggerItem` with enhanced hover animations
4. Add `motion.div` wrapper for advanced hover effects (scale, shadow, subtle rotation)

**Before:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {images.map((image, index) => (
    <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
      <img src={image} className="hover:scale-105 transition-transform duration-300" />
    </div>
  ))}
</div>
```

**After:**
```tsx
<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {images.map((image, index) => (
    <StaggerItem key={index}>
      <motion.div 
        className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
        whileHover={{ 
          scale: 1.03, 
          y: -8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img 
          src={image} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

---

## Animation Effects Summary

| Effect | Description |
|--------|-------------|
| **Staggered Reveal** | Images fade in and slide up one-by-one (0.12s delay between each) |
| **Card Lift** | On hover, card lifts up (-8px) with enhanced shadow |
| **Smooth Scale** | Card scales to 1.03x, image inside scales to 1.1x |
| **Spring Physics** | Uses spring animation for natural, bouncy feel |

---

## Files to Modify
- `src/pages/Projects.tsx` - Add stagger animations and enhanced hover effects

