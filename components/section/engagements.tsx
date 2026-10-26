import Section from "@/components/layout/Section";
import { engagements } from "@/lib/data/engagements";

export default function Engagements() {
  return (
    <Section id="engagements" padding="py-8">
      {/* un seul bloc sombre : halo du CTA + trame de points */}
      <div
        className="relative overflow-hidden rounded-3xl bg-foreground"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 90% at 50% 0%, rgba(255,255,255,.1) 0%, transparent 70%), radial-gradient(rgba(255,255,255,.14) 1px, transparent 1.5px)",
          backgroundSize: "100% 100%, 22px 22px",
        }}
      >
        <h2 className="sr-only">Mes engagements</h2>

        <dl className="relative grid grid-cols-2 lg:grid-cols-4">
          {engagements.map(({ valeur, libelle, accent }, index) => (
            <div
              key={libelle}
              className={`flex flex-col-reverse gap-3 p-7 sm:p-9 ${
                index % 2 === 1 ? "border-l border-background/10" : ""
              } ${index > 1 ? "border-t border-background/10 lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l lg:border-background/10" : ""
              }`}
            >
              <dt className="text-pretty text-[13px] leading-snug text-background/70 sm:text-sm">
                {libelle}{" "}
                <span className="serif text-[1.2em] text-background">
                  {accent}
                </span>
              </dt>
              <dd className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-none tracking-[-0.045em] tabular-nums text-background">
                {valeur}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
