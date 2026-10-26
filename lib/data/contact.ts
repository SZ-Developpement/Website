import type { ChoixProps } from "@/types";
import { services } from "./services";

// Formulaire qualifiant : projet, budget, delai. Les tranches de budget et de
// delai sont des choix de tri, pas des tarifs : a ajuster librement.
export const projetsOptions: ChoixProps[] = [
  ...services.map((s) => ({ value: s.titre, label: s.titre })),
  { value: "Autre", label: "Autre" },
];

export const budgetOptions: ChoixProps[] = [
  { value: "moins-1000", label: "Moins de 1 000 €" },
  { value: "1000-3000", label: "1 000 à 3 000 €" },
  { value: "3000-8000", label: "3 000 à 8 000 €" },
  { value: "plus-8000", label: "Plus de 8 000 €" },
  { value: "indetermine", label: "Je ne sais pas encore" },
];

export const delaiOptions: ChoixProps[] = [
  { value: "asap", label: "Dès que possible" },
  { value: "1-mois", label: "Dans le mois" },
  { value: "2-3-mois", label: "Dans 2 à 3 mois" },
  { value: "flexible", label: "Pas de date précise" },
];
