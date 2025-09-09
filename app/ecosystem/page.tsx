// app/ecosystem/page.tsx
import { SITE_CONFIG } from "@/lib/config/master-config";
import { statusFromRepo, planaiModules, ProductStatus } from "@/lib/config/derive";

function StatusBadge({ status }: { status: ProductStatus }) {
  const { colors } = SITE_CONFIG;
  const bg =
    status === "live" ? colors.primary :
    status === "deployed" ? colors.secondary :
    colors.white;
  const fg = status === "development" ? "#000" : "#fff";
  const border = status === "development" ? `1px solid ${colors.primary}` : "none";
  return (
    <span style={{
      background: bg, color: fg, border,
      fontSize: 12, padding: "2px 8px", borderRadius: 999
    }}>
      {status}
    </span>
  );
}

function Card({
  title, description, href, status, children,
}: { title: string; description: string; href: string; status: ProductStatus; children?: React.ReactNode; }) {
  const { colors } = SITE_CONFIG;
  return (
    <div style={{
      border: `1px solid ${colors.primary}`,
      borderRadius: 16, padding: 16, background: "#fff"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p style={{ marginTop: 4 }}>{description}</p>
      {children}
      <a href={href} style={{
        display: "inline-block", marginTop: 12, textDecoration: "none",
        background: colors.secondary, color: "#000", padding: "8px 12px", borderRadius: 8
      }}>
        Open
      </a>
    </div>
  );
}

export default function EcosystemPage() {
  const { products, colors, name, tagline } = SITE_CONFIG;

  const agStatus  = statusFromRepo("ambeo-gist");
  const eduStatus = statusFromRepo("educenter-frontend");
  const paiStatus = statusFromRepo("ai-receptionist-platform");
  const modules   = planaiModules();

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", background: colors.white }}>
      <h1 style={{ marginBottom: 4 }}>{name} — Ecosystem</h1>
      <p style={{ marginTop: 0 }}>{tagline}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 24 }}>
        <Card
          title={products.ameboGist.name}
          description={products.ameboGist.description}
          href={products.ameboGist.url}
          status={agStatus}
        />
        <Card
          title={products.eduCenter.name}
          description={products.eduCenter.description}
          href={products.eduCenter.url}
          status={eduStatus}
        />
        <Card
          title={products.planAI.name}
          description={products.planAI.description}
          href="/planai"
          status={paiStatus}
        >
          <div style={{ marginTop: 8 }}>
            <strong>Suite</strong>
            <ul style={{ margin: "8px 0 0 16px" }}>
              {modules.map(m => (
                <li key={m.slug} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  <StatusBadge status={m.status} />
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </main>
  );
}
