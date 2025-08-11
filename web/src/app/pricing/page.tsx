export default function PricingPage() {
  const plans = [
    { name: "Découverte", price: "€25", detail: "/h", features: ["Séance 1:1", "Aide aux devoirs", "Suivi de progression"], badge: "Idéal pour commencer", pack: "pack_5h" },
    { name: "Standard", price: "€35", detail: "/h", features: ["Préparation examens", "Bilan hebdomadaire", "Créneaux prioritaires"], badge: "Le plus populaire", pack: "pack_10h" },
    { name: "Premium", price: "€45", detail: "/h", features: ["Coaching intensif", "Examens blancs", "Points parents"], badge: "Performance maximale", pack: "pack_20h" },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Tarifs & Formules</h1>
      <p className="mt-3 text-black/70">Des tarifs transparents et des formules flexibles.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            {p.badge && (
              <div className="absolute -top-3 left-4 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium">
                {p.badge}
              </div>
            )}
            <div className="text-lg font-semibold">{p.name}</div>
            <div className="mt-2 text-3xl font-bold">{p.price} <span className="text-base font-normal text-black/60">{p.detail}</span></div>
            <ul className="mt-4 space-y-2 text-sm text-black/80">
              {p.features.map((f) => (<li key={f}>• {f}</li>))}
            </ul>
            <a href={`/reserver?pack=${encodeURIComponent((p as any).pack)}`} className="mt-6 inline-flex w-full justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5">Choisir</a>
          </div>
        ))}
      </div>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="text-left text-black/60">
              <th className="py-3">Fonctionnalités</th>
              {plans.map((p) => (
                <th key={p.name} className="py-3">{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Séances 1:1", idx: [true, true, true] },
              { label: "Préparation examens", idx: [false, true, true] },
              { label: "Examens blancs", idx: [false, false, true] },
              { label: "Bilan hebdomadaire", idx: [false, true, true] },
              { label: "Points parents", idx: [false, false, true] },
            ].map((row) => (
              <tr key={row.label} className="border-t border-black/10">
                <td className="py-3 text-black/80">{row.label}</td>
                {row.idx.map((ok, i) => (
                  <td key={i} className="py-3">
                    {ok ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                    ) : (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-red-400">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
