import Reveal from "@/components/Reveal";
import { BookOpen, GraduationCap, Sigma } from "lucide-react";

export const metadata = {
  title: "Nos cours — Objectif la Mention au Bac",
  description: "Parcours de Première et Terminale, chapitres et ressources pour exceller en mathématiques.",
};

export default function CoursPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Nos cours</h1>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Cours de Première</h2>
        <p className="mt-2 text-black/70">Les cours pour la classe de Première seront bientôt disponibles.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i}>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <BookOpen size={16} /> Chapitre {i}
                  <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-700">À venir</span>
                </div>
                <div className="mt-1 font-medium">Titre du chapitre</div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded bg-black/10">
                  <div className="h-full bg-[var(--blue-fr)]" style={{ width: `${30 * i}%` }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Cours de Terminale</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={`t-${i}`}>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <Sigma size={16} /> Chapitre {i}
                </div>
                <div className="mt-1 font-medium">Titre du chapitre</div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded bg-black/10">
                  <div className="h-full bg-[var(--blue-fr)]" style={{ width: `${25 * i}%` }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Autres matières</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card p-5">
              <div className="flex items-center gap-2 text-sm text-black/60">
                <GraduationCap size={16} /> Physique‑Chimie — Terminale
                <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-700">À venir</span>
              </div>
              <div className="mt-2 text-sm text-black/70">Contenu à venir</div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-5">
              <div className="flex items-center gap-2 text-sm text-black/60">
                <GraduationCap size={16} /> SES — Première
                <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-700">À venir</span>
              </div>
              <div className="mt-2 text-sm text-black/70">Contenu à venir</div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
