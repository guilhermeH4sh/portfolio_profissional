import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Experience } from '../data/portfolioData';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
  language: 'pt' | 'en' | 'es';
  t: (key: string) => string;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  language,
  t,
}) => {
  return createPortal(
    <div className="experience-modal-overlay" onClick={onClose}>
      <div className="experience-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="experience-modal-close" 
          onClick={onClose}
          aria-label={t('modal.close')}
        >
          <X size={20} />
        </button>
        <div className="experience-modal-img-container">
          <img 
            src={experience.logo} 
            alt={experience.company} 
            className="experience-modal-img" 
          />
        </div>
        <div className="experience-modal-info">
          <h3>{experience.company}</h3>
          <span className="experience-modal-sector">{experience.sector[language]}</span>
          <p>{experience.sectorDesc[language]}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ExperienceModal;
