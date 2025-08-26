import { TrendingUp, Users, Zap, Globe } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "15+",
      label: "Paying Subscribers",
      description: "Active users on EduCenter platform",
    },
    {
      icon: Globe,
      value: "3",
      label: "Live Products",
      description: "AmeboGist, EduCenter, and AI Receptionist",
    },
    {
      icon: Zap,
      value: "10+",
      label: "AI Solutions",
      description: "In development under PlanAI suite",
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Growth Focus",
      description: "Committed to scaling impact",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Proven Track Record</h2>
          <p className="mb-12 font-body text-lg text-muted-foreground">
            Real results from real products serving real customers across Nigeria and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="mb-2 font-heading text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mb-2 font-heading text-lg font-semibold text-foreground">{stat.label}</div>
              <p className="font-body text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
