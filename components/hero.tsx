import Link from "next/link"
import { ArrowRight, Zap, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium">
            <Zap className="mr-2 h-4 w-4 text-secondary" />
            Powering Innovation Across Nigeria
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BoldMind Hub
            </span>
          </h1>

          {/* Tagline */}
          <p className="mb-8 font-body text-xl text-muted-foreground sm:text-2xl">{SITE_CONFIG.tagline}</p>

          {/* Description */}
          <p className="mb-10 font-body text-lg text-muted-foreground">
            Your central gateway to the BoldMind ecosystem. Discover AmeboGist for content creation, EduCenter for
            learning, and PlanAI for business automation - all powered by cutting-edge technology solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group" asChild>
              <Link href="/ecosystem">
                Explore Ecosystem
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">Community Driven</h3>
              <p className="font-body text-sm text-muted-foreground">
                Building solutions that serve real community needs
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">Innovation First</h3>
              <p className="font-body text-sm text-muted-foreground">
                Leveraging AI and modern tech for business growth
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">Results Focused</h3>
              <p className="font-body text-sm text-muted-foreground">
                Proven track record with paying customers and deployments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  )
}
