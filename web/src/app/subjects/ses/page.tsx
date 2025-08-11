import Reveal from "@/components/Reveal";
import { AlertTriangle, Award, Target } from "lucide-react";

export const metadata = {
  title: "SES — Objectifs, compétences et exemples",
  description:
    "Cours de SES (programme français) : objectifs par chapitre, compétences évaluées et erreurs fréquentes, avec mini‑leçons et exemples.",
};

export default function SesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">SES — Sciences Économiques et Sociales</h1>
      <p className="mt-3 max-w-3xl text-black/70">Comprendre les modèles économiques et les phénomènes sociaux avec des explications structurées et des exercices appliqués.</p>

      <div className="mt-6 flex flex-wrap gap-2 text-xs text-black/60">
        <span className="badge">Lycée</span>
        <span className="badge">Première</span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Reveal>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><Target size={16} /> Objectifs du chapitre</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Identifier les mécanismes de marché et leurs limites</li>
              <li>• Interpréter des données chiffrées et graphiques</li>
              <li>• Construire un raisonnement structuré et sourcé</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><Award size={16} /> Compétences visées</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Définir et mobiliser les concepts clés</li>
              <li>• Analyser un document statistique</li>
              <li>• Argumenter et conclure de façon rigoureuse</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><AlertTriangle size={16} /> Erreurs fréquentes</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Confusion corrélation/causalité</li>
              <li>• Lectures hâtives de graphiques</li>
              <li>• Oublis de définitions précises</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold">Mini‑leçon</h2>
          <div className="mt-3 rounded-lg border border-black/10 bg-white p-4 text-black/80">
            <p><strong>Offre et demande.</strong> L’équilibre de marché se situe à l’intersection des courbes d’offre et de demande. Un choc de demande négatif tend à diminuer le prix et la quantité d’équilibre.</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold">Exemple guidé</h2>
          <div className="mt-3 space-y-2 text-black/80">
            <p><strong>Problème.</strong> Si la demande diminue tandis que l’offre reste constante, que devient le prix d’équilibre ?</p>
            <p><strong>Solution.</strong> Le prix d’équilibre baisse en général et la quantité d’équilibre diminue.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/inscription" className="btn-primary">S’inscrire pour ce chapitre</a>
            <a href="#" className="btn-secondary" aria-disabled>Fiche PDF (bientôt)</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
