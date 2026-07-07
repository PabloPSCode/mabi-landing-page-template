// Marketing copy for Juliana Alvarenga — Nutricionista (Alphaville/Barueri · SP).
// Export names are kept from the original template so page.tsx keeps working.

/** WhatsApp deep-link used by every primary CTA (matches the source site). */
export const whatsappCtaHref =
  "https://wa.me/5511982077995?text=" +
  encodeURIComponent(
    "Olá, vim do site da Juliana Alvarenga Nutricionista e gostaria de mais informações para agendar uma consulta.",
  );

export const nutreLandingNavItems = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas de atuação", href: "#bioimpedancia" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export const nutreLandingHero = {
  eyebrow: "Nutricionista • CRN 54483",
  title: "Juliana Alvarenga",
  subtitle: "Nutrição para uma vida plena.",
  description:
    "Conectando corpo, mente e performance para sua saúde e bem-estar. Planos personalizados que se adaptam a cada fase da vida, da gestação e infância à alta performance esportiva.",
  primaryCta: "Agendar consulta",
};

export const nutreLandingMidHero = {
  title: "Método ReConnect: ciência, personalização e acolhimento",
  description:
    "Nutricionista com 18 anos de experiência, especialista em Nutrição Funcional, Integrativa, Intestinal e Esportiva. O Método ReConnect vai além da alimentação: trabalha nutrição, sono, intestino, vitalidade, autoconhecimento e equilíbrio.",
  primaryCta: "Agendar consulta",
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

/** Áreas de atuação — each rendered as an alternating full-bleed tile. */
export const nutreLandingShowcaseSections: NutreLandingShowcaseSection[] = [
  {
    anchor: "bioimpedancia",
    title: "Bioimpedância INBODY em toda consulta",
    description:
      "Mais do que uma balança, a bioimpedância INBODY é uma ferramenta de alta precisão presente em todas as consultas. Ela mede massa magra, gordura e hidratação, garantindo que sua evolução seja real.",
    align: "text-left",
    visual: "phone-overlay",
    mainImage: "/images/mobile4.png",
    mainAlt: "Avaliação de composição corporal com bioimpedância INBODY",
  },
  {
    anchor: "funcional",
    title: "Nutrição Funcional e Integrativa",
    description:
      "Mais do que contar calorias, a nutrição funcional busca a causa raiz dos sintomas. Com ajustes alimentares, suplementação individualizada e estratégias anti-inflamatórias para melhorar energia, saúde intestinal, pele, cabelos e qualidade de vida.",
    align: "image-left",
    visual: "phone-overlay",
    mainImage: "/images/mobile3.png",
    mainAlt: "Plano alimentar funcional e integrativo personalizado",
  },
  {
    anchor: "esportiva",
    title: "Nutrição Esportiva e Alta Performance",
    description:
      "Eleve seu treino com resultados reais. A nutrição esportiva otimiza cada etapa — pré, intra e pós-treino — para melhorar a performance, acelerar a recuperação muscular e aprimorar a composição corporal.",
    align: "text-left",
    visual: "phone-overlay",
    mainImage: "/images/nutre5.jpg",
    mainAlt: "Acompanhamento de nutrição esportiva e alta performance",
  }
];

export const nutreLandingBottomCta = {
  title: "Pronto(a) para começar sua transformação?",
  description:
    "Atendimento presencial em Alphaville, Barueri — com bioimpedância INBODY — e também online por videochamada. Agende sua consulta particular.",
  primaryCta: "Agendar no WhatsApp",
};

export const nutreLandingFooterLinks = [
  {
    title: "Atendimento",
    links: [
      { label: "Consulta avulsa", href: "#bioimpedancia" },
      { label: "Planos de acompanhamento", href: "#planos" },
      { label: "Bioimpedância INBODY", href: "#bioimpedancia" },
      { label: "Agendar consulta", href: whatsappCtaHref },
    ],
  },
  {
    title: "Áreas de atuação",
    links: [
      { label: "Nutrição Funcional", href: "#funcional" },
      { label: "Nutrição Esportiva", href: "#esportiva" },
      { label: "Nutrição Infantil", href: "#fases" },
      { label: "Nutrição da Gestante", href: "#fases" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { label: "Método ReConnect", href: "#inicio" },
      { label: "Juliana Alvarenga", href: "#inicio" },
      { label: "Perguntas frequentes", href: "#planos" },
      { label: "Localização", href: "#contato" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: whatsappCtaHref },
      { label: "Instagram @juAlvarenganutri", href: "https://instagram.com/juAlvarenganutri" },
      { label: "Alphaville — Barueri/SP", href: "#contato" },
      { label: "CRN 54483", href: "#inicio" },
    ],
  },
];

export const nutreLandingSocialLinks: Array<{
  iconName: "instagram" | "facebook" | "youtube" | "whatsapp";
  href: string;
}> = [
  { iconName: "instagram", href: "https://instagram.com/juAlvarenganutri" },
  { iconName: "whatsapp", href: whatsappCtaHref },
];
