import type { Metadata } from "next";
import LegalDocument from "@/components/layout/legal-document";
import { cgv } from "@/lib/data/cgv";
import { legalComplet } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Devis, paiement, livraison, garantie, propriété du code et droits du client.",
  alternates: { canonical: "/conditions-generales" },
  robots: { index: legalComplet, follow: true },
};

export default function ConditionsGenerales() {
  return (
    <LegalDocument
      titre="Conditions générales"
      accent="de vente"
      intro="Devis, paiement, livraison, garantie, propriété du code et droits du client."
      sections={cgv}
    />
  );
}
