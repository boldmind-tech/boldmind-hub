// master-config.ts — BoldMind Master Config v1.1 (Single Source of Truth)

// ----------------------
// Types
// ----------------------
export type HexColor = `#${string}`;
type ProductStatus = "live" | "preview" | "development" | "deployed" | "deprecated";
type SocialLinks = { facebook?: string; instagram?: string; linkedin?: string; twitter?: string; whatsapp?: string; email?: string; };
type NavItem = { name: string; href: string; external?: boolean };
type FlywheelStage = "awareness" | "education" | "enablement";

type ProductLink = {
    name: string;
    description: string;
    url: string; // absolute or app-relative
    status: ProductStatus;
    slug?: string; // used in hub routes
    icon?: string; // lucide icon name or path
};

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    company: string;
    tagline: string;
    colors: { primary: HexColor; secondary: HexColor; white: HexColor; dark?: HexColor; gray?: HexColor };
    social: SocialLinks;
    products: { ameboGist: ProductLink; eduCenter: ProductLink; planAI: ProductLink };
    navigation: NavItem[];
    footer?: { columns: { title: string; links: NavItem[] }[]; legal: NavItem[] };
    seo?: {
        defaultTitle: string;
        defaultDescription: string;
        ogImage?: string;
        twitter?: { handle?: string; site?: string; cardType?: "summary" | "summary_large_image" };
    };
    analytics?: { ga4?: string; metaPixel?: string };
    featureFlags?: { enableI18n?: boolean; enableDarkMode?: boolean; showBetaBadge?: boolean };
};

// Cross-ecosystem
export type TelemetryIDs = { ga4?: string; metaPixel?: string; gscProperty?: string };
export type Repo = { name: string; url?: string; notes?: string };
export type SocialVideoProvider = "pictory" | "capcut" | "descript" | "veed" | "runway" | "canva" | "custom";
export type SocialPublishTarget = "instagram" | "facebook" | "youtube" | "tiktok" | "x" | "whatsapp";
export type PlanAIProduct = { name: string; description: string; status: ProductStatus; slug: string; path: string; beta?: boolean };

export type KPI = {
    code: string;            // e.g., AG-REACH
    label: string;           // e.g., AmeboGist Monthly Reach
    stage: FlywheelStage;    // awareness | education | enablement
    unit: "count" | "ngn" | "ratio" | "percent";
    targetMonthly?: number;  // target for month (rolling)
    owner: "marketing" | "product" | "growth" | "founder";
};

export type Environment = "development" | "staging" | "production";

export type InfraConfig = {
    hosting: {
        boldmind: string;         // e.g., "Vercel + Cloudflare DNS"
        ameboGist: string;        // "Vercel + DomainKing + Cloudflare"
        eduCenter: string;        // "Netlify (frontend) + Render (backend) + Whogohost DNS"
    };
    email: { boldmind: string; amebogist: string; educenter: string };
    integrations: { payments: string; automation: string[]; analytics: string[] };
    domains: {
        root: "boldmind.ng";
        amebogist: "amebogist.ng";
        educenter: "educenter.com.ng";
    };
    uptime: { hub: string; amebogist: string; educenter: string; planai: string }; // health endpoints
};

export type Governance = {
    values: string[];
    principles: string[];
    owners: {
        brand: string;
        growth: string;
        engineering: string;
        partnerships: string;
    };
    partnerships: { affiliates: { name: string; note?: string; code?: string; url?: string }[] };
};

export type ContentTaxonomy = {
    locales: string[]; // e.g., ["en-NG", "pcm-NG"]
    categories: string[]; // for hub blog/updates
    tagsPreset: string[]; // reusable tags
    og: { basePath: string; defaultOg: string };
};

export type Funnel = {
    name: string;
    from: FlywheelStage;
    to: FlywheelStage;
    utmSource: string;  // e.g., "amebogist"
    utmMedium: string;  // e.g., "organic" | "social" | "ads"
    utmCampaign: string;
    successEvent: string; // e.g., "EDU_SIGNUP", "PLANAI_TRIAL"
};

