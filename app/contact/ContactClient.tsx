"use client"

import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import {
  Mail, MessageCircle, Linkedin, Twitter, MapPin, Clock, Phone, Facebook
} from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we'll respond within 24 hours",
    action: "info@boldmind.ng",
    href: "mailto:info@boldmind.ng",
    color: "bg-blue-100 text-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us directly for quick responses",
    action: "Start Chat",
    href: SITE_CONFIG.social.whatsapp,
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Phone,
    title: "Schedule a Call",
    description: "Book a consultation to discuss your project",
    action: "Book Now",
    href: "/contact#schedule",
    color: "bg-yellow-100 text-yellow-800",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: SITE_CONFIG.social.linkedin,
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: SITE_CONFIG.social.facebook,
  },
  {
    icon: Mail,
    name: "Email",
    href: "mailto:" + SITE_CONFIG.social.email,
  },
]

export default function ContactClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Work Together
              </span>
            </h1>
            <p className="mb-8 font-body text-xl text-muted-foreground">
              Ready to transform your business with innovative technology solutions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl border bg-card p-6 shadow-lg text-center group"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`mb-4 flex justify-center`}
                    whileHover={{ scale: 1.1, rotate: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${method.color} shadow-md`}>
                      <method.icon className="h-6 w-6" />
                    </div>
                  </motion.div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">{method.title}</h3>
                  <p className="mb-4 font-body text-sm text-muted-foreground">{method.description}</p>
                  <Button
                    asChild
                    className="w-full group/button"
                  >
                    <a
                      href={method.href}
                      target={(method.href ?? "").startsWith("http") || (method.href ?? "").startsWith("mailto") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
              <div className="mb-8 text-center">
                <h2 className="mb-4 font-heading text-3xl font-bold text-card-foreground">Send Us a Message</h2>
                <p className="font-body text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-muted bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-muted bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-md border border-muted bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info & Socials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">Location</h3>
                </div>
                <p className="font-body text-muted-foreground">
                  Based in Nigeria, serving clients across Africa and beyond. We work remotely and are available for
                  virtual meetings worldwide.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">Response Time</h3>
                </div>
                <p className="font-body text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                  please use WhatsApp for faster response.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
