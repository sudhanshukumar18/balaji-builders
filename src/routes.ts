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
