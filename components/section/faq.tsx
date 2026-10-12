import { Plus } from "lucide-react";
import Section from "@/components/layout/Section";
import { faq } from "@/lib/data/faq";

export default function Faq() {
  return (
    <Section id="faq" contentClassName="mx-auto flex max-w-3xl flex-col gap-10">
      <h2 className="text-balance text-center text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">
        Les questions qu&apos;on{" "}
        <span className="serif text-[1.2em] font-normal">nous pose</span>.
      </h2>

      {/* <details> natif : clavier, lecteurs d'ecran et "ouvrir au find" gratuits,
          et name= n'en laisse qu'un ouvert a la fois, sans JavaScript */}
      <div className="flex flex-col gap-2">
        {faq.map((item, index) => (
          <details
            key={item.question}
            name="faq"
            className="group rounded-3xl border border-line bg-surface px-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-foreground/3 border border-foreground/4 w-6 aspect-square rounded-md text-xs flex items-center justify-center">
                  {index + 1}
                </div>

                {item.question}
              </div>

              <div className="flex items-center justify-center h-8 aspect-square shrink-0 rounded-full bg-foreground text-background hover:bg-foreground/60 transition-colors duration-300 border border-transparent group-open:bg-background group-open:border-foreground/10 group-open:text-foreground">
                <Plus
                  size={18}
                  aria-hidden
                  className="transition-transform duration-300 group-open:rotate-45"
                />
              </div>
            </summary>
            <p className=" text-pretty pb-6 text-sm leading-relaxed text-muted sm:text-[15px]">
              {item.reponse}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
