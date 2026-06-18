import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.inicio': {
    pt: 'Início',
    en: 'Home',
    es: 'Inicio',
  },
  'nav.trajetoria': {
    pt: 'Trajetória',
    en: 'Trajectory',
    es: 'Trayectoria',
  },
  'nav.projetos': {
    pt: 'Projetos',
    en: 'Projects',
    es: 'Proyectos',
  },
  'nav.contato': {
    pt: 'Fale Comigo',
    en: 'Contact Me',
    es: 'Contáctame',
  },
  // Hero
  'hero.hello': {
    pt: 'Olá, sou um',
    en: "Hi, I'm a",
    es: 'Hola, soy un',
  },
  'hero.role': {
    pt: 'desenvolvedor fullstack',
    en: 'fullstack developer',
    es: 'desarrollador fullstack',
  },
  'hero.desc': {
    pt: 'Desenvolvedor e Test Engineer focado em arquitetura de software, automação e alta fidelidade. Transformo regras de negócio complexas em sistemas estáveis, elegantes e escaláveis.',
    en: 'Developer and Test Engineer focused on software architecture, automation, and high fidelity. I transform complex business rules into stable, elegant, and scalable systems.',
    es: 'Desarrollador y Test Engineer enfocado en arquitectura de software, automatización y alta fidelidad. Transformo reglas de negocio complejas en sistemas estables, elegantes y escalables.',
  },
  'hero.btn.portfolio': {
    pt: 'Ver Portfólio',
    en: 'View Portfolio',
    es: 'Ver Portafolio',
  },
  'hero.btn.contact': {
    pt: 'Fale Comigo',
    en: 'Contact Me',
    es: 'Contáctame',
  },
  // Trajetória (About)
  'about.title': {
    pt: 'Trajetória',
    en: 'Trajectory',
    es: 'Trayectoria',
  },
  'about.bio': {
    pt: 'Estudante de Análise e Desenvolvimento de Sistemas na UniFacens, com trajetória iniciada em 2023 no laboratório Brain Facens focado em Inteligência Artificial. Atualmente atuo como Test Engineer na Centrus Inteligência Artificial, assegurando a qualidade de software através da criação e execução de testes automatizados e manuais em soluções de IA. Além disso, também desenvolvo projetos pessoais e acadêmicos envolvendo front-end e back-end.',
    en: 'Systems Analysis and Development student at UniFacens, with a journey started in 2023 at the Brain Facens innovation hub focused on AI. Currently working as a Test Engineer at Centrus Artificial Intelligence, ensuring software quality through the design and execution of automated and manual tests in AI solutions. Additionally, I develop personal and academic projects involving frontend and backend.',
    es: 'Estudiante de Análisis y Desarrollo de Sistemas en UniFacens, con una trayectoria iniciada en 2023 en el laboratorio Brain Facens enfocado en IA. Actualmente me desempeño como Test Engineer en Centrus Inteligencia Artificial, asegurando la calidad del software a través del diseño y ejecución de pruebas automatizadas y manuales en soluciones de IA. Además, desarrollo proyectos personales y académicos que involucran frontend y backend.',
  },
  'about.stats.years': {
    pt: 'Anos na Área',
    en: 'Years in Tech',
    es: 'Años en Tech',
  },
  'about.stats.certs': {
    pt: 'Certificações',
    en: 'Certifications',
    es: 'Certificaciones',
  },
  'about.stats.roles': {
    pt: 'Experiências',
    en: 'Experiences',
    es: 'Experiencias',
  },
  'about.tabs.experiences': {
    pt: 'Experiências Profissionais',
    en: 'Professional Experience',
    es: 'Experiencias Profesionales',
  },
  'about.tabs.certificates': {
    pt: 'Certificados e Formações',
    en: 'Certificates and Education',
    es: 'Certificados y Formación',
  },
  // Filters Trajetória
  'filter.all': {
    pt: 'Todos',
    en: 'All',
    es: 'Todos',
  },
  'filter.idiomas': {
    pt: 'Idiomas',
    en: 'Languages',
    es: 'Idiomas',
  },
  'filter.superior': {
    pt: 'Superior',
    en: 'Degree',
    es: 'Superior',
  },
  'filter.tecnicos': {
    pt: 'Técnicos',
    en: 'Technical',
    es: 'Técnicos',
  },
  'filter.cursos': {
    pt: 'Cursos',
    en: 'Courses',
    es: 'Cursos',
  },
  'filter.certificacoes': {
    pt: 'Certificações',
    en: 'Certifications',
    es: 'Certificaciones',
  },
  'filter.imersoes': {
    pt: 'Imersões',
    en: 'Immersions',
    es: 'Inmersiones',
  },
  // Cert Status
  'cert.status.done': {
    pt: 'Finalizado',
    en: 'Completed',
    es: 'Finalizado',
  },
  'cert.status.progress': {
    pt: 'Em progresso',
    en: 'In progress',
    es: 'En progreso',
  },
  'cert.btn.view': {
    pt: 'Certificado',
    en: 'Certificate',
    es: 'Certificado',
  },
  // Cert categories inside cards
  'cert.cat.idiomas': {
    pt: 'Idioma',
    en: 'Language',
    es: 'Idioma',
  },
  'cert.cat.superior': {
    pt: 'Superior',
    en: 'Degree',
    es: 'Superior',
  },
  'cert.cat.tecnicos': {
    pt: 'Técnico',
    en: 'Technical',
    es: 'Técnico',
  },
  'cert.cat.cursos': {
    pt: 'Curso',
    en: 'Course',
    es: 'Curso',
  },
  'cert.cat.certificacoes': {
    pt: 'Certificação',
    en: 'Certification',
    es: 'Certificación',
  },
  'cert.cat.imersoes': {
    pt: 'Imersão',
    en: 'Immersion',
    es: 'Inmersión',
  },
  // Modals Close
  'modal.close': {
    pt: 'Fechar modal',
    en: 'Close modal',
    es: 'Cerrar modal',
  },
  'modal.close.viewer': {
    pt: 'Fechar visualização',
    en: 'Close viewer',
    es: 'Cerrar visualización',
  },
  // Projects
  'projects.title': {
    pt: 'Projetos em Destaque',
    en: 'Featured Projects',
    es: 'Proyectos Destacados',
  },
  'projects.subtitle': {
    pt: 'Uma seleção de trabalhos recentes construídos com foco em performance, UX e código limpo.',
    en: 'A selection of recent works built with focus on performance, UX, and clean code.',
    es: 'Una selección de trabajos recientes construidos con enfoque en rendimiento, UX y código limpio.',
  },
  'projects.more': {
    pt: 'Ver Detalhes',
    en: 'View Details',
    es: 'Ver Detalles',
  },
  // Contact
  'contact.title': {
    pt: 'Fale Comigo',
    en: 'Contact Me',
    es: 'Contáctame',
  },
  'contact.subtitle': {
    pt: 'Seja para iniciar um novo projeto, tirar dúvidas ou apenas bater um papo sobre tecnologia, meu e-mail está sempre aberto.',
    en: 'Whether to start a new project, ask questions, or just chat about technology, my email is always open.',
    es: 'Ya sea para iniciar un nuevo proyecto, hacer preguntas o simplemente charlar sobre tecnología, mi correo electrónico siempre está abierto.',
  },
  'contact.form.btn': {
    pt: 'Enviar Mensagem',
    en: 'Send Message',
    es: 'Enviar Mensaje',
  },
  'contact.form.name': {
    pt: 'Nome Completo',
    en: 'Full Name',
    es: 'Nombre Completo',
  },
  'contact.form.email': {
    pt: 'E-mail',
    en: 'Email Address',
    es: 'Correo Electrónico',
  },
  'contact.form.message': {
    pt: 'Mensagem',
    en: 'Message',
    es: 'Mensaje',
  },
  'contact.form.placeholder.name': {
    pt: 'Como posso te chamar?',
    en: 'How should I call you?',
    es: '¿Cómo puedo llamarte?',
  },
  'contact.form.placeholder.email': {
    pt: 'seu.email@exemplo.com',
    en: 'your.email@example.com',
    es: 'tu.email@ejemplo.com',
  },
  'contact.form.placeholder.message': {
    pt: 'Escreva sua mensagem aqui...',
    en: 'Write your message here...',
    es: 'Escribe tu mensaje aquí...',
  },
  'contact.form.sending': {
    pt: 'Enviando...',
    en: 'Sending...',
    es: 'Enviando...',
  },
  'contact.form.success.title': {
    pt: 'Mensagem Enviada!',
    en: 'Message Sent!',
    es: '¡Mensaje Enviado!',
  },
  'contact.form.success.desc': {
    pt: 'Obrigado pelo contato! Em breve entrarei em contato com você.',
    en: 'Thanks for reaching out! I will get back to you shortly.',
    es: '¡Gracias por contactar! Me pondré en contacto contigo pronto.',
  },
  'contact.form.error.title': {
    pt: 'Ops, algo deu errado!',
    en: 'Oops, something went wrong!',
    es: '¡Ups, algo salió mal!',
  },
  'contact.form.error.desc': {
    pt: 'Não foi possível enviar a mensagem. Por favor, tente novamente.',
    en: 'Unable to send the message. Please try again.',
    es: 'No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.',
  },
  'contact.form.close': {
    pt: 'Fechar',
    en: 'Close',
    es: 'Cerrar',
  },
  'contact.footer.rights': {
    pt: 'Todos os direitos reservados.',
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load language from localStorage or default to 'pt'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'pt' || saved === 'en' || saved === 'es') {
      return saved as Language;
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[language];
  };

  // Update HTML lang attribute on language change
  useEffect(() => {
    const html = document.documentElement;
    if (language === 'pt') {
      html.setAttribute('lang', 'pt-BR');
    } else if (language === 'en') {
      html.setAttribute('lang', 'en');
    } else if (language === 'es') {
      html.setAttribute('lang', 'es');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
