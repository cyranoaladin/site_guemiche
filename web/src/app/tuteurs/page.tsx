"use client";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { useMemo, useState } from "react";

const tutors = [
  {
    slug: "mme-dupont",
    name: "Mme Dupont",
    quote: "La réussite se construit séance après séance.",
    badges: ["Gestion du stress", "Pédagogie active"],
    subject: "Mathématiques",
    level: "Lycée",
    available: "Soir",
  },
  {
    slug: "m-bernard",
    name: "M. Bernard",
    quote: "Chaque erreur est un indice pour progresser.",
    badges: ["Spécialiste Méthodes", "Prépa examens"],
    subject: "Physique",
    level: "Lycée",
    available: "Week-end",
  },
];

export default function TuteursPage() {
  const [subject, setSubject] = useState("Tous");
  const [level, setLevel] = useState("Tous");
  const [avail, setAvail] = useState("Tous");

  const filtered = useMemo(() =>
    tutors.filter(t => (subject === "Tous" || t.subject === subject) && (level === "Tous" || t.level === level) && (avail === "Tous" || t.available === avail)),
    [subject, level, avail]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Nos tuteurs</h1>
      <p className="mt-3 max-w-3xl text-black/70">Des professeurs engagés, bienveillants et exigeants, avec une approche moderne et efficace.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <select className="rounded-md border px-3 py-2" value={subject} onChange={(e) => setSubject(e.target.value)}>
          {['Tous', 'Mathématiques', 'Physique', 'SES'].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <select className="rounded-md border px-3 py-2" value={level} onChange={(e) => setLevel(e.target.value)}>
          {['Tous', 'Collège', 'Lycée', 'CPGE'].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <select className="rounded-md border px-3 py-2" value={avail} onChange={(e) => setAvail(e.target.value)}>
          {['Tous', 'Soir', 'Week-end'].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((t) => (
          <Reveal key={t.slug}>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-rose-100 text-sm font-semibold">
                  {t.name.split(' ').map(p => p[0]).join('')}
                </div>
                <div>
                  <div className="text-lg font-semibold">{t.name}</div>
                  <div className="text-xs text-black/60">{t.subject} · {t.level} · {t.available}</div>
                </div>
              </div>
              <p className="mt-2 text-black/80">“{t.quote}”</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.badges.map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link href={`/tuteurs/${t.slug}`} className="btn-secondary">Découvrir</Link>
                <Link href="/reserver" className="btn-primary">Réserver un créneau</Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
