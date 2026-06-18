import React, { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroCarousel = lazy(() => import('./HeroCarousel'));

interface HeroPageProps {
  onNavigate: (view: 'inicio' | 'trajetoria' | 'projetos' | 'contato') => void;
}

const HeroPage: React.FC<HeroPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="page-view hero-page-view">
      <section className="hero" id="home">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              {t('hero.hello')} <br />
              <span className="text-shimmer">{t('hero.role')}</span>
            </h1>
            <p className="hero-desc">
              {t('hero.desc')}
            </p>
            <div className="hero-btns">
              <button onClick={() => onNavigate('projetos')} className="btn-cta">
                {t('hero.btn.portfolio')} <ArrowRight size={14} />
              </button>
              <button onClick={() => onNavigate('contato')} className="btn-secondary">
                {t('hero.btn.contact')}
              </button>
            </div>
          </div>

          <div className="hero-carousel-section">
            <Suspense fallback={
              <div className="hero-carousel-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  Loading Showcase...
                </div>
              </div>
            }>
              <HeroCarousel />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
