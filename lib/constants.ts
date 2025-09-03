export const SITE_CONFIG = {
  name: "BoldMind Hub",
  description:
    "BoldMind Hub is the central gateway to BoldMind's innovation ecosystem, connecting AmeboGist, EduCenter, and PlanAI — a unified platform driving innovation, empowerment, and digital transformation across Africa.",
  url: "https://boldmind.ng",
  company: "BoldMind Technology Solution Enterprise",
  tagline: "Empowering Innovation Through Technology",

  // Brand Colors
  colors: {
    primary: "#00008B", 
    secondary: "#FFC107", 
    white: "#FFFFFF"
  },

  // Social Links
  social: {
    facebook: "https://www.facebook.com/BoldMindTech/",
    linkedin:
      "https://www.linkedin.com/boldmind-technology-solution-enterprise",
    instagram: "https://www.instagram.com/boldmindtech/",
    whatsapp: "https://wa.me/2349138349271",
    email: "info@boldmind.ng",
  },

  // Ecosystem Products
  products: {
    ameboGist: {
      name: "AmeboGist.ng",
      description:
        "Live fullstack platform delivering authentic Naija Pidgin news, lifestyle gist, and tech stories — powered by a custom dashboard for content automation.",
      url: "https://amebogist.ng",
      status: "live",
    },
    eduCenter: {
      name: "EduCenter.com.ng",
      description:
        "Digital-first educational platform with seamless Paystack integration, empowering students and professionals with practical learning tools.",
      url: "https://educenter.com.ng",
      status: "live",
    },
    planAI: {
      name: "PlanAI",
      description:
        "A multi-product AI SaaS suite designed to help African businesses automate, scale, and win — from customer support to marketing, analytics, and growth.",
      url: "/planai",
      status: "development",
    },
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "About", href: "/about" },
    { name: "PlanAI", href: "/planai" },
    { name: "Contact", href: "/contact" },
  ],
} as const;

export const PLANAI_PRODUCTS = [
  {
    name: "AI Receptionist",
    description:
      "To create a multi-tenant, AI-powered Software-as-a-Service (SaaS) platform that provides automated lead capture and booking for high-end service providers, initially targeting the Nigerian market. The platform will operate as a `digital receptionist` ensuring clients never miss an inquiry.",
    status: "deployed",
  },
  {
    name: "Social Media Content Factory",
    description:
      "Automated ads, video content, and captions powered by Pictory AI + integrated multi-channel publishing tools.",
    status: "development",
  },
  {
    name: "Professional Credibility Hubs",
    description:
      "AI-powered personal branding and reputation-building tools for professionals and businesses.",
    status: "development",
  },
  {
    name: "AI Business Planning",
    description:
      "Generate dynamic business plans, pitch decks, and market analysis reports tailored to African startups.",
    status: "development",
  },
  {
    name: "Financial Forecasting",
    description:
      "AI-driven cashflow modeling, revenue forecasting, and investor-ready projections.",
    status: "development",
  },
  {
    name: "Investor Readiness Suite",
    description:
      "Templates and automated workflows for SAFEs, term sheets, and funding strategy documents.",
    status: "development",
  },
  {
    name: "Branding & Design Tools",
    description:
      "Create stunning logos, color palettes, and marketing visuals with AI-powered design automation.",
    status: "development",
  },
  {
    name: "Digital Storefronts",
    description:
      "Instant e-commerce storefronts powered by BoldMind + Paystack, optimized for SMEs and creators.",
    status: "development",
  },
  {
    name: "Marketing Automation",
    description:
      "AI-driven customer segmentation, personalized campaigns, and automated lead nurturing.",
    status: "development",
  },
  {
    name: "Analytics Dashboard",
    description:
      "Cross-platform analytics to measure business performance, customer behavior, and growth opportunities.",
    status: "development",
  },
] as const;
