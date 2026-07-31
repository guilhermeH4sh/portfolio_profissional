import React from 'react';
import { GraduationCap, Database, Briefcase, BookOpen, Gamepad2 } from 'lucide-react';

export interface Project {
  title: { pt: string; en: string; es: string; };
  category: 'frontend' | 'backend' | 'fullstack';
  tech: string[];
  desc: { pt: string; en: string; es: string; };
  githubUrl?: string;
  demoUrl?: string;
  icon: React.ReactNode;
  gradient: string;
  image?: string;
  images?: string[];
  detailedDesc?: { pt: string; en: string; es: string; };
  objectFit?: 'cover' | 'contain';
}

export interface Experience {
  period: { pt: string; en: string; es: string; };
  role: { pt: string; en: string; es: string; };
  company: string;
  desc: { pt: string; en: string; es: string; };
  tags: { pt: string[]; en: string[]; es: string[]; };
  logo: string;
  sector: { pt: string; en: string; es: string; };
  sectorDesc: { pt: string; en: string; es: string; };
}

export interface Certificate {
  title: { pt: string; en: string; es: string; };
  institution: { pt: string; en: string; es: string; };
  category: 'idiomas' | 'superior' | 'tecnicos' | 'certificacoes' | 'cursos' | 'imersoes';
  status: 'em_andamento' | 'finalizado';
  year: string;
  logo: string;
  desc: { pt: string; en: string; es: string; };
  fileUrl?: string;
  isProuni?: boolean;
}

