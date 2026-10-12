import type { Engagement } from "@/types";

// Ce que nous garantissons : des promesses tenables des le premier client,
// jamais des compteurs qui dependent du temps (voir README, regles de contenu).
export const engagements: Engagement[] = [
  { valeur: "30 j", libelle: "Correctifs", accent: "offerts après livraison" },
  { valeur: "48 h", libelle: "Réponse", accent: "garantie" },
  { valeur: "90+", libelle: "Score Lighthouse", accent: "visé" },
  { valeur: "RGPD", libelle: "Conformité", accent: "dès la conception" },
];
