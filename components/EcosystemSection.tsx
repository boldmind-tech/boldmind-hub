import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const ecosystemItems = [
  {
    id: "amebogist",
    title: "AMEBOGIST",
    subtitle: ".NG",
    description: SITE_CONFIG.products.ameboGist.description,
    status: SITE_CONFIG.products.ameboGist.status.toUpperCase(),
    url: SITE_CONFIG.products.ameboGist.url,
    bgColor: "bg-gradient-to-br from-green-600 to-emerald-700",
    textColor: "text-white"
  },
  {
    id: "educenter",
    title: "EduCenter",
    subtitle: ".com.ng",
    description: SITE_CONFIG.products.eduCenter.description,
    status: SITE_CONFIG.products.eduCenter.status.toUpperCase(),
    url: SITE_CONFIG.products.eduCenter.url,
    bgColor: "bg-gradient-to-br from-teal-600 to-cyan-700",
    textColor: "text-white"
  },
  {
    id: "planai",
    title: "PlanAI",
    subtitle: "",
    description: SITE_CONFIG.products.planAI.description,
    status: SITE_CONFIG.products.planAI.status.toUpperCase(),
    url: SITE_CONFIG.products.planAI.url,
    bgColor: "bg-gradient-to-br from-blue-700 to-indigo-900",
    textColor: "text-white"
  }
];

export function EcosystemSection() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary">ECOSYSTEM SECTIONS</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {ecosystemItems.map((item) => (
            <Card key={item.id} className={`${item.bgColor} ${item.textColor} border-0 overflow-hidden shadow-xl`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">{item.title[0]}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 p-2"
                    asChild
                  >
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardTitle className="text-2xl font-bold font-['Poppins']">
                  {item.title}
                  <span className="text-lg font-normal">{item.subtitle}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className={`${item.textColor} opacity-90 mb-4 font-['Poppins']`}>
                  {item.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={item.status === "LIVE" ? "default" : "secondary"}
                    className={item.status === "LIVE" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}
                  >
                    {item.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
