import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { generateSEO } from "@/lib/seo"
import { ExternalLink, Users, BookOpen, Brain, Zap, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

export const metadata = generateSEO({
  title: "Ecosystem",
  description:
    "Explore the complete BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI - innovative technology solutions for modern businesses",
})

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                The BoldMind{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h1>
              <p className="mb-8 font-body text-xl text-muted-foreground">
                A comprehensive suite of technology solutions designed to empower businesses, creators, and learners
                across Nigeria and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Globe className="mr-1 h-3 w-3" />3 Live Products
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <Users className="mr-1 h-3 w-3" />
                  15+ Paying Customers
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  <Brain className="mr-1 h-3 w-3" />
                  AI-Powered Solutions
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:gap-16">
              {/* AmeboGist */}
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-card-foreground">
                          {SITE_CONFIG.products.ameboGist.name}
                        </h2>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Live</Badge>
                      </div>
                    </div>
                    <p className="mb-6 font-body text-lg text-muted-foreground">
                      A fully deployed fullstack blog platform with custom dashboard, empowering content creators with
                      professional publishing tools and analytics.
                    </p>
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 text-secondary" />
                        Custom Content Management System
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        Advanced Analytics Dashboard
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-secondary" />
                        Multi-author Support
                      </div>
                    </div>
                    <Button asChild>
                      <a
                        href={SITE_CONFIG.products.ameboGist.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn"
                      >
                        Visit AmeboGist
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="aspect-video w-full max-w-md rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                      <div className="h-full w-full rounded-lg bg-white/50 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* EduCenter */}
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="lg:order-2">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-card-foreground">
                          {SITE_CONFIG.products.eduCenter.name}
                        </h2>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Live</Badge>
                      </div>
                    </div>
                    <p className="mb-6 font-body text-lg text-muted-foreground">
                      A comprehensive educational platform built with React and Node.js, featuring Paystack integration
                      and serving 15+ paying subscribers with quality learning content.
                    </p>
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 text-primary" />
                        Paystack Payment Integration
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        15+ Active Subscribers
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Interactive Learning Modules
                      </div>
                    </div>
                    <Button asChild>
                      <a
                        href={SITE_CONFIG.products.eduCenter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn"
                      >
                        Visit EduCenter
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center lg:order-1">
                    <div className="aspect-video w-full max-w-md rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 p-8">
                      <div className="h-full w-full rounded-lg bg-white/50 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* PlanAI */}
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Brain className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-card-foreground">
                          {SITE_CONFIG.products.planAI.name}
                        </h2>
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">In Development</Badge>
                      </div>
                    </div>
                    <p className="mb-6 font-body text-lg text-muted-foreground">
                      A comprehensive AI SaaS platform featuring 10+ business automation tools, from AI receptionists to
                      financial forecasting, designed to revolutionize how businesses operate.
                    </p>
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 text-secondary" />
                        AI Receptionist (Deployed at Sleepless)
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        10+ AI-Powered Business Tools
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <Brain className="h-4 w-4 text-secondary" />
                        Pictory AI Integration
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href="/planai">Explore PlanAI</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Request Demo</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="aspect-video w-full max-w-md rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                      <div className="h-full w-full rounded-lg bg-white/50 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mb-8 font-body text-lg text-muted-foreground">
                Join the growing community of businesses leveraging BoldMind's innovative technology solutions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
