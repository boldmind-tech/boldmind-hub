// lib/config/repos.manifest.ts
export type Host = "vercel" | "netlify" | "render" | "none";
export type App =
  | "hub" | "amebogist" | "educenter_fe" | "educenter_be"
  | "planai" | "planai_module" | "automation" | "safenaija" | "org";

export type RepoRow = {
  repo: string;              // exact GitHub repo name
  app: App;
  host: Host;
  envs: ("prod" | "staging" | "dev")[];
  url?: string;              // public URL if live
  notes?: string;
};

// NOTE: Names exactly as you listed.
export const REPOS: RepoRow[] = [
  { repo: "boldmind-hub",                app: "hub",           host: "vercel",  envs: ["prod"], url: "https://boldmind.ng" },
  { repo: "ambeo-gist",                  app: "amebogist",     host: "vercel",  envs: ["prod"], url: "https://amebogist.ng" },

  { repo: "educenter-frontend",          app: "educenter_fe",  host: "netlify", envs: ["prod"], url: "https://educenter.com.ng" },
  { repo: "educenter-backend",           app: "educenter_be",  host: "render",  envs: ["prod"], notes: "Node/Express + MongoDB (Render)" },

  { repo: "ai-receptionist-platform",    app: "planai",        host: "render",  envs: ["prod"], notes: "PlanAI • AI Receptionist" },

  { repo: "planai-analytics-dashboard",  app: "planai_module", host: "none",    envs: ["dev"],  notes: "Analytics Dashboard" },
  { repo: "planai-marketing-automation", app: "planai_module", host: "none",    envs: ["dev"],  notes: "Marketing Automation" },
  { repo: "planai-digital-storefronts",  app: "planai_module", host: "none",    envs: ["dev"],  notes: "Digital Storefronts" },
  { repo: "planai-branding-design",      app: "planai_module", host: "none",    envs: ["dev"],  notes: "Branding & Design Tools" },
  { repo: "planai-investor-readiness",   app: "planai_module", host: "none",    envs: ["dev"],  notes: "Investor Readiness Suite" },
  { repo: "planai-financial-forecasting",app: "planai_module", host: "none",    envs: ["dev"],  notes: "Financial Forecasting" },
  { repo: "planai-business-planning",    app: "planai_module", host: "none",    envs: ["dev"],  notes: "AI Business Planning" },
  { repo: "planai-credibility-hubs",     app: "planai_module", host: "none",    envs: ["dev"],  notes: "Professional Credibility Hubs" },

  { repo: "social_automation",           app: "automation",    host: "none",    envs: ["prod"], notes: "n8n/Zapier helpers" },
  { repo: "safenaija",                   app: "safenaija",     host: "vercel",  envs: ["dev"],  notes: "Concept" },
  { repo: ".github",                     app: "org",           host: "none",    envs: ["prod"], notes: "Org standards" },
];
