import Link from "next/link";

const stars = [
  { slug: "mme-dupont", name: "Mme Dupont", quote: "La réussite se construit séance après séance.", badges: ["Gestion du stress", "Pédagogie active"] },
  { slug: "m-bernard", name: "M. Bernard", quote: "Chaque erreur est un indice pour progresser.", badges: ["Spécialiste Méthodes", "Prépa examens"] },
  { slug: "mme-lefebvre", name: "Mme Lefebvre", quote: "Rendre les maths intuitives et concrètes.", badges: ["Approche visuelle", "Lycée"] },
];

export default function TutorStars() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {stars.map((t) => (
        <div key={t.slug} className="card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-rose-100 text-sm font-semibold">
              {t.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-black/60">Tuteur star</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-black/80">“{t.quote}”</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.badges.map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <Link href={`/tuteurs/${t.slug}`} className="btn-secondary">Découvrir</Link>
            <Link href="/reserver" className="btn-primary">Réserver</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
