export const SITE_CONFIG = {
  name: "BoldMind Hub",
  description: "Central gateway to the BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI",
  url: "https://boldmind-hub.vercel.app",
  company: "BoldMind Technology Solution Enterprise",
  tagline: "Empowering Innovation Through Technology",

  // Brand Colors
  colors: {
    primary: "#0A2342",
    secondary: "#FFC107",
    white: "#FFFFFF",
  },

  // Social Links
  social: {
    twitter: "https://twitter.com/boldmindtech",
    linkedin: "https://linkedin.com/company/boldmind-tech",
    email: "hello@boldmind.tech",
    whatsapp: "https://wa.me/2348123456789",
  },

  // Ecosystem Products
  products: {
    ameboGist: {
      name: "AmeboGist.ng",
      description: "Fully deployed fullstack blog with custom dashboard",
      url: "https://amebogist.ng",
      status: "live",
    },
    eduCenter: {
      name: "EduCenter.com.ng",
      description: "Educational platform with Paystack integration and 15+ paying subscribers",
      url: "https://educenter.com.ng",
      status: "live",
    },
    planAI: {
      name: "PlanAI",
      description: "Multi-product AI SaaS platform for business automation",
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
} as const

export const PLANAI_PRODUCTS = [
  {
    name: "AI Receptionist",
    description: "Deployed at Sleepless, case study-ready automated customer service",
    status: "deployed",
  },
  {
    name: "Social Media Content Factory",
    description: "Automated ad and content creation with Pictory AI integration",
    status: "development",
  },
  {
    name: "Professional Credibility Hubs",
    description: "Build and showcase professional expertise online",
    status: "development",
  },
  {
    name: "AI Business Planning",
    description: "Comprehensive business plans and pitch deck generation",
    status: "development",
  },
  {
    name: "Financial Forecasting",
    description: "Advanced financial modeling and forecasting tools",
    status: "development",
  },
  {
    name: "Investor Readiness Suite",
    description: "SAFEs, term sheets, and investor documentation",
    status: "development",
  },
  {
    name: "Branding & Design Tools",
    description: "AI-powered branding and design automation",
    status: "development",
  },
  {
    name: "Digital Storefronts",
    description: "E-commerce solutions with Paystack integration",
    status: "development",
  },
  {
    name: "Marketing Automation",
    description: "AI-driven marketing and sales automation tools",
    status: "development",
  },
  {
    name: "Analytics Dashboard",
    description: "Performance insights and business intelligence",
    status: "development",
  },
] as const
