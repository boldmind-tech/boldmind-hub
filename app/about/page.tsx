import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { generateSEO } from "@/lib/seo"
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from "lucide-react"

export const metadata = generateSEO({
  title: "About Us",
  description:
    "Learn about BoldMind Technology Solution Enterprise - our vision, mission, values, and the story behind Nigeria's innovative tech ecosystem",
})

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We believe in pushing boundaries and creating solutions that don't just meet needs, but anticipate them.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Every solution we build is designed to empower communities and create lasting positive change.",
    },
    {
      icon: Heart,
      title: "Quality Excellence",
      description: "We're committed to delivering exceptional quality in every product, service, and interaction.",
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "We embrace challenges as opportunities to learn, grow, and build better solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  BoldMind
                </span>
              </h1>
              <p className="mb-8 font-body text-xl text-muted-foreground">
                We're on a mission to empower businesses and individuals across Nigeria with innovative technology
                solutions that drive real results.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-3xl border bg-card p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-card-foreground">Our Vision</h2>
                <p className="font-body text-lg text-muted-foreground">
                  To become Nigeria's leading technology solutions enterprise, creating an ecosystem of innovative
                  products that empower businesses, educators, and creators to achieve extraordinary results through
                  cutting-edge AI and modern technology.
                </p>
              </div>

              <div className="rounded-3xl border bg-card p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-card-foreground">Our Mission</h2>
                <p className="font-body text-lg text-muted-foreground">
                  To build and deploy practical technology solutions that solve real problems, create sustainable value,
                  and contribute to Nigeria's digital transformation while maintaining the highest standards of quality
                  and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Core Values</h2>
              <p className="mb-12 font-body text-lg text-muted-foreground">
                The principles that guide everything we do at BoldMind Technology Solution Enterprise.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="font-body text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border bg-card p-8 shadow-xl lg:p-12">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <h2 className="mb-6 font-heading text-3xl font-bold text-card-foreground">Our Story</h2>
                    <div className="space-y-4 font-body text-muted-foreground">
                      <p>
                        BoldMind Technology Solution Enterprise was born from a simple yet powerful belief: that
                        technology should serve real people and solve real problems. Founded with the vision of creating
                        practical, impactful solutions for the Nigerian market, we've grown from an idea into a thriving
                        ecosystem of products.
                      </p>
                      <p>
                        Our journey began with AmeboGist, a platform that empowered content creators with professional
                        publishing tools. The success of this venture led us to EduCenter, where we've been privileged
                        to serve over 15 paying subscribers with quality educational content and seamless payment
                        integration.
                      </p>
                      <p>
                        Today, we're pushing the boundaries even further with PlanAI, our comprehensive AI SaaS platform
                        that's already making waves with deployed solutions like our AI Receptionist at Sleepless. With
                        10+ innovative tools in development, we're just getting started.
                      </p>
                      <p>
                        What drives us isn't just the technology—it's the impact. Every line of code we write, every
                        feature we build, and every solution we deploy is designed with one goal in mind: empowering our
                        users to achieve more than they thought possible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="aspect-square w-full max-w-xs rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                      <div className="h-full w-full rounded-xl bg-white/50 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-heading text-3xl font-bold text-primary">3</div>
                  <div className="font-body text-sm text-muted-foreground">Live Products</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-heading text-3xl font-bold text-primary">15+</div>
                  <div className="font-body text-sm text-muted-foreground">Paying Customers</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-heading text-3xl font-bold text-primary">10+</div>
                  <div className="font-body text-sm text-muted-foreground">AI Tools in Development</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-heading text-3xl font-bold text-primary">100%</div>
                  <div className="font-body text-sm text-muted-foreground">Commitment to Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
