import { useEffect } from 'react';
import { Language } from '../translations';

interface SEOHeadProps {
  page: string;
  language: Language;
}

const seoData = {
  tr: {
    home: {
      title: 'Naklio - Akıllı Araç Taşımacılığı Lojistik Platformu',
      description: 'Naklio ile araç taşımacılığınızı dijitalleştirin. Hızlı teklif alın, gerçek zamanlı takip edin, maliyetleri azaltın. Türkiye\'nin önde gelen akıllı lojistik çözümü.',
      keywords: 'araç taşımacılığı, lojistik platform, araç lojistiği, oto taşımacılık, naklio, akıllı lojistik, araç takip sistemi, rota optimizasyonu'
    },
    solutions: {
      title: 'Lojistik Çözümlerimiz - Naklio',
      description: 'Naklio\'nun akıllı lojistik çözümleri ile araç taşımacılığında dijital dönüşüm. Rota optimizasyonu, gerçek zamanlı takip ve detaylı raporlama.',
      keywords: 'lojistik çözümleri, rota optimizasyonu, araç takip, tedarikçi yönetimi, lojistik yazılımı'
    },
    contact: {
      title: 'İletişim - Naklio',
      description: 'Naklio ile iletişime geçin. Araç taşımacılığı ve lojistik çözümleri hakkında detaylı bilgi alın. Maltepe, İstanbul.',
      keywords: 'naklio iletişim, lojistik danışmanlık, araç taşımacılığı iletişim'
    },
    sss: {
      title: 'Sıkça Sorulan Sorular - Naklio',
      description: 'Naklio platformu, araç taşımacılığı, fiyatlandırma ve teknik destek hakkında sıkça sorulan sorular ve cevapları.',
      keywords: 'naklio sss, lojistik sss, araç taşımacılığı sorular, platform kullanımı'
    }
  },
  en: {
    home: {
      title: 'Naklio - Smart Vehicle Transport Logistics Platform',
      description: 'Digitize your vehicle transportation with Naklio. Get quick quotes, track in real-time, reduce costs. Turkey\'s leading smart logistics solution.',
      keywords: 'vehicle transport, logistics platform, auto logistics, car shipping, naklio, smart logistics, vehicle tracking, route optimization'
    },
    solutions: {
      title: 'Our Logistics Solutions - Naklio',
      description: 'Digital transformation in vehicle transport with Naklio\'s smart logistics solutions. Route optimization, real-time tracking, and detailed reporting.',
      keywords: 'logistics solutions, route optimization, vehicle tracking, supplier management, logistics software'
    },
    contact: {
      title: 'Contact - Naklio',
      description: 'Contact Naklio for detailed information about vehicle transport and logistics solutions. Maltepe, Istanbul.',
      keywords: 'naklio contact, logistics consulting, vehicle transport contact'
    },
    sss: {
      title: 'Frequently Asked Questions - Naklio',
      description: 'Frequently asked questions and answers about Naklio platform, vehicle transport, pricing, and technical support.',
      keywords: 'naklio faq, logistics faq, vehicle transport questions, platform usage'
    }
  }
};

export function SEOHead({ page, language }: SEOHeadProps) {
  useEffect(() => {
    const data = seoData[language][page as keyof typeof seoData['tr']] || seoData[language].home;
    
    // Set document title
    document.title = data.title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', data.description);
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', data.keywords);
    
    // Set language
    document.documentElement.lang = language;
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `https://naklio.com/${page === 'home' ? '' : page}` },
      { property: 'og:site_name', content: 'Naklio' },
      { property: 'og:locale', content: language === 'tr' ? 'tr_TR' : 'en_US' },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const canonicalUrl = page === 'home' 
      ? 'https://naklio.com/' 
      : `https://naklio.com/${page}`;
    canonical.setAttribute('href', canonicalUrl);
    
    // Alternate language links
    let alternateTr = document.querySelector('link[hreflang="tr"]');
    if (!alternateTr) {
      alternateTr = document.createElement('link');
      alternateTr.setAttribute('rel', 'alternate');
      alternateTr.setAttribute('hreflang', 'tr');
      document.head.appendChild(alternateTr);
    }
    alternateTr.setAttribute('href', canonicalUrl);
    
    let alternateEn = document.querySelector('link[hreflang="en"]');
    if (!alternateEn) {
      alternateEn = document.createElement('link');
      alternateEn.setAttribute('rel', 'alternate');
      alternateEn.setAttribute('hreflang', 'en');
      document.head.appendChild(alternateEn);
    }
    alternateEn.setAttribute('href', canonicalUrl);
    
  }, [page, language]);
  
  return null;
}
