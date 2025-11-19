import React from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import Features from './Features';
import Footer from './Footer';
import { GraduationCapIcon, UsersIcon, SchoolIcon } from '../icons';
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80"
                                    alt="Medical Students Studying"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 max-w-xs">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Success Rate</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">98%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                            {contactForm.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {contactForm.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Details Card */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                                            <p className="text-lg font-semibold text-slate-900 dark:text-white">contact@eduintelligence.com</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
                                            <p className="text-lg font-semibold text-slate-900 dark:text-white">+91 1234567890</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                                            <p className="text-lg font-semibold text-slate-900 dark:text-white">Chennai, Tamil Nadu, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media & Additional Info */}
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                                <p className="text-indigo-100 mb-6">
                                    Stay connected with us on social media for updates, tips, and success stories.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Send us a Message
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            {contactForm.fullNameLabel}
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder={contactForm.fullNamePlaceholder}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                            {contactForm.emailLabel}
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
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
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder={contactForm.subjectPlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        {contactForm.messageLabel}
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
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
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
