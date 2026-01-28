
# Fix for Services Tab Content Display Issue

## Problem Identified
When navigating to the Services page, all service options (Residential, Commercial, Interior, Planning, Turnkey, Structural, Architectural) are showing simultaneously instead of just the selected tab content.

## Root Cause
The current implementation has a structural conflict between Radix UI's built-in tab visibility handling and Framer Motion's `AnimatePresence`:

**Current Code Structure (lines 340-343):**
```typescript
{services.map((service) => (
  <TabsContent key={service.slug} value={service.slug}>
    <AnimatePresence mode="wait">
      {activeTab === service.slug && (
        <motion.div>...</motion.div>
      )}
    </AnimatePresence>
  </TabsContent>
))}
```

**The Issues:**
1. `AnimatePresence` is placed inside each `TabsContent`, so there are 7 separate `AnimatePresence` components
2. Radix's `TabsContent` handles its own show/hide logic, which conflicts with the manual `activeTab === service.slug` check
3. The `mode="wait"` can't work across separate `AnimatePresence` instances

## Solution
Restructure to use a single `AnimatePresence` outside the content loop, rendering only the active service:

**Fixed Structure:**
```typescript
<AnimatePresence mode="wait">
  <motion.div key={activeTab}>
    {/* Render only activeService content */}
  </motion.div>
</AnimatePresence>
```

## Implementation Changes

### File: `src/pages/Services.tsx`

**Change 1: Replace the TabsContent mapping (lines 339-432)**

Instead of mapping through all services and creating separate `TabsContent` components, we will:
1. Remove the `services.map()` for TabsContent
2. Use a single container with `AnimatePresence` outside
3. Render only the `activeService` content inside

**New structure:**
```typescript
{/* Single Tab Content with AnimatePresence */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeService.slug}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
  >
    {/* Media Area */}
    <motion.div ...>
      {activeService.video ? (...) : activeService.image ? (...) : (...)}
    </motion.div>
    
    {/* Content Area */}
    <motion.div ...>
      <activeService.icon ... />
      <h2>{activeService.title}</h2>
      <p>{activeService.description}</p>
      <ul>{activeService.features.map(...)}</ul>
      <Button>Get a Quote</Button>
    </motion.div>
  </motion.div>
</AnimatePresence>
```

This approach:
- Uses the already-defined `activeService` variable (line 250)
- Removes redundant `TabsContent` components since we're managing visibility ourselves
- Ensures only one service content is rendered at a time
- Properly enables exit animations with single `AnimatePresence`

## Summary
- Remove the `services.map()` that creates multiple `TabsContent` components
- Keep the `TabsList` and `TabsTrigger` mapping for navigation
- Use a single `AnimatePresence` wrapper with `activeService` as the content source
- Animations will work correctly with `mode="wait"` for smooth transitions
