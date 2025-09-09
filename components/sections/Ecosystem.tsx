"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

const statusClass = (s: string) =>
  s === "live" ? "badge-live" : s === "deployed" ? "badge-deployed" : "badge-dev";

export default function Ecosystem() {
  const { products } = SITE_CONFIG;

  const cards = [
    { key: "ameboGist", title: products.ameboGist.name, desc: products.ameboGist.description, href: products.ameboGist.url, status: products.ameboGist.status },
    { key: "eduCenter", title: products.eduCenter.name, desc: products.eduCenter.description, href: products.eduCenter.url + "?utm_source=hub&utm_medium=card&utm_campaign=ecosystem", status: products.eduCenter.status },
    { key: "planAI", title: products.planAI.name, desc: products.planAI.description, href: "/planai?utm_source=hub&utm_medium=card&utm_campaign=ecosystem", status: products.planAI.status },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="bm-container">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">BoldMind Ecosystem</h2>
        <p className="mt-1 text-sm text-neutral-700">Awareness → Education → Enablement</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.key}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="card block"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-brand-primary">{c.title}</h3>
                <span className={statusClass(c.status)}>{c.status}</span>
              </div>
              <p className="mt-2 text-sm">{c.desc}</p>
              <div className="mt-4 btn-secondary inline-block">Open</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
    