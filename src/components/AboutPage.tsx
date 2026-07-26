import React, { useState, useEffect } from 'react';
import { Layout, Server, Database } from 'lucide-react';
import { experiences, certificates, Experience, Certificate } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

import CareerBentoGrid from './CareerBentoGrid';
import CertificatesSection from './CertificatesSection';
import ExperienceModal from './ExperienceModal';
import CertificateModal from './CertificateModal';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experiencia' | 'certificados'>('experiencia');
  const [certFilter, setCertFilter] = useState<'all' | 'idiomas' | 'superior' | 'tecnicos' | 'certificacoes' | 'cursos' | 'imersoes'>('all');
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const { language, t } = useLanguage();

  // Initialize Scroll Reveal
  useScrollReveal([activeTab, certFilter]);

  useEffect(() => {
    if (selectedExperience || selectedCertificate) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedExperience, selectedCertificate]);

  return (
    <div className="page-view about-page-view">
      <section className="section about-view-section" id="about">
        <div className="container about-view-container">
          <h2 className="section-title text-gradient reveal">{t('about.title')}</h2>
          
          {/* Bio & Skills Split - Compact */}
          <div className="about-intro">
            <div className="about-intro-left">
              <p className="about-text reveal" style={{ transitionDelay: '100ms' }}>
                {t('about.bio')}
              </p>
              <div className="about-stats-row">
                <div className="about-stat reveal" style={{ transitionDelay: '200ms' }}>
                  <span className="about-stat-number">3+</span>
                  <span className="about-stat-label">{t('about.stats.years')}</span>
                </div>
                <div className="about-stat reveal" style={{ transitionDelay: '300ms' }}>
                  <span className="about-stat-number">20+</span>
                  <span className="about-stat-label">{t('about.stats.certs')}</span>
                </div>
                <div className="about-stat reveal" style={{ transitionDelay: '400ms' }}>
                  <span className="about-stat-number">{experiences.length}</span>
                  <span className="about-stat-label">{t('about.stats.roles')}</span>
                </div>
              </div>
            </div>

            <div className="about-intro-right">
              <div className="skills-grid">
                <div className="skills-group reveal" style={{ transitionDelay: '150ms' }}>
                  <span className="skills-group-label"><Layout size={13} /> Frontend</span>
                  <div className="skill-tags-row">
                    <span className="stag">React</span>
                    <span className="stag">Next.js</span>
                    <span className="stag">TypeScript</span>
                    <span className="stag">CSS Grid</span>
                    <span className="stag">Tailwind</span>
                  </div>
                </div>
                <div className="skills-group reveal" style={{ transitionDelay: '300ms' }}>
                  <span className="skills-group-label"><Server size={13} /> Backend</span>
                  <div className="skill-tags-row">
                    <span className="stag">Node.js</span>
                    <span className="stag">Express</span>
                    <span className="stag">REST APIs</span>
                    <span className="stag">GraphQL</span>
                  </div>
                </div>
                <div className="skills-group reveal" style={{ transitionDelay: '450ms' }}>
                  <span className="skills-group-label"><Database size={13} /> Dados & Infra</span>
                  <div className="skill-tags-row">
                    <span className="stag">PostgreSQL</span>
                    <span className="stag">MongoDB</span>
                    <span className="stag">Docker</span>
                    <span className="stag">AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="about-tabs-nav reveal" style={{ transitionDelay: '200ms' }}>
            <button 
              className={`about-tab-btn ${activeTab === 'experiencia' ? 'active' : ''}`}
              onClick={() => setActiveTab('experiencia')}
            >
              {t('about.tabs.experiences')}
            </button>
            <button 
              className={`about-tab-btn ${activeTab === 'certificados' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificados')}
            >
              {t('about.tabs.certificates')}
            </button>
          </div>

          {/* Scrollable Tab Content Container */}
          <div className="about-tab-content-wrapper">
            
            {/* TAB: EXPERIÊNCIA (Disruptive Bento Grid) */}
            {activeTab === 'experiencia' && (
              <CareerBentoGrid
                experiences={experiences}
                language={language}
                onSelectExperience={setSelectedExperience}
              />
            )}

            {/* TAB: CERTIFICADOS */}
            {activeTab === 'certificados' && (
              <CertificatesSection
                certificates={certificates}
                language={language}
                certFilter={certFilter}
                onFilterChange={setCertFilter}
                onSelectCertificate={setSelectedCertificate}
                t={t}
              />
            )}

          </div>

        </div>
      </section>

      {/* Experience Logo Detail Modal */}
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
          language={language}
          t={t}
        />
      )}

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          language={language}
          t={t}
        />
      )}

    </div>
  );
};

export default AboutPage;
