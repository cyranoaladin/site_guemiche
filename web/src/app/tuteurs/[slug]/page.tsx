import Link from "next/link";

const data = {
  "mme-dupont": {
    name: "Mme Dupont",
    title: "Professeure de mathématiques",
    approach: "Je rends les notions intuitives par des analogies, des schémas et un entraînement ciblé.",
    specialties: ["Dérivées", "Probabilités", "Méthode"],
  },
  "m-bernard": {
    name: "M. Bernard",
    title: "Professeur de physique-chimie",
    approach: "Rigueur et bienveillance, avec des bilans réguliers et des conseils actionnables.",
    specialties: ["Électricité", "Mécanique", "Graphiques"],
  },
} as const;

export default function TutorProfile({ params }: { params: { slug: keyof typeof data; }; }) {
  const tutor = data[params.slug] || { name: "Tuteur", title: "", approach: "", specialties: [] };
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:sticky md:top-20 md:h-fit">
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-rose-100 text-sm font-semibold">
                {tutor.name.split(' ').map(p => p[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{tutor.name}</div>
                <div className="text-xs text-black/60">{tutor.title}</div>
              </div>
            </div>
            <div className="mt-4 aspect-video rounded-md glass flex items-center justify-center text-sm text-black/70">Vidéo de présentation (30s) — bientôt</div>
            <Link href="/reserver" className="mt-4 inline-flex btn-primary">Réserver une session</Link>
          </div>
          <div className="mt-4 card p-5">
            <div className="text-sm font-medium">Infos clés</div>
            <ul className="mt-2 text-sm text-black/80 list-disc pl-5">
              <li>Matières: Math/Physique</li>
              <li>Expérience: 8+ ans</li>
              <li>Tarif: à partir de 25€/h</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="card p-6">
            <div className="text-lg font-semibold">Mon approche pédagogique</div>
            <p className="mt-2 text-black/80">{tutor.approach}</p>
          </div>
          <div className="mt-6 card p-6">
            <div className="text-lg font-semibold">Mes spécialités</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tutor.specialties.map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-6 card p-6">
            <div className="text-lg font-semibold">Feedbacks d’élèves</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>“Exemples clairs, j’ai gagné en confiance.” — Terminale</li>
              <li>“Très bonne méthodologie, progrès rapides.” — Première</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: keyof typeof data; }; }) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const tutor = data[params.slug];
  const title = tutor ? `${tutor.name} — ${tutor.title} | Objectif la Mention au Bac` : 'Tuteur | Objectif la Mention au Bac';
  const description = tutor ? tutor.approach : 'Découvrez nos tuteurs d’exception et leur approche pédagogique.';
  const url = `${base}/tuteurs/${params.slug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    alternates: { canonical: url },
  } as const;
}