export type SecurityHeaders = {
    csp: string;
    frameOptions: "DENY" | "SAMEORIGIN";
    referrerPolicy: string;
    permissionsPolicy: string;
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
        primary: "#00008B",
        secondary: "#FFC107",
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
        defaultDescription: "The central gateway to BoldMind's innovation ecosystem: AmeboGist, EduCenter, and PlanAI.",
        ogImage: "/og/boldmind-hub.png",
        twitter: { handle: "@BoldMindTech", site: "@BoldMindTech", cardType: "summary_large_image" },
    },
    analytics: { ga4: "G-XXXXXXXXXX", metaPixel: "XXXXXXXXXXXXXXX" },
    featureFlags: { enableI18n: true, enableDarkMode: true, showBetaBadge: true },
};

// ----------------------
// Triple Flywheel + Governance
// ----------------------
export const FLYWHEEL = {
    narrative:
        "Awareness → Education → Enablement: AmeboGist grows audience, EduCenter converts to skills, PlanAI equips with automation to launch and scale.",
    stages: {
        awareness: { product: "AmeboGist", url: SITE_CONFIG.products.ameboGist.url },
        education: { product: "EduCenter", url: SITE_CONFIG.products.eduCenter.url },
        enablement: { product: "PlanAI", url: SITE_CONFIG.products.planAI.url },
    },
} as const;

export const GOVERNANCE: Governance = {
    values: ["Authenticity", "Innovation", "Empowerment", "Excellence", "Legacy"],
    principles: [
        "AI-first: PlanAI anchors innovation.",
        "Data-driven: every initiative mapped to measurable KPIs.",
        "Authentic storytelling: founder-led narrative with cultural relevance.",
        "Partnerships: affiliates + strategic collaborations.",
    ],
    owners: {
        brand: "founder",
        growth: "growth",
        engineering: "engineering",
        partnerships: "business",
    },
    partnerships: {
        affiliates: [
            { name: "Pictory AI", note: "Primary video creation partner", code: "BOLDMIND20" },
            { name: "Paystack", note: "Payments for EduCenter & Storefronts" },
        ],
    },
};

// ----------------------
// KPIs (targets are examples; adjust per quarter)
// ----------------------
export const KPIS: KPI[] = [
    { code: "AG-REACH", label: "AmeboGist Monthly Reach", stage: "awareness", unit: "count", targetMonthly: 1_000_000, owner: "marketing" },
    { code: "AG-CLICK", label: "Clickthrough to EduCenter", stage: "awareness", unit: "ratio", targetMonthly: 0.05, owner: "growth" },
    { code: "EDU-SIGN", label: "EduCenter Signups", stage: "education", unit: "count", targetMonthly: 10_000, owner: "product" },
    { code: "EDU-PAID", label: "Edu Paid Conversions", stage: "education", unit: "count", targetMonthly: 2_000, owner: "growth" },
    { code: "PAI-TRIAL", label: "PlanAI Trials", stage: "enablement", unit: "count", targetMonthly: 500, owner: "product" },
    { code: "PAI-MRR", label: "PlanAI MRR (NGN)", stage: "enablement", unit: "ngn", targetMonthly: 10_000_000, owner: "founder" },
];

// ----------------------
// Funnels & UTM defaults
// ----------------------
export const FUNNELS: Funnel[] = [
    { name: "AG→EDU", from: "awareness", to: "education", utmSource: "amebogist", utmMedium: "organic", utmCampaign: "ag_to_edu", successEvent: "EDU_SIGNUP" },
    { name: "EDU→PAI", from: "education", to: "enablement", utmSource: "educenter", utmMedium: "email", utmCampaign: "edu_to_pai", successEvent: "PLANAI_TRIAL" },
];

export const buildTrackedUrl = (base: string, source: string, medium: string, campaign: string, extra?: Record<string, string>) => {
    const url = new URL(base);
    url.searchParams.set("utm_source", source);
    url.searchParams.set("utm_medium", medium);
    url.searchParams.set("utm_campaign", campaign);
    Object.entries(extra ?? {}).forEach(([k, v]) => url.searchParams.set(k, v));
    return url.toString();
};

