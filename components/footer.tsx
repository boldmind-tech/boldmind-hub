import { SITE_CONFIG } from "../lib/constants";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* BRAND/LOGO */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                <span className="text-primary font-bold text-lg font-['Poppins']">B</span>
              </div>
              <span className="font-bold text-xl font-['Poppins']">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm opacity-80 font-['Poppins']">{SITE_CONFIG.company}</p>
            <p className="text-xs opacity-60 mt-2 font-['Poppins']">{SITE_CONFIG.description}</p>
          </div>
          
          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold mb-4 font-['Poppins']">Products</h3>
            <ul className="space-y-2 text-sm opacity-80 font-['Poppins']">
              <li>
                <a 
                  href={SITE_CONFIG.products.ameboGist.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {SITE_CONFIG.products.ameboGist.name}
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.products.eduCenter.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {SITE_CONFIG.products.eduCenter.name}
                </a>
              </li>
              <li>
                <a 
                  href={SITE_CONFIG.products.planAI.url} 
                  className="hover:text-secondary transition-colors"
                >
                  {SITE_CONFIG.products.planAI.name} (Coming Soon)
                </a>
              </li>
            </ul>
          </div>
          
          {/* COMPANY LINKS */}
          <div>
            <h3 className="font-semibold mb-4 font-['Poppins']">Company</h3>
            <ul className="space-y-2 text-sm opacity-80 font-['Poppins']">
              {SITE_CONFIG.navigation.slice(1).map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-secondary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE_CONFIG.social.email}`} className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* SOCIALS */}
          <div>
            <h3 className="font-semibold mb-4 font-['Poppins']">Connect</h3>
            <div className="flex space-x-3">
              <a 
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.social.email}`}
                className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* COPYRIGHT */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60 font-['Poppins']">
          <p>&copy; {currentYear} {SITE_CONFIG.company}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
