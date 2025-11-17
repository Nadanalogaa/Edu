import React from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import Features from './Features';
import Footer from './Footer';
import { GraduationCapIcon, UsersIcon, SchoolIcon, DoctorIcon } from '../icons';
import { useLanguage } from '../../context/LanguageContext';

const LandingPage: React.FC = () => {
    const { t } = useLanguage();

    const registrationCards = [
        {
            key: 'student',
            icon: <GraduationCapIcon className="w-16 h-16" />,
            gradient: 'from-blue-500 to-indigo-600',
            href: '/register/student',
            buttonGradient: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
        },
        {
            key: 'teacher',
            icon: <UsersIcon className="w-16 h-16" />,
            gradient: 'from-emerald-500 to-teal-600',
            href: '/register/teacher',
            buttonGradient: 'from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
        },
        {
            key: 'school',
            icon: <SchoolIcon className="w-16 h-16" />,
            gradient: 'from-orange-500 to-red-600',
            href: '/register/school',
            buttonGradient: 'from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
        },
    ];

    const aboutStats = [
        { value: '98%', label: t('landing.about.stats.successRate'), color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
        { value: '5000+', label: t('landing.about.stats.students'), color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
        { value: '10000+', label: t('landing.about.stats.questions'), color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20' },
        { value: '24/7', label: t('landing.about.stats.support'), color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    ];

    const bulletKeys = ['one', 'two', 'three', 'four'];

    const contactForm = {
        title: t('landing.contact.title'),
        subtitle: t('landing.contact.subtitle'),
        fullNameLabel: t('landing.contact.form.fullNameLabel'),
        fullNamePlaceholder: t('landing.contact.form.fullNamePlaceholder'),
        emailLabel: t('landing.contact.form.emailLabel'),
        emailPlaceholder: t('landing.contact.form.emailPlaceholder'),
        subjectLabel: t('landing.contact.form.subjectLabel'),
        subjectPlaceholder: t('landing.contact.form.subjectPlaceholder'),
        messageLabel: t('landing.contact.form.messageLabel'),
        messagePlaceholder: t('landing.contact.form.messagePlaceholder'),
        submit: t('landing.contact.form.submit'),
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <Navbar />

            {/* Hero Section with Carousel */}
            <div id="home">
                <HeroCarousel />
            </div>

            {/* Features Section */}
            <Features />

            {/* Registration Section */}
            <section id="register" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            {t('landing.registration.title')}
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            {t('landing.registration.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {registrationCards.map((card) => (
                            <div key={card.key} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <div className="text-center">
                                    <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${card.gradient} text-white mb-6`}>
                                        {card.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                        {t(`landing.registration.cards.${card.key}.title`)}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        {t(`landing.registration.cards.${card.key}.description`)}
                                    </p>
                                    <ul className="text-left space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                                        {bulletKeys.map((bulletKey) => (
                                            <li key={bulletKey} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {t(`landing.registration.cards.${card.key}.bullets.${bulletKey}`)}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={card.href}
                                        className={`block w-full py-3 bg-gradient-to-r ${card.buttonGradient} text-white font-bold rounded-lg shadow-md transition-all duration-300`}
                                    >
                                        {t(`landing.registration.cards.${card.key}.cta`)}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                                {t('landing.about.title')}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                                {t('landing.about.paragraph1')}
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                                {t('landing.about.paragraph2')}
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                                {t('landing.about.paragraph3')}
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {aboutStats.map((stat) => (
                                    <div key={stat.label} className={`text-center p-4 ${stat.bg} rounded-lg`}>
                                        <div className={`text-3xl font-extrabold ${stat.color} mb-2`}>{stat.value}</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image/Illustration */}
                        <div className="relative">
                            <div className="flex items-center justify-center">
                                <DoctorIcon className="w-full max-w-md" />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                            {contactForm.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            {contactForm.subtitle}
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {contactForm.fullNameLabel}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder={contactForm.fullNamePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {contactForm.emailLabel}
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder={contactForm.emailPlaceholder}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    {contactForm.subjectLabel}
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder={contactForm.subjectPlaceholder}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    {contactForm.messageLabel}
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder={contactForm.messagePlaceholder}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                {contactForm.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
