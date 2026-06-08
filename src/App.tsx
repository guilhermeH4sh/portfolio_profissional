import React, { useState, useEffect } from 'react';
import { 
  Send, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  ShoppingBag, 
  MessageSquare, 
  Shield, 
  Trello, 
  ExternalLink, 
  Loader, 
  Check
} from 'lucide-react';

interface Project {
  title: string;
  category: 'frontend' | 'backend' | 'fullstack';
  tech: string[];
  desc: string;
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  gradient: string;
}


function App() {
  // Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Header State
  const [scrolled, setScrolled] = useState(false);

  // Project Category Filter State
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  // Contact Modal State
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Company Details Modal State
  const [activeCompanyLogoModal, setActiveCompanyLogoModal] = useState<{ name: string, logo: string, desc: string } | null>(null);

  // Prevent scroll when modals are open
  useEffect(() => {
    if (isContactOpen || activeCompanyLogoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactOpen, activeCompanyLogoModal]);



  // Mouse Position Tracker (Updates CSS variables on the root document element)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Header Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Scroll Reveals
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    reveals.forEach((reveal) => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  // Projects data
  const projects: Project[] = [
    {
      title: "E-Commerce Premium",
      category: "frontend",
      tech: ["React", "CSS Grid", "Framer Motion"],
      desc: "Uma plataforma de e-commerce moderna com transições fluidas, carrinho persistente e painel administrativo responsivo.",
      githubUrl: "#",
      demoUrl: "#",
      icon: <ShoppingBag className="w-12 h-12 text-white" />,
      gradient: "linear-gradient(135deg, #18181b, #000000)"
    },
    {
      title: "Plataforma Chat AI",
      category: "fullstack",
      tech: ["Next.js", "Node.js", "Socket.io"],
      desc: "Aplicação de chat em tempo real integrada com APIs de inteligência artificial, oferecendo respostas rápidas e histórico persistente.",
      githubUrl: "#",
      demoUrl: "#",
      icon: <MessageSquare className="w-12 h-12 text-white" />,
      gradient: "linear-gradient(135deg, #1f1f23, #09090b)"
    },
    {
      title: "API Gatekeeper",
      category: "backend",
      tech: ["Node.js", "JWT", "PostgreSQL"],
      desc: "Gateway de autenticação seguro que lida com rate-limiting, validação JWT de alta velocidade e logs centralizados.",
      githubUrl: "#",
      demoUrl: "#",
      icon: <Shield className="w-12 h-12 text-white" />,
      gradient: "linear-gradient(135deg, #09090b, #18181b)"
    },
    {
      title: "Kanban Flow",
      category: "frontend",
      tech: ["HTML/CSS", "JS Vanilla", "SortableJS"],
      desc: "Gerenciador de tarefas visual e intuitivo com funcionalidade drag-and-drop, filtros rápidos e salvamento local persistente.",
      githubUrl: "#",
      demoUrl: "#",
      icon: <Trello className="w-12 h-12 text-white" />,
      gradient: "linear-gradient(135deg, #1f1f23, #000000)"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      {/* ==========================================
           BACKGROUND & SPOTLIGHT
           ========================================== */}
      <div className="grid-bg"></div>
      <div id="grid-glow" className="grid-glow"></div>

      {/* ==========================================
           HEADER / NAVBAR
           ========================================== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container nav-wrapper">
          <a href="#" className="avatar-link" aria-label="Perfil">
            <div className="avatar-slot">
              <img src="/logo.png" alt="Logo Guilherme Ferreira" />
            </div>
          </a>
          
          <nav>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
              <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Início</a></li>
              <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>Trajetória</a></li>
              <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
              <li><a href="#" className="nav-link nav-link-highlight" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); setIsMenuOpen(false); }}>Fale Comigo</a></li>
            </ul>
          </nav>

          <div 
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`} 
            id="menu-btn" 
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span style={isMenuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}></span>
            <span style={isMenuOpen ? { opacity: 0 } : {}}></span>
            <span style={isMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
          </div>
        </div>
      </header>

      {/* ==========================================
           HERO SECTION (ROBUST & FIGMA-INSPIRED)
           ========================================== */}
      {/* ==========================================
           HERO SECTION (MINIMALIST & SPACIOUS STYLE)
           ========================================== */}
      <section className="hero" id="home">
        <div className="container hero-wrapper">
          <div className="hero-content reveal">
            <h1 className="hero-title">
              Olá, sou um <br />
              <span className="text-shimmer">desenvolvedor fullstack</span>
            </h1>
            <p className="hero-desc">
              Desenvolvedor e QA Engineer focado em arquitetura de software, automação e alta fidelidade. Transformo regras de negócio complexas em sistemas estáveis, elegantes e escaláveis.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-cta">
                Ver Portfólio <ArrowRight size={14} />
              </a>
              <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); setIsContactOpen(true); }}>Fale Comigo</a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           ABOUT & TIMELINE SECTION
           ========================================== */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title text-gradient">Trajetória</h2>
          <p className="section-subtitle">Experiências, tecnologias e o caminho que me trouxe até aqui.</p>

          {/* Intro Section: Bio & Stats + Skills */}
          <div className="about-intro reveal">
            <div className="about-intro-left">
              <p className="about-text">
                Desenvolvedor apaixonado por transformar ideias em produtos digitais de alta performance. Escrevo código limpo, escalável e com foco total em experiência do usuário.
              </p>
              <p className="about-text" style={{ marginTop: '1.2rem' }}>
                Atuo com metodologias ágeis e estou sempre atualizado com as últimas tendências do ecossistema web — de arquitetura a design de interfaces.
              </p>

              <div className="about-stats-row">
                <div className="about-stat">
                  <span className="about-stat-number">3+</span>
                  <span className="about-stat-label">Anos de Experiência</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">20+</span>
                  <span className="about-stat-label">Projetos Entregues</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100%</span>
                  <span className="about-stat-label">Foco em Qualidade</span>
                </div>
              </div>
            </div>

            <div className="about-intro-right">
              {/* Skills Grid */}
              <div className="skills-grid">
                <div className="skills-group">
                  <span className="skills-group-label"><Layout size={13} /> Frontend</span>
                  <div className="skill-tags-row">
                    <span className="stag">React</span>
                    <span className="stag">Next.js</span>
                    <span className="stag">TypeScript</span>
                    <span className="stag">CSS Grid</span>
                    <span className="stag">Tailwind</span>
                  </div>
                </div>
                <div className="skills-group">
                  <span className="skills-group-label"><Server size={13} /> Backend</span>
                  <div className="skill-tags-row">
                    <span className="stag">Node.js</span>
                    <span className="stag">Express</span>
                    <span className="stag">REST APIs</span>
                    <span className="stag">GraphQL</span>
                  </div>
                </div>
                <div className="skills-group">
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

          {/* Alternating Timeline */}
          <div className="timeline-wrapper-alt reveal">
            <div className="timeline-alt">

              {/* Row 1: Left */}
              <div className="timeline-row-alt">
                <div className="timeline-col-left">
                  <div className="timeline-content-alt">
                    <div className="timeline-header-alt">
                      <div 
                        className="timeline-logo-card clickable"
                        onClick={() => setActiveCompanyLogoModal({
                          name: "Centrus Inteligência Artificial",
                          logo: "/logo-centrus.png",
                          desc: "Desenvolvemos soluções de inteligência artificial para farmácias que querem transformar seu atendimento digital em um ativo estratégico."
                        })}
                        title="Clique para ver detalhes"
                      >
                        <img src="/logo-centrus.png" alt="Centrus" />
                      </div>
                      <div>
                        <span className="timeline-period-alt">abr de 2026 — O momento</span>
                        <h3 className="timeline-role-alt">QA Engineer Junior</h3>
                        <span className="timeline-company-alt">Centrus Inteligência Artificial</span>
                      </div>
                    </div>
                    <p className="timeline-desc-alt">Atuação focada em assegurar a máxima qualidade de software através do planejamento e execução de testes manuais e automatizados. Responsável por identificar falhas estruturais, criar cenários complexos de validação, documentar casos de teste (test cases) e colaborar ativamente com o time de desenvolvimento para garantir entregas eficientes, mitigar riscos e otimizar a experiência final do usuário.</p>
                    <div className="timeline-tags-alt">
                      <span className="ttag-alt">QA Testing</span>
                      <span className="ttag-alt">Automação</span>
                      <span className="ttag-alt">Quality Assurance</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-center-dot-alt"></div>
                <div className="timeline-col-right timeline-col-empty"></div>
              </div>

              {/* Row 2: Right */}
              <div className="timeline-row-alt">
                <div className="timeline-col-left timeline-col-empty"></div>
                <div className="timeline-center-dot-alt"></div>
                <div className="timeline-col-right">
                  <div className="timeline-content-alt">
                    <div className="timeline-header-alt">
                      <div 
                        className="timeline-logo-card clickable"
                        onClick={() => setActiveCompanyLogoModal({
                          name: "Pulse Client Experts",
                          logo: "/logo-pulse.png",
                          desc: "A Pulse Client Experts (anteriormente conhecida como SX Negócios) é uma grande plataforma de experiência do cliente (CX) e soluções de negócios do grupo Santander, especializada em serviços de atendimento ao cliente, vendas e suporte por voz e chat"
                        })}
                        title="Clique para ver detalhes"
                      >
                        <img src="/logo-pulse.png" alt="Pulse Client Experts" />
                      </div>
                      <div>
                        <span className="timeline-period-alt">mar de 2025 — O momento</span>
                        <h3 className="timeline-role-alt">Especialista CX</h3>
                        <span className="timeline-company-alt">Pulse Client Experts</span>
                      </div>
                    </div>
                    <p className="timeline-desc-alt">Responsável pela gestão do relacionamento com o cliente (CRM) e excelência no atendimento na ponta. Atuação estratégica no setor antifraude, analisando padrões de comportamento, mitigando riscos de segurança e resolvendo problemas complexos com agilidade. Foco total na retenção, fidelização e na construção de uma jornada do cliente segura, fluida e de alto valor.</p>
                    <div className="timeline-tags-alt">
                      <span className="ttag-alt">CX</span>
                      <span className="ttag-alt">CRM</span>
                      <span className="ttag-alt">Antifraude</span>
                      <span className="ttag-alt">Customer Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Left */}
              <div className="timeline-row-alt">
                <div className="timeline-col-left">
                  <div className="timeline-content-alt">
                    <div className="timeline-header-alt">
                      <div 
                        className="timeline-logo-card clickable"
                        onClick={() => setActiveCompanyLogoModal({
                          name: "AIESEC no Brasil",
                          logo: "/logo-aiesec.png",
                          desc: "A AIESEC é a maior organização global gerida por jovens, dedicada a desenvolver o potencial de liderança jovem por meio de intercâmbios voluntários e profissionais de impacto social internacional."
                        })}
                        title="Clique para ver detalhes"
                      >
                        <img src="/logo-aiesec.png" alt="AIESEC" />
                      </div>
                      <div>
                        <span className="timeline-period-alt">fev de 2026 — abr de 2026</span>
                        <h3 className="timeline-role-alt">Equipe de Parcerias | B2C</h3>
                        <span className="timeline-company-alt">AIESEC no Brasil</span>
                      </div>
                    </div>
                    <p className="timeline-desc-alt">Experiência voluntária voltada ao impacto social e desenvolvimento de parcerias estratégicas no modelo B2C. Atuação na prospecção, negociação e engajamento de partes interessadas, exercitando forte liderança, comunicação persuasiva e habilidades de trabalho em equipe para viabilizar projetos de intercâmbio e desenvolvimento jovem.</p>
                    <div className="timeline-tags-alt">
                      <span className="ttag-alt">Voluntariado</span>
                      <span className="ttag-alt">B2C</span>
                      <span className="ttag-alt">Negociação</span>
                      <span className="ttag-alt">Liderança</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-center-dot-alt"></div>
                <div className="timeline-col-right timeline-col-empty"></div>
              </div>

              {/* Row 4: Right */}
              <div className="timeline-row-alt">
                <div className="timeline-col-left timeline-col-empty"></div>
                <div className="timeline-center-dot-alt"></div>
                <div className="timeline-col-right">
                  <div className="timeline-content-alt">
                    <div className="timeline-header-alt">
                      <div 
                        className="timeline-logo-card clickable"
                        onClick={() => setActiveCompanyLogoModal({
                          name: "Brain Facens",
                          logo: "/logo-brain.png",
                          desc: "O BRAIN é o núcleo de pesquisa e inovação tecnológica da Faculdade Facens, desenvolvendo projetos práticos aplicados de Inteligência Artificial, Machine Learning, Visão Computacional e IoT."
                        })}
                        title="Clique para ver detalhes"
                      >
                        <img src="/logo-brain.png" alt="Brain Facens" />
                      </div>
                      <div>
                        <span className="timeline-period-alt">fev de 2023 — out de 2023</span>
                        <h3 className="timeline-role-alt">Estudante voluntário | A.I League</h3>
                        <span className="timeline-company-alt">Brain Facens</span>
                      </div>
                    </div>
                    <p className="timeline-desc-alt">Imersão prática em ecossistemas de inovação e tecnologia, com forte ênfase em inteligência artificial. Atuação direta no auxílio e concepção de projetos tecnológicos avançados, com profundo aprendizado e aplicação prática de conceitos de Machine Learning. Desenvolvimento contínuo de competências de resolução de problemas e trabalho em equipe em um ambiente de alta colaboração.</p>
                    <div className="timeline-tags-alt">
                      <span className="ttag-alt">Machine Learning</span>
                      <span className="ttag-alt">Inteligência Artificial</span>
                      <span className="ttag-alt">Inovação</span>
                      <span className="ttag-alt">Python</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           PROJECTS SECTION (GRID)
           ========================================== */}
      <section className="section" id="projects">
        <div className="container">
          <div className="projects-header">
            <div>
              <h2 className="section-title text-gradient">Projetos em Destaque</h2>
              <p className="section-subtitle">Uma seleção de trabalhos recentes construídos com foco em performance, UX e código limpo.</p>
            </div>
            <div className="project-filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
                onClick={() => setFilter('all')}
              >
                Todos
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

          <div className="projects-grid reveal">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="project-card" data-category={project.category}>
                <div className="project-image-wrapper">
                  <div className="project-overlay"></div>
                  <div style={{ width: '100%', height: '100%', background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {project.icon}
                  </div>
                  <div className="project-links">
                    <a href={project.githubUrl} className="project-link-btn" title="Ver código">
                      <Github size={16} />
                    </a>
                    <a href={project.demoUrl} className="project-link-btn" title="Ver Demo">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-tech">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-footer">
                    <a href="#" className="project-view-more">
                      Ver Detalhes <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
           FOOTER
           ========================================== */}
      <footer className="footer">
        <div className="container footer-wrapper">
          <div className="logo">
            Guilherme <span className="logo-dot">Ferreira.</span>
          </div>
          <p className="footer-copyright">
            &copy; 2026 Guilherme Ferreira. Todos os direitos reservados.
          </p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" className="social-link"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" className="social-link"><Linkedin size={18} /></a>
            <a href="mailto:dev.contato@provedor.com" className="social-link"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
      {isContactOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="fale-comigo-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsContactOpen(false)} aria-label="Fechar">
              <X size={20} />
            </button>
            <div className="contact-icon-wrapper">
              <Mail size={32} className="contact-icon" />
            </div>
            <h2 className="fale-comigo-title">Fale Comigo</h2>
            <p className="fale-comigo-subtitle">
              Seja para iniciar um novo projeto, tirar dúvidas ou apenas bater um papo sobre tecnologia, meu e-mail está sempre aberto.
            </p>
            <a href="mailto:dev.contato@provedor.com" className="fale-comigo-btn">
              <Mail size={18} />
              dev.contato@provedor.com
            </a>
          </div>
        </div>
      )}
      {activeCompanyLogoModal && (
        <div className="company-modal-overlay" onClick={() => setActiveCompanyLogoModal(null)}>
          <div className="company-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveCompanyLogoModal(null)} aria-label="Fechar">
              <X size={20} />
            </button>
            <div className="company-modal-logo">
              <img src={activeCompanyLogoModal.logo} alt={activeCompanyLogoModal.name} />
            </div>
            <h3 className="company-modal-title">{activeCompanyLogoModal.name}</h3>
            <p className="company-modal-desc">{activeCompanyLogoModal.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
