import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "BoldMind Technology Solution Enterprise Privacy Policy - How we collect, use, and protect your data",
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 font-heading text-4xl font-bold text-foreground">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 rounded-lg bg-muted/50 p-6">
                <p className="font-body text-muted-foreground">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-8 font-body text-foreground">
                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Introduction</h2>
                  <p className="text-muted-foreground">
                    BoldMind Technology Solution Enterprise ("we," "our," or "us") is committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you visit our website and use our services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="mb-2 font-heading text-lg font-medium text-foreground">Personal Information</h3>
                      <p>
                        We may collect personal information such as your name, email address, phone number, and company
                        information when you contact us or use our services.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-heading text-lg font-medium text-foreground">Usage Data</h3>
                      <p>
                        We automatically collect certain information about your device and how you interact with our
                        website, including IP address, browser type, and pages visited.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>To provide and maintain our services</li>
                    <li>To communicate with you about our products and services</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 font-heading text-2xl font-semibold">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@boldmind.tech" className="text-primary hover:underline">
                      privacy@boldmind.tech
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
