import { useCallback } from 'react';

// List of images by route
const routeImages = {
  '/about': [
    'https://i.imgur.com/d7YjFnt.jpeg',
    'https://i.imgur.com/EBSkoAU.jpeg',
    'https://i.imgur.com/5BvLGM8.jpeg',
    'https://i.imgur.com/0YFIBnc.jpeg',
    'https://i.imgur.com/dKryOWZ.jpeg',
    'https://i.imgur.com/pRYoUFy.jpeg',
    'https://i.imgur.com/BYt8dL1.jpeg',
    'https://i.imgur.com/0MvL2Ys.jpeg',
    'https://i.imgur.com/GLIf1mo.jpeg',
    'https://i.imgur.com/IZUyvY2.jpeg'
  ],
  '/performances': [
    // Add performance page images when they're added
  ],
  '/contact': [
    // Add contact page images when they're added
  ]
};

export function usePrefetch() {
  const prefetchImages = useCallback((route: string) => {
    const images = routeImages[route as keyof typeof routeImages] || [];
    
    images.forEach(url => {
      // Create a new image object
      const img = new Image();
      
      // Set up load event for tracking (optional)
      img.onload = () => {
        console.log(`Prefetched: ${url}`);
      };
      
      // Set up error handling (optional)
      img.onerror = () => {
        console.warn(`Failed to prefetch: ${url}`);
      };
      
      // Start loading the image
      img.src = url;
    });
  }, []);

  return { prefetchImages };
}
