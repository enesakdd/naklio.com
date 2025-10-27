import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SolutionsPage } from './components/SolutionsPage';
import { ContactPage } from './components/ContactPage';
import { SSSPage } from './components/SSSPage';
import { Language } from './translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<Language>('tr');

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
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
        return <HomePage onNavigate={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
