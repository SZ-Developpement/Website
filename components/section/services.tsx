import Section from "@/components/layout/Section";
import { services } from "@/lib/data/services";
import { ServiceProps } from "@/types";

export default function Services() {
  const principal = services.find((service) => service.highlight);
  const autres = services.filter((service) => !service.highlight);

  return (
    <Section id="services" contentClassName="flex flex-col gap-12">
      <div className="reveal flex flex-col items-center gap-3 text-center">
        <h2 className="text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">
          Ce que nous{" "}
          <span className="serif text-[1.2em] font-normal">construisons</span>.
        </h2>
        <p className="max-w-lg text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
          Quatre façons de travailler ensemble, du site vitrine à la reprise
          d&apos;un projet laissé en plan.
        </p>
      </div>

      {/* cartes posees directement sur le fond : pas de conteneur teinte autour */}
      <div className="grid gap-3 lg:grid-cols-[1.15fr_1fr]">
        {principal && <CarteMiseEnAvant {...principal} />}

        <div className="flex flex-col gap-3">
          {autres.map((service) => (
            <CarteCompacte key={service.titre} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function CarteMiseEnAvant({ icon: Icon, titre, desc, tags }: ServiceProps) {
  const [premierMot, ...reste] = titre.split(" ");

  return (
    <article className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-foreground p-8 sm:p-10">
      {/* halo seul : meme lumiere que le bloc CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,.08) 0%, transparent 70%)",
        }}
      />

      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl border border-background/15 bg-background/8 text-background">
        <Icon size={18} aria-hidden />
      </span>

      <div className="relative flex flex-col gap-3">
        <h3 className="text-balance text-[clamp(1.5rem,3vw,1.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-background">
          {premierMot}{" "}
          <span className="serif text-[1.15em] font-normal">
            {reste.join(" ")}
          </span>
        </h3>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-background/70">
          {desc}
        </p>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-background/20 px-3 py-1 text-xs font-medium text-background/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function CarteCompacte({ icon: Icon, titre, desc }: ServiceProps) {
  return (
    <article className="flex flex-1 flex-row items-start gap-4 rounded-3xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:border-foreground/20 motion-safe:hover:-translate-y-0.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-line bg-foreground/4">
        <Icon size={16} aria-hidden />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
          {titre}
        </h3>
        <p className="text-pretty text-[13px] leading-relaxed text-muted sm:text-sm">
          {desc}
        </p>
      </div>
    </article>
  );
}
