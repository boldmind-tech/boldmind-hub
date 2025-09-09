// lib/config/derive.ts
import { REPOS } from "./repos.manifest";

export type ProductStatus = "live" | "deployed" | "development";

export function statusFromRepo(repoName: string): ProductStatus {
  const row = REPOS.find(r => r.repo === repoName);
  if (!row) return "development";
  if (row.url && row.host !== "none") return "live";
  if (row.envs.includes("prod")) return "deployed";
  return "development";
}

// Map PlanAI module repos to Config v1 slugs
export function planaiModules() {
  const map: { repo: string; slug: string; label: string }[] = [
    { repo: "ai-receptionist-platform",     slug: "ai-receptionist",      label: "AI Receptionist" },
    { repo: "planai-marketing-automation",  slug: "marketing-automation", label: "Marketing Automation" },
    { repo: "planai-analytics-dashboard",   slug: "analytics",            label: "Analytics Dashboard" },
    { repo: "planai-digital-storefronts",   slug: "digital-storefronts",  label: "Digital Storefronts" },
    { repo: "planai-branding-design",       slug: "branding-tools",       label: "Branding & Design Tools" },
    { repo: "planai-investor-readiness",    slug: "investor-readiness",   label: "Investor Readiness Suite" },
    { repo: "planai-financial-forecasting", slug: "financial-forecasting",label: "Financial Forecasting" },
    { repo: "planai-business-planning",     slug: "business-planning",    label: "AI Business Planning" },
    { repo: "planai-credibility-hubs",      slug: "credibility-hubs",     label: "Professional Credibility Hubs" },
  ];
  return map.map(m => ({ ...m, status: statusFromRepo(m.repo) as ProductStatus }));
}
