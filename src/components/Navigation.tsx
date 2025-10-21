import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/ace4568f8078b704ec8922beed1d268b28c93819.png';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Language, translations } from '../translations';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Navigation({ currentPage, onNavigate, language, onLanguageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.about, id: 'about' },
    { name: t.solutions, id: 'solutions' },
    { name: t.faq, id: 'sss' },
    { name: t.contact, id: 'contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logoImage} alt="Naklio" className="h-8" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-all font-medium tracking-tight px-4 py-2 rounded-lg ${
                  currentPage === link.id
                    ? 'bg-[var(--naklio-teal)] text-white'
                    : 'text-gray-700 hover:text-[var(--naklio-orange)] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher 
              currentLanguage={language} 
              onLanguageChange={onLanguageChange} 
            />
            <Button
              onClick={() => window.open('https://app.naklio.com', '_blank')}
              variant="outline"
              className="rounded-lg px-6 flex items-center gap-2 border-[var(--naklio-teal)] text-[var(--naklio-teal)] hover:bg-[var(--naklio-teal)] hover:text-white transition-colors"
            >
              <LogIn className="w-4 h-4" />
              {t.login}
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              className="rounded-lg px-6"
              style={{ 
                backgroundColor: 'var(--naklio-orange)',
                color: 'white'
              }}
            >
              {t.getQuote}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--naklio-teal)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--naklio-teal)' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <div className="flex justify-center mb-3">
              <LanguageSwitcher 
                currentLanguage={language} 
                onLanguageChange={onLanguageChange} 
              />
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === link.id
                    ? 'bg-[var(--naklio-orange)] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://app.naklio.com', '_blank')}
              variant="outline"
              className="w-full rounded-lg border-[var(--naklio-teal)] text-[var(--naklio-teal)] hover:bg-[var(--naklio-teal)] hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              {t.login}
            </Button>
            <Button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full rounded-lg"
              style={{ 
                backgroundColor: 'var(--naklio-orange)',
                color: 'white'
              }}
            >
              {t.getQuote}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
