import React from 'react';
import { Experience } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface CareerBentoGridProps {
  experiences: Experience[];
  language: 'pt' | 'en' | 'es';
  onSelectExperience: (exp: Experience) => void;
}

const CareerBentoGrid: React.FC<CareerBentoGridProps> = ({
  experiences,
  language,
  onSelectExperience,
}) => {
  return (
    <div className="career-bento-grid">
      {experiences.map((exp, idx) => {
        const isFeatured = idx === 0;

        return (
          <div
            key={idx}
            className={`bento-career-card reveal ${isFeatured ? 'bento-card-featured' : ''}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
            onClick={() => onSelectExperience(exp)}
          >
            <div className="bento-card-header">
              <div className="bento-card-company-group">
                <div className="bento-logo-wrapper">
                  <img src={exp.logo} alt={exp.company} className="bento-logo-img" />
                </div>
                <div className="bento-company-info">
                  <span className="bento-company-name">{exp.company}</span>
                  <span className="bento-period">{exp.period[language]}</span>
                </div>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-role-title">{exp.role[language]}</h3>
              <p className="bento-desc">{exp.desc[language]}</p>
            </div>

            <div className="bento-card-footer">
              <div className="bento-tags-row">
                {exp.tags[language].map((tag, tIdx) => (
                  <span key={tIdx} className="bento-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bento-details-btn">
                <span>{language === 'en' ? 'Details' : language === 'es' ? 'Detalles' : 'Detalhes'}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CareerBentoGrid;
