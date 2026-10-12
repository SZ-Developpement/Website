import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import Section from "@/components/layout/Section";
import { miseAJour } from "@/lib/data/legal";
import type { LegalSection } from "@/types";

const ancre = (titre: string) =>
  titre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Gabarit des pages juridiques, dans la composition des Services et de la
 * Methode : une carte sombre (titre, date, sommaire) et des cartes blanches
 * (une par rubrique). `children` s'affiche en premiere carte (ex. identite).
 */
export default function LegalDocument({
  titre,
  accent,
  intro,
  sections,
  children,
}: {
  titre: string;
  /** mot passe en serif italique, apres le titre */
  accent: string;
  intro?: string;
  sections: LegalSection[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main id="main">
        <Section id="document" padding="pt-32 pb-16">
          <div className="grid gap-3 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            {/* carte sombre : colle en haut pendant la lecture des rubriques */}
            <header className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-foreground p-8 sm:p-10 lg:sticky lg:top-28">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex flex-col gap-4">
                <h1 className="text-balance text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-background">
                  {titre}{" "}
                  <span className="serif text-[1.2em] font-normal">
                    {accent}
                  </span>
                </h1>
                {intro && (
                  <p className="max-w-sm text-pretty text-sm leading-relaxed text-background/70">
                    {intro}
                  </p>
                )}
              </div>

              <nav
                aria-label="Sommaire"
                className="relative hidden flex-col gap-0.5 lg:flex"
              >
                {sections.map((section) => (
                  <a
                    key={section.titre}
                    href={`#${ancre(section.titre)}`}
                    className="rounded-lg py-1 text-[13px] text-background/60 transition-colors hover:text-background focus-visible:outline-background"
                  >
                    {section.titre}
                  </a>
                ))}
              </nav>

              <div className="relative mt-auto flex flex-wrap gap-2">
                <span className="rounded-full border border-background/20 px-3 py-1 text-xs font-medium text-background/70">
                  Mis à jour le {miseAJour}
                </span>
              </div>
            </header>

            {/* une carte blanche par rubrique, comme les etapes de la methode */}
            <div className="flex flex-col gap-3">
              {children}

              {sections.map((section) => (
                <section
                  key={section.titre}
                  id={ancre(section.titre)}
                  className="flex scroll-mt-28 flex-col gap-3 rounded-3xl border border-line bg-surface p-6 sm:p-8"
                >
                  <h2 className="text-[17px] font-bold tracking-[-0.02em]">
                    {section.titre}
                  </h2>
                  {section.paragraphes?.map((paragraphe) => (
                    <p
                      key={paragraphe}
                      className="text-pretty text-sm leading-relaxed text-muted"
                    >
                      {paragraphe}
                    </p>
                  ))}
                  {section.liste && (
                    <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-foreground/30">
                      {section.liste.map((element) => (
                        <li key={element} className="text-pretty">
                          {element}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer cta={false} />
    </>
  );
}
