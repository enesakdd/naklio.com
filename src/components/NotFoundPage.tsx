import { Language } from '../translations';
import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  language: Language;
  onNavigate: (page: string) => void;
}

const content = {
  tr: {
    title: '404',
    subtitle: 'Sayfa Bulunamadı',
    message: 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    homeButton: 'Ana Sayfaya Dön',
    backButton: 'Geri Dön',
  },
  en: {
    title: '404',
    subtitle: 'Page Not Found',
    message: 'The page you are looking for does not exist or may have been moved.',
    homeButton: 'Return to Home',
    backButton: 'Go Back',
  },
};

export function NotFoundPage({ language, onNavigate }: NotFoundPageProps) {
  const t = content[language];

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[180px] leading-none text-[#005F5F] opacity-20">
            {t.title}
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-[#005F5F]">
            {t.subtitle}
          </h2>
          
          <p className="text-gray-600 max-w-md mx-auto">
            {t.message}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#005F5F] text-white rounded-lg hover:bg-[#004D57] transition-colors"
            >
              <Home className="w-5 h-5" />
              {t.homeButton}
            </button>
            
            <button
              onClick={handleGoBack}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#005F5F] text-[#005F5F] rounded-lg hover:bg-[#005F5F] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {t.backButton}
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#005F5F] opacity-30 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#005F5F] opacity-50 animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-[#005F5F] opacity-70 animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}
