import type { Metadata } from "next";
import LegalDocument from "@/components/layout/legal-document";
import { confidentialite } from "@/lib/data/confidentialite";
import { legalComplet } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données sont collectées, pourquoi, combien de temps, et comment exercer vos droits.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: legalComplet, follow: true },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <LegalDocument
      titre="Politique de"
      accent="confidentialité"
      intro="Quelles données sont collectées, pourquoi, combien de temps, et comment exercer vos droits."
      sections={confidentialite}
    />
  );
}
