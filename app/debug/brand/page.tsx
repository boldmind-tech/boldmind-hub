export default function BrandDebug() {
  return (
    <main className="mx-auto max-w-3xl p-6 font-sans">
      <h1 className="text-2xl font-bold text-brand-primary">BoldMind Brand Tokens</h1>
      <p className="mt-1">Locked colors via Tailwind: primary, secondary, white.</p>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-brand-primary p-4 text-white shadow-soft">
          <div className="text-sm opacity-90">brand.primary</div>
          <div className="mt-2 text-lg font-semibold">#00008B</div>
        </div>
        <div className="rounded-2xl bg-brand-secondary p-4 text-black shadow-soft">
          <div className="text-sm opacity-90">brand.secondary</div>
          <div className="mt-2 text-lg font-semibold">#FFC107</div>
        </div>
        <div className="rounded-2xl border border-brand-primary bg-brand-white p-4 text-black shadow-soft">
          <div className="text-sm opacity-90">brand.white</div>
          <div className="mt-2 text-lg font-semibold">#FFFFFF</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-lg bg-brand-primary px-4 py-2 text-white">Primary Button</button>
        <button className="rounded-lg bg-brand-secondary px-4 py-2 text-black">Secondary Button</button>
        <button className="rounded-lg border border-brand-primary bg-brand-white px-4 py-2 text-black">
          Outline Button
        </button>
      </div>
    </main>
  );
}
