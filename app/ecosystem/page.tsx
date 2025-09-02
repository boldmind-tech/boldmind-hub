import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { generateSEO } from "@/lib/seo"
import { ExternalLink, Users, BookOpen, Brain, Zap, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"
import { EcosystemSection } from "@/components/EcosystemSection";

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
          <EcosystemSection />

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
