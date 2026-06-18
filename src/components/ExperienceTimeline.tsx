import React, { useEffect } from 'react';
import { Experience } from '../data/portfolioData';

interface ExperienceTimelineProps {
  experiences: Experience[];
  language: 'pt' | 'en' | 'es';
  onSelectExperience: (exp: Experience) => void;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  language,
  onSelectExperience,
}) => {
  useEffect(() => {
    const pageView = document.querySelector('.page-view');
    if (!pageView) return;

    let frameId: number;
    let timelineOffsetTop = 0;
    let timelineHeight = 0;
    let containerHeight = 0;

    const updateDimensions = () => {
      const timeline = document.querySelector('.timeline-alt');
      if (timeline && pageView) {
        const rect = timeline.getBoundingClientRect();
        const pageRect = pageView.getBoundingClientRect();
        timelineOffsetTop = rect.top - pageRect.top + pageView.scrollTop;
        timelineHeight = rect.height;
        containerHeight = pageRect.height;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const progressLine = document.querySelector('.timeline-progress-line') as HTMLElement;
        if (!progressLine) return;

        if (timelineHeight === 0) {
          updateDimensions();
        }

        const scrollTop = pageView.scrollTop;
        const scrolled = (scrollTop + containerHeight / 2) - timelineOffsetTop;
        
        let progress = timelineHeight > 0 ? scrolled / timelineHeight : 0;
        progress = Math.max(0, Math.min(1, progress));
        
        const isMobile = window.innerWidth <= 768;
        progressLine.style.transform = isMobile 
          ? `scaleY(${progress})` 
          : `translateX(-50%) scaleY(${progress})`;
      });
    };

    // Calculate dimensions initially
    updateDimensions();

    // Observe Scroll & Resize with passive event listeners to avoid blocking paint thread
    pageView.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDimensions, { passive: true });

    // Setup IntersectionObserver for active card highlight (highlights cards entering middle 10% of viewport)
    const observerOptions = {
      root: pageView,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-card-active');
        } else {
          entry.target.classList.remove('timeline-card-active');
        }
      });
    }, observerOptions);

    const cards = pageView.querySelectorAll('.timeline-row-alt');
    cards.forEach((card) => cardObserver.observe(card));

    // Initial trigger
    handleScroll();

    return () => {
      pageView.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
      cards.forEach((card) => cardObserver.unobserve(card));
      cardObserver.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [experiences]);

  return (
    <div className="tab-scroll-container timeline-container-active">
      <div className="timeline-wrapper-alt">
        <div className="timeline-alt">
          <div className="timeline-progress-line"></div>
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            const cardContent = (
              <div className="timeline-content-alt">
                <div className="experience-header-layout">
                  <div 
                    className="experience-logo-slot" 
                    onClick={() => onSelectExperience(exp)}
                    title={
                      language === 'en' 
                        ? `Click to see sector details for ${exp.company}` 
                        : language === 'es' 
                          ? `Haga clic para ver los detalles del sector de ${exp.company}` 
                          : `Clique para ver detalhes do setor de ${exp.company}`
                    }
                  >
                    <img src={exp.logo} alt={`Logo ${exp.company}`} className="experience-logo-img-inside" />
                  </div>
                  <div className="experience-header-text">
                    <span className="timeline-period-alt">{exp.period[language]}</span>
                    <h3 className="timeline-role-alt">{exp.role[language]}</h3>
                    <span className="timeline-company-alt">{exp.company}</span>
                  </div>
                </div>
                <p className="timeline-desc-alt">{exp.desc[language]}</p>
                <div className="timeline-tags-alt">
                  {exp.tags[language].map((tag, tIdx) => (
                    <span key={tIdx} className="ttag-alt">{tag}</span>
                  ))}
                </div>
              </div>
            );

            return (
              <div 
                key={idx} 
                className={`timeline-row-alt reveal ${isLeft ? 'reveal-left' : 'reveal-right'}`}
                style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
              >
                <div className={`timeline-col-left ${!isLeft ? 'timeline-col-empty' : ''}`}>
                  {isLeft ? cardContent : null}
                </div>
                <div className="timeline-center-dot-alt"></div>
                <div className={`timeline-col-right ${isLeft ? 'timeline-col-empty' : ''}`}>
                  {!isLeft ? cardContent : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