export const projects: Project[] = [
  {
    title: {
      pt: "Plataforma Worky",
      en: "Worky Platform",
      es: "Plataforma Worky"
    },
    category: "fullstack",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    desc: {
      pt: "Plataforma fullstack em Next.js, React e TypeScript com rotas de API em Node.js e estilização Tailwind para automação de processos via Inteligência Artificial.",
      en: "Fullstack platform built with Next.js, React, and TypeScript featuring Node.js API routes and Tailwind CSS for AI-driven workflow automation.",
      es: "Plataforma fullstack construida con Next.js, React y TypeScript con rutas API en Node.js y Tailwind CSS para la automatización de procesos mediante IA."
    },
    demoUrl: "https://workyy.vercel.app",
    icon: <Briefcase className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #1e1b4b, #09090b)",
    image: "/project-worky-cover.png",
    images: [
      "/project-worky-cover.png",
      "/project-worky-diagrams.png",
      "/project-worky-personas.png",
      "/project-worky-ods.png",
      "/project-worky-links.png"
    ],
    detailedDesc: {
      pt: "Plataforma corporativa fullstack desenvolvida com Next.js, React e TypeScript no front-end, integrada a rotas de servidor e serviços em Node.js.\n\nA arquitetura utiliza componentes modulares com Tailwind CSS para garantir responsividade e alto desempenho. O sistema orquestra APIs RESTful e serviços de Inteligência Artificial para automatizar fluxos de trabalho e otimizar processos operacionais em tempo real.",
      en: "Corporate fullstack platform developed with Next.js, React, and TypeScript on the front-end, integrated with server routes and Node.js backend services.\n\nThe architecture leverages modular components styled with Tailwind CSS to ensure responsiveness and high performance. The system orchestrates RESTful APIs and AI services to automate workflows and optimize operational processes in real time.",
      es: "Plataforma corporativa fullstack desarrollada con Next.js, React y TypeScript en el front-end, integrada con rutas de servidor y servicios en Node.js.\n\nLa arquitectura utiliza componentes modulares con Tailwind CSS para garantizar capacidad de respuesta y alto rendimiento. El sistema orquesta APIs RESTful y servicios de IA para automatizar flujos de trabajo y optimizar procesos operativos en tiempo real."
    }
  },
  {
    title: {
      pt: "LinkEdu",
      en: "LinkEdu",
      es: "LinkEdu"
    },
    category: "backend",
    tech: ["Python", "Streamlit", "RAG", "LangChain"],
    desc: {
      pt: "Chatbot acadêmico desenvolvido em Python e Streamlit, baseado em arquitetura RAG com LangChain para consultas precisas a documentos institucionais.",
      en: "Academic chatbot built with Python and Streamlit, powered by RAG architecture and LangChain for precise querying of institutional documents.",
      es: "Chatbot académico desarrollado con Python y Streamlit, impulsado por arquitectura RAG y LangChain para consultas precisas de documentos institucionales."
    },
    icon: <GraduationCap className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #18181b, #09090b)",
    image: "/project-linkedu-1.png",
    images: ["/project-linkedu-1.png", "/project-linkedu-2.png", "/project-linkedu-3.png", "/project-linkedu-4.png"],
    detailedDesc: {
      pt: "Aplicação de IA generativa desenvolvida em Python com interface interativa em Streamlit, utilizando o framework LangChain para orquestrar embeddings e vetores.\n\nA arquitetura RAG (Retrieval-Augmented Generation) processa arquivos institucionais em PDF de forma assíncrona. O sistema executa busca vetorial semântica e recupera respostas com citação exata de fontes, garantindo conformidade com a LGPD e alta precisão.",
      en: "Generative AI application developed in Python with an interactive Streamlit interface, using the LangChain framework to orchestrate embeddings and vector stores.\n\nThe RAG (Retrieval-Augmented Generation) architecture processes institutional PDF documents asynchronously. The system executes semantic vector search and retrieves answers with exact source citations, ensuring LGPD compliance and high precision.",
      es: "Aplicación de IA generativa desarrollada en Python con una interfaz interactiva en Streamlit, utilizando el framework LangChain para orquestar embeddings y vectores.\n\nLa arquitectura RAG (Retrieval-Augmented Generation) procesa archivos institucionales en PDF de forma asíncrona. El sistema ejecuta búsqueda vectorial semántica y recupera respuestas con citación exacta de fuentes, garantizando cumplimiento de la LGPD."
    }
  },
  {
    title: {
      pt: "CRUD Node.js & MongoDB",
      en: "CRUD Node.js & MongoDB",
      es: "CRUD Node.js & MongoDB"
    },
    category: "backend",
    tech: ["Node.js", "MongoDB", "JavaScript", "Express"],
    desc: {
      pt: "API RESTful backend construída em Node.js e Express com banco de dados NoSQL MongoDB para execução de operações CRUD completas e validação de dados.",
      en: "RESTful backend API built with Node.js and Express coupled with MongoDB NoSQL database for full CRUD operations and data validation.",
      es: "API RESTful backend construida con Node.js y Express junto con base de datos NoSQL MongoDB para operaciones CRUD completas y validación de datos."
    },
    githubUrl: "https://github.com/guilhermeH4sh/crud_node.js-mongodb",
    icon: <Database className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #111827, #064e3b)",
    image: "/project-crud-node-mongodb-cover.png",
    images: [
      "/project-crud-node-mongodb-cover.png",
      "/project-crud-vscode.png",
      "/project-crud-postman.png",
      "/project-crud-mongodb-atlas.png"
    ],
    detailedDesc: {
      pt: "Aplicação backend de alta performance construída em Node.js e Express (ES6+), estruturada sob o padrão arquitetural MVC para operações RESTful completas.\n\nO sistema realiza conexão assíncrona com banco de dados NoSQL MongoDB via Mongoose ORM. Implementa controladores modulares, tratamento de rotas, middlewares de validação de esquemas e manipulação eficiente de documentos JSON com foco em escalabilidade.",
      en: "High-performance backend application built with Node.js and Express (ES6+), structured under the MVC architectural pattern for complete RESTful operations.\n\nThe system establishes asynchronous connections to a MongoDB NoSQL database via Mongoose ORM. It features modular controllers, route handling, schema validation middlewares, and efficient JSON document manipulation focused on scalability.",
      es: "Aplicación backend de alto rendimiento construida con Node.js y Express (ES6+), estructurada bajo el patrón arquitectónico MVC para operaciones RESTful completas.\n\nEl sistema establece conexiones asíncronas con base de datos NoSQL MongoDB a través de Mongoose ORM. Implementa controladores modulares, manejo de rutas, middlewares de validación y manipulación eficiente de documentos JSON con enfoque en escalabilidad."
    }
  },
  {
    title: {
      pt: "K Database",
      en: "K Database",
      es: "K Database"
    },
    category: "frontend",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    desc: {
      pt: "Catálogo corporativo desenvolvido com HTML5 semântico, CSS3 e JavaScript ES6+, utilizando GSAP para animações interativas e filtros de busca em tempo real.",
      en: "Enterprise software catalog built with semantic HTML5, CSS3, and JavaScript ES6+, using GSAP for interactive animations and real-time search filtering.",
      es: "Catálogo corporativo desarrollado con HTML5 semántico, CSS3 y JavaScript ES6+, utilizando GSAP para animaciones interactivas y filtros en tiempo real."
    },
    githubUrl: "https://github.com/guilhermeH4sh/K_software",
    demoUrl: "https://guilhermeh4sh.github.io/K_software/",
    icon: <Database className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #09090b, #1f1f23)",
    image: "/project-kdatabase-cover.png",
    images: [
      "/project-kdatabase-cover.png"
    ],
    detailedDesc: {
      pt: "Sistema de catálogo corporativo desenvolvido com HTML5 semântico, CSS3 estruturado com variáveis customizadas para temas e JavaScript moderno (ES6+).\n\nA interface integra o motor de animações GSAP com o plugin ScrollTrigger para criar transições suaves orientadas ao scroll. Possui um algoritmo de busca assíncrona em tempo real e filtros dinâmicos com persistência de dados e preferências no LocalStorage.",
      en: "Enterprise software catalog system developed with semantic HTML5, modular CSS3 using custom properties for theme management, and modern JavaScript (ES6+).\n\nThe interface integrates the GSAP animation engine with the ScrollTrigger plugin to deliver smooth scroll-driven transitions. It includes a real-time asynchronous search algorithm and dynamic filters with state persistence via LocalStorage.",
      es: "Sistema de catálogo corporativo desarrollado con HTML5 semántico, CSS3 estructurado con variables personalizadas para temas y JavaScript moderno (ES6+).\n\nLa interfaz integra el motor de animaciones GSAP con el plugin ScrollTrigger para crear transiciones suaves orientadas al desplazamiento. Incluye un algoritmo de búsqueda asíncrona en tiempo real y filtros dinámicos con persistencia en LocalStorage."
    }
  },
  {
    title: {
      pt: "Leia",
      en: "Leia",
      es: "Leia"
    },
    category: "frontend",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Memória"],
    desc: {
      pt: "Web app de leitura de e-books PDF desenvolvido em React, TypeScript e Vite com Tailwind CSS e armazenamento local para persistência de progresso.",
      en: "E-book PDF reader web app built with React, TypeScript, and Vite featuring Tailwind CSS and client-side storage for reading progress persistence.",
      es: "Aplicación web de lectura de e-books PDF desarrollada con React, TypeScript y Vite con Tailwind CSS y almacenamiento local para persistencia."
    },
    githubUrl: "https://github.com/guilhermeH4sh/kindle",
    demoUrl: "https://kindle-chi.vercel.app",
    icon: <BookOpen className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #1f2937, #111827)",
    image: "/project-kindle-cover.png",
    images: [
      "/project-kindle-cover.png",
      "/project-kindle-interface.png"
    ],
    detailedDesc: {
      pt: "Leitor de documentos PDF em ambiente web desenvolvido com React, TypeScript e Vite, estilizado com utility-first classes do Tailwind CSS.\n\nO aplicativo executa renderização client-side sem dependência de backend externo. Utiliza a Web Storage API (LocalStorage) para salvar assincronamente a última página lida, histórico de arquivos importados por drag-and-drop e alternância de temas com alta performance.",
      en: "Web-based PDF document reader application developed with React, TypeScript, and Vite, styled using Tailwind CSS utility-first architecture.\n\nThe application performs client-side rendering without external backend dependencies. It utilizes the Web Storage API (LocalStorage) to asynchronously persist reading progress, drag-and-drop file history, and theme preferences with high performance.",
      es: "Aplicación de lectura de documentos PDF en entorno web desarrollada con React, TypeScript y Vite, diseñada con clases de utilidad de Tailwind CSS.\n\nLa aplicación ejecuta renderizado del lado del cliente sin dependencias de servidor externo. Utiliza Web Storage API (LocalStorage) para guardar de forma asíncrona el progreso de lectura, historial de archivos y cambio de temas con alto rendimiento."
    }
  },
  {
    title: {
      pt: "Jogo do Mario",
      en: "Mario Game",
      es: "Juego de Mario"
    },
    category: "frontend",
    tech: ["HTML5", "CSS3", "JavaScript"],
    desc: {
      pt: "Um simples projeto para treinar programação Javascript.",
      en: "A simple project to practice JavaScript programming.",
      es: "Un simples proyecto para entrenar programación JavaScript."
    },
    githubUrl: "https://github.com/guilhermeH4sh/jogo-do-mario",
    demoUrl: "https://guilhermeh4sh.github.io/jogo-do-mario/",
    icon: <Gamepad2 className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #b91c1c, #15803d)",
    image: "/project-mario-gameover.png",
    images: [
      "/project-mario-gameover.png"
    ],
    detailedDesc: {
      pt: "Jogo do Mario desenvolvido com HTML, CSS e JavaScript. Um simples projeto para treinar programação Javascript, explorando manipulação da DOM, escuta de eventos do teclado e lógicas de animação e colisão no navegador.",
      en: "Mario game built with HTML, CSS, and JavaScript. A simple project to practice JavaScript programming, exploring DOM manipulation, keyboard event listeners, and browser animation/collision logic.",
      es: "Juego de Mario desarrollado con HTML, CSS y JavaScript. Un simples proyecto para entrenar programación JavaScript, explorando manipulación del DOM, eventos de teclado y lógica de animación y colisión."
    }
  }
];

