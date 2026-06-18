import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { heroProjects } from '../data/heroData';
import { useLanguage } from '../context/LanguageContext';
import 'swiper/css';

const HeroCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const container = containerRef.current;
    let isPageVisible = true;
    let isCarouselIntersecting = true;

    const updateAutoplay = () => {
      const swiper = swiperRef.current;
      if (!swiper) return;
      if (isPageVisible && isCarouselIntersecting) {
        if (swiper.autoplay && !swiper.autoplay.running) {
          swiper.autoplay.start();
        }
      } else {
        if (swiper.autoplay && swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      }
    };

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === 'visible';
      updateAutoplay();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });

    let observer: IntersectionObserver | null = null;
    if (container) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isCarouselIntersecting = entry.isIntersecting;
          updateAutoplay();
        },
        { threshold: 0 }
      );
      observer.observe(container);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (observer && container) {
        observer.unobserve(container);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-carousel-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation={false}
        loop={true}
        speed={700}
        spaceBetween={24}
        className="hero-swiper"
      >
        {heroProjects.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-carousel-card">
              <div className="hero-carousel-card-image-wrapper">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className={`hero-carousel-card-image ${proj.title === "Membro da AIESEC" ? "logo-contain" : ""}`} 
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : undefined}
                />
              </div>
              <div className="hero-carousel-card-content">
                <div className="hero-carousel-card-header">
                  <span className="hero-carousel-tag">{proj.tag[language]}</span>
                </div>
                <h3 className="hero-carousel-title">{proj.title}</h3>
                <span className="hero-carousel-subtitle">{proj.subtitle[language]}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        className="hero-nav-btn hero-nav-prev"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label={language === 'en' ? 'Previous slide' : language === 'es' ? 'Diapositiva anterior' : 'Slide anterior'}
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>
      <button
        className="hero-nav-btn hero-nav-next"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label={language === 'en' ? 'Next slide' : language === 'es' ? 'Siguiente diapositiva' : 'Próximo slide'}
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default HeroCarousel;