// ----------------------
// PlanAI — Product Suite
// ----------------------
export const PLANAI_PRODUCTS: readonly PlanAIProduct[] = [
    { name: "AI Receptionist", description: "Multi-tenant, AI-powered lead capture and booking for high-end service providers in Nigeria. Operates as a digital receptionist across WhatsApp/DMs.", status: "deployed", slug: "ai-receptionist", path: "/planai/ai-receptionist" },
    { name: "Social Media Content Factory", description: "Automated ads, video content, and captions powered by Pictory AI with integrated multi-channel publishing.", status: "development", slug: "content-factory", path: "/planai/content-factory", beta: true },
    { name: "Professional Credibility Hubs", description: "AI-assisted personal branding and one-pager sites for professionals and SMEs.", status: "development", slug: "credibility-hubs", path: "/planai/credibility-hubs" },
    { name: "AI Business Planning", description: "Generate dynamic business plans, pitch decks, and market analysis tailored to African startups.", status: "development", slug: "business-planning", path: "/planai/business-planning" },
    { name: "Financial Forecasting", description: "AI-driven cashflow modeling, revenue forecasting, and investor-ready projections.", status: "development", slug: "financial-forecasting", path: "/planai/financial-forecasting" },
    { name: "Investor Readiness Suite", description: "Automated SAFEs, term sheets, data room scaffolding, and funding workflows.", status: "development", slug: "investor-readiness", path: "/planai/investor-readiness" },
    { name: "Branding & Design Tools", description: "AI-powered logo creation, color systems, and marketing visuals.", status: "development", slug: "branding-tools", path: "/planai/branding-tools" },
    { name: "Digital Storefronts", description: "Instant e-commerce storefronts powered by BoldMind + Paystack, optimized for SMEs and creators.", status: "development", slug: "digital-storefronts", path: "/planai/digital-storefronts" },
    { name: "Marketing Automation", description: "AI-driven segmentation, personalized campaigns, and automated lead nurturing.", status: "development", slug: "marketing-automation", path: "/planai/marketing-automation" },
    { name: "Analytics Dashboard", description: "Cross-platform analytics for business performance, customer behavior, and growth opportunities.", status: "development", slug: "analytics", path: "/planai/analytics" },
] as const;

export const getPlanAIProduct = (slug: string) => PLANAI_PRODUCTS.find(p => p.slug === slug);

// ----------------------
// Telemetry per app (Console + Analytics)
// ----------------------
export const APP_TELEMETRY: Record<"hub" | "amebogist" | "educenter" | "planai", TelemetryIDs> = {
    hub: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://boldmind.ng" },
    amebogist: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://amebogist.ng" },
    educenter: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://educenter.com.ng" },
    planai: { ga4: "G-xxxxxxxxxx", metaPixel: "xxxxxxxxxxxxx", gscProperty: "https://boldmind.ng/planai" },
};

// ----------------------
// Repositories map (existing repos)
// ----------------------
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
// Infra + Security + Content
// ----------------------
export const INFRA: InfraConfig = {
    hosting: {
        boldmind: "Vercel + Cloudflare DNS",
        ameboGist: "Vercel + DomainKing + Cloudflare",
        eduCenter: "Netlify (frontend) + Render (backend) + Whogohost DNS",
    },
    email: { boldmind: "Google Workspace", amebogist: "Zoho", educenter: "TBD" },
    integrations: { payments: "Paystack", automation: ["n8n", "Zapier"], analytics: ["GA4", "GSC"] },
    domains: { root: "boldmind.ng", amebogist: "amebogist.ng", educenter: "educenter.com.ng" },
    uptime: {
        hub: "https://boldmind.ng/api/health",
        amebogist: "https://amebogist.ng/api/health",
        educenter: "https://educenter.com.ng/api/health",
        planai: "https://boldmind.ng/planai/health",
    },
};

