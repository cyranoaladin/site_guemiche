import Reveal from "@/components/Reveal";
import { AlertTriangle, Award, Target } from "lucide-react";

export const metadata = {
  title: "Sciences Physiques — Objectifs, compétences et exemples",
  description:
    "Cours et exercices de physique-chimie (programme français) avec objectifs, compétences visées et erreurs fréquentes.",
};

export default function PhysicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Sciences Physiques</h1>
      <p className="mt-3 max-w-3xl text-black/70">Notions clarifiées par des expériences, des schémas et des exercices : mécanique, électricité, optique…</p>

      <div className="mt-6 flex flex-wrap gap-2 text-xs text-black/60">
        <span className="badge">Lycée</span>
        <span className="badge">Terminale</span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Reveal>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><Target size={16} /> Objectifs du chapitre</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Modéliser correctement les situations physiques</li>
              <li>• Appliquer les lois fondamentales avec rigueur</li>
              <li>• Exploiter les unités et les ordres de grandeur</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><Award size={16} /> Compétences visées</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Analyse vectorielle et bilans de forces</li>
              <li>• Lois de l’électricité (Ohm, Kirchhoff)</li>
              <li>• Exploitation de graphiques et incertitudes</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-5">
            <div className="flex items-center gap-2 font-medium"><AlertTriangle size={16} /> Erreurs fréquentes</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li>• Confusion tension/intensité/potential</li>
              <li>• Oubli des signes en loi des mailles</li>
              <li>• Unités non homogènes dans les calculs</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold">Mini‑leçon</h2>
          <div className="mt-3 rounded-lg border border-black/10 bg-white p-4 text-black/80">
            <p><strong>Loi d’Ohm.</strong> La relation U = R × I relie la tension U (en volt), la résistance R (en ohm) et l’intensité I (en ampère) dans un dipôle ohmique.</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold">Exemple guidé</h2>
          <div className="mt-3 space-y-2 text-black/80">
            <p><strong>Problème.</strong> Pour R = 10 Ω et I = 0,2 A, calculer U.</p>
            <p><strong>Solution.</strong> U = R × I = 10 × 0,2 = 2 V.</p>
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
