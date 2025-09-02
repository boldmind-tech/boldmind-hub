import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { generateSEO } from "@/lib/seo"
import { SITE_CONFIG } from "@/lib/constants"
import { Mail, MessageCircle, Linkedin, Twitter, MapPin, Clock, Phone, Facebook } from "lucide-react"

export const metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with BoldMind Technology Solution Enterprise. Let's discuss how we can help transform your business with innovative technology solutions.",
})

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message and we'll respond within 24 hours",
      action: "info@boldmind.ng",
      href: "mailto:info@boldmind.ng",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us directly for quick responses",
      action: "Start Chat",
      href: SITE_CONFIG.social.whatsapp,
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      description: "Book a consultation to discuss your project",
      action: "Book Now",
      href: "/contact#schedule",
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
      href: SITE_CONFIG.social.email,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let's{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Work Together
                </span>
              </h1>
              <p className="mb-8 font-body text-xl text-muted-foreground">
                Ready to transform your business with innovative technology solutions? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                {contactMethods.map((method, index) => (
                  <div key={index} className="rounded-2xl border bg-card p-6 shadow-lg text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <method.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">{method.title}</h3>
                    <p className="mb-4 font-body text-sm text-muted-foreground">{method.description}</p>
                    <Button asChild className="w-full">
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.action}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
                <div className="mb-8 text-center">
                  <h2 className="mb-4 font-heading text-3xl font-bold text-card-foreground">Send Us a Message</h2>
                  <p className="font-body text-muted-foreground">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block font-body text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block font-body text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block font-body text-sm font-medium text-foreground">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block font-body text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="planai">PlanAI Demo Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
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
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
