import Link from "next/link";

export default function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappUrl = whatsapp ? `https://wa.me/${whatsapp}` : "https://wa.me/";
  const contactEmail = process.env.ADMIN_EMAIL || "contact@example.com";
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:px-8 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">Objectif la Mention au Bac</div>
          <p className="mt-2 text-sm text-black/70">Site dédié à la réussite de l’épreuve de mathématiques au baccalauréat.</p>
        </div>
        <div>
          <div className="text-sm font-medium">Disciplines</div>
          <ul className="mt-2 space-y-2 text-sm text-black/70">
            <li><Link className="hover:underline" href="/subjects/math">Mathématiques</Link></li>
            <li><Link className="hover:underline" href="/subjects/physics">Sciences Physiques</Link></li>
            <li><Link className="hover:underline" href="/subjects/ses">SES</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Informations</div>
          <ul className="mt-2 space-y-2 text-sm text-black/70">
            <li><Link className="hover:underline" href="/tarifs">Tarifs</Link></li>
            <li><Link className="hover:underline" href="/disponibilites">Disponibilités</Link></li>
            <li><Link className="hover:underline" href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Contact</div>
          <ul className="mt-2 space-y-2 text-sm text-black/70">
            <li><Link className="hover:underline" href="/inscription">S’inscrire / Contact</Link></li>
            <li><a className="hover:underline" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a className="hover:underline" href={`mailto:${contactEmail}`}>Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-black/60 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} A.G Objectif la Mention au Bac — Tous droits réservés</p>
          <div className="space-x-4">
            <Link className="hover:underline" href="/privacy">Confidentialité</Link>
            <Link className="hover:underline" href="/terms">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
