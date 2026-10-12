import Link from "next/link";

export default function BlocCTA() {
  return (
    // Bloc CTA : la derniere occasion de convertir avant la sortie
    <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-foreground px-7 py-16 text-center">
      {/* halo seul, comme la carte de service mise en avant */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,.08) 0%, transparent 70%)",
        }}
      />

      {/* Text de CTA */}
      <div className="relative flex max-w-sm flex-col items-center gap-3">
        <h2 className="text-balance text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.03em] text-background">
          <span className="serif text-[1.15em] font-normal">Un projet</span> en
          tête&nbsp;?
        </h2>
        <p className="text-pretty text-sm text-background/70">
          Dites-nous ce que vous voulez construire. Réponse sous 48&nbsp;h, sans
          engagement.
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-3">
        <Link
          href="/contact"
          className="whitespace-nowrap rounded-full bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-[opacity,transform] hover:opacity-80 focus-visible:outline-background active:scale-[0.98]"
        >
          Démarrer un projet
        </Link>
      </div>
    </div>
  );
}
