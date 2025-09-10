import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = { title: "BoldMind Hub" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#00008B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA = process.env.NEXT_PUBLIC_GA4_ID; // your stream ID for boldmind.ng

  return (
    <html lang="en">
      <body>
        {GA && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date()); gtag('config','${GA}',{send_page_view:true});`}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
