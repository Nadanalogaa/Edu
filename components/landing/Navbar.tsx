import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboardIcon, MenuIcon, XIcon } from '../icons';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../LanguageSelector';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const menuItems = [
        { label: t('landing.nav.home'), href: '#home' },
        { label: t('features'), href: '#features' },
        { label: t('aboutUs'), href: '#about' },
        { label: t('contactUs'), href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                            <div className="p-2 bg-indigo-600 rounded-lg">
                                <LayoutDashboardIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-slate-800 dark:text-white">
                                    {t('appTitle')}
                                </span>
                                <span className="text-xs text-indigo-600 dark:text-indigo-400">
                                    {t('landing.nav.tagline')}
                                </span>
                            </div>
                        </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSelector />
                        <Link
                            to="/login"
                            className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                        >
                            {t('login')}
                        </Link>
                        <a
                            href="#register"
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            {t('register')}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        {isOpen ? (
                            <XIcon className="w-6 h-6" />
                        ) : (
                            <MenuIcon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="px-4 py-4 space-y-3">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-4 space-y-3 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex justify-center mb-3">
                                <LanguageSelector />
                            </div>
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-2 text-center text-indigo-600 dark:text-indigo-400 font-medium"
                            >
                                {t('login')}
                            </Link>
                            <a
                                href="#register"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium rounded-lg"
                            >
                                {t('register')}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
