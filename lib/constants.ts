

// ----------------------
// Types
// ----------------------
export type HexColor = `#${string}`;

type ProductStatus = "live" | "preview" | "development" | "deployed" | "deprecated";

type SocialLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  whatsapp?: string;
  email?: string;
};

type ProductLink = {
  name: string;
  description: string;
  url: string; // absolute or app-relative
  status: ProductStatus;
  slug?: string; // used in hub routes
  icon?: string; // lucide icon name or path
};

type NavItem = { name: string; href: string; external?: boolean };

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  company: string;
  tagline: string;
  colors: { primary: HexColor; secondary: HexColor; white: HexColor; dark?: HexColor; gray?: HexColor };
  social: SocialLinks;
  products: {
    ameboGist: ProductLink;
    eduCenter: ProductLink;
    planAI: ProductLink;
  };
  navigation: NavItem[];
  footer?: {
    columns: { title: string; links: NavItem[] }[];
    legal: NavItem[];
  };
  seo?: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage?: string;
    twitter?: { handle?: string; site?: string; cardType?: "summary" | "summary_large_image" };
  };
  analytics?: { ga4?: string; metaPixel?: string };
  featureFlags?: {
    enableI18n?: boolean;
    enableDarkMode?: boolean;
    showBetaBadge?: boolean;
  };
};

// ----------------------
// Site Config (Hub)
// ----------------------
export const SITE_CONFIG: SiteConfig = {
  name: "BoldMind Hub",
  description:
    "BoldMind Hub is the central gateway to BoldMind's innovation ecosystem, connecting AmeboGist, EduCenter, and PlanAI — a unified platform driving innovation, empowerment, and digital transformation across Africa.",
  url: "https://boldmind.ng",
  company: "BoldMind Technology Solution Enterprise",
  tagline: "Empowering Innovation Through Technology",

  colors: {
    primary: "#00008B", // Deep Navy Blue (brand primary)
    secondary: "#FFC107", // Bold Yellow (energy)
    white: "#FFFFFF",
  },

  social: {
    facebook: "https://www.facebook.com/BoldMindTech/",
    linkedin: "https://www.linkedin.com/boldmind-technology-solution-enterprise",
    instagram: "https://www.instagram.com/boldmindtech/",
    whatsapp: "https://wa.me/2349138349271",
    email: "info@boldmind.ng",
  },

  products: {
    ameboGist: {
      name: "AmeboGist.ng",
      description:
        "Live fullstack platform delivering authentic Naija Pidgin news, lifestyle gist, and tech stories — powered by a custom dashboard for content automation.",
      url: "https://amebogist.ng",
      status: "live",
      slug: "amebogist",
      icon: "Megaphone",
    },
    eduCenter: {
      name: "EduCenter.com.ng",
      description:
        "Digital-first educational platform with seamless Paystack integration, empowering students and professionals with practical learning tools.",
      url: "https://educenter.com.ng",
      status: "live",
      slug: "educenter",
      icon: "GraduationCap",
    },
    planAI: {
      name: "PlanAI",
      description:
        "A multi-product AI SaaS suite designed to help African businesses automate, scale, and win — from customer support to marketing, analytics, and growth.",
      url: "/planai",
      status: "development",
      slug: "planai",
      icon: "Sparkles",
    },
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "About", href: "/about" },
    { name: "PlanAI", href: "/planai" },
    { name: "Contact", href: "/contact" },
  ],

  footer: {
    columns: [
      {
        title: "Products",
        links: [
          { name: "AmeboGist", href: "https://amebogist.ng", external: true },
          { name: "EduCenter", href: "https://educenter.com.ng", external: true },
          { name: "PlanAI", href: "/planai" },
        ],
      },
      {
        title: "Company",
        links: [
          { name: "About", href: "/about" },
          { name: "Ecosystem", href: "/ecosystem" },
          { name: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Connect",
        links: [
          { name: "Facebook", href: "https://www.facebook.com/BoldMindTech/", external: true },
          { name: "Instagram", href: "https://www.instagram.com/boldmindtech/", external: true },
          { name: "LinkedIn", href: "https://www.linkedin.com/boldmind-technology-solution-enterprise", external: true },
          { name: "WhatsApp", href: "https://wa.me/2349138349271", external: true },
          { name: "Email", href: "mailto:info@boldmind.ng", external: true },
        ],
      },
    ],
    legal: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
    ],
  },

  seo: {
    defaultTitle: "BoldMind Hub — Empowering Innovation Through Technology",
    defaultDescription:
      "The central gateway to BoldMind's innovation ecosystem: AmeboGist, EduCenter, and PlanAI.",
    ogImage: "/og/boldmind-hub.png",
    twitter: { handle: "@BoldMindTech", site: "@BoldMindTech", cardType: "summary_large_image" },
  },

  analytics: { ga4: "G-XXXXXXXXXX", metaPixel: "XXXXXXXXXXXXXXX" },

  featureFlags: {
    enableI18n: true,
    enableDarkMode: true,
    showBetaBadge: true,
  },
};

