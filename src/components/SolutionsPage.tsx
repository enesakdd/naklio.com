import { 
  Building2, 
  Truck, 
  BarChart3,
  MapPin,
  Shield,
  Clock,
  DollarSign,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Language, translations } from '../translations';

interface SolutionsPageProps {
  language: Language;
}

export function SolutionsPage({ language }: SolutionsPageProps) {
  const t = translations[language].solutions;
  
  const solutions = [
    {
      icon: Building2,
      title: t.dealerships,
      description: t.dealershipsDesc,
      features: [
        t.dealershipFeature1,
        t.dealershipFeature2,
        t.dealershipFeature3,
        t.dealershipFeature4
      ],
      color: 'var(--naklio-teal)'
    },
    {
      icon: Truck,
      title: t.transportCompanies,
      description: t.transportCompaniesDesc,
      features: [
        t.transportFeature1,
        t.transportFeature2,
        t.transportFeature3,
        t.transportFeature4
      ],
      color: 'var(--naklio-orange)'
    }
  ];

  const featuresList = language === 'tr' ? [
    {
      icon: Clock,
      title: 'Hızlı Eşleştirme',
      description: 'Akıllı algoritma ile saniyeler içinde en uygun taşıyıcı veya yükü bulun. Zamandan tasarruf edin.'
    },
    {
      icon: DollarSign,
      title: 'Maliyet Tasarrufu',
      description: 'Farklı taşıma koşulları ve fiyatlamaları kolayca karşılaştırın, size en uygun olanı seçin. Ya da paylaşımlı taşıma modeli ile operasyonel maliyetlerinizi azaltın.'
    },
    {
      icon: BarChart3,
      title: 'Detaylı Raporlama',
      description: 'Tüm operasyonlarınızı analiz edin. KPI takibi ve performans raporları ile karar verin.'
    },
    {
      icon: Zap,
      title: 'Kolay Entegrasyon',
      description: 'Mevcut sistemlerinize kolayca entegre edin. Teknik destek ile sorunsuz geçiş.'
    },
    {
      icon: MapPin,
      title: 'Gerçek Zamanlı Takip',
      description: 'Araçlarınızın durumunu ve rezervasyon statülerinizi kolayca takip edin.'
    },
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Tüm işlemleriniz SSL sertifikası ve şifreli bağlantılarla korunur. KVKK uyumlu veri yönetimi.'
    }
  ] : [
    {
      icon: Clock,
      title: 'Fast Matching',
      description: 'Find the most suitable carrier or load within seconds with smart algorithm. Save time.'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Easily compare different transport conditions and pricing, choose the one that suits you best. Or reduce your operational costs with shared transport model.'
    },
    {
      icon: BarChart3,
      title: 'Detailed Reporting',
      description: 'Analyze all your operations. Make decisions with KPI tracking and performance reports.'
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Easily integrate into your existing systems via API. Seamless transition with technical support.'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your vehicles\' location instantly with GPS technology. Provide transparent information to your customers.'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'All your transactions are protected with SSL certificate and encrypted connections. Data protection compliant data management.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--naklio-teal)] to-[#003d3d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions by Type */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {language === 'tr' ? 'Sektörünüze Özel Çözümler' : 'Solutions for Your Sector'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div 
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: solution.color }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--naklio-teal)' }}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--naklio-orange)' }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-[var(--naklio-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {language === 'tr' ? 'Platform Özellikleri' : 'Platform Features'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'tr' 
                ? 'Modern teknoloji altyapısı ile güçlendirilmiş özellikler'
                : 'Features powered by modern technology infrastructure'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div 
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--naklio-orange)' }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--naklio-teal)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
