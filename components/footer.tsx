import Link from "next/link"
import { Mail, MessageCircle, Linkedin, Twitter } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-heading text-lg font-bold">B</span>
              </div>
              <span className="font-heading text-xl font-bold text-primary">BoldMind Hub</span>
            </Link>
            <p className="mt-4 max-w-md font-body text-muted-foreground">
              {SITE_CONFIG.description}. Empowering businesses with innovative technology solutions across Nigeria and
              beyond.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href={SITE_CONFIG.social.email} className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href={SITE_CONFIG.social.whatsapp}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href={SITE_CONFIG.social.linkedin}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={SITE_CONFIG.social.twitter}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="font-body text-sm text-muted-foreground hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Ecosystem</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={SITE_CONFIG.products.ameboGist.url}
                  className="font-body text-sm text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AmeboGist.ng
                </Link>
              </li>
              <li>
                <Link
                  href={SITE_CONFIG.products.eduCenter.url}
                  className="font-body text-sm text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EduCenter.com.ng
                </Link>
              </li>
              <li>
                <Link
                  href={SITE_CONFIG.products.planAI.url}
                  className="font-body text-sm text-muted-foreground hover:text-primary"
                >
                  PlanAI Suite
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="font-body text-sm text-muted-foreground">
              © {currentYear} {SITE_CONFIG.company}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="font-body text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-body text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
