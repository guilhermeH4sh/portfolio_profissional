import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects, Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectModal from './ProjectModal';

const getTechLogo = (tech: string): string | null => {
  const t = tech.toLowerCase().trim();
  if (t === 'react') return 'https://cdn.simpleicons.org/react/ffffff';
  if (t === 'next.js' || t === 'nextjs') return 'https://cdn.simpleicons.org/nextdotjs/ffffff';
  if (t === 'typescript' || t === 'ts') return 'https://cdn.simpleicons.org/typescript/ffffff';
  if (t === 'javascript' || t === 'js') return 'https://cdn.simpleicons.org/javascript/ffffff';
  if (t === 'tailwind' || t === 'tailwindcss') return 'https://cdn.simpleicons.org/tailwindcss/ffffff';
  if (t === 'node.js' || t === 'nodejs' || t === 'node') return 'https://cdn.simpleicons.org/nodedotjs/ffffff';
  if (t === 'python') return 'https://cdn.simpleicons.org/python/ffffff';
  if (t === 'streamlit') return 'https://cdn.simpleicons.org/streamlit/ffffff';
  if (t === 'langchain') return 'https://cdn.simpleicons.org/langchain/ffffff';
  if (t === 'mongodb' || t === 'mongo') return 'https://cdn.simpleicons.org/mongodb/ffffff';
  if (t === 'three.js' || t === 'threejs') return 'https://cdn.simpleicons.org/threedotjs/ffffff';
  if (t === 'vite') return 'https://cdn.simpleicons.org/vite/ffffff';
  if (t === 'css3' || t === 'css') return 'https://cdn.simpleicons.org/css/ffffff';
  return null;
};

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  // Initialize Scroll Reveal
  useScrollReveal([filter]);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  // Reset active slide when filter changes
  useEffect(() => {
    setActiveProjectIndex(0);
  }, [filter]);

  const handlePrev = () => {
    setActiveProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveProjectIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="page-view projects-page-view">
      <section className="section projects-view-section" id="projects">
        <div className="container">
          <div className="projects-header">
            <div>
              <h2 className="section-title text-gradient reveal">{t('projects.title')}</h2>
            </div>
            <div className="project-filters reveal" style={{ transitionDelay: '200ms' }}>
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                {t('filter.all')}
              </button>
              <button
                className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
                onClick={() => setFilter('frontend')}
              >
                Frontend
              </button>
              <button
                className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
                onClick={() => setFilter('backend')}
              >
                Backend
              </button>
              <button
                className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
                onClick={() => setFilter('fullstack')}
              >
                Fullstack
              </button>
            </div>
          </div>

          <div className="projects-carousel-container reveal" style={{ transitionDelay: '350ms' }}>
            <button
              className="carousel-nav-btn prev-btn"
              onClick={handlePrev}
              aria-label={language === 'en' ? 'Previous project' : language === 'es' ? 'Proyecto anterior' : 'Projeto anterior'}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="projects-carousel-viewport">
              <div
                className="projects-carousel-track"
                style={{
                  transform: `translateX(calc(50% - (var(--slide-width) / 2) - ${activeProjectIndex} * (var(--slide-width) + var(--slide-gap))))`
                }}
              >
                {filteredProjects.map((project, idx) => {
                  const isActive = idx === activeProjectIndex;
                  return (
                    <div
                      key={idx}
                      className={`projects-carousel-slide ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveProjectIndex(idx)}
                    >
                      <div className="project-card" data-category={project.category}>
                        <div className="project-image-wrapper">
                          <div className="project-overlay"></div>
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title[language]}
                              className="project-card-image"
                              style={{ objectFit: project.objectFit || 'cover' }}
                            />
                          ) : (
                            <div style={{ width: '100%', height: '100%', background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {project.icon}
                            </div>
                          )}
                          <div className="project-links">
                            {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" title={language === 'en' ? 'View code' : language === 'es' ? 'Ver código' : 'Ver código'}>
                                <Github size={16} />
                              </a>
                            )}
                            {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '' && (
                              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link-btn" title={language === 'en' ? 'View Demo' : language === 'es' ? 'Ver Demo' : 'Ver Demo'}>
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="project-info">
                          <h3 className="project-title">{project.title[language]}</h3>
                          <p className="project-desc">{project.desc[language]}</p>
                          
                          <div className="project-tech-bar">
                            <div className="project-tech-track">
                              {/* Set 1 */}
                              {project.tech.map((t, tIdx) => {
                                const logoUrl = getTechLogo(t);
                                return (
                                  <div key={`set1-${tIdx}`} className="project-tech-icon-wrapper" title={t}>
                                    {logoUrl ? (
                                      <img src={logoUrl} alt={t} className="project-tech-icon" />
                                    ) : (
                                      <span className="project-tech-icon-text">{t}</span>
                                    )}
                                  </div>
                                );
                              })}
                              {/* Set 2 */}
                              {project.tech.map((t, tIdx) => {
                                const logoUrl = getTechLogo(t);
                                return (
                                  <div key={`set2-${tIdx}`} className="project-tech-icon-wrapper" title={t}>
                                    {logoUrl ? (
                                      <img src={logoUrl} alt={t} className="project-tech-icon" />
                                    ) : (
                                      <span className="project-tech-icon-text">{t}</span>
                                    )}
                                  </div>
                                );
                              })}
                              {/* Set 3 */}
                              {project.tech.map((t, tIdx) => {
                                const logoUrl = getTechLogo(t);
                                return (
                                  <div key={`set3-${tIdx}`} className="project-tech-icon-wrapper" title={t}>
                                    {logoUrl ? (
                                      <img src={logoUrl} alt={t} className="project-tech-icon" />
                                    ) : (
                                      <span className="project-tech-icon-text">{t}</span>
                                    )}
                                  </div>
                                );
                              })}
                              {/* Set 4 */}
                              {project.tech.map((t, tIdx) => {
                                const logoUrl = getTechLogo(t);
                                return (
                                  <div key={`set4-${tIdx}`} className="project-tech-icon-wrapper" title={t}>
                                    {logoUrl ? (
                                      <img src={logoUrl} alt={t} className="project-tech-icon" />
                                    ) : (
                                      <span className="project-tech-icon-text">{t}</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="project-footer">
                            <button 
                              className="project-view-more"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedProject(project);
                              }}
                              style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer' }}
                            >
                              {t('projects.more')} <span>&rarr;</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="carousel-nav-btn next-btn"
              onClick={handleNext}
              aria-label={language === 'en' ? 'Next project' : language === 'es' ? 'Siguiente proyecto' : 'Próximo projeto'}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {filteredProjects.length > 1 && (
            <div className="carousel-dots">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === activeProjectIndex ? 'active' : ''}`}
                  onClick={() => setActiveProjectIndex(idx)}
                  aria-label={
                    language === 'en' 
                      ? `Go to project ${idx + 1}` 
                      : language === 'es' 
                        ? `Ir al proyecto ${idx + 1}` 
                        : `Ir para o projeto ${idx + 1}`
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          language={language}
          t={t}
        />
      )}
    </div>
  );
};

export default ProjectsPage;

