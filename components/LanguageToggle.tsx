import React from 'react';

type Language = 'en' | 'ta';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const commonClasses = "px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900 focus:ring-indigo-500";
  const activeClasses = "bg-indigo-600 text-white shadow";
  const inactiveClasses = "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700";

  return (
    <div className="flex items-center space-x-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => onLanguageChange('en')}
        className={`${commonClasses} ${currentLanguage === 'en' ? activeClasses : inactiveClasses}`}
        aria-pressed={currentLanguage === 'en'}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange('ta')}
        className={`${commonClasses} ${currentLanguage === 'ta' ? activeClasses : inactiveClasses}`}
        aria-pressed={currentLanguage === 'ta'}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageToggle;
