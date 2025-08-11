"use client";
import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const json = await res.json();
    setStatus(res.ok ? "Subscribed!" : json.error || "Error");
  };
  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Newsletter</h1>
      <p className="mt-2 text-black/70">Recevez chaque mois des conseils d’étude et des ressources gratuites.</p>
      <form onSubmit={onSubmit} className="mt-6 flex gap-2">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="vous@exemple.com" className="w-full rounded-md border border-black/10 bg-white p-3 outline-none focus:ring-2 focus:ring-black/20" />
        <button className="rounded-md bg-black px-4 text-white">S’abonner</button>
      </form>
      {status && <p className="mt-2 text-sm text-black/70">{status}</p>}
    </div>
  );
}
