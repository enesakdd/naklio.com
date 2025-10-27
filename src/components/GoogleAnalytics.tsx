import { useEffect } from 'react';

export function GoogleAnalytics() {
  useEffect(() => {
    // Create and append the gtag.js script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6P10HXMDMP';
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-6P10HXMDMP');
      
      // Make gtag available globally
      (window as any).gtag = gtag;
    };

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(
        'script[src*="googletagmanager.com/gtag/js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
