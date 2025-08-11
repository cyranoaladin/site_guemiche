"use client";
import { useEffect, useState } from "react";

type Message = { id: string; from: string; to: string; text: string; createdAt: string; };

export default function EspaceElevePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  async function load() {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data.messages || []);
  }

  async function send() {
    if (!text.trim()) return;
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from: "eleve", to: "tuteur", text }),
    });
    setText("");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Espace Élève — Cockpit de progression</h1>
      <p className="mt-3 text-black/70">Prochaine session, objectif de la semaine, progression et messagerie.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Prochaine session</div>
          <p className="mt-2 text-sm text-black/80">Vendredi 17h — Mathématiques avec Mme Dupont</p>
          <a className="mt-3 inline-flex btn-secondary" href="/reserver">Rejoindre / Gérer</a>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Mon objectif</div>
          <p className="mt-2 text-sm text-black/80">Terminer le chapitre Dérivées et réussir 2 sujets d’annales.</p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/10">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-rose-500" />
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Mes derniers badges</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="badge">Automatismes</span>
            <span className="badge">Méthode</span>
            <span className="badge">Assiduité</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:col-span-2">
          <div className="mb-3 text-sm font-medium">Messagerie</div>
          <div className="h-64 overflow-y-auto rounded-md border p-3 text-sm">
            {messages.map((m) => (
              <div key={m.id} className={m.from === "eleve" ? "text-right" : "text-left"}>
                <div className="inline-block rounded-md bg-black/5 px-3 py-2 mb-2">{m.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 rounded-md border px-3 py-2" placeholder="Écrire un message…" />
            <button className="btn-primary" onClick={send}>Envoyer</button>
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Ressources suggérées</div>
          <ul className="mt-2 text-sm text-black/80 list-disc pl-5">
            <li>Fiche Dérivées (bientôt)</li>
            <li>Annales corrigées — Thème fonctions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
