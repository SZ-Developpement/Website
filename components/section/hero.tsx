import Link from "next/link";
import Section from "@/components/layout/Section";
import { currentStatus } from "@/lib/data/site";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden"
      padding="pt-28 pb-20"
      contentClassName="flex flex-col items-center gap-7 text-center"
    >
      {/* Grille + halo : le fond du hero, et de lui seul */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-background/80 motion-safe:animate-fade-in"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.028) 1px, transparent 1px), radial-gradient(ellipse 70% 60% at 50% 0%, #fafafa 0%, transparent 72%)",
          backgroundSize: "76px 100%, 100% 100%",
        }}
      />

      {/* Badge du statut */}
      <span className="relative flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-[12px] font-semibold text-muted">
        <span
          aria-hidden
          className="size-1.5 rounded-full motion-safe:animate-pulse"
          style={{ backgroundColor: currentStatus.color }}
        />
        {currentStatus.textProject}
      </span>

      <div className="relative flex max-w-3xl flex-col items-center gap-5">
        {/* Titre */}
        <h1 className="text-balance text-[clamp(2.4rem,6.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
          <span className="serif text-[1.1em] font-normal">
            De l&apos;architecture
          </span>{" "}
          au déploiement.
        </h1>

        {/* Description du service */}
        <p className="max-w-xl text-pretty text-[15px] font-medium leading-relaxed text-muted sm:text-base">
          Studio de développement web et mobile. Conçu, développé et déployé par{" "}
          <b className="font-bold text-foreground">la même personne</b>, sans
          sous-traiter un maillon.
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-[opacity,transform] hover:opacity-80 active:scale-[0.98]"
        >
          Démarrer un projet
        </Link>
        <Link
          href="/#services"
          className="whitespace-nowrap rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition-[background-color,transform] hover:bg-foreground/5 active:scale-[0.98]"
        >
          Voir les services
        </Link>
      </div>
    </Section>
  );
}
