import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLanguage } from '../../context/LanguageContext';

const slideConfig = [
    {
        key: 'slide1',
        textGradient: "from-blue-600 via-indigo-600 to-purple-600",
        accentColor: "from-blue-500 to-indigo-600",
        image: "/neet-jee/new/jee-neet-01.png",
        imagePosition: "left",
        bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop&q=80"
    },
    {
        key: 'slide2',
        textGradient: "from-emerald-600 via-teal-600 to-cyan-600",
        accentColor: "from-emerald-500 to-teal-600",
        image: "/neet-jee/new/neet-01.png",
        imagePosition: "right",
        bgImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1920&h=1080&fit=crop&q=80"
    },
    {
        key: 'slide3',
        textGradient: "from-orange-600 via-red-600 to-pink-600",
        accentColor: "from-orange-500 to-red-600",
        image: "/neet-jee/new/jee.png",
        imagePosition: "left",
        bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop&q=80"
    },
    {
        key: 'slide4',
        textGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
        accentColor: "from-violet-500 to-fuchsia-600",
        image: "/neet-jee/new/jee-neet-02.png",
        imagePosition: "right",
        bgImage: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop&q=80"
    },
    {
        key: 'slide5',
        textGradient: "from-sky-600 via-blue-600 to-indigo-600",
        accentColor: "from-sky-500 to-indigo-600",
        image: "/neet-jee/new/neet-02.png",
        imagePosition: "left",
        bgImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&h=1080&fit=crop&q=80"
    }
];

