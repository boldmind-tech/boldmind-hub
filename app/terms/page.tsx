import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Terms of Service",
  description: "BoldMind Technology Solution Enterprise Terms of Service - Terms and conditions for using our services",
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 bg-background">
        <div className="container mx-auto max-w-2xl sm:max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl bg-card border shadow-xl px-6 py-10 sm:px-12 sm:py-14">
            <h1 className="mb-8 font-heading text-3xl sm:text-4xl font-bold text-center text-primary">
              Terms of Service
            </h1>

            <div className="mb-8 flex justify-center">
              <div className="rounded bg-muted/70 px-4 py-2 text-sm text-muted-foreground">
                <span className="font-semibold">Last updated:</span>{" "}
                {new Date().toLocaleDateString()}
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="mb-2 font-heading text-xl font-semibold text-foreground">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using <span className="font-semibold text-primary">BoldMind Technology Solution Enterprise</span> services, you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-heading text-xl font-semibold text-foreground">Use License</h2>
                <ul className="text-muted-foreground ml-5 list-disc space-y-2">
                  <li>
                    Permission is granted to temporarily access our services for personal, non-commercial use only.
                  </li>
                  <li>
                    This license automatically terminates if you violate any of these restrictions.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-heading text-xl font-semibold text-foreground">Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive for high availability but cannot guarantee uninterrupted access. Services may be unavailable at times due to maintenance, updates, or technical issues.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-heading text-xl font-semibold text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  <span className="font-semibold">BoldMind Technology Solution Enterprise</span> is not liable for damages from the use or inability to use our services, even if we have been notified of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-heading text-xl font-semibold text-foreground">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, email us at{" "}
                  <a
                    href="mailto:legal@boldmind.tech"
                    className="text-primary underline hover:text-secondary"
                  >
                    legal@boldmind.ng
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
