export default function NewsPage() {
  const posts = [
    { title: "Stages intensifs de rentrée", date: "2025-09-01", excerpt: "Places limitées pour la préparation aux examens." },
    { title: "Nouveaux kits d’expériences en physique", date: "2025-10-10", excerpt: "Manipulations pour mieux comprendre les notions." },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Actualités</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-sm text-black/60">{new Date(p.date).toLocaleDateString()}</div>
            <h2 className="mt-1 text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-black/70">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