export const SECURITY: SecurityHeaders = {
    csp:
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; " +
        "img-src 'self' data: https://*.fbcdn.net https://*.google-analytics.com https://*.gstatic.com; " +
        "style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com;",
    frameOptions: "SAMEORIGIN",
    referrerPolicy: "strict-origin-when-cross-origin",
    permissionsPolicy: "geolocation=(), microphone=(), camera=()",
};

export const CONTENT_TAXONOMY: ContentTaxonomy = {
    locales: ["en-NG", "pcm-NG"],
    categories: ["Announcements", "Product Updates", "Case Studies", "Guides", "Press"],
    tagsPreset: ["AI", "Automation", "Education", "Entrepreneurship", "Nigeria", "Startups"],
    og: { basePath: "/og", defaultOg: "/og/boldmind-hub.png" },
};

// ----------------------
// Social Media Content Factory — provider-agnostic config
// ----------------------
export const SOCIAL_CONTENT_FACTORY = {
    providers: ["pictory", "capcut", "descript", "veed", "runway", "canva", "custom"] as const,
    defaultProvider: "pictory" as SocialVideoProvider,
    publishTargets: ["instagram", "facebook", "youtube", "tiktok", "x", "whatsapp"] as const,
    storage: "gdrive://BoldMind/Content Bank",
    env: {
        pictoryApiKey: "PICTORY_API_KEY",
        youtubeApiKey: "YOUTUBE_API_KEY",
        facebookAccessToken: "META_GRAPH_TOKEN",
        instagramAccessToken: "INSTAGRAM_TOKEN",
        tiktokAccessToken: "TIKTOK_TOKEN",
    },
};

// ----------------------
// EduCenter — plans & payments
// ----------------------
export type EduCenterPlan = { code: string; name: string; priceNGN: number; interval: "one_time" | "monthly" | "term"; features: string[] };
export const EDUCENTER_PLANS: EduCenterPlan[] = [
    { code: "JAMB-TERM", name: "JAMB Prep (Term)", priceNGN: 3000, interval: "term", features: ["Past Questions", "Timed CBT", "Progress Tracking"] },
    { code: "JAMB-PRO", name: "JAMB Pro (Monthly)", priceNGN: 2500, interval: "monthly", features: ["All Subjects", "Exam Drills", "Priority Support"] },
];
export const PAYSTACK = { publicKeyEnv: "NEXT_PUBLIC_PAYSTACK_PK", secretKeyEnv: "PAYSTACK_SK" } as const;

// ----------------------
// Environments (build/deploy variables)
// ----------------------
export const ENVIRONMENTS: Record<Environment, { baseUrl: string; previewBanner?: boolean; robotsIndex?: boolean }> = {
    development: { baseUrl: "http://localhost:3000", previewBanner: true, robotsIndex: false },
    staging: { baseUrl: "https://staging.boldmind.ng", previewBanner: true, robotsIndex: false },
    production: { baseUrl: SITE_CONFIG.url, previewBanner: false, robotsIndex: true },
};

// ----------------------
// Convenience exports & helpers
// ----------------------
export const SOCIAL_LINKS: SocialLinks = SITE_CONFIG.social;
export const NAV_ITEMS: NavItem[] = SITE_CONFIG.navigation;

export const getKpiTarget = (code: string) => KPIS.find(k => k.code === code)?.targetMonthly ?? null;
export const getProductBySlug = (slug: string) =>
    [SITE_CONFIG.products.ameboGist, SITE_CONFIG.products.eduCenter, SITE_CONFIG.products.planAI].find(p => p.slug === slug);

export const withFunnelUrl = (product: ProductLink, funnel: Funnel) =>
    buildTrackedUrl(product.url, funnel.utmSource, funnel.utmMedium, funnel.utmCampaign);

// Example: tracked deep-link from AmeboGist article to EduCenter
export const linkAGtoEDU = () => withFunnelUrl(SITE_CONFIG.products.eduCenter, FUNNELS[0]);
