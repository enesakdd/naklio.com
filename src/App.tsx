import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SolutionsPage } from './components/SolutionsPage';
import { ContactPage } from './components/ContactPage';
import { SSSPage } from './components/SSSPage';
import { NotFoundPage } from './components/NotFoundPage';
import { SEOHead } from './components/SEOHead';
import { StructuredData } from './components/StructuredData';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Favicons } from './components/Favicons';
import { Language } from './translations';

// URL path mappings for bilingual support
const pathToPage: Record<string, string> = {
  '': 'home',
  'cozumler': 'solutions',
  'solutions': 'solutions',
  'iletisim': 'contact',
  'contact': 'contact',
  'sss': 'sss',
  'faq': 'sss',
};

const pageToTurkishPath: Record<string, string> = {
  'home': '',
  'solutions': 'cozumler',
  'contact': 'iletisim',
  'sss': 'sss',
};

const pageToEnglishPath: Record<string, string> = {
  'home': '',
  'solutions': 'solutions',
  'contact': 'contact',
  'sss': 'faq',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<Language>('tr');
  const [is404, setIs404] = useState(false);

  // Initialize from URL on mount
  useEffect(() => {
    const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
    const page = pathToPage[path];
    
    if (page) {
      setCurrentPage(page);
      setIs404(false);
    } else if (path === '') {
      setCurrentPage('home');
      setIs404(false);
    } else {
      setIs404(true);
    }
  }, []);

  // Update URL when page changes
  useEffect(() => {
    if (is404) return; // Don't update URL for 404 pages
    
    const path = language === 'tr' 
      ? pageToTurkishPath[currentPage] 
      : pageToEnglishPath[currentPage];
    
    const newPath = path ? `/${path}` : '/';
    
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
  }, [currentPage, language, is404]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
      const page = pathToPage[path];
      
      if (page) {
        setCurrentPage(page);
        setIs404(false);
      } else if (path === '') {
        setCurrentPage('home');
        setIs404(false);
      } else {
        setIs404(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, is404]);

  const renderPage = () => {
    if (is404) {
      return <NotFoundPage onNavigate={(page) => {
        setCurrentPage(page);
        setIs404(false);
      }} language={language} />;
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} language={language} />;
      case 'solutions':
        return <SolutionsPage language={language} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} language={language} />;
      case 'sss':
        return <SSSPage language={language} />;
      default:
        return <NotFoundPage onNavigate={(page) => {
          setCurrentPage(page);
          setIs404(false);
        }} language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Favicons />
      <GoogleAnalytics />
      <SEOHead page={currentPage} language={language} />
      <StructuredData page={currentPage} language={language} />
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} language={language} />
    </div>
  );
}