const HeroCarousel: React.FC = () => {
    const { t } = useLanguage();
    const slides = slideConfig.map((slide) => ({
        ...slide,
        title: t(`landing.hero.slides.${slide.key}.title`),
        subtitle: t(`landing.hero.slides.${slide.key}.subtitle`),
        description: t(`landing.hero.slides.${slide.key}.description`),
        cta: t(`landing.hero.slides.${slide.key}.cta`),
    }));

    return (
        <div className="relative w-full h-screen bg-white">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full bg-white">
                            {/* Full-width Background Image with Low Opacity */}
                            <div
                                className="absolute inset-0 w-full h-full opacity-10"
                                style={{
                                    backgroundImage: `url('${slide.bgImage}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></div>

                            {/* Desktop Layout - Split Screen */}
                            <div className="hidden lg:flex h-full relative z-10">
                                {/* Image Section - 35% width */}
                                <div className={`relative ${slide.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'} w-[35%] flex items-center justify-center p-2`}>
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content Section - 65% width */}
                                <div className={`relative flex items-center justify-center ${slide.imagePosition === 'right' ? 'lg:order-1 pl-12 pr-3 xl:pl-20 xl:pr-4' : 'lg:order-2 pl-3 pr-12 xl:pl-4 xl:pr-20'} w-[65%]`}>
                                    <div className="max-w-2xl">
                                        {/* Badge */}
                                        <div className={`inline-flex items-center px-5 py-2 mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200 shadow-sm`}>
                                            <span className={`text-sm font-bold bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>
                                                NEET & JEE Excellence
                                            </span>
                                        </div>

                                        {/* Main Title with Vibrant Gradient */}
                                        <h1 className={`text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent leading-tight`}>
                                            {slide.title}
                                        </h1>

                                        {/* Subtitle */}
                                        <p className="text-2xl xl:text-3xl font-bold mb-4 text-slate-800">
                                            {slide.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-lg xl:text-xl mb-8 text-slate-700 leading-relaxed">
                                            {slide.description}
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-wrap gap-4 mb-10">
                                            <a
                                                href="#register"
                                                className={`px-8 py-4 bg-gradient-to-r ${slide.accentColor} text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                            >
                                                {slide.cta}
                                            </a>
                                            <a
                                                href="#features"
                                                className="px-8 py-4 bg-white text-slate-800 font-bold text-lg rounded-xl border-2 border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-md transition-all duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>

                                        {/* Stats Cards */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200">
                                                <div className={`text-3xl font-black bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>98%</div>
                                                <div className="text-sm text-slate-600 font-semibold">Success Rate</div>
                                            </div>
                                            <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200">
                                                <div className={`text-3xl font-black bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>5000+</div>
                                                <div className="text-sm text-slate-600 font-semibold">Students</div>
                                            </div>
                                            <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200">
                                                <div className={`text-3xl font-black bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>10K+</div>
                                                <div className="text-sm text-slate-600 font-semibold">Questions</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile/Tablet Layout - Stacked */}
                            <div className="lg:hidden h-full flex flex-col relative z-10">
                                {/* Image Section */}
                                <div className="relative h-1/2 w-full flex items-center justify-center p-6">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="relative h-1/2 flex items-center justify-center px-6 py-8 overflow-y-auto">
                                    <div className="max-w-2xl text-center">
                                        {/* Badge */}
                                        <div className={`inline-flex items-center px-4 py-2 mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200 shadow-sm`}>
                                            <span className={`text-xs font-bold bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>
                                                NEET & JEE Excellence
                                            </span>
                                        </div>

                                        {/* Main Title */}
                                        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent leading-tight`}>
                                            {slide.title}
                                        </h1>

                                        {/* Subtitle */}
                                        <p className="text-lg sm:text-xl font-bold mb-3 text-slate-800">
                                            {slide.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-base mb-6 text-slate-700 leading-relaxed">
                                            {slide.description}
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                                            <a
                                                href="#register"
                                                className={`px-8 py-3 bg-gradient-to-r ${slide.accentColor} text-white font-bold text-base rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                                            >
                                                {slide.cta}
                                            </a>
                                            <a
                                                href="#features"
                                                className="px-8 py-3 bg-white text-slate-800 font-bold text-base rounded-xl border-2 border-slate-300 hover:bg-slate-50 shadow-md transition-all duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>

                                        {/* Stats Cards */}
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-white rounded-lg p-3 shadow-md border border-slate-200">
                                                <div className={`text-xl font-black bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>98%</div>
                                                <div className="text-xs text-slate-600 font-semibold">Success</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 shadow-md border border-slate-200">
                                                <div className={`text-xl font-black bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>5000+</div>
                                                <div className="text-xs text-slate-600 font-semibold">Students</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 shadow-md border border-slate-200">
                                                <div className={`text-xl font-black bg-gradient-to-r ${slide.textGradient} bg-clip-text text-transparent`}>10K+</div>
                                                <div className="text-xs text-slate-600 font-semibold">Questions</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <a href="#features" className="flex flex-col items-center text-slate-700 hover:text-indigo-600 transition-colors">
                    <span className="text-sm font-semibold mb-2">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>

            <style>{`
                .swiper-button-next,
                .swiper-button-prev {
                    background: rgba(255, 255, 255, 0.95) !important;
                    backdrop-filter: blur(8px);
                    width: 48px !important;
                    height: 48px !important;
                    border-radius: 12px !important;
                    border: 1px solid rgba(148, 163, 184, 0.3) !important;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                    transition: all 0.3s ease !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    background-size: 22px 22px !important;
                    color: transparent !important;
                }
                .swiper-button-next::after,
                .swiper-button-prev::after,
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    content: '' !important;
                    display: none !important;
                    font-size: 0 !important;
                    width: 0 !important;
                    height: 0 !important;
                }
                .swiper-button-next {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E") !important;
                }
                .swiper-button-prev {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E") !important;
                }
                .swiper-button-next:hover {
                    background: rgba(255, 255, 255, 1) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
                    border-color: rgba(99, 102, 241, 0.5) !important;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E") !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    background-size: 22px 22px !important;
                }
                .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 1) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
                    border-color: rgba(99, 102, 241, 0.5) !important;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E") !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    background-size: 22px 22px !important;
                }
                .swiper-pagination-bullet {
                    background: rgba(148, 163, 184, 0.5) !important;
                    opacity: 1 !important;
                    width: 10px !important;
                    height: 10px !important;
                    transition: all 0.3s ease;
                    margin: 0 6px !important;
                }
                .swiper-pagination-bullet:hover {
                    background: rgba(99, 102, 241, 0.7) !important;
                    transform: scale(1.2);
                }
                .swiper-pagination-bullet-active {
                    width: 32px !important;
                    border-radius: 5px !important;
                    background: rgba(99, 102, 241, 0.9) !important;
                }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
