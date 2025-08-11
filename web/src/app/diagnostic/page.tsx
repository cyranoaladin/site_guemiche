"use client";
import Reveal from "@/components/Reveal";
import { useState } from "react";

type Answer = "A" | "B" | "C" | null;

const questions = [
  {
    q: "Quand tu apprends une notion nouvelle, tu préfères…",
    options: {
      A: "Voir un schéma ou une vidéo (visuel)",
      B: "Écouter une explication (auditif)",
      C: "Manipuler / faire un exercice (kinesthésique)",
    },
  },
  {
    q: "Pour mémoriser une formule, tu…",
    options: {
      A: "La réécris joliment avec couleurs",
      B: "La récites à voix haute",
      C: "L’utilises dans plusieurs exercices",
    },
  },
  {
    q: "Avant un contrôle, tu…",
    options: {
      A: "Fais une fiche synthèse",
      B: "Réécoutes le cours ou une vidéo",
      C: "Fais des sujets type/annales",
    },
  },
];

export default function DiagnosticPage() {
  const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const result = (() => {
    const counts = { A: 0, B: 0, C: 0 };
    answers.forEach((a) => {
      if (a) counts[a]++;
    });
    const max = Math.max(counts.A, counts.B, counts.C);
    if (max === 0) return null;
    if (max === counts.A) return { type: "Visuel", tip: "Utilise des schémas, couleurs, cartes mentales." };
    if (max === counts.B) return { type: "Auditif", tip: "Explique à voix haute, enregistre-toi, écoute des cours." };
    return { type: "Kinesthésique", tip: "Fais, manipule, multiplie les exercices et cas concrets." };
  })();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Diagnostic — Quel type d’apprenant es-tu ?</h1>
      <p className="mt-3 text-black/70">Réponds à 3 questions et reçois un conseil personnalisé pour mieux réussir.</p>

      <div className="mt-8 space-y-6">
        {questions.map((item, idx) => (
          <Reveal key={idx}>
            <div className="card p-5">
              <div className="font-medium">{idx + 1}. {item.q}</div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {Object.entries(item.options).map(([key, label]) => (
                  <button
                    key={key}
                    className={
                      "rounded-md border px-4 py-2 text-left transition " +
                      (answers[idx] === key ? "bg-black/5 border-black/20" : "hover:bg-black/5")
                    }
                    onClick={() => {
                      const next = [...answers];
                      next[idx] = key as Answer;
                      setAnswers(next);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button className="btn-primary" onClick={() => setSubmitted(true)}>Voir mon profil</button>
        <a className="btn-secondary" href="/inscription">Parler à un tuteur</a>
      </div>

      {submitted && result && (
        <Reveal>
          <div className="mt-8 card p-5">
            <div className="text-lg font-semibold">Profil dominant : {result.type}</div>
            <p className="mt-2 text-black/80">Conseil: {result.tip}</p>
          </div>
        </Reveal>
      )}
    </div>
  );
}
