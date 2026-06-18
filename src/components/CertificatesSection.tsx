import React from 'react';
import { Globe, GraduationCap, BookOpen, Award, Check, Clock } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificatesSectionProps {
  certificates: Certificate[];
  language: 'pt' | 'en' | 'es';
  certFilter: 'all' | 'idiomas' | 'superior' | 'tecnicos' | 'certificacoes' | 'cursos' | 'imersoes';
  onFilterChange: (filter: 'all' | 'idiomas' | 'superior' | 'tecnicos' | 'certificacoes' | 'cursos' | 'imersoes') => void;
  onSelectCertificate: (cert: Certificate) => void;
  t: (key: string) => string;
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  certificates,
  language,
  certFilter,
  onFilterChange,
  onSelectCertificate,
  t,
}) => {
  const filteredCertificates = certFilter === 'all'
    ? certificates
    : certificates.filter(c => c.category === certFilter);

  return (
    <div className="tab-scroll-container certificates-container-active">
      <div className="certificates-header-inline reveal">
        <div className="cert-filters">
          <button 
            className={`filter-btn ${certFilter === 'all' ? 'active' : ''}`} 
            onClick={() => onFilterChange('all')}
          >
            {t('filter.all')}
          </button>
          <button 
            className={`filter-btn ${certFilter === 'idiomas' ? 'active' : ''}`} 
            onClick={() => onFilterChange('idiomas')}
          >
            <Globe size={13} /> {t('filter.idiomas')}
          </button>
          <button 
            className={`filter-btn ${certFilter === 'superior' ? 'active' : ''}`} 
            onClick={() => onFilterChange('superior')}
          >
            <GraduationCap size={13} /> {t('filter.superior')}
          </button>
          <button 
            className={`filter-btn ${certFilter === 'tecnicos' ? 'active' : ''}`} 
            onClick={() => onFilterChange('tecnicos')}
          >
            <BookOpen size={13} /> {t('filter.tecnicos')}
          </button>
          <button 
            className={`filter-btn ${certFilter === 'cursos' ? 'active' : ''}`} 
            onClick={() => onFilterChange('cursos')}
          >
            <BookOpen size={13} /> {t('filter.cursos')}
          </button>
          <button 
            className={`filter-btn ${certFilter === 'certificacoes' ? 'active' : ''}`} 
            onClick={() => onFilterChange('certificacoes')}
          >
            <Award size={13} /> {t('filter.certificacoes')}
          </button>
          <button 
            className={`filter-btn ${certFilter === 'imersoes' ? 'active' : ''}`} 
            onClick={() => onFilterChange('imersoes')}
          >
            <BookOpen size={13} /> {t('filter.imersoes')}
          </button>
        </div>
      </div>

      <div className="certificates-grid">
        {filteredCertificates.map((cert, idx) => (
          <div 
            key={idx} 
            className="cert-card reveal"
            style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
          >
            <div className="cert-card-header">
              <div className="cert-logo-slot">
                <img src={cert.logo} alt={cert.institution[language]} className="cert-logo-img" />
              </div>
               <div className="cert-header-text">
                <h3 className="cert-title">{cert.title[language]}</h3>
                <div className="cert-institution-row">
                  <span className="cert-institution">{cert.institution[language]}</span>
                  {cert.isProuni && <span className="prouni-badge">Prouni 100%</span>}
                </div>
              </div>
              <span className={`cert-status ${cert.status === 'finalizado' ? 'cert-status-done' : 'cert-status-progress'}`}>
                {cert.status === 'finalizado' 
                  ? <><Check size={12} /> {t('cert.status.done')}</>
                  : <><Clock size={12} /> {t('cert.status.progress')}</>
                }
              </span>
            </div>
            <p className="cert-desc">{cert.desc[language]}</p>
            <div className="cert-footer">
              <span className="cert-year">{cert.year}</span>
              <div className="cert-footer-right">
                {cert.fileUrl && (
                  <button 
                    className="cert-view-btn"
                    onClick={() => onSelectCertificate(cert)}
                  >
                    {t('cert.btn.view')}
                  </button>
                )}
                 <span className="cert-category-tag">
                  {cert.category === 'idiomas' && <><Globe size={11} /> {t('cert.cat.idiomas')}</>}
                  {cert.category === 'superior' && <><GraduationCap size={11} /> {t('cert.cat.superior')}</>}
                  {cert.category === 'tecnicos' && <><BookOpen size={11} /> {t('cert.cat.tecnicos')}</>}
                  {cert.category === 'cursos' && <><BookOpen size={11} /> {t('cert.cat.cursos')}</>}
                  {cert.category === 'certificacoes' && <><Award size={11} /> {t('cert.cat.certificacoes')}</>}
                  {cert.category === 'imersoes' && <><BookOpen size={11} /> {t('cert.cat.imersoes')}</>}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
