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
  if (t === 'express' || t === 'express.js') return 'https://cdn.simpleicons.org/express/ffffff';
  if (t === 'three.js' || t === 'threejs') return 'https://cdn.simpleicons.org/threedotjs/ffffff';
  if (t === 'vite') return 'https://cdn.simpleicons.org/vite/ffffff';
  if (t === 'css3' || t === 'css') return 'https://cdn.simpleicons.org/css/ffffff';
  if (t === 'html5' || t === 'html') return 'https://cdn.simpleicons.org/html5/ffffff';
  if (t === 'gsap' || t === 'greensock') return 'https://cdn.simpleicons.org/greensock/ffffff';
  if (t === 'memória' || t === 'memoria' || t === 'memory') {
    return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIgOGgyMHY4SDJ6Ii8+PHJlY3QgeD0iNSIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIHJ4PSIwLjUiIGZpbGw9IndoaXRlIi8+PHJlY3QgeD0iMTAuNSIgeT0iMTAiIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIHJ4PSIwLjUiIGZpbGw9IndoaXRlIi8+PHJlY3QgeD0iMTYiIHk9IjEwIiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiByeD0iMC41IiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik02IDE2djJNMTAgMTZ2Mk0xNCAxNnYyTTE4IDE2djIiLz48L3N2Zz4=';
  }
  return null;
};

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
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
    setCurrentIndex(1);
    setIsTransitioning(false);
  }, [filter]);

  // Handle temporary transition disable toggle
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handlePrev = () => {
    if (filteredProjects.length <= 1) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (filteredProjects.length <= 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (filteredProjects.length <= 1) return;

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(filteredProjects.length);
    } else if (currentIndex === filteredProjects.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  const displayProjects = filteredProjects.length > 1
    ? [
        filteredProjects[filteredProjects.length - 1],
        ...filteredProjects,
        filteredProjects[0]
      ]
    : filteredProjects;

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
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: filteredProjects.length > 1
                    ? `translateX(calc(50vw - (var(--slide-width) / 2) - ${currentIndex} * (var(--slide-width) + var(--slide-gap))))`
                    : `translateX(calc(50vw - (var(--slide-width) / 2)))`,
                  transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
                }}
              >
                {displayProjects.map((project, idx) => {
                  const N = filteredProjects.length;
                  let isActive = false;
                  if (N > 1) {
                    if (idx === currentIndex) {
                      isActive = true;
                    } else if (currentIndex === 0 && idx === N) {
                      isActive = true;
                    } else if (currentIndex === N + 1 && idx === 1) {
                      isActive = true;
                    }
                  } else {
                    isActive = true;
                  }

                  return (
                    <div
                      key={idx}
                      className={`projects-carousel-slide ${isActive ? 'active' : ''}`}
                      onClick={() => N > 1 && setCurrentIndex(idx)}
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
              aria-label={language === 'en' ? 'Next project' : language === 'es' ? 'Siguiente projeto' : 'Próximo projeto'}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {filteredProjects.length > 1 && (
            <div className="carousel-dots">
              {filteredProjects.map((_, idx) => {
                const isDotActive = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length === idx;
                return (
                  <button
                    key={idx}
                    className={`carousel-dot ${isDotActive ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx + 1)}
                    aria-label={
                      language === 'en' 
                        ? `Go to project ${idx + 1}` 
                        : language === 'es' 
                          ? `Ir al proyecto ${idx + 1}` 
                          : `Ir para o projeto ${idx + 1}`
                    }
                  />
                );
              })}
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

