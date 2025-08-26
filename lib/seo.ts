import type { Metadata } from "next"
import { SITE_CONFIG } from "./constants"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
}

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  image = "/og-image.png",
  url = SITE_CONFIG.url,
  type = "website",
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name

  return {
    title: seoTitle,
    description,
    keywords: [
      "BoldMind",
      "Technology Solutions",
      "AI SaaS",
      "Business Automation",
      "AmeboGist",
      "EduCenter",
      "PlanAI",
      "Nigeria Tech",
    ],
    authors: [{ name: SITE_CONFIG.company }],
    creator: SITE_CONFIG.company,
    publisher: SITE_CONFIG.company,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      title: seoTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: [image],
      creator: "@boldmindtech",
    },
    alternates: {
      canonical: url,
    },
  }
}
