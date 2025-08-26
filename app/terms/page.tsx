import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Terms of Service",
  description: "BoldMind Technology Solution Enterprise Terms of Service - Terms and conditions for using our services",
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 font-heading text-4xl font-bold text-foreground">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 rounded-lg bg-muted/50 p-6">
                <p className="font-body text-muted-foreground">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-8 font-body text-foreground">
                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using BoldMind Technology Solution Enterprise services, you accept and agree to be
                    bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Use License</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Permission is granted to temporarily access our services for personal, non-commercial transitory
                      viewing only.
                    </p>
                    <p>This license shall automatically terminate if you violate any of these restrictions.</p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Service Availability</h2>
                  <p className="text-muted-foreground">
                    We strive to maintain high availability of our services but cannot guarantee uninterrupted access.
                    Services may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    BoldMind Technology Solution Enterprise shall not be liable for any damages arising from the use or
                    inability to use our services, even if we have been notified of the possibility of such damages.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions regarding these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@boldmind.tech" className="text-primary hover:underline">
                      legal@boldmind.tech
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
