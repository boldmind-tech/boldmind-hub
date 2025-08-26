import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Lato } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "BoldMind Hub - Technology Solutions Enterprise",
  description:
    "Central gateway to the BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI. Empowering businesses with innovative technology solutions.",
  generator: "BoldMind Technology",
  keywords: ["BoldMind", "Technology Solutions", "AI", "SaaS", "AmeboGist", "EduCenter", "PlanAI"],
  authors: [{ name: "BoldMind Technology Solution Enterprise" }],
  openGraph: {
    title: "BoldMind Hub - Technology Solutions Enterprise",
    description: "Central gateway to the BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI",
    type: "website",
    locale: "en_US",
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">{children}</body>
    </html>
  )
}
