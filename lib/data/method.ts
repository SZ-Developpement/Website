import type { EtapeProps } from "@/types";

// Le cadre de travail. Sans references clients a montrer, c'est cette section
// qui rassure : elle decrit des etapes, jamais des durees ni des chiffres.
export const etapes: EtapeProps[] = [
  {
    verbe: "Cadrer",
    accent: "le besoin",
    desc: "Un premier échange pour comprendre votre activité, fixer le périmètre et ce qui reste en dehors. Vous savez ce que vous obtenez avant que le travail commence.",
  },
  {
    verbe: "Concevoir",
    accent: "avant de coder",
    desc: "Structure, pages et parcours sont validés avec vous avant la première ligne de code, pour éviter les retours en arrière.",
  },
  {
    verbe: "Développer",
    accent: "par étapes",
    desc: "Le travail avance par étapes que vous pouvez voir et commenter, plutôt qu'en tunnel jusqu'à la livraison.",
  },
  {
    verbe: "Livrer",
    accent: "et transmettre",
    desc: "Mise en ligne, code source remis, et une prise en main pour que vous puissiez faire vivre le projet.",
  },
];
