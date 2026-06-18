import React from 'react';
import { X } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
  language: 'pt' | 'en' | 'es';
  t: (key: string) => string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  language,
  t,
}) => {
  if (!certificate.fileUrl) return null;

  const isImage = certificate.fileUrl.endsWith('.png') || 
                  certificate.fileUrl.endsWith('.jpg') || 
                  certificate.fileUrl.endsWith('.jpeg') || 
                  certificate.fileUrl.endsWith('.jfif') || 
                  certificate.fileUrl.endsWith('.webp') || 
                  certificate.fileUrl.endsWith('.svg') || 
                  certificate.fileUrl.endsWith('.gif');

  return (
    <div className="experience-modal-overlay" onClick={onClose}>
      <div className="experience-modal-content certificate-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="certificate-modal-header">
          <div className="certificate-modal-title-area">
            <h3 className="certificate-modal-title">{certificate.title[language]}</h3>
            <div className="certificate-modal-institution-row">
              <span className="certificate-modal-institution">{certificate.institution[language]}</span>
              {certificate.isProuni && <span className="prouni-badge">Prouni 100%</span>}
            </div>
          </div>
          <button 
            className="certificate-modal-close" 
            onClick={onClose}
            aria-label={t('modal.close.viewer')}
          >
            <X size={20} />
          </button>
        </div>
        <div className="certificate-viewer-container">
          {isImage ? (
            <img 
              src={certificate.fileUrl} 
              alt={certificate.title[language]} 
              className="certificate-image-view" 
            />
          ) : (
            <iframe 
              src={certificate.fileUrl} 
              title={certificate.title[language]} 
              className="certificate-pdf-view"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
