import Reveal from '@/components/Reveal';
import 'katex/dist/katex.min.css';
import { AlertTriangle, Award, Target } from 'lucide-react';
import { BlockMath } from 'react-katex';

export const metadata = {
  title: 'Mathématiques — Objectifs, compétences et exemples',
  description: 'Cours et exercices de mathématiques (programme français) avec objectifs, compétences visées et erreurs fréquentes.',
};

export default function MathPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Mathématiques</h1>
      <p className="mt-3 max-w-3xl text-black/70">Bases solides et raisonnement efficaces en algèbre, géométrie, analyse et probabilités — alignés sur le programme français.</p>

      <div className="mt-6 flex flex-wrap gap-2 text-xs text-black/60">
        <span className="badge">Collège</span>
        <span className="badge">Lycée</span>
        <span className="badge">CPGE (sur demande)</span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Reveal>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><Target size={16} /> Objectifs du chapitre</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Comprendre les définitions et propriétés clés</li>
              <li>• Savoir appliquer les méthodes pas à pas</li>
              <li>• Maîtriser les automatismes utiles aux épreuves</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><Award size={16} /> Compétences visées</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Calcul algébrique et manipulation d’expressions</li>
              <li>• Étude de fonctions et variations</li>
              <li>• Résolution d’équations et inéquations</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><AlertTriangle size={16} /> Erreurs fréquentes</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Confusions de priorités de calcul</li>
              <li>• Mauvaise dérivation des puissances</li>
              <li>• Oubli des hypothèses des formules</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold">Mini‑leçon</h2>
          <p className="mt-2 text-black/80">Dérivée d’une fonction polynomiale :</p>
          <div className="mt-3 rounded-lg border border-black/10 bg-white p-4">
            <BlockMath math={'\\frac{d}{dx}(ax^n) = a n x^{n-1}'} />
          </div>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold">Exemple guidé</h2>
          <div className="mt-3 space-y-3 text-black/80">
            <p><strong>Problème.</strong> Calculer la dérivée de f(x) = 3x^3 − 2x^2 + x − 5.</p>
            <p><strong>Solution.</strong></p>
            <ol className="ml-4 list-decimal space-y-2">
              <li>Par linéarité : f&apos;(x) = 3(3x^2) − 2(2x) + 1 − 0.</li>
              <li>Simplification : f&apos;(x) = 9x^2 − 4x + 1.</li>
            </ol>
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
