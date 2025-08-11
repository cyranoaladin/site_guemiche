export default function ResourcesPage() {
  const items = [
    { title: "Fiche révision — Algèbre", desc: "Formules clés et astuces", href: "#" },
    { title: "Mémo circuits — Physique", desc: "Relations essentielles et exemples", href: "#" },
    { title: "Lectures utiles — SES", desc: "Articles et vidéos sélectionnés", href: "#" },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Ressources Gratuites</h1>
      <p className="mt-3 text-black/70">Apprenez avec des supports rapides et ciblés.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <a key={it.title} href={it.href} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow">
            <div className="text-lg font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-black/70">{it.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
