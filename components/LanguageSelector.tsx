import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'default' | 'large';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'default' }) => {
  const { language, setLanguage } = useLanguage();

  const isLarge = variant === 'large';

  return (
    <div className="flex items-center space-x-2">
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
  );
};

export default LanguageSelector;
