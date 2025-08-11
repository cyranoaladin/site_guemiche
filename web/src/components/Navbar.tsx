"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/cours", label: "Cours" },
  { href: "/diagnostic", label: "Diagnostic" },
  { href: "/tuteurs", label: "Tuteurs" },
  { href: "/inscription", label: "S’inscrire" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/reserver", label: "Réserver" },
  { href: "/disponibilites", label: "Disponibilités" },
  { href: "/ressources", label: "Ressources" },
  { href: "/actualites", label: "Actualités" },
  { href: "/faq", label: "FAQ" },
  { href: "/quiz", label: "Quiz" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/espace-eleve", label: "Élève" },
  { href: "/espace-parent", label: "Parent" },
  { href: "/espace-tuteur", label: "Tuteur" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Objectif la Mention au Bac
        </Link>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={"nav-link"}
                  data-active={active}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/diagnostic" className="btn-secondary px-4 py-2">Bilan gratuit</Link>
            <Link href="/inscription" className="ml-1 btn-primary px-4 py-2">Commencer</Link>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
