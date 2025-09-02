import { Button } from "./ui/button";
import { SITE_CONFIG } from "../lib/constants";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

// Helper for status dot color (future proof: supports "live", "deployed", others default to secondary)
const getStatusColor = (status: string) => {
  if (status === "live" || status === "deployed") return "bg-green-400";
  return "bg-secondary";
};

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-20 px-6">
      <div className="container mx-auto text-center">

        {/* Tagline - visually balanced */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Poppins'] leading-tight">
          {SITE_CONFIG.tagline.split(" ").slice(0, 2).join(" ")}
          <br />
          {SITE_CONFIG.tagline.split(" ").slice(2).join(" ")}
        </h1>

        {/* Ecosystem product links + live/dev dots */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm">
          {Object.entries(SITE_CONFIG.products).map(([key, product]) => (
            <div key={key} className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${getStatusColor(product.status)} rounded-full`} />
              {product.url?.startsWith("http") ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {product.name.toLowerCase()}
                </a>
              ) : (
                <span className="opacity-60">{product.name.toLowerCase()}</span>
              )}
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant="outline"
            className="w-10 h-10 rounded border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary p-0"
            asChild
          >
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-10 h-10 rounded border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary p-0"
            asChild
          >
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-10 h-10 rounded border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary p-0"
            asChild
          >
            <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-10 h-10 rounded border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary p-0"
            asChild
          >
            <a href={`mailto:${SITE_CONFIG.social.email}`}>
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Company name */}
        <p className="text-lg opacity-90">{SITE_CONFIG.company}</p>
      </div>
    </section>
  );
}
