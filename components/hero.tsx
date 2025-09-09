"use client"

import { SITE_CONFIG } from "../lib/constants"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const getStatusColor = (status: string) => {
  if (status === "live" || status === "deployed") return "bg-green-400"
  return "bg-secondary"
}

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24 px-4 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary blur-3xl opacity-70" />
        <div className="absolute right-10 bottom-8 h-32 w-32 rounded-full bg-white blur-2xl opacity-50" />
      </motion.div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left: Text/CTA */}
        <div className="flex-1">
          <motion.h1
            className="font-['Poppins'] font-extrabold mb-6 text-4xl xs:text-5xl md:text-6xl leading-tight tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {SITE_CONFIG.tagline.split(" ").slice(0, 2).join(" ")} <br className="hidden xs:inline" />
            <span className="bg-gradient-to-r from-secondary via-yellow-400 to-primary bg-clip-text text-transparent">
              {SITE_CONFIG.tagline.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-8 text-sm"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.15, staggerChildren: 0.07 } },
            }}
          >
            {Object.entries(SITE_CONFIG.products).map(([key, product]) => (
              <motion.div
                key={key}
                className="flex items-center space-x-2 group"
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
                  <span className="opacity-50">{product.name.toLowerCase()}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
          {/* Social row */}
          <motion.div
            className="flex justify-center md:justify-start space-x-2 xs:space-x-3 sm:space-x-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <SocialIcon href={SITE_CONFIG.social.facebook} icon={Facebook} label="Facebook" />
            <SocialIcon href={SITE_CONFIG.social.instagram} icon={Instagram} label="Instagram" />
            <SocialIcon href={SITE_CONFIG.social.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialIcon href={`mailto:${SITE_CONFIG.social.email}`} icon={Mail} label="Email" />
          </motion.div>
          <motion.p
            className="text-lg opacity-90 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.45 }}
          >
            {SITE_CONFIG.company}
          </motion.p>
        </div>

        {/* Right: Illustration/Mockup */}
        <motion.div
          className="flex-1 w-full md:w-auto mt-10 md:mt-0 flex justify-center"
          initial={{ scale: 0.96, opacity: 0, x: 32 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/hero-illustration.svg"
            alt="BoldMind Ecosystem Illustration"
            width={370}
            height={370}
            className="w-full max-w-xs md:max-w-md rounded-xl shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 xs:h-11 xs:w-11 items-center justify-center rounded-full bg-primary border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-sm transition-all duration-200 focus:outline-none"
      whileHover={{ scale: 1.16, rotate: -7 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  )
}
