import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { generateSEO } from "@/lib/seo"
import { PLANAI_PRODUCTS } from "@/lib/constants"
import {
  Brain,
  MessageSquare,
  Video,
  User,
  FileText,
  TrendingUp,
  Shield,
  Palette,
  ShoppingCart,
  Zap,
  BarChart3,
  Users,
  CheckCircle,
  Clock,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export const metadata = generateSEO({
  title: "PlanAI - AI SaaS Platform",
  description:
    "Comprehensive AI SaaS platform with 10+ business automation tools. From AI receptionists to financial forecasting - revolutionize how your business operates.",
})

const productIcons = {
  "AI Receptionist": MessageSquare,
  "Social Media Content Factory": Video,
  "Professional Credibility Hubs": User,
  "AI Business Planning": FileText,
  "Financial Forecasting": TrendingUp,
  "Investor Readiness Suite": Shield,
  "Branding & Design Tools": Palette,
  "Digital Storefronts": ShoppingCart,
  "Marketing Automation": Zap,
  "Analytics Dashboard": BarChart3,
}

const statusColors = {
  deployed: "bg-green-100 text-green-800 border-green-200",
  development: "bg-yellow-100 text-yellow-800 border-yellow-200",
  planning: "bg-blue-100 text-blue-800 border-blue-200",
}

const statusIcons = {
  deployed: CheckCircle,
  development: Wrench,
  planning: Clock,
}

export default function PlanAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium">
                <Brain className="mr-2 h-4 w-4 text-secondary" />
                Multi-Product AI SaaS Platform
              </div>

              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Meet{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">PlanAI</span>
              </h1>

              <p className="mb-8 font-body text-xl text-muted-foreground sm:text-2xl">
                The comprehensive AI platform that revolutionizes how businesses operate, plan, and grow.
              </p>

              <p className="mb-10 font-body text-lg text-muted-foreground">
                From AI receptionists to financial forecasting, PlanAI brings together 10+ powerful tools designed to
                automate, optimize, and accelerate your business success.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#products">Explore Products</Link>
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">Proven Results</h3>
                  <p className="font-body text-sm text-muted-foreground">AI Receptionist deployed at Sleepless</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">10+ AI Tools</h3>
                  <p className="font-body text-sm text-muted-foreground">Comprehensive business automation suite</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold">Cutting Edge</h3>
                  <p className="font-body text-sm text-muted-foreground">Latest AI technology integrations</p>
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

        {/* Featured Product - AI Receptionist */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="rounded-3xl border bg-gradient-to-br from-green-50 to-blue-50 p-8 shadow-xl lg:p-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground">AI Receptionist</h2>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Live & Deployed</Badge>
                      </div>
                    </div>
                    <p className="mb-6 font-body text-lg text-muted-foreground">
                      Our flagship AI Receptionist is already deployed at Sleepless, providing 24/7 customer service
                      automation with natural language processing and intelligent response handling.
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        24/7 Automated Customer Support
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Natural Language Processing
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Multi-language Support
                      </div>
                      <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Case Study Ready
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Request Case Study</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="aspect-video w-full max-w-md rounded-xl bg-gradient-to-br from-green-100 to-blue-100 p-8">
                      <div className="h-full w-full rounded-lg bg-white/70 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Products Grid */}
        <section id="products" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Complete Product Suite
              </h2>
              <p className="mb-12 font-body text-lg text-muted-foreground">
                Discover all 10+ AI-powered tools designed to transform every aspect of your business operations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PLANAI_PRODUCTS.map((product, index) => {
                const IconComponent = productIcons[product.name as keyof typeof productIcons] || Brain
                const StatusIcon = statusIcons[product.status as keyof typeof statusIcons] || Clock

                return (
                  <div
                    key={index}
                    className="group rounded-2xl border bg-card p-6 shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className={statusColors[product.status as keyof typeof statusColors]}>
                        <StatusIcon className="mr-1 h-3 w-3" />
                        {product.status}
                      </Badge>
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-semibold text-card-foreground">{product.name}</h3>
                    <p className="mb-4 font-body text-sm text-muted-foreground">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Integration Highlights */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
                <div className="text-center">
                  <h2 className="mb-4 font-heading text-3xl font-bold text-card-foreground">Powerful Integrations</h2>
                  <p className="mb-8 font-body text-lg text-muted-foreground">
                    PlanAI seamlessly integrates with the tools and platforms you already use.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Video className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">Pictory AI</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Automated video content creation for social media and marketing campaigns
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <ShoppingCart className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">Paystack</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Seamless payment processing for e-commerce and subscription services
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Users className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-card-foreground">Community Features</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Built-in networking and community management tools for user engagement
                    </p>
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
                Join the AI revolution with PlanAI. From proven solutions like our AI Receptionist to cutting-edge tools
                in development, we're here to help you succeed.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/ecosystem">View All Products</Link>
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
