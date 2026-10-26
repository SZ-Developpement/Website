import type { LegalSection } from "@/types";
import { legal, ou } from "./legal";

// Rubriques de la page "Mentions legales" qui suivent le tableau d'identite
// (editeur, hebergeur : voir app/mentions-legales/page.tsx).
export const mentions: LegalSection[] = [
  {
    titre: "Propriété intellectuelle",
    paragraphes: [
      `L'ensemble des éléments du site (textes, graphismes, logos, code) est la propriété de ${legal.denomination}, sauf mention contraire. Toute reproduction, représentation ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon (articles L. 335-2 et suivants du Code de la propriété intellectuelle).`,
    ],
  },
  {
    titre: "Responsabilité",
    paragraphes: [
      "Les informations publiées sur ce site sont données à titre indicatif et peuvent être modifiées à tout moment. L'éditeur ne saurait être tenu responsable d'une interruption du site ni des contenus de sites tiers vers lesquels il renvoie.",
    ],
  },
  {
    titre: "Données personnelles et cookies",
    paragraphes: [
      "Le traitement des données personnelles, vos droits et l'usage des cookies sont détaillés dans la politique de confidentialité.",
    ],
  },
  {
    titre: "Médiation de la consommation",
    paragraphes: [
      `Conformément au Code de la consommation, tout consommateur peut recourir gratuitement à un médiateur en vue de la résolution amiable d'un litige. Médiateur : ${ou(legal.mediateur)}.`,
    ],
  },
  {
    titre: "Droit applicable",
    paragraphes: [
      "Le site et les présentes mentions sont soumis au droit français. Tout litige relève des tribunaux français compétents.",
    ],
  },
];
