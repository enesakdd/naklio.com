import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language, translations } from '../translations';
import logoImage from 'figma:asset/88e99ec0b0cfb72138a40b360b8bd12b7279b1b1.png';

interface FooterProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function Footer({ onNavigate, language }: FooterProps) {
  const t = translations[language];
  return (
    <footer className="bg-[var(--naklio-teal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <ImageWithFallback src={logoImage} alt="Naklio" className="h-8" />
            </div>
            <p className="text-gray-300 mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61562970850474" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--naklio-orange)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/naklio.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--naklio-orange)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/naklio" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--naklio-orange)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.nav.solutions}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sss')} className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--naklio-orange)]" />
                <span className="text-gray-300">info@naklio.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--naklio-orange)]" />
                <span className="text-gray-300">Maltepe Piazza, Cevizli, Tugay Yolu Cd. İstanbul/Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Naklio. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
