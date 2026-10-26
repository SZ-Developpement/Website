import type { Metadata } from "next";
import LegalDocument from "@/components/layout/legal-document";
import { hebergeur, legal, legalComplet } from "@/lib/data/legal";
import { mentions } from "@/lib/data/mentions";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  // incomplete, la page ne doit pas etre indexee (voir lib/data/legal.ts)
  robots: { index: legalComplet, follow: true },
};

const lignes: { label: string; valeur: string | null }[] = [
  { label: "Éditeur", valeur: `${legal.exploitant}, ${legal.formeJuridique}` },
  { label: "Nom commercial", valeur: legal.nomCommercial },
  { label: "SIRET", valeur: legal.siret },
  { label: "Code APE", valeur: legal.ape },
  { label: "Adresse", valeur: legal.adresse },
  { label: "E-mail", valeur: legal.email },
  { label: "Téléphone", valeur: legal.telephone },
  { label: "TVA", valeur: legal.tva },
  { label: "Directeur de la publication", valeur: legal.directeurPublication },
  {
    label: "Hébergeur",
    valeur: `${hebergeur.nom}, ${hebergeur.adresse} (${hebergeur.site})`,
  },
];

export default function MentionsLegales() {
  return (
    <LegalDocument titre="Mentions" accent="légales" sections={mentions}>
      <dl className="flex flex-col divide-y divide-line rounded-3xl border border-line bg-surface">
        {lignes.map((ligne) => (
          <div
            key={ligne.label}
            className="grid gap-1 px-6 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8"
          >
            <dt className="text-[13px] font-semibold">{ligne.label}</dt>
            <dd className="text-sm text-muted">
              {ligne.valeur ?? "À compléter"}
            </dd>
          </div>
        ))}
      </dl>
    </LegalDocument>
  );
}
