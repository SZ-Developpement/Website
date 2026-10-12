import { social } from "./site";

// Identite de l'editeur. C'est la seule source : mentions legales, politique de
// confidentialite et CGV la lisent ici, rien n'est recopie ailleurs.
//
// null = information a renseigner AVANT la mise en ligne. Tant qu'un champ
// est null, la page s'affiche avec "À compléter" et reste en noindex (voir
// legalComplet). Ne pas inventer de valeur : une mention fausse est pire
// qu'une mention absente.
export const legal = {
  denomination: "SZ Développement",
  exploitant: "Alexis DE JESUS",
  formeJuridique: "Entreprise individuelle, micro-entrepreneur",
  /** 14 chiffres, fourni par l'INSEE a l'immatriculation */
  siret: null as string | null,
  /** adresse professionnelle ou de domiciliation, obligatoire (LCEN art. 6-III) */
  adresse: "Ile-de-France, France",
  email: social.email,
  /**
   * Mention de TVA. En franchise en base : "TVA non applicable, article 293 B
   * du CGI". Si l'entreprise est assujettie : "TVA FR00 000000000".
   */
  tva: null as string | null,
  /**
   * Mediateur de la consommation (obligatoire des qu'on vend a des
   * particuliers) : nom, adresse postale et site web.
   */
  mediateur: null as string | null,
};

export const hebergeur = {
  nom: "Vercel Inc.",
  adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  site: "https://vercel.com",
};

/** date affichee en tete des documents : a changer a chaque revision de fond */
export const miseAJour = "12 octobre 2026";

export const legalComplet = Object.values(legal).every((v) => v !== null);

/** valeur manquante dans un texte : visible, jamais silencieuse */
export const ou = (valeur: string | null) => valeur ?? "[à compléter]";
