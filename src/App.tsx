import { useState, useEffect, lazy, Suspense } from 'react';
import HeroPage from './components/HeroPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Sun, Moon, Home } from 'lucide-react';

const AboutPage = lazy(() => import('./components/AboutPage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

function AppContent() {
  const [currentView, setCurrentView] = useState<'inicio' | 'trajetoria' | 'projetos' | 'contato'>('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Mouse Position Tracker (Updates CSS variables directly on the grid-glow element to limit style recalculations)
  // Skipped on touch devices to improve mobile performance
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const glowEl = document.getElementById('grid-glow');
        if (glowEl) {
          glowEl.style.setProperty('--mouse-x', `${e.clientX}px`);
          glowEl.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Header Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ==========================================
           BACKGROUND & SPOTLIGHT
           ========================================== */}
      <div className="grid-bg"></div>
      <div id="grid-glow" className="grid-glow"></div>

      {/* ==========================================
           HEADER / NAVBAR
           ========================================== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container nav-wrapper">
          <button 
            onClick={() => { setCurrentView('inicio'); setIsMenuOpen(false); }} 
            className="home-btn" 
            aria-label="Home"
          >
            <Home size={14} />
          </button>

          <div className="nav-lang-group">
            {/* Language Switcher */}
            <div className="lang-switcher">
              <button 
                className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
                onClick={() => setLanguage('pt')}
              >
                <svg viewBox="0 0 20 14" className="flag-icon">
                  <rect width="20" height="14" fill="#009b3a"/>
                  <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#fedf00"/>
                  <circle cx="10" cy="7" r="3" fill="#002776"/>
                </svg>
                PT
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                <svg viewBox="0 0 20 14" className="flag-icon">
                  <rect width="20" height="14" fill="#012169"/>
                  <path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" strokeWidth="2"/>
                  <path d="M0,0 L20,14 M20,0 L0,14" stroke="#C8102E" strokeWidth="1.2"/>
                  <path d="M10,0 L10,14 M0,7 L20,7" stroke="#fff" strokeWidth="3.5"/>
                  <path d="M10,0 L10,14 M0,7 L20,7" stroke="#C8102E" strokeWidth="2"/>
                </svg>
                EN
              </button>
              <button 
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => setLanguage('es')}
              >
                <svg viewBox="0 0 20 14" className="flag-icon">
                  <rect width="20" height="14" fill="#c60b1e"/>
                  <rect y="3.5" width="20" height="7" fill="#ffc400"/>
                </svg>
                ES
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Menu Hambúrguer (Desktop & Mobile) */}
            <button
              className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
              id="menu-btn"
              aria-label="Abrir menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
              <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
              <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
           SIDE MENU DRAWER (RESPONSIVE)
           ========================================== */}
      {/* Backdrop Overlay */}
      <div 
        className={`drawer-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Slide-out Drawer */}
      <div className={`drawer-container ${isMenuOpen ? 'open' : ''}`}>
        <nav className="drawer-nav">
          <ul className="drawer-links">
            <li>
              <button
                className={`drawer-link ${currentView === 'inicio' ? 'active' : ''}`}
                onClick={() => { setCurrentView('inicio'); setIsMenuOpen(false); }}
              >
                {t('nav.inicio')}
              </button>
            </li>
            <li>
              <button
                className={`drawer-link ${currentView === 'trajetoria' ? 'active' : ''}`}
                onClick={() => { setCurrentView('trajetoria'); setIsMenuOpen(false); }}
              >
                {t('nav.trajetoria')}
              </button>
            </li>
            <li>
              <button
                className={`drawer-link ${currentView === 'projetos' ? 'active' : ''}`}
                onClick={() => { setCurrentView('projetos'); setIsMenuOpen(false); }}
              >
                {t('nav.projetos')}
              </button>
            </li>
            <li>
              <button
                className={`drawer-link drawer-link-highlight ${currentView === 'contato' ? 'active' : ''}`}
                onClick={() => { setCurrentView('contato'); setIsMenuOpen(false); }}
              >
                {t('nav.contato')}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* ==========================================
           PÁGINA ATIVA (RENDER VIEW)
           ========================================== */}
      {currentView === 'inicio' && <HeroPage onNavigate={setCurrentView} />}
      <Suspense fallback={null}>
        {currentView === 'trajetoria' && <AboutPage />}
        {currentView === 'projetos' && <ProjectsPage />}
        {currentView === 'contato' && <ContactPage />}
      </Suspense>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

