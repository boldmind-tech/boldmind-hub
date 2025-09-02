import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"
import { EcosystemSection } from "@/components/EcosystemSection";

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
        <EcosystemSection />
        <Stats />

      </main>

      <Footer />
    </div>
  )
}
