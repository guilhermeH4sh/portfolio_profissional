import React from 'react';
import { GraduationCap, Database, Briefcase, Bot, Building } from 'lucide-react';

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
      pt: "Plataforma corporativa inteligente projetada para otimizar fluxos de trabalho e integrar soluções baseadas em inteligência artificial para automatizar tarefas cotidianas.",
      en: "Intelligent corporate platform designed to optimize workflows and integrate artificial intelligence solutions to automate daily tasks.",
      es: "Plataforma corporativa inteligente diseñada para optimizar los flujos de trabalho e integrar soluciones de inteligencia artificial para automatizar las tareas cotidianas."
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
    ]
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
      pt: "Chatbot acadêmico inteligente que responde dúvidas de estudantes utilizando exclusivamente materiais oficiais da instituição, como planos de ensino, ementas e regulamentos.",
      en: "Intelligent academic chatbot that answers student questions using exclusively official institution materials, such as syllabus, course outlines and regulations.",
      es: "Chatbot académico inteligente que responde a las dudas de los estudiantes utilizando exclusivamente materiales oficiales de la institución, como planes de estudio, programas y reglamentos."
    },
    icon: <GraduationCap className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #18181b, #09090b)",
    image: "/project-linkedu-1.png",
    images: ["/project-linkedu-1.png", "/project-linkedu-2.png", "/project-linkedu-3.png", "/project-linkedu-4.png"],
    detailedDesc: {
      pt: "O LinkEdu é um chatbot acadêmico inteligente projetado para responder a dúvidas de estudantes utilizando exclusivamente materiais oficiais da instituição (como planos de ensino, ementas e regulamentos).\n\nBaseado na arquitetura RAG (Retrieval-Augmented Generation), o sistema garante:\n✅ Respostas precisas e altamente confiáveis\n✅ Citação exata do arquivo e da página de origem\n✅ Organização inteligente por curso, semestre e disciplina\n✅ Conformidade total com a LGPD\n\nO grande objetivo do projeto é oferecer total autonomia de consulta ao aluno, enquanto reduz drasticamente a sobrecarga de professores e da coordenação acadêmica.",
      en: "LinkEdu is an intelligent academic chatbot designed to answer student questions using exclusively official institution materials (such as syllabus, course outlines, and regulations).\n\nBased on RAG (Retrieval-Augmented Generation) architecture, the system guarantees:\n✅ Precise and highly reliable answers\n✅ Exact citation of the source file and page\n✅ Smart organization by course, semester, and subject\n✅ Full compliance with LGPD regulations\n\nThe project's main goal is to offer students complete query autonomy, while drastically reducing the workload of professors and academic coordination.",
      es: "LinkEdu es un chatbot académico inteligente diseñado para responder a las dudas de los estudiantes utilizando exclusivamente materiales oficiales de la institución (como planes de estudio, programas y reglamentos).\n\nBasado en la arquitectura RAG (Retrieval-Augmented Generation), el sistema garantiza:\n✅ Respuestas precisas y altamente confiables\n✅ Citación exacta del archivo y página de origen\n✅ Organización inteligente por carrera, semestre y asignatura\n✅ Cumplimiento total con la LGPD\n\nEl gran objetivo del proyecto es ofrecer total autonomía de consulta al estudiante, al mismo tiempo que reduce drásticamente la sobrecarga de los profesores y la de coordinación académica."
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
      pt: "Sistema de catálogo de softwares corporativos que centraliza informações sobre licenças, descrições e validades dos sistemas utilizados pela empresa.",
      en: "Enterprise software catalog system that centralizes information about licenses, descriptions and validity of systems used by the company.",
      es: "Sistema de catálogo de software corporativo que centraliza información sobre licencias, descripciones y validez de los sistemas utilizados por la empresa."
    },
    githubUrl: "https://github.com/guilhermeH4sh/K_software",
    demoUrl: "https://guilhermeh4sh.github.io/K_software/",
    icon: <Database className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #09090b, #1f1f23)",
    image: "/project-kdatabase-cover.png",
    images: [
      "/project-kdatabase-cover.png",
      "/project-kdatabase-light.png",
      "/project-kdatabase-menu.png"
    ],
    detailedDesc: {
      pt: "Sistema de catálogo de softwares corporativos centralizado, focado na gestão visual de licenças, validades e descrições dos sistemas corporativos.\n\nO projeto foi construído utilizando tecnologias web fundamentais como HTML5 semântico e CSS3 estruturado com variáveis customizadas para gerenciar os temas. Toda a lógica da interface, filtragem e manipulação de dados é controlada de forma assíncrona por meio de JavaScript moderno (ES6+).\n\nPara proporcionar uma experiência fluida ao usuário, o site conta com animações integradas ao scroll da página e transições de entrada por meio do GSAP (GreenSock) e seu plugin ScrollTrigger. O sistema também possui um motor de busca em tempo real que lê o nome, descrição e etiquetas de cada item, além de filtros dinâmicos que identificam o vencimento da licença e ordenam os resultados. A escolha de tema claro ou escuro é feita dinamicamente e persistida de forma simples através do LocalStorage do navegador, enquanto a responsividade do layout é garantida pelo uso combinado de Flexbox e CSS Grid.",
      en: "Centralized corporate software catalog system focused on visual management of licenses, expiration dates, and descriptions of corporate systems.\n\nThe application was built using fundamental web technologies, including semantic HTML5 and modular CSS3 with custom properties for theme management. All interface logic, asynchronous data operations, and interactive behaviors are written in modern JavaScript (ES6+).\n\nTo create a fluid user experience, the website features high-performance scroll-triggered animations and entry transitions powered by GSAP (GreenSock) and ScrollTrigger. It includes a real-time search engine that parses names, descriptions, and tags, alongside dynamic filters that calculate license status and sort the results. The light/dark theme preference is toggled dynamically and persisted using browser LocalStorage, while responsiveness across devices is handled natively through CSS Grid and Flexbox.",
      es: "Sistema centralizado de catálogo de software corporativo, enfocado en la gestión visual de licencias, fechas de vencimiento y descripciones de los sistemas de la empresa.\n\nLa aplicación fue desarrollada utilizando tecnologías web esenciales como HTML5 semántico y CSS3 estructurado con variables personalizadas para la gestión de temas. Toda la lógica de la interfaz, el filtrado y el manejo asíncrono de datos están controlados mediante JavaScript moderno (ES6+).\n\nPara ofrecer una experiencia de usuario fluida, el sitio cuenta con animaciones e interacciones de desplazamiento de alto rendimiento integradas con GSAP (GreenSock) y ScrollTrigger. Dispone de un buscador en tiempo real que analiza nombres, descripciones y etiquetas, junto con filtros dinámicos que calculan el estado de validez de cada licencia. La selección de tema claro u oscuro se gestiona de forma dinámica y se guarda directamente a través del LocalStorage del navegador, mientras que la adaptabilidad del diseño está garantizada mediante el uso combinado de Flexbox y CSS Grid."
    }
  },
  {
    title: {
      pt: "Batman Beyond",
      en: "Batman Beyond",
      es: "Batman Beyond"
    },
    category: "frontend",
    tech: ["React", "Three.js", "Vite", "Groq API", "CSS3"],
    desc: {
      pt: "Website imersivo sobre o universo de Batman Beyond, com galeria de personagens, linha do tempo interativa e um chatbot inteligente integrado ao Batcomputador de Neo-Gotham via API do Groq.",
      en: "Immersive website about the Batman Beyond universe, featuring a character gallery, interactive timeline, and an intelligent chatbot integrated with Neo-Gotham's Batcomputer via the Groq API.",
      es: "Sitio web inmersivo sobre el universo de Batman Beyond, con galería de personajes, línea de tiempo interactiva y un chatbot inteligente integrado al Batcomputador de Neo-Gotham a través de la API de Groq."
    },
    githubUrl: "https://github.com/guilhermeH4sh/batman-beyond",
    demoUrl: "https://batman-beyond.vercel.app",
    icon: <Bot className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #e11d48, #000000)",
    image: "/project-batmanbeyond-cover.png",
    images: [
      "/project-batmanbeyond-cover.png",
      "/project-batmanbeyond-chatbot.png",
      "/project-batmanbeyond-characters.png"
    ],
    detailedDesc: {
      pt: "Website interativo dedicado ao universo de Batman Beyond, contendo uma galeria de personagens, linha do tempo interativa e um chatbot integrado.\n\nNo terminal de comandos, o assistente virtual simula o Batcomputador de Neo-Gotham no ano de 2039. A integração utiliza a API do Groq rodando o modelo LLaMA 8B, configurado com instruções específicas para manter a imersão no tema de ficção científica da série.\n\nA interface possui efeitos visuais em 3D implementados com WebGL e Three.js, incluindo pilares de luz que reagem ao mouse por meio de shaders customizados. A exibição dos personagens é feita por um componente de rolagem contínua acelerada por hardware com comportamento inteligente de pausa ao passar o cursor, enquanto o front-end foi estruturado de forma moderna com React e Vite.",
      en: "An interactive website dedicated to the Batman Beyond universe, featuring a character gallery, an interactive timeline, and an integrated chatbot.\n\nThe command-line terminal simulates Neo-Gotham's Batcomputer in the year 2039. The integration connects to the Groq API running the LLaMA 8B model, configured with strict system instructions to maintain full immersion within the show's sci-fi theme.\n\nThe interface includes WebGL and Three.js 3D visual effects, such as custom-shaded light pillars reacting dynamically to cursor movements. Characters are displayed through a hardware-accelerated infinite marquee that pauses on hover, and the front-end architecture is built using React and Vite.",
      es: "Un sitio web interactivo dedicado al universo de Batman Beyond, que presenta una galería de personajes, una línea de tiempo interactiva y un chatbot integrado.\n\nLa terminal de comandos simula el Batcomputador de Neo-Gotham en el año de 2039. La integración conecta con la API de Groq ejecutando el modelo LLaMA 8B, configurado con instrucciones específicas del sistema para mantener la inmersión en la temática de ciencia ficción de la serie.\n\nLa interfaz incluye efectos visuales en 3D con WebGL y Tres.js, como columnas de luz controladas por shaders que reaccionan al cursor. La galería de personajes utiliza un carrusel continuo acelerado por hardware con pausa al pasar el mouse, y la arquitectura front-end está construida con React y Vite."
    }
  },
  {
    title: {
      pt: "Genebra Arquitetura",
      en: "Genebra Architecture",
      es: "Genebra Arquitectura"
    },
    category: "frontend",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "CSS3"],
    desc: {
      pt: "Landing page institucional premium para um escritório de arquitetura e urbanismo de alto padrão, com design minimalista, animações fluidas e seções interativas.",
      en: "Premium institutional landing page for a high-end architecture and urban planning firm, featuring minimalist design, fluid animations, and interactive sections.",
      es: "Landing page institucional premium para un estudio de arquitectura y urbanismo de alta gama, con diseño minimalista, animaciones fluidas y secciones interactivas."
    },
    demoUrl: "https://genebra-arquitetura.vercel.app",
    githubUrl: "https://github.com/guilhermeH4sh/genebra_A-U",
    icon: <Building className="w-12 h-12 text-white" />,
    gradient: "linear-gradient(135deg, #1c1917, #0c0a09)",
    image: "/project-genebra-cover.png",
    objectFit: "contain",
    images: [
      "/project-genebra-cover.png",
      "/project-genebra-layout.png",
      "/project-genebra-recognition.png",
      "/project-genebra-methodology.png",
      "/project-genebra-contact.png",
      "/project-genebra-footer.png"
    ],
    detailedDesc: {
      pt: "Landing page institucional premium desenvolvida para o escritório de arquitetura e urbanismo de alto padrão Genebra. O design foca no minimalismo e na sofisticação para traduzir a identidade visual do escritório.\n\nA interface utiliza um tema escuro com uma paleta de cores refinada combinando tons escuros profundos e detalhes em bronze e cobre, acompanhada de uma tipografia elegante com as fontes Playfair Display e Montserrat. A navegação pelas seções de projetos, reconhecimentos da marca, metodologia e contato ocorre de forma fluida.\n\nO projeto apresenta uma seção dinâmica explicativa da metodologia do escritório, mostrando passo a passo cada etapa do trabalho de forma interativa. O desenvolvimento foi feito com React, Vite e Tailwind CSS, aplicando práticas modernas de desenvolvimento responsivo e otimização de carregamento.",
      en: "A premium institutional landing page developed for the high-end architecture and urban planning office Genebra. The design focuses on minimalism and sophistication to convey the studio's visual identity.\n\nThe interface features a dark theme with a refined color palette of deep blacks and bronze or copper details, supported by elegant typography using Playfair Display and Montserrat fonts. Navigation through projects, recognition, methodology, and contact flows naturally.\n\nThe page includes a dynamic methodology section that interactively guides the user through each stage of the project step by step. It was built using React, Vite, and Tailwind CSS, implementing modern practices for responsive design and performance optimization.",
      es: "Una landing page institucional premium desarrollada para el estudio de arquitectura y urbanismo de alta gama Genebra. El diseño se centra en el minimalismo y la sofisticación para transmitir la identidad visual de la oficina.\n\nLa interfaz utiliza un tema oscuro con una paleta de colores refinada que combina negros profundos y acentos en bronce y cobre, junto con tipografías elegantes como Playfair Display y Montserrat. La navegación por las secciones de proyectos, premios, metodología y contacto fluye de forma natural.\n\nLa página incluye una sección interactiva para explicar la metodología de trabajo del estudio paso a paso. El desarrollo se realizó con React, Vite y Tailwind CSS, aplicando prácticas modernas de diseño responsivo y optimización de rendimiento."
    }
  }
];

