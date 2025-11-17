import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useLanguage } from '../../context/LanguageContext';

const slideConfig = [
    {
        key: 'slide1',
        gradient: "from-blue-600 via-indigo-600 to-purple-600",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop"
    },
    {
        key: 'slide2',
        gradient: "from-emerald-600 via-teal-600 to-cyan-600",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=600&fit=crop"
    },
    {
        key: 'slide3',
        gradient: "from-orange-600 via-red-600 to-pink-600",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop"
    },
    {
        key: 'slide4',
        gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
    },
    {
        key: 'slide5',
        gradient: "from-sky-600 via-blue-600 to-indigo-600",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
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
        <div className="relative w-full h-screen">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
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
                        <div className="relative h-full w-full">
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-85`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                                <div className="max-w-4xl mx-auto text-center text-white">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white/90 animate-fade-in-up animation-delay-100">
                                        {slide.subtitle}
                                    </p>
                                    <p className="text-base sm:text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                                        <a
                                            href="#register"
                                            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                        >
                                            {slide.cta}
                                        </a>
                                        <a
                                            href="#features"
                                            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <a href="#features" className="flex flex-col items-center text-white">
                    <span className="text-sm mb-2">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>

            <style>{`
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }
                .animation-delay-100 {
                    animation-delay: 0.1s;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: white !important;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(8px);
                    width: 50px !important;
                    height: 50px !important;
                    border-radius: 50%;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 20px !important;
                }
                .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.5;
                    width: 12px !important;
                    height: 12px !important;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 30px !important;
                    border-radius: 6px !important;
                }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
