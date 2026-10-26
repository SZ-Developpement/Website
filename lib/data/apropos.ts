import type { AProposProps } from "@/types";

// Presentation de l'exploitant. Micro-entreprise : une seule personne, donc ni
// equipe ni membres. TODO : a completer par Alexis. Tant que `texte` est vide,
// la section n'est pas rendue (components/section/apropos.tsx) : on n'affiche
// jamais de faux contenu.
export const aPropos: AProposProps = {
  texte: [],
  photo: null,
};
