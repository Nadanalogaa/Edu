import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'default' | 'large';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'default' }) => {
  const { language, setLanguage } = useLanguage();

  const isLarge = variant === 'large';

  // On mobile (<sm): compact toggle button — single pill showing the OTHER language to switch to.
  // On desktop (>=sm): full pair of buttons.
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ta' : 'en');

  return (
    <>
      {/* Mobile: compact toggle */}
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={language === 'en' ? 'Switch to Tamil' : 'Switch to English'}
        className="sm:hidden inline-flex items-center justify-center min-w-[40px] h-9 px-2.5 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-sm active:scale-95 transition-transform"
      >
        {language === 'en' ? 'த' : 'EN'}
      </button>

      {/* Desktop: full pair */}
      <div className="hidden sm:flex items-center space-x-2">
        <button
          onClick={() => setLanguage('en')}
          className={`
            ${isLarge ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
            font-medium rounded-lg transition-all
            ${
              language === 'en'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }
          `}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('ta')}
          className={`
            ${isLarge ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
            font-medium rounded-lg transition-all
            ${
              language === 'ta'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }
          `}
        >
          தமிழ்
        </button>
      </div>
    </>
  );
};

export default LanguageSelector;
