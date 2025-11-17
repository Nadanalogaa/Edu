import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const RegistrationLanding: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const bulletKeys = ['one', 'two', 'three', 'four'] as const;

  const registrationCards = [
    {
      key: 'student',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      bgColor: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      route: '/register/student'
    },
    {
      key: 'teacher',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'from-teal-500 to-green-600',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      route: '/register/teacher'
    },
    {
      key: 'school',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'from-orange-500 to-red-600',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      route: '/register/school'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('landing.registrationLanding.title')}
          </h1>
          <p className="text-xl text-purple-100">
            {t('landing.registrationLanding.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registrationCards.map((card) => (
            <div
              key={card.key}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Section */}
              <div className={`bg-gradient-to-br ${card.bgColor} p-8 flex justify-center items-center`}>
                <div className="bg-white/20 rounded-full p-6">
                  {card.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {t(`landing.registration.cards.${card.key}.title`)}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {t(`landing.registration.cards.${card.key}.description`)}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {bulletKeys.map((bulletKey) => (
                    <li key={bulletKey} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {t(`landing.registration.cards.${card.key}.bullets.${bulletKey}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Register Button */}
                <button
                  onClick={() => navigate(card.route)}
                  className={`w-full py-3 px-6 ${card.buttonColor} text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl`}
                >
                  {t(`landing.registration.cards.${card.key}.cta`)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-purple-100 mb-4">
            {t('landing.registrationLanding.alreadyHaveAccount')}
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-200 shadow-lg"
          >
            {t('landing.registrationLanding.signIn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLanding;
