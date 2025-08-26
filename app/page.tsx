import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Card } from "@/components/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SITE_CONFIG } from "@/lib/constants"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Home",
  description: "Central gateway to the BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI",
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />
        <Stats />

        {/* Ecosystem Preview */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Ecosystem</h2>
              <p className="mb-12 font-body text-lg text-muted-foreground">
                Discover our suite of products designed to empower businesses and individuals with cutting-edge
                technology..
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card
                title={SITE_CONFIG.products.ameboGist.name}
                description={SITE_CONFIG.products.ameboGist.description}
                href={SITE_CONFIG.products.ameboGist.url}
                status={SITE_CONFIG.products.ameboGist.status}
                external
              />
              <Card
                title={SITE_CONFIG.products.eduCenter.name}
                description={SITE_CONFIG.products.eduCenter.description}
                href={SITE_CONFIG.products.eduCenter.url}
                status={SITE_CONFIG.products.eduCenter.status}
                external
              />
              <Card
                title={SITE_CONFIG.products.planAI.name}
                description={SITE_CONFIG.products.planAI.description}
                href={SITE_CONFIG.products.planAI.url}
                status={SITE_CONFIG.products.planAI.status}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 font-body text-muted-foreground">Ready to explore our complete ecosystem?</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Card
                  title="View All Products"
                  description="Explore our complete ecosystem of technology solutions"
                  href="/ecosystem"
                  className="sm:max-w-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
