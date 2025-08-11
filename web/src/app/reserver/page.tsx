"use client";
import { useState } from "react";

export default function ReserverPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function onReserve(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, pack: "pack_5h" }),
      });
      if (!res.ok) throw new Error("Erreur réseau");
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setStatus("Impossible de créer la session de paiement.");
      }
    } catch (err) {
      setStatus("Une erreur est survenue. Réessayez.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Réserver un créneau</h1>
      <p className="mt-3 text-black/70">Choisissez un pack d’heures et réservez. Vous recevrez un email de confirmation.</p>

      <form onSubmit={onReserve} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">Nom et prénom</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Pack</label>
          <select className="mt-1 w-full rounded-md border px-3 py-2" defaultValue="pack_5h">
            <option value="pack_5h">Pack 5h (dégressif)</option>
            <option value="pack_10h">Pack 10h (dégressif)</option>
            <option value="pack_20h">Pack 20h (dégressif)</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">Procéder au paiement sécurisé</button>
        {status && <p className="text-sm text-red-600">{status}</p>}
      </form>
    </div>
  );
}
