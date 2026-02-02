

# Fix Mobile Hero Description Text Visibility

## Problem Identified
The mobile hero description text is currently using `text-black`, which is not visible against the dark charcoal background overlay. The dark background with black text creates very poor contrast and readability.

## Solution
Update the mobile description text styling to use a visible light color that matches the overall design while ensuring good readability on mobile devices.

## Technical Changes

### File: `src/components/sections/HeroSection.tsx` (Line 540)

**Current Code:**
```tsx
className="text-black text-sm leading-relaxed mb-6 px-2"
```

**Updated Code:**
```tsx
className="text-white/90 text-sm leading-relaxed mb-6 px-2"
```

### Additional Improvements for Better Mobile Readability:
- Use `text-white/90` for high visibility on dark background
- Increase line height slightly for better readability
- Adjust padding for better text wrapping

**Final optimized styling:**
```tsx
className="text-white/90 text-sm sm:text-base leading-relaxed mb-6"
```

## Summary
- Change `text-black` to `text-white/90` for visibility on dark background
- Add responsive text sizing (`text-sm sm:text-base`) for slightly larger text on small tablets
- Remove horizontal padding `px-2` since parent already has `px-6`
- The text will now be clearly visible and match the light-on-dark theme of the hero section

