import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const featureCards = [
    {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80',
        titleKey: 'landing.features.personalizedTitle',
        descriptionKey: 'landing.features.personalizedDescription',
        color: "from-blue-500 to-indigo-600"
    },
    {
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop&q=80',
        titleKey: 'landing.features.questionBankTitle',
        descriptionKey: 'landing.features.questionBankDescription',
        color: "from-emerald-500 to-teal-600"
    },
    {
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&q=80',
        titleKey: 'landing.features.mistakeBookTitle',
        descriptionKey: 'landing.features.mistakeBookDescription',
        color: "from-orange-500 to-red-600"
    },
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80',
        titleKey: 'landing.features.liveClassesTitle',
        descriptionKey: 'landing.features.liveClassesDescription',
        color: "from-purple-500 to-pink-600"
    },
    {
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80',
        titleKey: 'landing.features.mockTestsTitle',
        descriptionKey: 'landing.features.mockTestsDescription',
        color: "from-cyan-500 to-blue-600"
    },
    {
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&q=80',
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
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Feature Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={t(feature.titleKey)}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                    {t(feature.titleKey)}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {t(feature.descriptionKey)}
                                </p>
                            </div>

                            {/* Decorative Border on Hover */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
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
