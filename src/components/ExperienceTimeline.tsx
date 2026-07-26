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
    let frameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const timeline = document.querySelector('.timeline-alt');
        const progressLine = document.querySelector('.timeline-progress-line') as HTMLElement;
        if (!timeline || !progressLine) return;

        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate progress line fill relative to window scroll position
        const scrolled = (viewportHeight / 2) - rect.top;
        const timelineHeight = rect.height;

        let progress = timelineHeight > 0 ? scrolled / timelineHeight : 0;
        progress = Math.max(0, Math.min(1, progress));

        const isMobile = window.innerWidth <= 768;
        progressLine.style.transform = isMobile 
          ? `scaleY(${progress})` 
          : `translateX(-50%) scaleY(${progress})`;
      });
    };

    // Setup IntersectionObserver for active card highlight using window viewport
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-card-active');
          } else {
            entry.target.classList.remove('timeline-card-active');
          }
        });
      },
      {
        root: null,
        rootMargin: '-35% 0px -35% 0px',
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll('.timeline-row-alt');
    cards.forEach((card) => cardObserver.observe(card));

    // Initial trigger
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
