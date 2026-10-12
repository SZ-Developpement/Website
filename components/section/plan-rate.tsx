import Link from "next/link";
import Section from "@/components/layout/Section";
import { legal } from "@/lib/data/legal";
import PlansCard from "../plan/plans-card";

export default function PlanRate() {
  return (
    <Section
      id="plan-rate"
      contentClassName="flex flex-col items-center gap-12"
    >
      {/* Titre de la section qui change de taille selon la largeur de l'écran */}
      <h2 className="text-center text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
        Choisissez{" "}
        <span className="serif text-[1.2em] font-normal">le plan</span> adapté à
        vos besoins.
      </h2>

      <PlansCard />

      {/* tarifs : indicatifs, et mention de TVA des qu'elle est renseignee */}
      <p className="text-center text-[13px] text-muted">
        Tarifs indicatifs en euros, précisés dans un devis.
        {legal.tva ? ` ${legal.tva}.` : ""}{" "}
        <Link
          href="/conditions-generales"
          className="font-semibold text-foreground underline-offset-4 hover:underline"
        >
          Conditions générales de vente
        </Link>
      </p>
    </Section>
  );
}
