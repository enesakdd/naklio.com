import { Target, Users, Award, TrendingUp, CheckCircle, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language, translations } from '../translations';

interface AboutPageProps {
  language: Language;
}

export function AboutPage({ language }: AboutPageProps) {
  const t = translations[language].about;
  
  const values = [
    {
      icon: Target,
      title: t.mission,
      description: t.missionText
    },
    {
      icon: Globe,
      title: t.vision,
      description: t.visionText
    },
    {
      icon: Award,
      title: t.values,
      description: language === 'tr' 
        ? 'Şeffaflık, güvenilirlik, yenilikçilik ve müşteri odaklılık ilkelerimizle hareket ediyoruz.'
        : 'We act with the principles of transparency, reliability, innovation and customer focus.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: language === 'tr' ? 'Kuruluş' : 'Foundation',
      description: language === 'tr' ? 'Naklio platformu hayata geçirildi' : 'Naklio platform was launched'
    },
    {
      year: '2023',
      title: language === 'tr' ? 'İlk Müşteriler' : 'First Customers',
      description: language === 'tr' ? '100+ filo ile çalışmaya başlandı' : 'Started working with 100+ fleets'
    },
    {
      year: '2024',
      title: language === 'tr' ? 'Büyüme' : 'Growth',
      description: language === 'tr' ? '5,000+ aktif kullanıcıya ulaşıldı' : 'Reached 5,000+ active users'
    },
    {
      year: '2025',
      title: language === 'tr' ? 'Liderlik' : 'Leadership',
      description: language === 'tr' ? 'Sektörün öncü platformu oldu' : 'Became the leading platform in the sector'
    }
  ];

  const teamValues = language === 'tr' ? [
    'Müşteri odaklı hizmet anlayışı',
    'Sürekli yenilik ve gelişim',
    'Şeffaf ve dürüst iletişim',
    'Sürdürülebilirlik bilinci',
    'Takım çalışması ve işbirliği',
    'Sonuç odaklı yaklaşım'
  ] : [
    'Customer-focused service approach',
    'Continuous innovation and development',
    'Transparent and honest communication',
    'Sustainability awareness',
    'Teamwork and collaboration',
    'Result-oriented approach'
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

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--naklio-orange)' }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4" style={{ color: 'var(--naklio-teal)' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--naklio-teal)' }}>
                {language === 'tr' ? 'Hikayemiz' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {language === 'tr'
                    ? 'Naklio, lojistik sektöründeki verimsizlikleri gidermek ve paylaşım ekonomisinin gücünden yararlanmak amacıyla 2023 yılında kuruldu. Kurucularımız, yıllarca lojistik sektöründe çalışarak edindiği deneyimlerle, boş sefer oranlarının yüksekliği ve kaynak israfının önüne geçmek için teknoloji odaklı bir çözüm geliştirdi.'
                    : 'Naklio was founded in 2023 to eliminate inefficiencies in the logistics sector and leverage the power of the sharing economy. Our founders, with years of experience in the logistics sector, developed a technology-focused solution to prevent high empty run rates and resource waste.'
                  }
                </p>
                <p>
                  {language === 'tr'
                    ? 'Platform, filo sahiplerinin boş kapasitelerini değerlendirmelerini ve taşıyıcıların en uygun taşıma seçeneklerini bulmalarını sağlıyor. Gerçek zamanlı takip, şeffaf fiyatlandırma ve akıllı eşleştirme algoritmaları sayesinde, kullanıcılarımız operasyonel verimliliklerini ortalama %35 artırıyor.'
                    : 'The platform enables fleet owners to utilize their idle capacity and carriers to find the most suitable transport options. Through real-time tracking, transparent pricing and smart matching algorithms, our users increase their operational efficiency by an average of 35%.'
                  }
                </p>
                <p>
                  {language === 'tr'
                    ? 'Bugün 10,000\'den fazla aktif kullanıcıya sahip olan Naklio, Türkiye\'nin en hızlı büyüyen lojistik teknoloji platformlarından biri haline geldi. Hedefimiz, Avrupa pazarında da lider konuma gelerek sürdürülebilir taşımacılık ekosistemini yaygınlaştırmak.'
                    : 'Today, with more than 10,000 active users, Naklio has become one of Turkey\'s fastest-growing logistics technology platforms. Our goal is to expand the sustainable transportation ecosystem by becoming a leader in the European market.'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNjczNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Naklio Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--naklio-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {language === 'tr' ? 'Yolculuğumuz' : 'Our Journey'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg relative">
                <CardContent className="p-8">
                  <div 
                    className="text-5xl mb-4"
                    style={{ color: 'var(--naklio-orange)' }}
                  >
                    {milestone.year}
                  </div>
                  <h3 className="mb-3" style={{ color: 'var(--naklio-teal)' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {language === 'tr' ? 'Ekip Değerlerimiz' : 'Our Team Values'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'tr' ? 'Başarımızın arkasındaki prensipler' : 'The principles behind our success'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--naklio-orange)' }} />
                <p className="text-gray-700">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
