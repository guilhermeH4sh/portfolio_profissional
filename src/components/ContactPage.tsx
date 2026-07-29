import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Mail, Github, Linkedin, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Initialize Scroll Reveal
  useScrollReveal();

  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isFormOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact.guilherme.ff@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Novo contato do Portfólio!',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setStatus('idle');
  };

  return (
    <div className="page-view contact-page-view">
      <section className="section contact-view-section" id="contact">
        <div className="container contact-content-container">
          <div className="fale-comigo-card reveal">
            <div className="mail-icon-wrapper reveal" style={{ transitionDelay: '100ms' }}>
              <Mail size={32} className="mail-icon" />
            </div>
            <h2 className="fale-comigo-title reveal" style={{ transitionDelay: '200ms' }}>{t('contact.title')}</h2>
            <p className="fale-comigo-subtitle reveal" style={{ transitionDelay: '300ms' }}>
              {t('contact.subtitle')}
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="fale-comigo-btn reveal" 
              style={{ transitionDelay: '400ms' }}
            >
              <Mail size={16} /> {t('contact.title')}
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {isFormOpen && createPortal(
        <div className="contact-modal-overlay" onClick={handleClose}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            {status !== 'success' && status !== 'error' && (
              <button 
                className="experience-modal-close"
                style={{ top: '1.25rem', right: '1.25rem' }}
                onClick={handleClose}
                aria-label={t('contact.form.close')}
              >
                <X size={20} />
              </button>
            )}

            {status === 'success' ? (
              <div className="contact-success-state">
                <div className="state-icon-wrapper">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="state-title state-title-success">{t('contact.form.success.title')}</h3>
                <p className="state-desc">{t('contact.form.success.desc')}</p>
                <button className="state-btn" onClick={handleClose}>
                  {t('contact.form.close')}
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="contact-error-state">
                <div className="state-icon-wrapper">
                  <AlertCircle size={40} />
                </div>
                <h3 className="state-title state-title-error">{t('contact.form.error.title')}</h3>
                <p className="state-desc">{t('contact.form.error.desc')}</p>
                <button className="state-btn" onClick={() => setStatus('idle')}>
                  {language === 'en' ? 'Try Again' : language === 'es' ? 'Intentar de nuevo' : 'Tentar Novamente'}
                </button>
              </div>
            ) : (
              <>
                <div className="contact-modal-header">
                  <h3 className="contact-modal-title">{t('contact.title')}</h3>
                  <p className="contact-modal-desc">{t('contact.subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      {t('contact.form.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                      placeholder={language === 'en' ? 'John Doe' : language === 'es' ? 'Juan Pérez' : 'Seu nome'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      {t('contact.form.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      placeholder={language === 'en' ? 'john@example.com' : language === 'es' ? 'juan@ejemplo.com' : 'seu.email@exemplo.com'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-input form-textarea"
                      placeholder={language === 'en' ? 'Tell me about your project...' : language === 'es' ? 'Cuéntame sobre tu proyecto...' : 'Conte-me sobre seu projeto...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="contact-submit-btn"
                  >
                    {status === 'loading' ? (
                      <span className="submit-loading">{t('contact.form.sending')}</span>
                    ) : (
                      <>
                        <Mail size={16} /> {t('contact.form.submit')}
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Integrated Footer in Contact Page */}
      <footer className="footer contact-footer">
        <div className="container footer-wrapper">
          <div className="logo reveal" style={{ transitionDelay: '100ms' }}>
            Guilherme <span className="logo-dot">Ferreira.</span>
          </div>
          <p className="footer-copyright reveal" style={{ transitionDelay: '200ms' }}>
            &copy; 2026 Guilherme Ferreira. {t('contact.footer.rights')}
          </p>
          <div className="footer-socials reveal" style={{ transitionDelay: '300ms' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" title="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/guilhermeff45/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

