import { 
  TrendingUp, 
  Share2, 
  DollarSign, 
  LogIn, 
  Eye, 
  Leaf,
  ArrowRight,
  CheckCircle,
  Zap,
  Car,
  Radar,
  MapPin,
  LayoutDashboard,
  Headphones
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroBackground from 'figma:asset/4f9d3d80c7cf9ab4712a494b1a7ae555267646d4.png';
import { Language, translations } from '../translations';

interface HomePageProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function HomePage({ onNavigate, language }: HomePageProps) {
  const t = translations[language];
  
  const steps = [
    {
      icon: LogIn,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc
    },
    {
      icon: Car,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc
    },
    {
      icon: Zap,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc
    },
    {
      icon: Radar,
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: t.valueProps.realTimeTitle,
      description: t.valueProps.realTimeDesc
    },
    {
      icon: MapPin,
      title: t.valueProps.optimizationTitle,
      description: t.valueProps.optimizationDesc
    },
    {
      icon: LayoutDashboard,
      title: t.valueProps.reportingTitle,
      description: t.valueProps.reportingDesc
    },
    {
      icon: Headphones,
      title: t.valueProps.supportTitle,
      description: t.valueProps.supportDesc
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Transport trucks" 
            className="w-full h-full object-cover"
          />
          {/* Gray Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="rounded-lg px-8 transition-all hover:!bg-white group"
                  style={{ 
                    backgroundColor: 'var(--naklio-orange)',
                    color: 'white'
                  }}
                  onClick={() => onNavigate('contact')}
                >
                  <span className="group-hover:text-[var(--naklio-teal)] transition-colors">
                    {t.nav.getQuote}
                  </span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:text-[var(--naklio-teal)] transition-colors" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/99VArLf5c0s"
                  title="Naklio Platform Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--naklio-orange)' }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4" style={{ color: 'var(--naklio-teal)' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-[var(--naklio-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--naklio-teal)' }}>
              {t.valueProps.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div 
                    className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--naklio-teal)' }}
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

      {/* About Naklio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--naklio-teal)' }}>
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.subtitle}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--naklio-orange)' }} />
                  <p className="text-gray-700">
                    {language === 'tr' 
                      ? "Türkiye'nin ilk uçtan uca dijital araç taşıma platformu"
                      : "Turkey's first end-to-end digital vehicle transportation platform"
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--naklio-orange)' }} />
                  <p className="text-gray-700">
                    {language === 'tr'
                      ? "7 Kurumsal Filo Sahibi ve lojistik tedarikçiler"
                      : "7 Corporate Fleet Owners and logistics suppliers"
                    }
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--naklio-orange)' }} />
                  <p className="text-gray-700">
                    {t.valueProps.supportTitle} - {t.valueProps.supportDesc}
                  </p>
                </div>
              </div>
              <Button 
                size="lg"
                className="rounded-lg px-8"
                style={{ 
                  backgroundColor: 'var(--naklio-teal)',
                  color: 'white'
                }}
                onClick={() => onNavigate('about')}
              >
                {t.solutions.learnMore}
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB0ZWNobm9sb2d5JTIwc2NyZWVufGVufDF8fHx8MTc2MDY5Mzg5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Naklio Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--naklio-teal)] to-[#003d3d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="rounded-lg px-8"
              style={{ 
                backgroundColor: 'white',
                color: 'var(--naklio-teal)'
              }}
              onClick={() => onNavigate('contact')}
            >
              {t.contact.getInTouch}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
