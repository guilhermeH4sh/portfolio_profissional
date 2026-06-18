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
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const timeline = document.querySelector('.timeline-alt');
        const progressLine = document.querySelector('.timeline-progress-line') as HTMLElement;
        if (!timeline) return;

        const timelineRect = timeline.getBoundingClientRect();
        const pageViewRect = pageView.getBoundingClientRect();
        const viewportHeight = pageViewRect.height;

        // 1. Progress Line Height
        if (progressLine) {
          const timelineTop = timelineRect.top - pageViewRect.top;
          const timelineHeight = timelineRect.height;
          const triggerPoint = viewportHeight / 2;
          const scrolled = triggerPoint - timelineTop;
          
          let progress = scrolled / timelineHeight;
          progress = Math.max(0, Math.min(1, progress));
          progressLine.style.height = `${progress * 100}%`;
        }

        // 2. Active Card Highlight (closest to viewport center)
        const cards = timeline.querySelectorAll('.timeline-row-alt');
        let minDistance = Infinity;
        let activeCardIdx = -1;

        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const viewportCenter = pageViewRect.top + viewportHeight / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            activeCardIdx = idx;
          }
        });

        cards.forEach((card, idx) => {
          if (idx === activeCardIdx) {
            card.classList.add('timeline-card-active');
          } else {
            card.classList.remove('timeline-card-active');
          }
        });
      });
    };

    pageView.addEventListener('scroll', handleScroll);
    // Initial call
    setTimeout(handleScroll, 50);

    return () => {
      pageView.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

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
