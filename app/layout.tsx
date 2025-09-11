// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "BoldMind Hub — Empowering Innovation Through Technology",
  description:
    "The central gateway to BoldMind's ecosystem: AmeboGist, EduCenter, and PlanAI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-white text-neutral-900 antialiased">
        <Navbar />
        <div className="min-h-[60vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}