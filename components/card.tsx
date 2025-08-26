import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CardProps {
  title: string
  description: string
  href: string
  status?: "live" | "development" | "deployed"
  external?: boolean
  className?: string
}

export function Card({ title, description, href, status, external = false, className = "" }: CardProps) {
  const statusColors = {
    live: "bg-green-100 text-green-800 border-green-200",
    development: "bg-yellow-100 text-yellow-800 border-yellow-200",
    deployed: "bg-blue-100 text-blue-800 border-blue-200",
  }

  const CardContent = (
    <div
      className={`group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-lg transition-all hover:shadow-xl ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">{title}</h3>
            {status && (
              <Badge variant="outline" className={statusColors[status]}>
                {status}
              </Badge>
            )}
          </div>
          <p className="mb-4 font-body text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
          <span className="mr-2">Learn more</span>
          {external ? (
            <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          )}
        </Button>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    )
  }

  return (
    <Link href={href} className="block">
      {CardContent}
    </Link>
  )
}
