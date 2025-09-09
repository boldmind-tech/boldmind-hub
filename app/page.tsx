import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"
import { EcosystemSection } from "@/components/EcosystemSection"
import { SITE_CONFIG, PLANAI_PRODUCTS } from "@/lib/constants"

// ---------- Product Screenshot Row ----------
function ImageStage() {
  const images = [
    "/Screenshot 2025-09-02 050911.png",
    "/Screenshot 2025-09-02 051047.png",
    "/Whisk_mflmjvkzwi.jpg",
    "/Whisk_tc0mtm5zme.jpg",
    "/planai-customerai.png",
  ]
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 items-center">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-secondary/10 aspect-video flex items-center justify-center shadow-sm">
            <img
              src={img}
              alt={`Product showcase ${i + 1}`}
              className="object-cover w-full h-full"
              style={{ minHeight: 70 }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ---------- Testimonials Section -----------
function Testimonials() {
  return (
    <div className="py-10">
      <h3 className="font-heading text-xl md:text-2xl font-bold text-center mb-6 text-primary">
        What our customers say
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            name: "Tolu F.",
            title: "Founder, Lagos Startups",
            quote: "BoldMind helped us automate our workflow. Now our sales run 24/7, and our team can focus on growth!",
          },
          {
            name: "Amaka N.",
            title: "Educator",
            quote: "The EduCenter platform made my online courses super easy to manage. Support is top notch.",
          },
          {
            name: "Abayomi S.",
            title: "Business Analyst",
            quote: "PlanAI gives us business intelligence we never had before. Highly recommended for SMEs.",
          },
        ].map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-5 shadow-md border border-primary/30 flex flex-col h-full">
            <p className="mb-3 text-muted-foreground text-sm md:text-base">"{t.quote}"</p>
            <div>
              <span className="font-semibold text-foreground">{t.name}</span>
              <span className="block text-xs text-muted-foreground">{t.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ---------- Big CTA -----------
function CTASection() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-primary">
        Ready to transform your business?
      </h2>
      <p className="mb-6 text-base md:text-lg text-secondary">
        Join African brands leveraging BoldMind to unlock growth. Start your journey now!
      </p>
      <a
        href="/contact"
        className="inline-block rounded-xl px-6 py-2.5 bg-primary text-white font-bold shadow-md hover:bg-secondary transition"
      >
        Get Started
      </a>
    </div>
  )
}

// ---------- Home Page -----------
export default function HomePage() {
  return (
  <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

  <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <Hero />
          </div>
        </section>

        {/* PRODUCT SCREENSHOTS */}
        <section>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <ImageStage />
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <EcosystemSection />
          </div>
        </section>

        {/* STATS */}
        <section>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <Stats />
          </div>
        </section>

        {/* PLANAI PRODUCT LIST */}
        <section className="py-8">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-5 text-primary text-center">
              Explore PlanAI Products
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PLANAI_PRODUCTS.map((prod) => (
                <div key={prod.name} className="rounded-2xl border border-primary/30 bg-card p-5 shadow-sm flex flex-col">
                  <span className="font-heading text-base md:text-lg font-bold mb-2 text-primary">{prod.name}</span>
                  <span className={`inline-block rounded px-2 py-1 text-xs mb-2 ${
                    prod.status === "deployed"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}>
                    {prod.status === "deployed" ? "Live" : "In Development"}
                  </span>
                  <p className="text-sm text-muted-foreground flex-1">{prod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <Testimonials />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-primary to-secondary py-8 mt-4">
          <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
            <CTASection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
