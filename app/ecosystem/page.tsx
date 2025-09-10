"use client";

import { SITE_CONFIG } from "@/lib/config/master-config";
import { statusFromRepo, planaiModules, ProductStatus } from "@/lib/config/derive";
import { motion } from "framer-motion";
import { ArrowUpRight, LogIn, UserPlus } from "lucide-react";

/** Dev/Prod link resolver */
const useLocal =
  (process.env.NEXT_PUBLIC_LOCAL_LINKS || "").toLowerCase() === "true" ||
  process.env.NODE_ENV !== "production";

const URLS = {
  ameboGist: useLocal
    ? process.env.NEXT_PUBLIC_AMEBOGIST_URL || "http://localhost:3001"
    : "https://amebogist.ng",
  eduCenter: useLocal
    ? process.env.NEXT_PUBLIC_EDUCENTER_URL || "http://localhost:5173"
    : "https://educenter.com.ng",
  planAI: process.env.NEXT_PUBLIC_PLANAI_URL || "/planai",
};

function withUtm(
  base: string,
  utm: Partial<{ source: string; medium: string; campaign: string }> = {}
) {
  const hasHttp = base.startsWith("http");
  const url = new URL(base, hasHttp ? undefined : "http://dummy");
  if (utm.source) url.searchParams.set("utm_source", utm.source);
  if (utm.medium) url.searchParams.set("utm_medium", utm.medium);
  if (utm.campaign) url.searchParams.set("utm_campaign", utm.campaign);
  const out = url.toString();
  return hasHttp ? out : out.replace("http://dummy", "");
}

function StatusBadge({ status }: { status: ProductStatus }) {
  const cls =
    status === "live"
      ? "badge bg-green-500 text-white"
      : status === "deployed"
      ? "badge bg-brand-secondary text-black"
      : status === "preview"
      ? "badge bg-yellow-400 text-black"
      : status === "development"
      ? "badge border border-brand-primary text-brand-primary bg-white"
      : "badge bg-neutral-300 text-black";
  return <span className={cls}>{status}</span>;
}

function Card(props: {
  title: string;
  description: string;
  href: string;
  status: ProductStatus;
  children?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      whileHover={{ y: -2, scale: 1.005 }}
      className="card"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-brand-primary">{props.title}</h3>
        <StatusBadge status={props.status} />
      </div>

      <p className="mt-2 text-sm leading-6">{props.description}</p>

      {props.children}

      <a
        href={props.href}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
        className="btn btn-secondary mt-4"
      >
        Open <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>
    </motion.div>
  );
}

export default function EcosystemPage() {
  const { products, tagline } = SITE_CONFIG;

  const agStatus  = statusFromRepo("ambeo-gist");
  const eduStatus = statusFromRepo("educenter-frontend");
  const paiStatus = statusFromRepo("ai-receptionist-platform");
  const modules   = planaiModules();

  const agLink  = withUtm(URLS.ameboGist, { source: "hub", medium: "ecosystem", campaign: "hub_ecosystem" });
  const eduLink = withUtm(URLS.eduCenter, { source: "hub", medium: "ecosystem", campaign: "hub_ecosystem" });
  const paiLink = withUtm(URLS.planAI, { source: "hub", medium: "ecosystem", campaign: "hub_ecosystem" });

  return (
    <main className="bm-container py-8">
      <header className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-primary">BoldMind Ecosystem</h1>
        <p className="text-sm text-neutral-700">{tagline}</p>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {/* AmeboGist */}
        <Card
          title={products.ameboGist.name}
          description={products.ameboGist.description}
          href={agLink}
          status={agStatus}
          external
        />

        {/* EduCenter + micro-CTAs */}
        <Card
          title={products.eduCenter.name}
          description={products.eduCenter.description}
          href={eduLink}
          status={eduStatus}
          external
        >
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={withUtm(`${URLS.eduCenter}/login`, { source: "hub", medium: "cta", campaign: "ecosystem_login" })}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogIn className="h-4 w-4" /> Login
            </a>
            <a
              href={withUtm(`${URLS.eduCenter}/register`, { source: "hub", medium: "cta", campaign: "ecosystem_register" })}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UserPlus className="h-4 w-4" /> Register
            </a>
          </div>
        </Card>

        {/* PlanAI + modules */}
        <Card
          title={products.planAI.name}
          description={products.planAI.description}
          href={paiLink}
          status={paiStatus}
        >
          <div className="mt-3">
            <strong className="text-sm">Suite</strong>
            <ul className="mt-2 space-y-1">
              {modules.map((m: { slug: string; label: string; status: ProductStatus }) => (
                <li key={m.slug} className="flex items-center gap-2">
                  <StatusBadge status={m.status} />
                  <span className="text-sm">{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
    </main>
  );
}
//  ---------------------------------------------------------------------------