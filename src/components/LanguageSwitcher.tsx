import { Language } from '../translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onLanguageChange('tr')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
          currentLanguage === 'tr'
            ? 'bg-white shadow-sm'
            : 'hover:bg-gray-50'
        }`}
        aria-label="Türkçe"
      >
        <span className={`text-sm font-medium ${
          currentLanguage === 'tr' ? 'text-[var(--naklio-teal)]' : 'text-gray-600'
        }`}>
          TR
        </span>
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
          currentLanguage === 'en'
            ? 'bg-white shadow-sm'
            : 'hover:bg-gray-50'
        }`}
        aria-label="English"
      >
        <span className={`text-sm font-medium ${
          currentLanguage === 'en' ? 'text-[var(--naklio-teal)]' : 'text-gray-600'
        }`}>
          EN
        </span>
      </button>
    </div>
  );
}
