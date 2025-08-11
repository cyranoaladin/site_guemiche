export default function EspaceTuteurPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Espace Tuteur — Hub d’impact</h1>
      <p className="mt-3 text-black/70">Planning, dossiers élèves et feedbacks post‑cours.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Planning</div>
          <ul className="mt-2 text-sm text-black/80">
            <li>Vendredi 17h — Élève A</li>
            <li>Lundi 18h — Élève B</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Dossiers élèves</div>
          <ul className="mt-2 text-sm text-black/80">
            <li>Élève A — Objectif bac mention Bien</li>
            <li>Élève B — Consolider méthode</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-medium">Feedback post‑cours</div>
          <p className="mt-2 text-sm text-black/80">Renseigner après chaque séance les progrès et axes de travail.</p>
        </div>
      </div>
    </div>
  );
}
