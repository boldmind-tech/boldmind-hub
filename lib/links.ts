// lib/links.ts
export type ProductKey = "hub" | "ameboGist" | "eduCenter" | "planAI";

const env = (k: string) => (process.env as any)[k] as string | undefined;

const DEV = {
  hub:        () => env("NEXT_PUBLIC_HUB_URL")        || "http://localhost:3000",
  ameboGist:  () => env("NEXT_PUBLIC_AMEBOGIST_URL")  || "http://localhost:3001",
  eduCenter:  () => env("NEXT_PUBLIC_EDUCENTER_URL")  || "http://localhost:5173",
  planAI:     () => env("NEXT_PUBLIC_PLANAI_URL")     || "/planai",
};

const PROD = {
  hub:        () => env("NEXT_PUBLIC_HUB_URL")        || "https://boldmind.ng",
  ameboGist:  () => env("NEXT_PUBLIC_AMEBOGIST_URL")  || "https://amebogist.ng",
  eduCenter:  () => env("NEXT_PUBLIC_EDUCENTER_URL")  || "https://educenter.com.ng",
  planAI:     () => env("NEXT_PUBLIC_PLANAI_URL")     || "/planai",
};

/** Toggle: use local links in dev if explicitly enabled, or when not production. */
const useLocal =
  (env("NEXT_PUBLIC_LOCAL_LINKS") || "").toLowerCase() === "true" ||
  process.env.NODE_ENV !== "production";

const MAP = useLocal ? DEV : PROD;

/** Basic product URL (no UTMs). */
export function productUrl(key: ProductKey): string {
  return (MAP[key] && MAP[key]()) as string;
}

/** Product URL with optional UTM params appended. */
export function productHref(
  key: ProductKey,
  utm?: Partial<{ source: string; medium: string; campaign: string }>
): string {
  const base = productUrl(key);
  if (!utm) return base;

  const url = new URL(base, base.startsWith("http") ? undefined : "http://dummy");
  if (utm.source) url.searchParams.set("utm_source", utm.source);
  if (utm.medium) url.searchParams.set("utm_medium", utm.medium);
  if (utm.campaign) url.searchParams.set("utm_campaign", utm.campaign);

  const href = url.toString();
  // strip dummy origin for relative paths like /planai
  return base.startsWith("http") ? href : href.replace("http://dummy", "");
}
