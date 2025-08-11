"use client";
import { useState } from "react";

const questions = [
  {
    q: "Dérivée de f(x) = x^2 ?",
    options: ["x", "2x", "x^3"],
    answer: 1,
  },
  {
    q: "La loi d’Ohm relie :",
    options: ["Force et masse", "Tension, résistance et intensité", "Vitesse et temps"],
    answer: 1,
  },
];

export default function QuizPage() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[idx];

  const pick = (i: number) => {
    if (i === current.answer) setScore((s) => s + 1);
    const next = idx + 1;
    if (next >= questions.length) setDone(true);
    else setIdx(next);
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Quiz rapide</h1>
      {!done ? (
        <div className="mt-6 rounded-xl border border-black/10 bg-white p-6">
          <div className="text-lg font-medium">{current.q}</div>
          <div className="mt-4 grid gap-2">
            {current.options.map((opt, i) => (
              <button
                key={i}
                className="rounded-md border border-black/10 bg-white px-4 py-2 text-left hover:bg-black/5"
                onClick={() => pick(i)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-black/10 bg-white p-6">
          <div className="text-lg font-medium">Votre score : {score} / {questions.length}</div>
        </div>
      )}
    </div>
  );
}
