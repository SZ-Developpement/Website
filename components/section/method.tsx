import Section from "@/components/layout/Section";
import { etapes } from "@/lib/data/method";

export default function Method() {
  return (
    <Section id="methode">
      {/* composition des services, inversee : cartes blanches a gauche, carte
          sombre a droite. Dans le DOM la carte sombre reste en premier (titre
          d'abord sur mobile), lg:order la repousse a droite en desktop. */}
      <div className="grid gap-3 lg:grid-cols-[1fr_1.15fr]">
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-foreground p-8 sm:p-10 lg:order-2">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col gap-4">
            <h2 className="text-balance text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-background">
              Un cadre clair, du premier échange à la{" "}
              <span className="serif text-[1.2em] font-normal">
                mise en ligne
              </span>
              .
            </h2>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-background/70">
              Chaque projet suit les mêmes étapes, pour que vous sachiez
              toujours où nous en sommes.
            </p>
          </div>

          <div className="relative mt-auto flex flex-wrap gap-2">
            <span className="rounded-full border border-background/20 px-3 py-1 text-xs font-medium text-background/70">
              {etapes.length} étapes
            </span>
            <span className="rounded-full border border-background/20 px-3 py-1 text-xs font-medium text-background/70">
              Sans sous-traitance
            </span>
          </div>
        </div>

        <ol className="flex flex-col gap-3">
          {etapes.map((etape, index) => (
            <li
              key={etape.verbe}
              className="flex flex-1 flex-row items-start gap-4 rounded-3xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:border-foreground/20 motion-safe:hover:-translate-y-0.5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-line bg-foreground/4 text-sm font-semibold tabular-nums">
                {index + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
                  {etape.verbe}{" "}
                  <span className="serif text-[1.15em] font-normal">
                    {etape.accent}
                  </span>
                </h3>
                <p className="text-pretty text-[13px] leading-relaxed text-muted sm:text-sm">
                  {etape.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
