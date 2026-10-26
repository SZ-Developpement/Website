import { social } from "./site";

// Identite de l'editeur. C'est la seule source : mentions legales, politique de
// confidentialite et CGV la lisent ici, rien n'est recopie ailleurs.
//
// null = information a renseigner AVANT la mise en ligne. Tant qu'un champ
// est null, la page s'affiche avec "À compléter" et reste en noindex (voir
// legalComplet). Ne pas inventer de valeur : une mention fausse est pire
// qu'une mention absente.
export const legal = {
  /** dénomination à afficher : exploitant + forme + nom commercial */
  denomination: "Alexis De Jesus EI – SZ Dev",
  exploitant: "Alexis De Jesus",
  nomCommercial: "SZ Dev",
  formeJuridique: "Entrepreneur individuel (EI) – micro-entreprise",
  /** 14 chiffres, fourni par l'INSEE a l'immatriculation */
  siret: "131 179 483 00014" as string | null,
  /** code APE / NAF de l'activite */
  ape: "6201Z",
  /** adresse professionnelle ou de domiciliation, obligatoire (LCEN art. 6-III) */
  adresse: "10 rue Maurice Berteaux, 78510 Triel-sur-Seine, France",
  email: social.email,
  telephone: "07 81 43 00 16",
  directeurPublication: "Alexis De Jesus",
  /**
   * Mention de TVA. En franchise en base : "TVA non applicable, article 293 B
   * du CGI". Si l'entreprise est assujettie : "TVA FR00 000000000".
   */
  tva: "TVA non applicable, art. 293 B du CGI" as string | null,
  /**
   * Mediateur de la consommation (obligatoire des qu'on vend a des
   * particuliers) : nom, adresse postale et site web.
   * TODO : adherer a un mediateur avant de vendre a des particuliers (voir README).
   */
  mediateur: null as string | null,
};

export const hebergeur = {
  nom: "Vercel Inc.",
  adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  site: "https://vercel.com",
};

/** date affichee en tete des documents : a changer a chaque revision de fond */
export const miseAJour = "26 octobre 2026";

// Ne sert qu'a l'indexation des trois pages juridiques (robots.index) : un champ
// manquant (ex. le mediateur) ne touche jamais le reste du site.
export const legalComplet = Object.values(legal).every((v) => v !== null);

/** valeur manquante dans un texte : visible, jamais silencieuse */
export const ou = (valeur: string | null) => valeur ?? "[à compléter]";
