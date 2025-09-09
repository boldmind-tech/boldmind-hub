import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Montserrat, Lato } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-head" });
const lato = Lato({ weight: ["400","700"], subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "BoldMind Hub",
  description: "Awareness → Education → Enablement across AmeboGist, EduCenter, PlanAI.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#00008B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="bg-brand-white font-sans">{children}</body>
    </html>
  );
}
