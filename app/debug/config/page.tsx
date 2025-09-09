// app/debug/config/page.tsx
import { SITE_CONFIG } from "../../../lib/config/master-config";

export default function Page() {
  const { name, tagline, products, colors } = SITE_CONFIG;
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <div style={{ marginTop: 16 }}>
        <strong>Brand colors:</strong>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <div style={{ width: 40, height: 40, background: colors.primary }} title="primary" />
          <div style={{ width: 40, height: 40, background: colors.secondary }} title="secondary" />
          <div style={{ width: 40, height: 40, background: colors.white, border: "1px solid #ccc" }} title="white" />
        </div>
      </div>
      <ul style={{ marginTop: 24 }}>
        <li><a href={products.ameboGist.url} target="_blank">AmeboGist</a> — {products.ameboGist.status}</li>
        <li><a href={products.eduCenter.url} target="_blank">EduCenter</a> — {products.eduCenter.status}</li>
        <li><a href={products.planAI.url}>PlanAI</a> — {products.planAI.status}</li>
      </ul>
    </main>
  );
}