export const experiences: Experience[] = [
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
      pt: "Atuação focada em assegurar a máxima qualidade de software através do planejamento e execução de testes manuais e automatizados. Responsável por identificar falhas estruturais, criar cenários complexos de validação, documentar casos de teste (test cases) e colaborar ativamente com o time de desenvolvimento para garantir entregas eficientes, mitigar riscos e otimizar a experiência final do usuário.",
      en: "Role focused on ensuring maximum software quality through the planning and execution of manual and automated tests. Responsible for identifying structural flaws, creating complex validation scenarios, documenting test cases, and actively collaborating with the development team to ensure efficient deliveries, mitigate risks, and optimize the final user experience.",
      es: "Actuación enfocada en asegurar la máxima calidad del software mediante la planificación y ejecución de pruebas manuales y automatizadas. Responsable de identificar fallas estructurales, crear escenarios complejos de validación, documentar casos de prueba (test cases) y colaborar activamente con el equipo de desarrollo para garantizar entregas eficientes, mitigar riesgos y optimizar la experiencia final del usuario."
    },
    tags: {
      pt: ["QA Testing", "Automação", "Quality Assurance"],
      en: ["QA Testing", "Automation", "Quality Assurance"],
      es: ["QA Testing", "Automatización", "Quality Assurance"]
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
      pt: "mar de 2025 — O momento",
      en: "Mar 2025 — Present",
      es: "mar de 2025 — Presente"
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


