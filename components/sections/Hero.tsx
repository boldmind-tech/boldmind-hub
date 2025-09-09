"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const getStatusColor = (status: string) =>
  status === "live" || status === "deployed" ? "bg-green-400" : "bg-secondary";

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
      {/* glow blobs */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary blur-3xl opacity-70" />
        <div className="absolute right-10 bottom-8 h-32 w-32 rounded-full bg-white blur-2xl opacity-50" />
      </motion.div>

      <div className="bm-container flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left: headline + pills + socials */}
        <div className="flex-1 px-2">
          <motion.h1
            className="font-extrabold mb-6 text-4xl xs:text-5xl md:text-6xl leading-tight tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {SITE_CONFIG.tagline.split(" ").slice(0, 2).join(" ")}{" "}
            <br className="hidden xs:inline" />
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">
              {SITE_CONFIG.tagline.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          {/* Product status pills */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-8 text-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.15, staggerChildren: 0.07 },
              },
            }}
          >
            {Object.entries(SITE_CONFIG.products).map(([key, product]) => (
              <motion.div
                key={key}
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <span className={`w-3 h-3 ${getStatusColor(product.status)} rounded-full shadow-sm`} />
                {product.url?.startsWith("http") ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-secondary transition-colors duration-150"
                  >
                    {product.name.toLowerCase()}
                  </a>
                ) : (
                  <span className="opacity-70">{product.name.toLowerCase()}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-2 xs:gap-3 sm:gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Social href={SITE_CONFIG.social.facebook!} icon={Facebook} label="Facebook" />
            <Social href={SITE_CONFIG.social.instagram!} icon={Instagram} label="Instagram" />
            <Social href={SITE_CONFIG.social.linkedin!} icon={Linkedin} label="LinkedIn" />
            <Social href={`mailto:${SITE_CONFIG.social.email}`} icon={Mail} label="Email" />
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.45 }}
          >
            <a href="/ecosystem" className="btn-secondary">Explore Ecosystem</a>
            <a href="/planai?utm_source=hub&utm_medium=hero&utm_campaign=ecosystem" className="btn-outline">
              Try PlanAI
            </a>
          </motion.div>
        </div>

        {/* Right: illustration */}
        <motion.div
          className="flex-1 w-full md:w-auto mt-10 md:mt-0 flex justify-center px-2"
          initial={{ scale: 0.96, opacity: 0, x: 32 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/hero-illustration.svg"
            alt="BoldMind Ecosystem"
            width={420}
            height={420}
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-[var(--shadow-soft)]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

function Social({
  href, icon: Icon, label,
}: { href: string; icon: any; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 xs:h-11 xs:w-11 items-center justify-center rounded-full bg-primary border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-sm transition-all duration-200 focus:outline-none"
      whileHover={{ scale: 1.16, rotate: -7 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  );
}