// ----------------------
// PlanAI — Product Suite
// ----------------------
export type PlanAIProduct = {
  name: string;
  description: string;
  status: ProductStatus;
  slug: string;
  path: string; // internal route under /planai
  beta?: boolean;
};

export const PLANAI_PRODUCTS: readonly PlanAIProduct[] = [
  {
    name: "AI Receptionist",
    description:
      "Multi-tenant, AI-powered lead capture and booking for high-end service providers in Nigeria. Operates as a digital receptionist across WhatsApp/DMs.",
    status: "deployed",
    slug: "ai-receptionist",
    path: "/planai/ai-receptionist",
  },
  {
    name: "Social Media Content Factory",
    description:
      "Automated ads, video content, and captions powered by Pictory AI with integrated multi-channel publishing.",
    status: "development",
    slug: "content-factory",
    path: "/planai/content-factory",
    beta: true,
  },
  {
    name: "Professional Credibility Hubs",
    description:
      "AI-assisted personal branding and one-pager sites for professionals and SMEs.",
    status: "development",
    slug: "credibility-hubs",
    path: "/planai/credibility-hubs",
  },
  {
    name: "AI Business Planning",
    description:
      "Generate dynamic business plans, pitch decks, and market analysis tailored to African startups.",
    status: "development",
    slug: "business-planning",
    path: "/planai/business-planning",
  },
  {
    name: "Financial Forecasting",
    description:
      "AI-driven cashflow modeling, revenue forecasting, and investor-ready projections.",
    status: "development",
    slug: "financial-forecasting",
    path: "/planai/financial-forecasting",
  },
  {
    name: "Investor Readiness Suite",
    description:
      "Automated SAFEs, term sheets, data room scaffolding, and funding workflows.",
    status: "development",
    slug: "investor-readiness",
    path: "/planai/investor-readiness",
  },
  {
    name: "Branding & Design Tools",
    description:
      "AI-powered logo creation, color systems, and marketing visuals.",
    status: "development",
    slug: "branding-tools",
    path: "/planai/branding-tools",
  },
  {
    name: "Digital Storefronts",
    description:
      "Instant e-commerce storefronts powered by BoldMind + Paystack, optimized for SMEs and creators.",
    status: "development",
    slug: "digital-storefronts",
    path: "/planai/digital-storefronts",
  },
  {
    name: "Marketing Automation",
    description:
      "AI-driven segmentation, personalized campaigns, and automated lead nurturing.",
    status: "development",
    slug: "marketing-automation",
    path: "/planai/marketing-automation",
  },
  {
    name: "Analytics Dashboard",
    description:
      "Cross-platform analytics for business performance, customer behavior, and growth opportunities.",
    status: "development",
    slug: "analytics",
    path: "/planai/analytics",
  },
] as const;

