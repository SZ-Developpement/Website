import Link from "next/link";
import { GitHubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import BlocCTA from "../others/bloc_cta";
import { navLinks, social } from "@/lib/data/site";

const annee = new Date().getFullYear();

/* on range la reference au composant, pas <GitHubIcon /> : un element deja
   rendu ne peut plus recevoir de props, et React refuse de l'instancier */
const socialLinks = [
  { label: "GitHub", Icon: GitHubIcon, href: social.github },
  { label: "LinkedIn", Icon: LinkedinIcon, href: social.linkedin },
];

export default function Footer({ cta = true }: { cta?: boolean }) {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pb-6">
      {cta && <BlocCTA />}

      {/* Footer */}
      <div className="flex flex-col gap-8 rounded-3xl bg-surface p-8">
        {/* Contenu Footer */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Texte de présentation */}
          <div className="flex max-w-xs flex-col gap-2">
            {/* pas de <h1> ici : il n'y en a qu'un par page, c'est le titre
                  du hero. Un second brouille le plan du document. */}
            <span className="text-base font-bold tracking-tight">SZ Dev</span>

            {/* Description */}
            <p className="text-pretty text-[13px] leading-relaxed text-muted">
              Applications web et mobile, de l&apos;architecture au déploiement,
              sans sous-traiter un maillon.
            </p>

            {/* Réseaux sociaux : cible tactile de 40px, icone de 16px */}
            <div className="-ml-2.5 flex gap-0.5 pt-1">
              {socialLinks.map(({ label, Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (nouvel onglet)`}
                  className="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-foreground"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Listes des pages */}
          <div className="flex gap-16">
            <Colonne titre="Navigation">
              {navLinks.map((lien) => (
                <Lien key={lien.href} href={lien.href}>
                  {lien.label}
                </Lien>
              ))}
            </Colonne>

            <Colonne titre="Informations">
              <Lien href="/mentions-legales">Mentions légales</Lien>
              <Lien href="/politique-de-confidentialite">
                Confidentialité
              </Lien>
              <Lien href="/conditions-generales">CGV</Lien>
              <Lien href={`mailto:${social.email}`}>{social.email}</Lien>
            </Colonne>
          </div>
        </div>

        {/* Copyright line */}
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {annee} SZ Dev. Tous droits réservés.</span>
          <span>
            Conçu et développé par{" "}
            <Link
              href="/"
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              SZ Dev
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}

function Colonne({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <nav aria-label={titre} className="flex flex-col gap-1">
      <h3 className="pb-1 text-[13px] font-semibold">{titre}</h3>
      <ul className="flex flex-col">{children}</ul>
    </nav>
  );
}

function Lien({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    "inline-block py-1.5 text-[13px] text-muted transition-colors hover:text-foreground";

  return (
    <li>
      {href.startsWith("mailto:") ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}
