import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  language: 'pt' | 'en' | 'es';
  t: (key: string) => string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  language,
  t,
}) => {
  const images = project.images && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const description = project.detailedDesc
    ? project.detailedDesc[language]
    : project.desc[language];

  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 0 ? (
          <div className="project-modal-left">
            <div className="project-modal-slider-viewport">
              <div className="project-modal-slide">
                <img 
                  src={images[currentImgIndex]} 
                  alt={`${project.title[language]} - Screenshot ${currentImgIndex + 1}`} 
                  className="project-modal-img" 
                />
              </div>

              {images.length > 1 && (
                <>
                  <button className="project-modal-slider-btn prev" type="button" onClick={handlePrev} aria-label="Anterior">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="project-modal-slider-btn next" type="button" onClick={handleNext} aria-label="Próximo">
                    <ChevronRight size={20} />
                  </button>
                  <div className="project-modal-dots">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`project-modal-dot ${idx === currentImgIndex ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImgIndex(idx);
                        }}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="project-modal-left" style={{ background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px' }}>
            <div style={{ transform: 'scale(1.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {project.icon}
            </div>
          </div>
        )}

        <div className="project-modal-right" style={{ position: 'relative' }}>
          <button 
            type="button"
            className="experience-modal-close"
            style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 20 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label={t('modal.close') || 'Fechar'}
          >
            <X size={20} />
          </button>

          <div>
            <div className="project-modal-header" style={{ paddingRight: '2.5rem' }}>
              <h3 className="project-modal-title">{project.title[language]}</h3>
              <div className="project-modal-tech">
                {project.tech.map((techItem, idx) => (
                  <span key={idx} className="tech-tag">{techItem}</span>
                ))}
              </div>
            </div>
            <div className="project-modal-desc">
              {description.split('\n').map((line, lineIdx) => {
                if (line.trim() === '') return <br key={lineIdx} />;
                return <p key={lineIdx}>{line}</p>;
              })}
            </div>
          </div>

          <div className="project-modal-footer">
            <button 
              type="button"
              className="project-modal-close-btn" 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              {language === 'en' ? 'Close' : language === 'es' ? 'Cerrar' : 'Fechar'}
            </button>
            <div className="project-modal-links">
              {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn" 
                  title={language === 'en' ? 'View code' : language === 'es' ? 'Ver código' : 'Ver código'}
                  style={{ position: 'static' }}
                >
                  <Github size={16} />
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '' && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-link-btn" 
                  title={language === 'en' ? 'View Demo' : language === 'es' ? 'Ver Demo' : 'Ver Demo'}
                  style={{ position: 'static' }}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
