import Image from "next/image";
import Section from "@/components/layout/Section";
import { aPropos } from "@/lib/data/apropos";
import { legal } from "@/lib/data/legal";

export default function Apropos() {
  // rien a afficher tant que le texte n'est pas ecrit
  if (aPropos.texte.length === 0) return null;

  return (
    <Section
      id="a-propos"
      contentClassName="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
    >
      <h2 className="text-balance text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">
        <span className="serif text-[1.2em] font-normal">À propos</span> de{" "}
        {legal.exploitant}
      </h2>

      {aPropos.photo && (
        <Image
          src={aPropos.photo.src}
          alt={aPropos.photo.alt}
          width={160}
          height={160}
          className="size-40 rounded-full border border-line object-cover"
        />
      )}

      <div className="flex flex-col gap-3">
        {aPropos.texte.map((paragraphe) => (
          <p
            key={paragraphe}
            className="text-pretty text-sm leading-relaxed text-muted sm:text-[15px]"
          >
            {paragraphe}
          </p>
        ))}
      </div>
    </Section>
  );
}