export const experiences: Experience[] = [
  {
    period: {
      pt: "jul de 2026 — O momento",
      en: "Jul 2026 — Present",
      es: "jul de 2026 — Presente"
    },
    role: {
      pt: "Analista de Crédito",
      en: "Credit Analyst",
      es: "Analista de Crédito"
    },
    company: "AGX Software",
    desc: {
      pt: "Atuação como Analista de Crédito com foco na identificação e prevenção de fraudes, análise de riscos e inconsistências, registro e documentação detalhada das análises em sistema, e apoio à tomada de decisão para concessão de crédito.",
      en: "Working as a Credit Analyst focusing on fraud identification and prevention, risk and inconsistency analysis, detailed recording and documentation of analyses in system, and decision support for credit granting.",
      es: "Desempeño como Analista de Crédito con enfoque en la identificación y prevención de fraudes, análisis de riesgos e inconsistencias, registro y documentación detallada de los análisis en sistema, y apoyo a la toma de decisiones para la concesión de crédito."
    },
    tags: {
      pt: ["Análise de Crédito", "Antifraude", "Análise de Risco", "Concessão de Crédito"],
      en: ["Credit Analysis", "Anti-fraud", "Risk Analysis", "Credit Granting"],
      es: ["Análisis de Crédito", "Antifraude", "Análisis de Riesgo", "Concesión de Crédito"]
    },
    logo: "/logo-agx.png",
    sector: {
      pt: "Tecnologia & Serviços Financeiros",
      en: "Technology & Financial Services",
      es: "Tecnología y Servicios Financieros"
    },
    sectorDesc: {
      pt: "A AGX Software desenvolve soluções tecnológicas e plataformas de software para o setor financeiro e de análise de crédito, priorizando a segurança, a inteligência de dados e a eficiência no apoio à tomada de decisões estratégicas e prevenção a riscos.",
      en: "AGX Software develops technological solutions and software platforms for the financial and credit analysis sector, prioritizing security, data intelligence, and efficiency in supporting strategic decision-making and risk prevention.",
      es: "AGX Software desarrolla soluciones tecnológicas y plataformas de software para el sector financiero y de análisis de crédito, priorizando la seguridad, la inteligencia de datos y la eficiencia en el apoyo a la toma de decisiones estratégicas y prevención de riesgos."
    }
  },
  {
    period: {
      pt: "abr de 2026 — O momento",
      en: "Apr 2026 — Present",
      es: "abr de 2026 — Presente"
    },
    role: {
      pt: "Test Engineer",
      en: "Test Engineer",
      es: "Test Engineer"
    },
    company: "Centrus Inteligência Artificial",
    desc: {
      pt: "Atuação focada em assegurar a máxima qualidade de software através do planejamento e execução de testes manuais e automatizados. Responsável por identificar falhas estruturais, criar cenários complexos de validação, documentar casos de teste (test cases) e colaborar ativamente com o time de desenvolvimento para garantir entregas eficientes, mitigar riscos e otimizar a experiência final do usuário. Além disso, atuei em projetos de desenvolvimento front-end onde pude criar um novo website para a empresa, realizando também manutenções contínuas envolvendo UX/UI.",
      en: "Role focused on ensuring maximum software quality through the planning and execution of manual and automated tests. Responsible for identifying structural flaws, creating complex validation scenarios, documenting test cases, and actively collaborating with the development team to ensure efficient deliveries, mitigate risks, and optimize the final user experience. Additionally, worked on front-end development projects creating a new website for the company, alongside ongoing UX/UI maintenance.",
      es: "Actuación enfocada en asegurar la máxima calidad del software mediante la planificación y ejecución de pruebas manuales y automatizadas. Responsable de identificar fallas estructurales, crear escenarios complejos de validación, documentar casos de prueba (test cases) y colaborar activamente con el equipo de desarrollo para garantizar entregas eficientes, mitigar riesgos y optimizar la experiencia final del usuario. Además, participé en proyectos de desarrollo front-end donde creé un nuevo sitio web para la empresa, realizando también mantenimientos continuos de UX/UI."
    },
    tags: {
      pt: ["QA Testing", "Automação", "Quality Assurance", "Front-end", "UX/UI"],
      en: ["QA Testing", "Automation", "Quality Assurance", "Front-end", "UX/UI"],
      es: ["QA Testing", "Automatización", "Quality Assurance", "Front-end", "UX/UI"]
    },
    logo: "/logo-centrus.png",
    sector: {
      pt: "Inteligência Artificial & Automação",
      en: "Artificial Intelligence & Automation",
      es: "Inteligencia Artificial y Automatización"
    },
    sectorDesc: {
      pt: "A Centrus Inteligência Artificial é uma empresa focada na criação de soluções inteligentes e automações corporativas utilizando IA, ajudando corporações a otimizarem seus processos de decisão e operações internas.",
      en: "Centrus Artificial Intelligence is a company focused on creating intelligent solutions and corporate automations using AI, helping corporations optimize their decision processes and internal operations.",
      es: "Centrus Inteligencia Artificial es una empresa enfocada en la creación de soluciones inteligentes y automatizaciones corporativas utilizando IA, ayudando a las corporaciones a optimizar sus procesos de decisión y operaciones internas."
    }
  },
  {
    period: {
      pt: "mar de 2025 — jul de 2026",
      en: "Mar 2025 — Jul 2026",
      es: "mar de 2025 — jul de 2026"
    },
    role: {
      pt: "Especialista CX",
      en: "CX Specialist",
      es: "Especialista en CX"
    },
    company: "Pulse Client Experts",
    desc: {
      pt: "Responsável pela gestão do relacionamento com o cliente (CRM) e excelência no atendimento na ponta. Atuação estratégica no setor antifraude, analisando padrões de comportamento, mitigando riscos de segurança e resolvendo problemas complexos com agilidade. Foco total na retenção, fidelização e na construção de uma jornada do cliente segura, fluida e de alto valor.",
      en: "Responsible for customer relationship management (CRM) and front-line service excellence. Strategic performance in the anti-fraud sector, analyzing behavior patterns, mitigating security risks and solving complex problems with agility. Total focus on retention, loyalty and building a secure, fluid and high-value customer journey.",
      es: "Responsable de la gestión de relaciones con los clientes (CRM) y de la excelencia en la atención al cliente en primera línea. Actuación estratégica en el sector antifraude, analizando patrones de comportamiento, mitigando riesgos de seguridad y resolviendo problemas complejos con agilidad. Enfoque total en la retención, fidelización y en la construcción de una trayectoria del cliente segura, fluida y de alto valor."
    },
    tags: {
      pt: ["CX", "CRM", "Antifraude", "Customer Experience"],
      en: ["CX", "CRM", "Anti-fraud", "Customer Experience"],
      es: ["CX", "CRM", "Antifraude", "Customer Experience"]
    },
    logo: "/logo-pulse.png",
    sector: {
      pt: "Customer Experience & Antifraude",
      en: "Customer Experience & Anti-Fraud",
      es: "Customer Experience y Antifraude"
    },
    sectorDesc: {
      pt: "A Pulse Client Experts é referência na gestão de relacionamento e experiência do cliente, especializando-se em otimizar interações B2B/B2C e implementar estratégias robustas de prevenção a fraudes transacionais.",
      en: "Pulse Client Experts is a reference in relationship management and customer experience, specializing in optimizing B2B/B2C interactions and implementing robust transactional fraud prevention strategies.",
      es: "Pulse Client Experts es referente en la gestión de relaciones y experiencia del cliente, especializándose en optimizar interacciones B2B/B2C e implementar estrategias robustas de prevención de fraudes transaccionales."
    }
  },
  {
    period: {
      pt: "fev de 2026 — abr de 2026",
      en: "Feb 2026 — Apr 2026",
      es: "feb de 2026 — abr de 2026"
    },
    role: {
      pt: "Equipe de Parcerias | B2C",
      en: "Partnership Team | B2C",
      es: "Equipo de Alianzas | B2C"
    },
    company: "AIESEC no Brasil",
    desc: {
      pt: "Experiência voluntária voltada ao impacto social e desenvolvimento de parcerias estratégicas no modelo B2C. Atuação na prospecção, negociação e engajamento de partes interessadas, exercitando forte liderança, comunicação persuasiva e habilidades de trabalho em equipe para viabilizar projetos de intercâmbio e desenvolvimento jovem.",
      en: "Voluntary experience focused on social impact and strategic partnerships development in the B2C model. Prospected, negotiated and engaged stakeholders, exercising strong leadership, persuasive communication and teamwork skills to enable exchange projects and youth development.",
      es: "Experiencia voluntaria enfocada al impacto social y desarrollo de alianzas estratégicas en el modelo B2C. Actuación en la prospección, negociación y compromiso de las partes interesadas, ejercitando un fuerte liderazgo, comunicación persuasiva y habilidades de trabajo en equipo para viabilizar proyectos de intercambio y desarrollo juvenil."
    },
    tags: {
      pt: ["Voluntariado", "B2C", "Negociação", "Liderança"],
      en: ["Volunteer", "B2C", "Negotiation", "Leadership"],
      es: ["Voluntariado", "B2C", "Negociación", "Liderazgo"]
    },
    logo: "/logo-aiesec.png",
    sector: {
      pt: "Liderança Jovem & Intercâmbios",
      en: "Youth Leadership & Exchanges",
      es: "Liderazgo Juvenil e Intercambios"
    },
    sectorDesc: {
      pt: "A AIESEC é a maior organização mundial gerida por jovens, dedicada a promover o desenvolvimento da liderança jovem através de intercâmbios profissionais, voluntariado global e experiências multiculturais.",
      en: "AIESEC is the world's largest youth-run organization, dedicated to promoting youth leadership development through professional exchanges, global volunteering and multicultural experiences.",
      es: "AIESEC es la organización mundial más grande dirigida por jóvenes, dedicada a promover el desarrollo del liderazgo juvenil a través de intercambios profesionales, voluntariado global y experiencias multiculturales."
    }
  },
  {
    period: {
      pt: "fev de 2023 — out de 2023",
      en: "Feb 2023 — Oct 2023",
      es: "feb de 2023 — oct de 2023"
    },
    role: {
      pt: "Estudante voluntário | A.I League",
      en: "Student Volunteer | A.I League",
      es: "Estudiante Voluntario | A.I League"
    },
    company: "Brain Facens",
    desc: {
      pt: "Imersão prática em ecossistemas de inovação e tecnologia, com forte ênfase em inteligência artificial. Atuação direta no auxílio e concepção de projetos tecnológicos avançados, com profundo aprendizado e aplicação prática de conceitos de Machine Learning. Desenvolvimento contínuo de competências de resolução de problemas e trabalho em equipe em um ambiente de alta colaboração.",
      en: "Practical immersion in innovation and technology ecosystems, with a strong emphasis on artificial intelligence. Direct support and design of advanced technological projects, with deep learning and practical application of Machine Learning concepts. Continuous development of problem-solving and teamwork skills in a highly collaborative environment.",
      es: "Inmersión práctica en ecosistemas de innovación y tecnología, con fuerte énfasis en inteligencia artificial. Actuación directa en el apoyo y diseño de proyectos tecnológicos avanzados, con profundo aprendizaje y aplicación práctica de conceptos de Machine Learning. Desarrollo continuo de habilidades de resolución de problemas y trabajo en equipo en un entorno de alta colaboración."
    },
    tags: {
      pt: ["Machine Learning", "Inteligência Artificial", "Inovação", "Python"],
      en: ["Machine Learning", "Artificial Intelligence", "Innovation", "Python"],
      es: ["Machine Learning", "Inteligencia Artificial", "Innovación", "Python"]
    },
    logo: "/logo-brain.png",
    sector: {
      pt: "Pesquisa & Desenvolvimento em IA",
      en: "Research & Development in AI",
      es: "Investigación y Desarrollo en IA"
    },
    sectorDesc: {
      pt: "O Brain Facens é um hub e laboratório de inovação focado no desenvolvimento de tecnologias exponenciais, incluindo Inteligência Artificial, IoT e Automação, conectando alunos da Facens a projetos práticos de mercado.",
      en: "Brain Facens is an innovation hub and laboratory focused on the development of exponential technologies, including Artificial Intelligence, IoT and Automation, connecting Facens students to practical market projects.",
      es: "Brain Facens es un centro y laboratorio de innovación enfocado en el desarrollo de tecnologías exponenciales, incluyendo Inteligencia Artificial, IoT y Automatización, conectando a estudiantes de Facens con proyectos prácticos del mercado."
    }
  }
];

