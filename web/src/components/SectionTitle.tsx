export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string; }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-black/70 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-24 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg, var(--blue-fr), var(--red-fr))' }} />
    </div>
  );
}
