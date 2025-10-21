import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language, translations } from '../translations';

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
              <ImageWithFallback src="https://naklio.com/wp-content/uploads/2025/10/naklio-5.png" alt="Naklio" className="h-8" />
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
            <h4 className="mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.nav.about}
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

          {/* Legal */}
          <div>
            <h4 className="mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.footer.kvkk}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[var(--naklio-orange)] transition-colors">
                  {t.footer.cookies}
                </a>
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
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--naklio-orange)]" />
                <span className="text-gray-300">+90 (536) 593 4748</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--naklio-orange)]" />
                <span className="text-gray-300">{t.contact.address}</span>
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