export const techStack = [
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit" },
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira" },
  { name: "Trello", logo: "https://cdn.simpleicons.org/trello" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n" },
  { name: "Selenium", logo: "https://cdn.simpleicons.org/selenium" },
  { name: "Postman", logo: "https://cdn.simpleicons.org/postman" }
];

export const certificates: Certificate[] = [
  {
    title: {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Analysis and Systems Development",
      es: "Tecnólogo en Análisis y Desarrollo de Sistemas"
    },
    institution: {
      pt: "UniFacens",
      en: "UniFacens",
      es: "UniFacens"
    },
    category: "superior",
    status: "em_andamento",
    year: "2023 — 2026",
    logo: "/logo-facens.png",
    desc: {
      pt: "Curso superior de tecnologia focado em desenvolvimento de software, engenharia de software, banco de dados e metodologias ágeis.",
      en: "Higher education technology course focused on software development, software engineering, databases and agile methodologies.",
      es: "Curso de educación superior en tecnología enfocado en desarrollo de software, ingeniería de software, bases de datos y metodologías ágiles."
    },
    isProuni: true
  },
  {
    title: {
      pt: "FCB-100 Correspondente Bancário Completo",
      en: "FCB-100 Complete Banking Correspondent",
      es: "FCB-100 Correspondiente Bancario Completo"
    },
    institution: {
      pt: "Febracon",
      en: "Febracon",
      es: "Febracon"
    },
    category: "certificacoes",
    status: "finalizado",
    year: "2026 — 2028",
    logo: "/logo-febracon.png",
    desc: {
      pt: "Certificação profissional de correspondente bancário completo em conformidade com as resoluções do Banco Central. Código da credencial: 24.459.",
      en: "Professional certification for complete banking correspondent in compliance with Central Bank resolutions. Credential code: 24.459.",
      es: "Certificación profesional de corresponsal bancario completo en conformidad con las resoluciones del Banco Central. Código de credencial: 24.459."
    }
  },
  {
    title: {
      pt: "Datadog Learning Center — Backend Engineer",
      en: "Datadog Learning Center — Backend Engineer",
      es: "Datadog Learning Center — Backend Engineer"
    },
    institution: {
      pt: "Datadog",
      en: "Datadog",
      es: "Datadog"
    },
    category: "certificacoes",
    status: "finalizado",
    year: "2026",
    logo: "/logo-datadog.png",
    desc: {
      pt: "Certificação/Badge emitida pelo Datadog Learning Center demonstrando proficiência técnica em observabilidade, monitoramento de métricas, APM e engenharia de backend.",
      en: "Certification/Badge issued by Datadog Learning Center demonstrating technical proficiency in observability, metrics monitoring, APM, and backend engineering.",
      es: "Certificación/Badge emitida por Datadog Learning Center que demuestra competencia técnica en observabilidad, monitoreo de métricas, APM e ingeniería backend."
    },
    fileUrl: "/logo-datadog.png"
  },
  {
    title: {
      pt: "CRUD Operations in MongoDB",
      en: "CRUD Operations in MongoDB",
      es: "CRUD Operations in MongoDB"
    },
    institution: {
      pt: "MongoDB / Credly",
      en: "MongoDB / Credly",
      es: "MongoDB / Credly"
    },
    category: "certificacoes",
    status: "finalizado",
    year: "2026",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    desc: {
      pt: "Certificação de habilidade prática em operações de criação, leitura, atualização e exclusão (CRUD) no banco de dados NoSQL MongoDB. Credencial emitida via Credly.",
      en: "Skill certification for practical create, read, update, and delete (CRUD) operations in the MongoDB NoSQL database. Credential issued via Credly.",
      es: "Certificación de habilidad práctica en operaciones de creación, lectura, actualización y eliminación (CRUD) en la base de datos NoSQL MongoDB. Credencial emitida via Credly."
    },
    fileUrl: "/certificados/234843_mongodb_crud_operations.pdf"
  },
  {
    title: {
      pt: "MongoDB Overview: Core Concepts and Architecture",
      en: "MongoDB Overview: Core Concepts and Architecture",
      es: "MongoDB Overview: Core Concepts and Architecture"
    },
    institution: {
      pt: "MongoDB / Credly",
      en: "MongoDB / Credly",
      es: "MongoDB / Credly"
    },
    category: "certificacoes",
    status: "finalizado",
    year: "2026",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    desc: {
      pt: "Certificação sobre conceitos fundamentais, arquitetura orientada a documentos, modelagem de dados e alta disponibilidade no MongoDB. Credencial emitida via Credly.",
      en: "Certification covering core concepts, document-oriented architecture, data modeling, and high availability in MongoDB. Credential issued via Credly.",
      es: "Certificación sobre conceptos fundamentales, arquitectura orientada a documentos, modelado de datos y alta disponibilidad en MongoDB. Credencial emitida via Credly."
    },
    fileUrl: "/certificados/234843_mongodb_overview.pdf"
  },
  {
    title: {
      pt: "ONE | Imersão Agentes de IA",
      en: "ONE | AI Agents Immersion",
      es: "ONE | Inmersión Agentes de IA"
    },
    institution: {
      pt: "Oracle Next Education / Alura",
      en: "Oracle Next Education / Alura",
      es: "Oracle Next Education / Alura"
    },
    category: "imersoes",
    status: "finalizado",
    year: "2026",
    logo: "/logo-oracle-one.png",
    desc: {
      pt: "Imersão prática focada no desenvolvimento e aplicação de agentes de inteligência artificial em cenários reais, em parceria com a Alura e Oracle Next Education.",
      en: "Practical immersion focused on the development and application of artificial intelligence agents in real scenarios, in partnership with Alura and Oracle Next Education.",
      es: "Inmersión práctica enfocada en el desarrollo y aplicación de agentes de inteligencia artificial en escenarios reales, en alianza con Alura y Oracle Next Education."
    },
    fileUrl: "/certificados/234843_imersao_oracle.pdf"
  },
  {
    title: {
      pt: "Linguagens de Programação Orientadas a Objetos",
      en: "Object-Oriented Programming Languages",
      es: "Lenguajes de Programación Orientados a Objetos"
    },
    institution: {
      pt: "IFSUL",
      en: "IFSUL",
      es: "IFSUL"
    },
    category: "cursos",
    status: "finalizado",
    year: "2026",
    logo: "/logo-ifsul.png",
    desc: {
      pt: "Curso de Linguagens de Programação Orientadas a Objetos pelo Instituto Federal Sul-rio-grandense, com carga horária de 40 horas.",
      en: "Object-Oriented Programming Languages course by the Federal Institute Sul-rio-grandense, with a workload of 40 hours.",
      es: "Curso de Lenguajes de Programación Orientados a Objetos por el Instituto Federal Sul-rio-grandense, con una carga horaria de 40 horas."
    },
    fileUrl: "/certificados/234843_POO_IFSUL.png"
  },
  {
    title: {
      pt: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      en: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      es: "Microsoft Certified: Azure AI Fundamentals (AI-900)"
    },
    institution: {
      pt: "Microsoft / Fundação Bradesco",
      en: "Microsoft / Fundação Bradesco",
      es: "Microsoft / Fundação Bradesco"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-bradesco.png",
    desc: {
      pt: "Certificação oficial em fundamentos de inteligência artificial na nuvem Microsoft Azure, obtida através da Escola Virtual Fundação Bradesco.",
      en: "Official certification in Microsoft Azure cloud artificial intelligence fundamentals, obtained through Escola Virtual Fundação Bradesco.",
      es: "Certificación oficial en fundamentos de inteligencia artificial en la nube de Microsoft Azure, obtenida a través de la Escola Virtual Fundação Bradesco."
    },
    fileUrl: "/certificados/234843_ai-900.pdf"
  },
  {
    title: {
      pt: "Data Fundamentals",
      en: "Data Fundamentals",
      es: "Data Fundamentals"
    },
    institution: {
      pt: "IBM",
      en: "IBM",
      es: "IBM"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-ibm.png",
    desc: {
      pt: "Certificação IBM SkillsBuild sobre conceitos fundamentais de dados relacionais e não-relacionais, armazenamento e análise.",
      en: "IBM SkillsBuild certification on fundamental concepts of relational and non-relational data, storage and analysis.",
      es: "Certificación IBM SkillsBuild sobre conceptos fundamentales de datos relacionales y no relacionales, almacenamiento y análisis."
    },
    fileUrl: "/certificados/234843_dataFundamentals.pdf"
  },
  {
    title: {
      pt: "Agile Explorer",
      en: "Agile Explorer",
      es: "Agile Explorer"
    },
    institution: {
      pt: "IBM",
      en: "IBM",
      es: "IBM"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-ibm.png",
    desc: {
      pt: "Certificação IBM em metodologias ágeis, conceitos do framework Scrum, Kanban, facilitação, melhoria contínua e colaboração ágil de equipes.",
      en: "IBM certification in agile methodologies, Scrum framework concepts, Kanban, facilitation, continuous improvement and agile team collaboration.",
      es: "Certificación de IBM en metodologías ágiles, conceptos del marco Scrum, Kanban, facilitación, mejora continua y colaboración ágil de equipos."
    },
    fileUrl: "/certificados/234843_agileExplorer.pdf"
  },
  {
    title: {
      pt: "Explore Emerging Tech",
      en: "Explore Emerging Tech",
      es: "Explore Emerging Tech"
    },
    institution: {
      pt: "IBM",
      en: "IBM",
      es: "IBM"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-ibm.png",
    desc: {
      pt: "Programa de imersão da IBM em tecnologias emergentes, abrangendo conceitos práticos de Inteligência Artificial, Nuvem, IoT, Blockchain e Cibersegurança.",
      en: "IBM immersion program in emerging technologies, covering practical concepts of Artificial Intelligence, Cloud, IoT, Blockchain and Cybersecurity.",
      es: "Programa de inmersión de IBM en tecnologías emergentes, que cubre conceptos prácticos de Inteligencia Artificial, Nube, IoT, Blockchain y Ciberseguridad."
    },
    fileUrl: "/certificados/234843_exploreEmergingTech.pdf"
  },
  {
    title: {
      pt: "Programação Orientada a Objetos (POO)",
      en: "Object-Oriented Programming (OOP)",
      es: "Programación Orientada a Objetos (POO)"
    },
    institution: {
      pt: "Fundação Bradesco",
      en: "Fundação Bradesco",
      es: "Fundação Bradesco"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-bradesco.png",
    desc: {
      pt: "Curso focado em desenvolvimento orientado a objetos pela Escola Virtual Fundação Bradesco, cobrindo herança, polimorfismo e interfaces.",
      en: "Course focused on object-oriented development by Escola Virtual Fundação Bradesco, covering inheritance, polymorphism and interfaces.",
      es: "Curso enfocado en el desarrollo orientado a objetos por la Escola Virtual Fundação Bradesco, cubriendo herencia, polimorfismo e interfaces."
    },
    fileUrl: "/certificados/234843_POO.pdf"
  },
  {
    title: {
      pt: "Banco de Dados",
      en: "Database",
      es: "Base de Datos"
    },
    institution: {
      pt: "Ada Tech",
      en: "Ada Tech",
      es: "Ada Tech"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-ada.png",
    desc: {
      pt: "Formação completa cobrindo arquitetura de banco de dados relacionais, modelagem de tabelas e consultas SQL na plataforma Ada Tech.",
      en: "Complete training covering relational database architecture, table modeling and SQL queries on the Ada Tech platform.",
      es: "Capacitación completa que cubre la arquitectura de bases de datos relacionales, modelado de tablas y consultas SQL en la plataforma Ada Tech."
    },
    fileUrl: "/certificados/234843_bancoDeDadosADA.pdf"
  },
  {
    title: {
      pt: "Web Development Fundamentals",
      en: "Web Development Fundamentals",
      es: "Web Development Fundamentals"
    },
    institution: {
      pt: "IBM",
      en: "IBM",
      es: "IBM"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-ibm.png",
    desc: {
      pt: "Fundamentos de Desenvolvimento Web emitido pela IBM SkillsBuild, englobando semântica HTML5, estilização moderna com CSS3 e JavaScript.",
      en: "Web Development Fundamentals issued by IBM SkillsBuild, encompassing HTML5 semantics, modern styling with CSS3 and JavaScript.",
      es: "Fundamentos de Desarrollo Web emitido por IBM SkillsBuild, que abarca la semántica HTML5, el estilo moderno con CSS3 y JavaScript."
    },
    fileUrl: "/certificados/234843_webDevelopmentFundamentals.pdf"
  },
  {
    title: {
      pt: "Python",
      en: "Python",
      es: "Python"
    },
    institution: {
      pt: "Santander Open Academy",
      en: "Santander Open Academy",
      es: "Santander Open Academy"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-santander.png",
    desc: {
      pt: "Formação intensiva em programação Python, cobrindo lógica, estruturas de dados e desenvolvimento de scripts automatizados no Santander Open Academy.",
      en: "Intensive training in Python programming, covering logic, data structures and the development of automated scripts at Santander Open Academy.",
      es: "Capacitación intensiva en programación Python, que cubre lógica, estructuras de datos y desarrollo de scripts automatizados en Santander Open Academy."
    },
    fileUrl: "/certificados/234843_pythonSantanderOpenAcademy.pdf"
  },
  {
    title: {
      pt: "Imersão Dev com Google Gemini (10ª Edição)",
      en: "Dev Immersion with Google Gemini (10th Edition)",
      es: "Inmersión Dev con Google Gemini (10.ª Edición)"
    },
    institution: {
      pt: "Alura / Google Gemini",
      en: "Alura / Google Gemini",
      es: "Alura / Google Gemini"
    },
    category: "imersoes",
    status: "finalizado",
    year: "2025",
    logo: "/logo-alura.png",
    desc: {
      pt: "Imersão prática focada no desenvolvimento de aplicações utilizando a API do Google Gemini, englobando inteligência artificial, engenharia de prompt e integração de APIs.",
      en: "Practical immersion focused on developing applications using the Google Gemini API, encompassing artificial intelligence, prompt engineering and API integration.",
      es: "Inmersión práctica enfocada en el desarrollo de aplicaciones utilizando la API de Google Gemini, que abarca inteligencia artificial, ingeniería de prompts e integración de API."
    },
    fileUrl: "/certificados/234843_imersao_gemini.jpg"
  },
  {
    title: {
      pt: "Engenharia de Software",
      en: "Software Engineering",
      es: "Ingeniería de Software"
    },
    institution: {
      pt: "FIAP",
      en: "FIAP",
      es: "FIAP"
    },
    category: "cursos",
    status: "finalizado",
    year: "2025",
    logo: "/logo-fiap.png",
    desc: {
      pt: "Nano Course em Engenharia de Software focando nos conceitos fundamentais, metodologias de ciclo de vida de software, arquitetura e garantia de qualidade.",
      en: "Nano Course in Software Engineering focusing on fundamental concepts, software life cycle methodologies, architecture and quality assurance.",
      es: "Nano Course en Ingeniería de Software enfocado en conceptos fundamentales, metodologías del ciclo de vida del software, arquitectura y garantía de calidad."
    },
    fileUrl: "/certificados/234843_engenharia_de_software.pdf"
  },
  {
    title: {
      pt: "Customer Experience (CX)",
      en: "Customer Experience (CX)",
      es: "Customer Experience (CX)"
    },
    institution: {
      pt: "FIAP",
      en: "FIAP",
      es: "FIAP"
    },
    category: "cursos",
    status: "finalizado",
    year: "2025",
    logo: "/logo-fiap.png",
    desc: {
      pt: "Certificação em excelência de atendimento ao cliente, otimização de canais de contato, jornada de usuário e fidelização pela FIAP.",
      en: "Certification in customer service excellence, contact channel optimization, user journey and loyalty by FIAP.",
      es: "Certificación en excelencia en atención al cliente, optimización de canales de contacto, trayectoria del usuario y fidelización por la FIAP."
    },
    fileUrl: "/certificados/234843_customer_experience.pdf"
  },
  {
    title: {
      pt: "Cibersegurança e Proteção Digital",
      en: "Cybersecurity and Digital Protection",
      es: "Ciberseguridad y Protección Digital"
    },
    institution: {
      pt: "Cisco Networking Academy",
      en: "Cisco Networking Academy",
      es: "Cisco Networking Academy"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "https://cdn.simpleicons.org/cisco/1BA0D7",
    desc: {
      pt: "Fundamentos de segurança digital, proteção de redes, criptografia, mitigação de riscos, privacidade online e engenharia social.",
      en: "Fundamentals of digital security, network protection, cryptography, risk mitigation, online privacy and social engineering.",
      es: "Fundamentos de seguridad digital, protección de redes, criptografía, mitigación de riesgos, privacidad en línea y ingeniería social."
    },
    fileUrl: "/certificados/234843_cybersecurity.pdf"
  },
  {
    title: {
      pt: "English for IT 1",
      en: "English for IT 1",
      es: "English for IT 1"
    },
    institution: {
      pt: "Cisco Networking Academy",
      en: "Cisco Networking Academy",
      es: "Cisco Networking Academy"
    },
    category: "idiomas",
    status: "finalizado",
    year: "2024",
    logo: "https://cdn.simpleicons.org/cisco/1BA0D7",
    desc: {
      pt: "Curso voltado ao desenvolvimento de competências em inglês no ambiente de tecnologia e TI, com foco em terminologias técnicas de rede e hardware.",
      en: "Course aimed at developing English skills in the technology and IT environment, focusing on technical terminology of networking and hardware.",
      es: "Curso orientado a desarrollar competencias en inglés en el entorno de la tecnología y TI, con enfoque en terminología técnica de redes y hardware."
    },
    fileUrl: "/certificados/234843_englishForIT1.pdf"
  },
  {
    title: {
      pt: "English for IT 2",
      en: "English for IT 2",
      es: "English for IT 2"
    },
    institution: {
      pt: "Cisco Networking Academy",
      en: "Cisco Networking Academy",
      es: "Cisco Networking Academy"
    },
    category: "idiomas",
    status: "finalizado",
    year: "2024",
    logo: "https://cdn.simpleicons.org/cisco/1BA0D7",
    desc: {
      pt: "Continuação avançada do curso de inglês para TI, cobrindo comunicação corporativa, terminologia técnica de software, desenvolvimento ágil e suporte.",
      en: "Advanced continuation of the English for IT course, covering corporate communication, technical software terminology, agile development and support.",
      es: "Continuación avanzada del curso de inglés para TI, que cubre comunicación corporativa, terminología técnica de software, desarrollo ágil y soporte."
    },
    fileUrl: "/certificados/234843_englishForIT2.pdf"
  },
  {
    title: {
      pt: "English Fundamentals",
      en: "English Fundamentals",
      es: "English Fundamentals"
    },
    institution: {
      pt: "Santander Open Academy",
      en: "Santander Open Academy",
      es: "Santander Open Academy"
    },
    category: "idiomas",
    status: "finalizado",
    year: "2023",
    logo: "/logo-santander.png",
    desc: {
      pt: "Curso completo de inglês focado em desenvolvimento de competências essenciais de leitura, escrita e conversação para busca de emprego.",
      en: "Complete English course focused on developing essential reading, writing and speaking skills for job searching.",
      es: "Curso completo de inglés enfocado en desarrollar habilidades esenciales de lectura, escritura y conversación para la búsqueda de empleo."
    },
    fileUrl: "/certificados/234843_englishFundamentals.pdf"
  },
  {
    title: {
      pt: "Efficiency Achievement",
      en: "Efficiency Achievement",
      es: "Efficiency Achievement"
    },
    institution: {
      pt: "Voxy / CI&T",
      en: "Voxy / CI&T",
      es: "Voxy / CI&T"
    },
    category: "idiomas",
    status: "finalizado",
    year: "2024",
    logo: "/logo-voxy.png",
    desc: {
      pt: "Certificado de proficiência em inglês (nível intermediário alto B2) emitido pela Voxy em parceria de capacitação de processos da CI&T.",
      en: "English proficiency certificate (upper-intermediate B2 level) issued by Voxy in partnership with CI&T processes training.",
      es: "Certificado de competencia en inglés (nivel intermedio alto B2) emitido por Voxy en alianza de capacitación de procesos con CI&T."
    },
    fileUrl: "/certificados/234843_eficiency_achievementCI&T.pdf"
  },
  {
    title: {
      pt: "Administração Geral",
      en: "General Administration",
      es: "Administración General"
    },
    institution: {
      pt: "Fundação Bradesco",
      en: "Fundação Bradesco",
      es: "Fundação Bradesco"
    },
    category: "cursos",
    status: "finalizado",
    year: "2023",
    logo: "/logo-bradesco.png",
    desc: {
      pt: "Conceitos fundamentais de administração corporativa, controle de processos, planejamento estratégico e gestão organizacional.",
      en: "Fundamental concepts of corporate administration, process control, strategic planning and organizational management.",
      es: "Conceptos fundamentales de administración corporativa, control de procesos, planificación estratégica y gestión organizacional."
    },
    fileUrl: "/certificados/234843_administração.pdf"
  },
  {
    title: {
      pt: "Excel Básico",
      en: "Basic Excel",
      es: "Excel Básico"
    },
    institution: {
      pt: "SENAI",
      en: "SENAI",
      es: "SENAI"
    },
    category: "tecnicos",
    status: "finalizado",
    year: "2023",
    logo: "/logo-senai.png",
    desc: {
      pt: "Formação básica em planilhas eletrônicas Microsoft Excel, englobando funções matemáticas básicas, formatação de dados e gráficos pelo SENAI SP.",
      en: "Basic training in Microsoft Excel spreadsheets, encompassing basic mathematical functions, data formatting and charts by SENAI SP.",
      es: "Formación básica en hojas de cálculo Microsoft Excel, que incluye funciones matemáticas básicas, formateo de dados y gráficos por el SENAI SP."
    },
    fileUrl: "/certificados/234843_excelBasico.pdf"
  },
  {
    title: {
      pt: "Gestão de Tempo",
      en: "Time Management",
      es: "Gestión del Tiempo"
    },
    institution: {
      pt: "Santander Open Academy",
      en: "Santander Open Academy",
      es: "Santander Open Academy"
    },
    category: "cursos",
    status: "finalizado",
    year: "2023",
    logo: "/logo-santander.png",
    desc: {
      pt: "Conceitos e técnicas para melhor gerenciamento de tempo, priorização de tarefas, matriz de Eisenhower e aumento de produtividade diária.",
      en: "Concepts and techniques for better time management, task prioritization, Eisenhower matrix and increased daily productivity.",
      es: "Conceptos y técnicas para una mejor gestión del tiempo, priorización de tareas, matriz de Eisenhower y aumento de la productividad diaria."
    },
    fileUrl: "/certificados/234843_gestaoDeTempo.pdf"
  },
  {
    title: {
      pt: "Introdução à Ciência de Dados",
      en: "Introduction to Data Science",
      es: "Introducción a la Ciencia de Datos"
    },
    institution: {
      pt: "Santander Open Academy",
      en: "Santander Open Academy",
      es: "Santander Open Academy"
    },
    category: "cursos",
    status: "finalizado",
    year: "2023",
    logo: "/logo-santander.png",
    desc: {
      pt: "Princípios introdutórios de ciência de dados, estatística básica, visualização de dados e análise exploratória no Santander Open Academy.",
      en: "Introductory principles of data science, basic statistics, data visualization and exploratory analysis at Santander Open Academy.",
      es: "Principios introductorios de ciencia de datos, estadística básica, visualización de datos y análisis exploratorio en Santander Open Academy."
    },
    fileUrl: "/certificados/234843_introducaoCienciaDeDados.pdf"
  },
  {
    title: {
      pt: "Lei Geral de Proteção de Dados (LGPD)",
      en: "General Data Protection Law (LGPD)",
      es: "Ley General de Protección de Datos (LGPD)"
    },
    institution: {
      pt: "Fundação Bradesco",
      en: "Fundação Bradesco",
      es: "Fundação Bradesco"
    },
    category: "cursos",
    status: "finalizado",
    year: "2024",
    logo: "/logo-bradesco.png",
    desc: {
      pt: "Curso focado na legislação brasileira de proteção de dados, segurança de dados pessoais, consentimento e boas práticas pela Escola Virtual.",
      en: "Course focused on Brazilian data protection legislation, personal data security, consent and best practices by Escola Virtual.",
      es: "Curso enfocado en la legislación brasileña de protección de dados, seguridad de datos personales, consentimiento y buenas prácticas por la Escola Virtual."
    },
    fileUrl: "/certificados/234843_lgpd.pdf"
  },
  {
    title: {
      pt: "Lógica de Programação",
      en: "Programming Logic",
      es: "Lógica de Programación"
    },
    institution: {
      pt: "SENAI",
      en: "SENAI",
      es: "SENAI"
    },
    category: "tecnicos",
    status: "finalizado",
    year: "2023",
    logo: "/logo-senai.png",
    desc: {
      pt: "Fundamentos de lógica algorítmica, variáveis, estruturas condicionais e laços de repetição desenvolvidos pela Escola SENAI de Educação Online.",
      en: "Fundamentals of algorithmic logic, variables, conditional structures and repetition loops developed by SENAI School of Online Education.",
      es: "Fundamentos de lógica algorítmica, variables, estructuras condicionales y lazos de repetición desarrollados por la Escuela SENAI de Educación Online."
    },
    fileUrl: "/certificados/234843_logicaProgramacao.pdf"
  },
  {
    title: {
      pt: "Operating Systems Basics",
      en: "Operating Systems Basics",
      es: "Operating Systems Basics"
    },
    institution: {
      pt: "Cisco Networking Academy",
      en: "Cisco Networking Academy",
      es: "Cisco Networking Academy"
    },
    category: "cursos",
    status: "finalizado",
    year: "2023",
    logo: "https://cdn.simpleicons.org/cisco/1BA0D7",
    desc: {
      pt: "Fundamentos de sistemas operacionais, englobando Windows, Linux, arquitetura de sistemas de arquivos, permissões e linha de comando.",
      en: "Fundamentals of operating systems, encompassing Windows, Linux, file systems architecture, permissions and command line.",
      es: "Fundamentos de sistemas operativos, que abarcan Windows, Linux, arquitectura de sistemas de archivos, permisos y línea de comandos."
    },
    fileUrl: "/certificados/234843_operatingSystemsBasics.pdf"
  }
];


