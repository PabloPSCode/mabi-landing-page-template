export const nutreLandingNavItems = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
];

export const nutreLandingHero = {
  title: "NutrePlus",
  subtitle: "Nutrição personalizada para iOS e Android",
  description:
    "Descubra NutrePlus, o aplicativo líder em nutrição personalizada. Com a orientação dos nossos nutricionistas especializados, você pode ter segurança de que sua saúde está em boas mãos.",
  primaryCta: "Começar agora",
};

export const nutreLandingMidHero = {
  title: "Acompanhe sua evolução com suporte humano em tempo real",
  description:
    "Nossos programas de vida saudável oferecem uma abordagem única e adaptada às suas necessidades individuais. Obtenha um plano nutricional personalizado elaborado por nutricionistas especializados, que estarão com você em todas as etapas pelo chat para garantir que você atinja suas metas de saúde.",
  primaryCta: "Quero meu plano",
};

export const nutreLandingBrandLogos = [
  { src: "/brands/nutre-astrom.svg", alt: "Astrom" },
  { src: "/brands/nutre-cicio.svg", alt: "cicio" },
  { src: "/brands/nutre-weavy.svg", alt: "weavy" },
  { src: "/brands/nutre-vrokets.svg", alt: "vRokets" },
  { src: "/brands/nutre-viewio.svg", alt: "viewio" },
  { src: "/brands/nutre-metablu.svg", alt: "Metablu" },
  { src: "/brands/nutre-buildaa.svg", alt: "Buildaa" },
  { src: "/brands/nutre-hapi.svg", alt: "hapi" },
  { src: "/brands/nutre-logosum.svg", alt: "Logo sum" },
  { src: "/brands/nutre-virtuo.svg", alt: "virtuo" },
];

export type NutreShowcaseVisual =
  | "laptop-overlay"
  | "phone-overlay"
  | "dual-phone";

export interface NutreLandingShowcaseSection {
  anchor: string;
  title: string;
  description: string;
  align: "text-left" | "image-left";
  visual: NutreShowcaseVisual;
  mainImage: string;
  mainAlt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  overlayImage?: string;
  overlayAlt?: string;
}

export const nutreLandingShowcaseSections: NutreLandingShowcaseSection[] = [
  {
    anchor: "solucoes",
    title: "Plano nutricional personalizado para cada meta",
    description:
      "Monte protocolos alimentares de acordo com o objetivo de cada aluno e entregue recomendações claras no app da sua marca.",
    align: "text-left",
    visual: "phone-overlay",
    mainImage: "/images/mobile3.png",
    mainAlt: "Painel NutrePlus",
    overlayImage: "",
    overlayAlt: "",
  },
  {
    anchor: "resultados",
    title: "Chat com nutricionistas durante toda a jornada",
    description:
      "Mantenha o acompanhamento ativo com mensagens, ajustes de plano e orientações rápidas para aumentar adesão e consistência.",
    align: "image-left",
    visual: "phone-overlay",
    mainImage: "/images/mobile4.png",
    mainAlt: "Aplicativo NutrePlus em smartphone",
    overlayImage: "",
    overlayAlt: "",
  }
];

export const nutreLandingBottomCta = {
  title: "Comece hoje com o NutrePlus",
  description:
    "Leve nutrição personalizada para seus alunos com planos sob medida, suporte via chat e acompanhamento contínuo dos resultados.",
  primaryCta: "Solicitar demonstração",
};

export const nutreLandingFooterLinks = [
  {
    title: "Plataforma",
    links: [
      { label: "iOS + Android", href: "#" },
      { label: "Integrações", href: "#" },
      { label: "Área do especialista", href: "#" },
      { label: "Bem-estar", href: "#" },
    ],
  },
  {
    title: "Produto",
    links: [
      { label: "Planos", href: "#planos" },
      { label: "Visão geral", href: "#" },
      { label: "Funcionalidades", href: "#solucoes" },
      { label: "Acessibilidade", href: "#" },
    ],
  },
  {
    title: "Especialistas",
    links: [
      { label: "Nutricionistas credenciados", href: "#" },
      { label: "Acompanhamento por chat", href: "#resultados" },
      { label: "Consultas online", href: "#" },
      { label: "Método personalizado", href: "#solucoes" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Central de ajuda", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Tutoriais", href: "#" },
      { label: "Perguntas frequentes", href: "#" },
    ],
  }
];

export const nutreLandingSocialLinks: Array<{
  iconName: "instagram" | "facebook" | "youtube" | "whatsapp";
  href: string;
}> = [
  { iconName: "instagram", href: "#" },
  { iconName: "facebook", href: "#" },
  { iconName: "youtube", href: "#" },
  { iconName: "whatsapp", href: "#" },
];