// ----------------------
// Convenience exports
// ----------------------
export const SOCIAL_LINKS: SocialLinks = SITE_CONFIG.social;
export const NAV_ITEMS: NavItem[] = SITE_CONFIG.navigation;

// Example: get a PlanAI product by slug
export const getPlanAIProduct = (slug: string) => PLANAI_PRODUCTS.find(p => p.slug === slug);

// ----------------------
// Telemetry per app (Console + Analytics)
// ----------------------
export type TelemetryIDs = { ga4?: string; metaPixel?: string; gscProperty?: string };
export const APP_TELEMETRY: Record<"hub" | "amebogist" | "educenter" | "planai", TelemetryIDs> = {
  hub: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://boldmind.ng" },
  amebogist: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://amebogist.ng" },
  educenter: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://educenter.com.ng" },
  planai: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://boldmind.ng/planai" },
};

// ----------------------
// Repositories map (existing repos)
// ----------------------
export type Repo = { name: string; url?: string; notes?: string };
export const REPOSITORIES: Record<"hub" | "amebogist" | "educenter_frontend" | "educenter_backend" | "planai" | "automation" | "safenaija" | "org_meta", Repo> = {
  hub: { name: "boldmind-hub", notes: "Next.js gateway site" },
  amebogist: { name: "amebo-gist", notes: "Next.js fullstack (API routes + CMS)" },
  educenter_frontend: { name: "educenter-frontend", notes: "React app" },
  educenter_backend: { name: "educenter-backend", notes: "Node/Express + Paystack + MongoDB" },
  planai: { name: "ai-receptionist-platform", notes: "NestJS + Postgres (Render)" },
  automation: { name: "social_automation", notes: "n8n/Zapier helpers, schedulers (NestJS)" },
  safenaija: { name: "safenaija", notes: "Next.js (concept)" },
  org_meta: { name: ".github", notes: "Workflows, issue/PR templates, CODEOWNERS" },
};

// ----------------------
// Social Media Content Factory — provider-agnostic config
// ----------------------
export type SocialVideoProvider = "pictory" | "capcut" | "descript" | "veed" | "runway" | "canva" | "custom";
export type SocialPublishTarget = "instagram" | "facebook" | "youtube" | "tiktok" | "x" | "whatsapp";
export const SOCIAL_CONTENT_FACTORY = {
  providers: ["pictory", "capcut", "descript", "veed", "runway", "canva", "custom"] as const,
  defaultProvider: "pictory" as SocialVideoProvider, // can be switched per-campaign
  publishTargets: ["instagram", "facebook", "youtube", "tiktok", "x", "whatsapp"] as const,
  storage: "gdrive://BoldMind/Content Bank",
  // optional API keys env names to keep code portable across repos
  env: {
    pictoryApiKey: "PICTORY_API_KEY",
    youtubeApiKey: "YOUTUBE_API_KEY",
    facebookAccessToken: "META_GRAPH_TOKEN",
    instagramAccessToken: "INSTAGRAM_TOKEN",
    tiktokAccessToken: "TIKTOK_TOKEN",
  },
};

// ----------------------
// EduCenter remodel hooks (minimal now — expand next step)
// ----------------------
export type EduCenterPlan = { code: string; name: string; priceNGN: number; interval: "one_time" | "monthly" | "term"; features: string[] };
export const EDUCENTER_PLANS: EduCenterPlan[] = [
  { code: "JAMB-TERM", name: "JAMB Prep (Term)", priceNGN: 3000, interval: "term", features: ["Past Questions", "Timed CBT", "Progress Tracking"] },
  { code: "JAMB-PRO", name: "JAMB Pro (Monthly)", priceNGN: 2500, interval: "monthly", features: ["All Subjects", "Exam Drills", "Priority Support"] },
];
export const PAYSTACK = { publicKeyEnv: "NEXT_PUBLIC_PAYSTACK_PK", secretKeyEnv: "PAYSTACK_SK" } as const;

