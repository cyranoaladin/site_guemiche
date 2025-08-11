export default function AvailabilityPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_EMBED_URL || '';
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Disponibilités</h1>
      <p className="mt-3 text-black/70">Réservez un créneau qui vous convient. Pour d’autres options, contactez‑nous.</p>
      <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
        {calendarUrl ? (
          <iframe
            src={calendarUrl}
            className="h-[70vh] w-full rounded-md"
            loading="lazy"
          />
        ) : (
          <div className="text-sm text-black/60">Calendrier bientôt disponible. Merci d’utiliser le formulaire de contact.</div>
        )}
      </div>
    </div>
  );
}
