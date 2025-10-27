/**
 * Image URLs for external use (private app icons, etc.)
 * These images are not displayed on naklio.com but can be referenced by external applications
 */

export const iconUrls = {
  // Add your icon URLs here
  // Example:
  // dashboard: 'https://your-domain.com/path/to/dashboard-icon.png',
  // trucks: 'https://your-domain.com/path/to/trucks-icon.png',
  // analytics: 'https://your-domain.com/path/to/analytics-icon.png',
} as const;

export const imageUrls = {
  // Add other image URLs here
  // Example:
  // logo: 'https://your-domain.com/path/to/logo.png',
  // banner: 'https://your-domain.com/path/to/banner.jpg',
} as const;

// Export all URLs as a single object if needed
export const externalAssets = {
  icons: iconUrls,
  images: imageUrls,
} as const;
