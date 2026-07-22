export interface HeroProject {
  title: string;
  subtitle: { pt: string; en: string; es: string; };
  image: string;
  tag: { pt: string; en: string; es: string; };
}

export const heroProjects: HeroProject[] = [
  {
    title: "Bolsa PROUNI 100% Integral",
    subtitle: {
      pt: "Conquista acadêmica por desempenho",
      en: "Academic achievement by performance",
      es: "Logro académico por desempeño"
    },
    image: "/bolsa-prouni.png",
    tag: {
      pt: "Conquista Acadêmica",
      en: "Academic Achievement",
      es: "Logro Académico"
    }
  },
  {
    title: "Mostra de Projetos",
    subtitle: {
      pt: "Apresentação Acadêmica ADS 2026",
      en: "Academic Presentation ADS 2026",
      es: "Presentación Académica ADS 2026"
    },
    image: "/project-worky-presentation.jpg",
    tag: {
      pt: "Exposição & MVP",
      en: "Exhibition & MVP",
      es: "Exposición y MVP"
    }
  },
  {
    title: "Membro da AIESEC",
    subtitle: {
      pt: "Tive o prazer de ser membro da AIESEC no Brasil",
      en: "I had the pleasure of being a member of AIESEC in Brazil",
      es: "Tuve el placer de ser membro de AIESEC en Brasil"
    },
    image: "/project-aiesec.png",
    tag: {
      pt: "Voluntariado & Liderança",
      en: "Volunteering & Leadership",
      es: "Voluntariado y Liderazgo"
    }
  },
  {
    title: "Cursor Meetup Sorocaba 2026",
    subtitle: {
      pt: "Presença no evento da comunidade de IA em Sorocaba",
      en: "Attendance at the AI community event in Sorocaba",
      es: "Presencia en el evento de la comunidad de IA en Sorocaba"
    },
    image: "/cursor-meetup-sp-2026.jpg",
    tag: {
      pt: "Comunidade & Tech",
      en: "Community & Tech",
      es: "Comunidad y Tech"
    }
  }
];
