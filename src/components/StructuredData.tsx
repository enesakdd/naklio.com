import { useEffect } from 'react';
import { Language } from '../translations';

interface StructuredDataProps {
  page: string;
  language: Language;
}

export function StructuredData({ page, language }: StructuredDataProps) {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Naklio",
      "url": "https://naklio.com",
      "logo": "https://naklio.com/logo.png",
      "description": language === 'tr' 
        ? "Akıllı araç taşımacılığı ve lojistik platformu"
        : "Smart vehicle transport and logistics platform",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Maltepe Piazza, Cevizli, Tugay Yolu Cd. No: 69/A",
        "addressLocality": "Maltepe",
        "addressRegion": "İstanbul",
        "postalCode": "34846",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-XXX-XXX-XXXX",
        "contactType": "customer service",
        "email": "info@naklio.com",
        "availableLanguage": ["tr", "en"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/naklio",
        "https://twitter.com/naklio"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Naklio",
      "url": "https://naklio.com",
      "description": language === 'tr'
        ? "Naklio ile araç taşımacılığınızı dijitalleştirin. Hızlı teklif alın, gerçek zamanlı takip edin."
        : "Digitize your vehicle transportation with Naklio. Get quick quotes, track in real-time.",
      "inLanguage": language === 'tr' ? "tr-TR" : "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://naklio.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": language === 'tr' ? "Araç Taşımacılığı Lojistik Platformu" : "Vehicle Transport Logistics Platform",
      "provider": {
        "@type": "Organization",
        "name": "Naklio"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Turkey"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": language === 'tr' ? "Lojistik Hizmetleri" : "Logistics Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'tr' ? "Araç Taşımacılığı" : "Vehicle Transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'tr' ? "Rota Optimizasyonu" : "Route Optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'tr' ? "Gerçek Zamanlı Takip" : "Real-Time Tracking"
            }
          }
        ]
      }
    };

    // FAQ Schema for SSS page
    let faqSchema = null;
    if (page === 'sss') {
      const faqs = language === 'tr' ? [
        {
          question: "Naklio platformuna nasıl kayıt olabilirim?",
          answer: "Web sitemizden kayıt formunu doldurarak hızlıca platforma katılabilirsiniz. Onay sürecinden sonra sistemi kullanmaya başlayabilirsiniz."
        },
        {
          question: "Ücretlendirme nasıl yapılıyor?",
          answer: "Ücretlendirme taşınan araç modeli, araç adedi, mesafe ve beklenen teslimat süresine bağlı olarak değişmektedir."
        },
        {
          question: "Taşınan araçlarımı nasıl takip edebilirim?",
          answer: "Taşınan araçlarınızın durumunu web uygulaması üzerinden kolaylıkla takip edebilirsiniz."
        }
      ] : [
        {
          question: "How can I register on the Naklio platform?",
          answer: "You can quickly join the platform by filling out the registration form on our website. After the approval process, you can start using the system."
        },
        {
          question: "How does pricing work?",
          answer: "Pricing varies depending on the vehicle model being transported, number of vehicles, distance and expected delivery time."
        },
        {
          question: "How can I track my transported vehicles?",
          answer: "You can easily track the status of your transported vehicles through the web application."
        }
      ];

      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    }

    // Breadcrumb Schema
    const getBreadcrumbSchema = () => {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://naklio.com"
        }
      ];

      if (page !== 'home') {
        const pageNames: { [key: string]: { tr: string; en: string } } = {
          solutions: { tr: 'Çözümler', en: 'Solutions' },
          contact: { tr: 'İletişim', en: 'Contact' },
          sss: { tr: 'SSS', en: 'FAQ' }
        };

        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 2,
          "name": pageNames[page]?.[language] || page,
          "item": `https://naklio.com/${page}`
        });
      }

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };
    };

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add all schemas
    const schemas = [
      organizationSchema,
      websiteSchema,
      serviceSchema,
      getBreadcrumbSchema()
    ];

    if (faqSchema) {
      schemas.push(faqSchema);
    }

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [page, language]);

  return null;
}
