import React from 'react';
import { TargetIcon, ZapIcon, BookOpenIcon, UsersIcon, GraduationCapIcon, ClipboardCheckIcon } from '../icons';
import { useLanguage } from '../../context/LanguageContext';

const featureCards = [
    {
        icon: <TargetIcon className="w-12 h-12" />,
        titleKey: 'landing.features.personalizedTitle',
        descriptionKey: 'landing.features.personalizedDescription',
        color: "from-blue-500 to-indigo-600"
    },
    {
        icon: <BookOpenIcon className="w-12 h-12" />,
        titleKey: 'landing.features.questionBankTitle',
        descriptionKey: 'landing.features.questionBankDescription',
        color: "from-emerald-500 to-teal-600"
    },
    {
        icon: <ZapIcon className="w-12 h-12" />,
        titleKey: 'landing.features.mistakeBookTitle',
        descriptionKey: 'landing.features.mistakeBookDescription',
        color: "from-orange-500 to-red-600"
    },
    {
        icon: <UsersIcon className="w-12 h-12" />,
        titleKey: 'landing.features.liveClassesTitle',
        descriptionKey: 'landing.features.liveClassesDescription',
        color: "from-purple-500 to-pink-600"
    },
    {
        icon: <ClipboardCheckIcon className="w-12 h-12" />,
        titleKey: 'landing.features.mockTestsTitle',
        descriptionKey: 'landing.features.mockTestsDescription',
        color: "from-cyan-500 to-blue-600"
    },
    {
        icon: <GraduationCapIcon className="w-12 h-12" />,
        titleKey: 'landing.features.gamifiedTitle',
        descriptionKey: 'landing.features.gamifiedDescription',
        color: "from-fuchsia-500 to-violet-600"
    }
];

const Features: React.FC = () => {
    const { t } = useLanguage();
    const stats = [
        { value: '10,000+', label: t('landing.featureStats.practiceQuestions'), color: 'text-indigo-600 dark:text-indigo-400' },
        { value: '5,000+', label: t('landing.featureStats.activeStudents'), color: 'text-emerald-600 dark:text-emerald-400' },
        { value: '98%', label: t('landing.featureStats.successRate'), color: 'text-orange-600 dark:text-orange-400' },
        { value: '24/7', label: t('landing.featureStats.expertSupport'), color: 'text-purple-600 dark:text-purple-400' },
    ];

    return (
        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                        {t('landing.featuresSection.title')}
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        {t('landing.featuresSection.subtitle')}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureCards.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Icon with Gradient Background */}
                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                {t(feature.titleKey)}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t(feature.descriptionKey)}
                            </p>

                            {/* Decorative Border on Hover */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-6">
                            <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
