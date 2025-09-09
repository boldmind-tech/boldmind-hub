import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boldmind.ng"), 
  title: "BoldMind Hub - Technology Solutions Enterprise",
  description:
    "Central gateway to the BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI. Empowering businesses with innovative technology solutions.",
  generator: "BoldMind Technology",
  keywords: [
    "BoldMind",
    "Technology Solutions",
    "AI",
    "SaaS",
    "AmeboGist",
    "EduCenter",
    "PlanAI",
  ],
  authors: [{ name: "BoldMind Technology Solution Enterprise" }],
  openGraph: {
    title: "BoldMind Hub - Technology Solutions Enterprise",
    description:
      "Central gateway to the BoldMind ecosystem: AmeboGist, EduCenter, and PlanAI",
    type: "website",
    locale: "en_US",
    url: "https://boldmind.ng",
    siteName: "BoldMind Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoldMind Hub - Technology Solutions Enterprise",
      },
    ],
  },
  manifest: "/manifest.json",
  robots: "index, follow",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-lato antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
