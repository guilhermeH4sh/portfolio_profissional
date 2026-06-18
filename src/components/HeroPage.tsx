import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroProjects } from '../data/portfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';

interface HeroPageProps {
  onNavigate: (view: 'inicio' | 'trajetoria' | 'projetos' | 'contato') => void;
}

const HeroPage: React.FC<HeroPageProps> = ({ onNavigate }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-view hero-page-view">
      <section className="hero" id="home">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <h1 className={`hero-title reveal ${mounted ? 'active' : ''}`}>
              {t('hero.hello')} <br />
              <span className="text-shimmer">{t('hero.role')}</span>
            </h1>
            <p className={`hero-desc reveal ${mounted ? 'active' : ''}`} style={{ transitionDelay: '150ms' }}>
              {t('hero.desc')}
            </p>
            <div className={`hero-btns reveal ${mounted ? 'active' : ''}`} style={{ transitionDelay: '300ms' }}>
              <button onClick={() => onNavigate('projetos')} className="btn-cta">
                {t('hero.btn.portfolio')} <ArrowRight size={14} />
              </button>
              <button onClick={() => onNavigate('contato')} className="btn-secondary">
                {t('hero.btn.contact')}
              </button>
            </div>
          </div>

          <div className={`hero-carousel-section reveal ${mounted ? 'active' : ''}`} style={{ transitionDelay: '400ms' }}>
            <div className="hero-carousel-container">
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
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroPage;
