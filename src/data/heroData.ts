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
  }
];
