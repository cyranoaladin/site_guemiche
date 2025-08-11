export default function EspaceParentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Espace Parent — Tableau de bord confiance</h1>
      <p className="mt-3 text-black/70">Vue simplifiée : sessions à venir, suivi des heures, feedbacks du tuteur.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Sessions à venir</div>
          <ul className="mt-2 text-sm text-black/80">
            <li>Vendredi 17h — Mathématiques</li>
            <li>Lundi 18h — Physique</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Heures consommées</div>
          <p className="mt-2 text-sm text-black/80">Pack 10h — 4h utilisées</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Feedbacks tuteur</div>
          <ul className="mt-2 text-sm text-black/80">
            <li>Progrès solides en dérivées. Confiance à renforcer sur la rédaction.</li>
            <li>À travailler : automatisme sur équations du 2e degré.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
