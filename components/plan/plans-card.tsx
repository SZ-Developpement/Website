import { planRate } from "@/lib/data/plans";
import { social } from "@/lib/sz-dev";
import { PlanProps } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// Style de grille pour le panneau mis en avant, selon le nombre de plans mis en avant.
const SPAN = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
} as const;

export default function PlansCard() {
  const simples = planRate.filter((plan) => !plan.highlight);
  const misEnAvant = planRate.filter((plan) => plan.highlight);
  const span = SPAN[misEnAvant.length as keyof typeof SPAN] ?? "sm:col-span-2";

  return (
    <div className="grid w-full gap-2 rounded-3xl border border-line bg-foreground/4 p-2 sm:grid-cols-3">
      {simples.map((plan) => (
        <PlanRateCard key={plan.title} {...plan} />
      ))}

      {misEnAvant.length > 0 && (
        <div
          className={`flex w-full flex-col rounded-2xl border border-line bg-surface sm:flex-row ${span}`}
        >
          {misEnAvant.map((plan) => (
            <PlanRateCard key={plan.title} {...plan} />
          ))}
        </div>
      )}
    </div>
  );
}

function PlanRateCard({
  icon: Icon,
  title,
  price,
  type,
  desc,
  features,
  cta,
}: PlanProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-7 p-7">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center gap-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface">
            <Icon size={18} />
          </span>
          <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="serif text-[15px] text-muted">à partir de</span>
          {/* Prix du plan text qui change de taille selon la largeur de l'écran */}
          <span className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold leading-none tracking-[-0.045em]">
            {price.toLocaleString("fr-FR")}&nbsp;€
            {type && <span className="text-muted"> /{type}</span>}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-sm flex flex-row items-center gap-2.5"
            >
              {/* puce de la liste */}
              <span className="flex size-3 shrink-0 items-center justify-center rounded-full border border-foreground/20">
                <span className="size-1 rounded-full bg-foreground/45" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {cta === "devis" ? (
        <Link
          href={`mailto:${social.email}`}
          className="flex w-fit flex-row items-center gap-2 rounded-xl border border-line px-4 py-2 text-sm transition-opacity duration-300 hover:opacity-70"
        >
          Demander un devis
          <ChevronRight size={16} />
        </Link>
      ) : (
        <Link
          href={`mailto:${social.email}`}
          className="flex w-full flex-row items-center justify-center gap-2 rounded-xl border border-transparent bg-foreground py-2 text-sm text-background transition-opacity duration-300 hover:opacity-70"
        >
          Passer commande
        </Link>
      )}
    </div>
  );
}
