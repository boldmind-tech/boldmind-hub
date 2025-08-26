"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="flex min-h-[60vh] items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <h1 className="mb-4 font-heading text-6xl font-bold text-primary">404</h1>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Page Not Found</h2>
              <p className="font-body text-lg text-muted-foreground">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered
                the wrong URL.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>

            <div className="mt-12">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Popular Pages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/ecosystem" className="font-body text-sm text-primary hover:underline">
                  Ecosystem
                </Link>
                <Link href="/planai" className="font-body text-sm text-primary hover:underline">
                  PlanAI
                </Link>
                <Link href="/about" className="font-body text-sm text-primary hover:underline">
                  About Us
                </Link>
                <Link href="/contact" className="font-body text-sm text-primary hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
