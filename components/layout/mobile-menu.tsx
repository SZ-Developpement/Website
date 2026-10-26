"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Lien = { label: string; href: string };

/**
 * Menu de la navbar sous le breakpoint `sm`. Le bouton vit dans la pastille
 * noire, le panneau s'ouvre dessous, ancre sur le <header> fixe.
 */
export default function MobileMenu({ links }: { links: readonly Lien[] }) {
  const [ouvert, setOuvert] = useState(false);
  const panneauId = useId();

  // Echap ferme le panneau, comme attendu pour un menu deroulant
  useEffect(() => {
    if (!ouvert) return;
    const fermer = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    window.addEventListener("keydown", fermer);
    return () => window.removeEventListener("keydown", fermer);
  }, [ouvert]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={ouvert}
        aria-controls={panneauId}
        aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOuvert((v) => !v)}
        className="flex size-9 items-center justify-center rounded-full bg-surface text-foreground transition-opacity hover:opacity-90 focus-visible:outline-background"
      >
        {ouvert ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
      </button>

      {ouvert && (
        <div
          id={panneauId}
          className="absolute left-1/2 top-full mt-2 flex w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 flex-col gap-1 rounded-3xl bg-foreground p-2 shadow-[0_6px_24px_rgba(0,0,0,0.18)]"
        >
          {links.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              onClick={() => setOuvert(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-background/70 transition-colors hover:bg-background/10 hover:text-background focus-visible:outline-background"
            >
              {lien.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOuvert(false)}
            className="mt-1 rounded-full bg-surface px-4 py-3 text-center text-sm font-bold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-background"
          >
            Démarrer un projet
          </Link>
        </div>
      )}
    </div>
  );
}
