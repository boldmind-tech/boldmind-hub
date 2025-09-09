import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"
import ContactClient from "./ContactClient"

export const metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with BoldMind Technology Solution Enterprise. Let's discuss how we can help transform your business with innovative technology solutions.",
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactClient />
      </main>
      <Footer />
    </div>
  )
}
