# Sitemap Reference for Naklio

## New URL Structure (Updated)

### Turkish Pages (Default)
- Homepage: `https://naklio.com/`
- Solutions: `https://naklio.com/cozumler`
- Contact: `https://naklio.com/iletisim`
- FAQ: `https://naklio.com/sss`

### English Pages (with /en/ prefix)
- Homepage: `https://naklio.com/en`
- Solutions: `https://naklio.com/en/solutions`
- Contact: `https://naklio.com/en/contact`
- FAQ: `https://naklio.com/en/faq`

## Sitemap.xml Structure

When you upload your sitemap.xml to the root, it should include all these URLs with proper hreflang tags:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Homepage Turkish -->
  <url>
    <loc>https://naklio.com/</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/" />
  </url>
  
  <!-- Homepage English -->
  <url>
    <loc>https://naklio.com/en</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/" />
  </url>
  
  <!-- Solutions Page Turkish -->
  <url>
    <loc>https://naklio.com/cozumler</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/cozumler" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en/solutions" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/cozumler" />
  </url>
  
  <!-- Solutions Page English -->
  <url>
    <loc>https://naklio.com/en/solutions</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/cozumler" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en/solutions" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/cozumler" />
  </url>
  
  <!-- Contact Page Turkish -->
  <url>
    <loc>https://naklio.com/iletisim</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/iletisim" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en/contact" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/iletisim" />
  </url>
  
  <!-- Contact Page English -->
  <url>
    <loc>https://naklio.com/en/contact</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/iletisim" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en/contact" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/iletisim" />
  </url>
  
  <!-- FAQ Page Turkish -->
  <url>
    <loc>https://naklio.com/sss</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/sss" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en/faq" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/sss" />
  </url>
  
  <!-- FAQ Page English -->
  <url>
    <loc>https://naklio.com/en/faq</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://naklio.com/sss" />
    <xhtml:link rel="alternate" hreflang="en" href="https://naklio.com/en/faq" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://naklio.com/sss" />
  </url>
  
</urlset>
```

## Important Notes

1. **Upload Location**: Upload your sitemap.xml to the root of your site (same directory as your deployment config files)

2. **Google Search Console**: Submit using: `https://naklio.com/sitemap.xml`

3. **Language Detection**: The application now automatically detects the language from the URL:
   - URLs starting with `/en/` or exactly `/en` → English
   - All other URLs → Turkish

4. **Language Switcher**: When users switch languages, they are redirected to the equivalent page in the selected language with the proper URL structure

5. **SEO Tags**: Each page automatically includes:
   - Canonical URL pointing to the current language version
   - hreflang tags for both Turkish and English versions
   - x-default hreflang pointing to Turkish (default language)

## Testing

After deployment, verify:
1. Visit `https://naklio.com/en` - should show English homepage
2. Visit `https://naklio.com/` - should show Turkish homepage  
3. Click language switcher - URL should change to include/remove `/en/`
4. Check page source for proper canonical and hreflang tags
