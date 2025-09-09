import { EDUCENTER } from "@/lib/config/educenter.config";

export default function Page() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", background: "#FFFFFF" }}>
      <h1 style={{ color: "#00008B", marginBottom: 4 }}>{EDUCENTER.product.name}</h1>
      <p>{EDUCENTER.product.tagline}</p>
      <ul style={{ marginTop: 16 }}>
        {EDUCENTER.tracks.map(t => (
          <li key={t.code} style={{ marginBottom: 12 }}>
            <strong>{t.title}</strong> — {t.outcome}
            <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {t.ctas.map((c, i) => (
                <a key={i} href={c.href} style={{ background: "#FFC107", padding: "6px 10px", borderRadius: 8, color: "#000", textDecoration: "none" }}>
                  {c.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
