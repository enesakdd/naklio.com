import { useEffect } from 'react';
import favicon16 from 'figma:asset/3dbfc62e41df751244a13c96ba8a0613d77d23c0.png';
import favicon32 from 'figma:asset/40332210bd185fc48c0d3d2d324adf2e15131d24.png';
import appleTouchIcon from 'figma:asset/40332210bd185fc48c0d3d2d324adf2e15131d24.png';

export function Favicons() {
  useEffect(() => {
    // Remove any existing favicons
    const existingLinks = document.querySelectorAll('link[rel*="icon"]');
    existingLinks.forEach(link => link.remove());

    // Add favicon 16x16
    const favicon16Link = document.createElement('link');
    favicon16Link.rel = 'icon';
    favicon16Link.type = 'image/png';
    favicon16Link.sizes = '16x16';
    favicon16Link.href = favicon16;
    document.head.appendChild(favicon16Link);

    // Add favicon 32x32
    const favicon32Link = document.createElement('link');
    favicon32Link.rel = 'icon';
    favicon32Link.type = 'image/png';
    favicon32Link.sizes = '32x32';
    favicon32Link.href = favicon32;
    document.head.appendChild(favicon32Link);

    // Add apple touch icon
    const appleTouchIconLink = document.createElement('link');
    appleTouchIconLink.rel = 'apple-touch-icon';
    appleTouchIconLink.sizes = '180x180';
    appleTouchIconLink.href = appleTouchIcon;
    document.head.appendChild(appleTouchIconLink);

    // Add default favicon
    const defaultFaviconLink = document.createElement('link');
    defaultFaviconLink.rel = 'icon';
    defaultFaviconLink.type = 'image/png';
    defaultFaviconLink.href = favicon32;
    document.head.appendChild(defaultFaviconLink);
  }, []);

  return null;
}
