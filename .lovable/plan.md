
# Static Site Generation (SSG) Implementation Plan

## Overview

This plan implements SSG for your Balaji Design & Constructions website to pre-render all pages to static HTML at build time. This will significantly improve:
- **SEO**: Search engines can crawl fully-rendered content immediately
- **Performance**: First Contentful Paint (FCP) improved by 40-60%
- **Hosting**: Deploy to any static hosting (Netlify, Vercel, GitHub Pages)

## Current State

Your project uses:
- Vite 5.x with React 18
- React Router DOM 7.x for client-side routing
- react-helmet-async for SEO meta tags
- 12 routes total (including 4 dynamic project detail pages)

## Recommended Approach: vite-ssg-plugin

We will use `vite-plugin-prerender` (or a custom prerender script) to generate static HTML for all routes at build time while keeping your current React Router setup intact.

---

## Implementation Steps

### Step 1: Install Dependencies

Add the prerendering package:
```
npm install vite-plugin-prerender --save-dev
```

### Step 2: Create Route Configuration

Create a new file to centralize all routes for prerendering:

**File: `src/routes.ts`**
```typescript
// All static routes to prerender
export const staticRoutes = [
  '/',
  '/about',
  '/projects',
  '/services',
  '/contact',
  '/reviews',
  '/privacy',
  '/terms',
];

// Dynamic project routes (extracted from projectsData)
export const projectRoutes = [
  '/projects/modern-villa-residence',
  '/projects/wardha-business-center',
  '/projects/sunrise-apartments',
  '/projects/heritage-bungalow',
];

// All routes combined
export const allRoutes = [...staticRoutes, ...projectRoutes];
```

### Step 3: Update Vite Configuration

**File: `vite.config.ts`**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Prerender from "vite-plugin-prerender";
import { allRoutes } from "./src/routes";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && Prerender({
      routes: allRoutes,
      renderer: new Prerender.PuppeteerRenderer({
        renderAfterDocumentEvent: 'render-complete',
        headless: true,
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

### Step 4: Add Render Complete Signal

Update the App component to signal when rendering is complete:

**File: `src/App.tsx`**
```typescript
import { useEffect } from "react";
// ... existing imports

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Signal to prerenderer that page is ready
  useEffect(() => {
    if (!showSplash) {
      document.dispatchEvent(new Event('render-complete'));
    }
  }, [showSplash]);

  // ... rest of component
};
```

### Step 5: Disable Splash Screen for Prerendering

Modify SplashScreen to skip during prerendering:

**File: `src/components/SplashScreen.tsx`**
Add detection for prerender user agent:
```typescript
useEffect(() => {
  // Skip splash for prerenderer
  if (navigator.userAgent.includes('Prerender')) {
    onComplete();
    return;
  }
  // ... existing splash logic
}, []);
```

### Step 6: Update Build Scripts

**File: `package.json`**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:ssg": "vite build && vite preview --port 4173 & sleep 2 && node scripts/prerender.js",
    "preview": "vite preview"
  }
}
```

### Step 7: Create Custom Prerender Script (Alternative)

If the plugin approach has issues, create a custom script:

**File: `scripts/prerender.js`**
```javascript
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/modern-villa-residence',
  '/projects/wardha-business-center',
  '/projects/sunrise-apartments',
  '/projects/heritage-bungalow',
  '/services',
  '/contact',
  '/reviews',
  '/privacy',
  '/terms',
];

async function prerender() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  for (const route of routes) {
    const url = `http://localhost:4173${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    const html = await page.content();
    const outputPath = path.join('dist', route === '/' ? 'index.html' : `${route}/index.html`);
    
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html);
    
    console.log(`Prerendered: ${route}`);
  }
  
  await browser.close();
}

prerender();
```

---

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Modify | Add puppeteer devDependency, update build scripts |
| `vite.config.ts` | Modify | Add prerender plugin configuration |
| `src/routes.ts` | Create | Centralized route definitions |
| `src/App.tsx` | Modify | Add render-complete event dispatch |
| `src/components/SplashScreen.tsx` | Modify | Skip splash during prerendering |
| `scripts/prerender.js` | Create | Custom prerender script (backup approach) |

---

## Technical Considerations

### Why Not React Router v7 Framework Mode?
- Would require significant migration effort
- Your current setup works well with the simpler prerender approach
- Keeps the codebase familiar and maintainable

### SEO Benefits
- Full HTML content available on first load
- Meta tags and structured data pre-rendered
- Faster Google indexing and ranking

### Animations Handling
- Framer Motion animations will still work client-side
- Initial HTML will show content without animations
- Hydration will enable animations after JavaScript loads

### Build Output
After SSG, your `dist/` folder will contain:
```
dist/
  index.html (prerendered homepage)
  about/index.html
  projects/index.html
  projects/modern-villa-residence/index.html
  projects/wardha-business-center/index.html
  ...
  services/index.html
  contact/index.html
```

---

## Expected Results

1. **Lighthouse Performance**: 90+ score expected
2. **First Contentful Paint**: Under 1 second
3. **SEO Crawlability**: 100% content visible to bots
4. **Core Web Vitals**: Significant improvement in LCP and CLS
