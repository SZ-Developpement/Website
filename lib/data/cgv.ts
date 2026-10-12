import type { LegalSection } from "@/types";
import { legal, ou } from "./legal";

// Conditions commerciales par defaut. Ce sont des choix d'affaires, pas des
// obligations legales : A VALIDER avant publication, puis a garder alignes
// avec les devis reellement envoyes.
const conditions = {
  validiteDevis: "30 jours",
  acompte: "30 %",
  delaiPaiement: "30 jours",
  delaiRecette: "15 jours",
  garantieCorrectifs: "30 jours",
};

// Conditions generales de vente, redigees pour une clientele mixte
// (professionnels et particuliers). La rubrique 14 ne concerne que les
// consommateurs ; si l'activite devient strictement B2B, la retirer ainsi que
// la rubrique 15 et le champ legal.mediateur.
export const cgv: LegalSection[] = [
  {
    titre: "1. Objet et champ d'application",
    paragraphes: [
      `Les présentes conditions générales de vente régissent les prestations de conception, de développement, de déploiement et de maintenance de sites web, d'applications web et d'applications mobiles fournies par ${legal.denomination}, exploité par ${legal.exploitant} (${legal.formeJuridique}, SIRET ${ou(legal.siret)}), ci-après « le Prestataire », à toute personne, professionnelle ou consommateur, ci-après « le Client ».`,
      "Toute commande implique l'acceptation sans réserve des présentes conditions, qui prévalent sur tout document du Client, sauf dérogation écrite du Prestataire.",
    ],
  },
  {
    titre: "2. Prestations",
    paragraphes: [
      "Le Prestataire propose notamment la réalisation de sites vitrines, d'applications web, d'applications mobiles, ainsi que l'audit et la reprise de projets existants.",
      "Le périmètre, les livrables, le calendrier et le prix de chaque prestation sont précisés dans un devis. Les descriptions et tarifs affichés sur le site ont une valeur indicative.",
    ],
  },
  {
    titre: "3. Devis et commande",
    paragraphes: [
      `Le devis est gratuit et valable ${conditions.validiteDevis}. La commande est formée lorsque le Client retourne le devis signé ou l'accepte expressément par écrit (e-mail compris), et, le cas échéant, verse l'acompte prévu.`,
      "Toute demande qui sort du périmètre du devis fait l'objet d'un avenant ou d'un nouveau devis avant d'être réalisée.",
    ],
  },
  {
    titre: "4. Prix et paiement",
    paragraphes: [
      `Les prix sont exprimés en euros. ${ou(legal.tva)}.`,
      `Sauf mention contraire au devis, un acompte de ${conditions.acompte} est dû à la commande et le solde à la livraison. Les factures sont payables sous ${conditions.delaiPaiement} à compter de leur date d'émission, par virement.`,
      "Pour les Clients professionnels, tout retard de paiement entraîne de plein droit des pénalités calculées à trois fois le taux d'intérêt légal ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement (articles L. 441-10 et D. 441-5 du Code de commerce), sans préjudice d'une indemnisation complémentaire sur justificatifs.",
      "Le Prestataire peut suspendre la prestation en cas de défaut de paiement après mise en demeure restée sans effet.",
    ],
  },
  {
    titre: "5. Délais, livraison et recette",
    paragraphes: [
      "Les délais indiqués au devis sont des délais prévisionnels. Ils supposent que le Client fournisse dans les temps les contenus, accès et validations nécessaires ; tout retard du Client décale d'autant le calendrier.",
      `La livraison est réalisée par la mise en ligne ou la remise du livrable. Le Client dispose de ${conditions.delaiRecette} pour formuler ses réserves par écrit. Passé ce délai, ou dès la mise en production, le livrable est réputé accepté.`,
    ],
  },
  {
    titre: "6. Obligations du Client",
    liste: [
      "fournir en temps utile les textes, images, logos et accès nécessaires ;",
      "garantir qu'il dispose des droits sur les contenus qu'il transmet et que ceux-ci ne portent atteinte à aucun droit de tiers ;",
      "valider les étapes du projet dans des délais raisonnables ;",
      "désigner un interlocuteur disposant du pouvoir de décision.",
    ],
  },
  {
    titre: "7. Propriété intellectuelle",
    paragraphes: [
      "Après paiement intégral du prix, le Prestataire cède au Client les droits d'exploitation sur les développements spécifiques réalisés pour lui, pour le monde entier et pour la durée légale de protection. Le code source est remis au Client avec le livrable.",
      "Les bibliothèques, frameworks et composants tiers restent soumis à leurs propres licences. Les outils, méthodes et composants génériques préexistants du Prestataire demeurent sa propriété, le Client bénéficiant d'un droit d'usage non exclusif dans le cadre du projet.",
      "Sauf opposition écrite du Client, le Prestataire peut mentionner la réalisation à titre de référence.",
    ],
  },
  {
    titre: "8. Garantie et correctifs",
    paragraphes: [
      `Pendant ${conditions.garantieCorrectifs} à compter de la livraison, le Prestataire corrige gratuitement les anomalies de fonctionnement reproductibles par rapport au périmètre défini au devis.`,
      "Cette garantie ne couvre pas les évolutions, les modifications effectuées par un tiers, les contenus ajoutés par le Client, ni les défaillances de services tiers (hébergeur, API, stores). Toute maintenance ou évolution au-delà fait l'objet d'un devis.",
    ],
  },
  {
    titre: "9. Responsabilité",
    paragraphes: [
      "Le Prestataire est tenu d'une obligation de moyens. Sa responsabilité ne peut être engagée qu'en cas de faute prouvée et est limitée aux dommages directs, dans la limite des sommes effectivement perçues au titre de la prestation concernée.",
      "Il ne répond pas des dommages indirects (perte d'exploitation, de chiffre d'affaires, de données ou d'image). Ces limitations ne s'appliquent pas aux dommages corporels ni aux dispositions impératives de la loi en faveur des consommateurs.",
    ],
  },
  {
    titre: "10. Confidentialité",
    paragraphes: [
      "Chaque partie s'engage à ne pas divulguer les informations confidentielles de l'autre partie auxquelles elle a accès dans le cadre de la prestation, pendant sa durée et pendant trois ans après son terme.",
    ],
  },
  {
    titre: "11. Données personnelles",
    paragraphes: [
      "Le traitement des données personnelles du Client est décrit dans la politique de confidentialité du site. Lorsque le livrable traite les données des utilisateurs du Client, ce dernier en est le responsable de traitement et reste tenu de ses obligations au titre du RGPD.",
    ],
  },
  {
    titre: "12. Résiliation",
    paragraphes: [
      "Chaque partie peut résilier la commande en cas de manquement grave de l'autre partie, après mise en demeure restée sans effet pendant 15 jours. Les travaux réalisés jusqu'à la résiliation restent dus et l'acompte versé demeure acquis à due concurrence.",
    ],
  },
  {
    titre: "13. Force majeure",
    paragraphes: [
      "Aucune partie n'est responsable d'un manquement causé par un événement de force majeure au sens de l'article 1218 du Code civil. L'exécution est suspendue pendant la durée de l'événement.",
    ],
  },
  {
    titre: "14. Droit de rétractation (consommateurs)",
    paragraphes: [
      "Le Client consommateur, ou professionnel dans les conditions de l'article L. 221-3 du Code de la consommation, dispose d'un délai de 14 jours à compter de la conclusion du contrat pour se rétracter, sans avoir à justifier de motif, en le notifiant clairement par e-mail au Prestataire.",
      "Si le Client demande que la prestation commence avant la fin de ce délai, il règle une somme proportionnelle à la part déjà exécutée. Le droit de rétractation ne peut plus être exercé une fois la prestation pleinement exécutée avec son accord préalable exprès et sa renonciation, ni pour un service entièrement personnalisé selon ses spécifications (article L. 221-28 du Code de la consommation).",
    ],
  },
  {
    titre: "15. Médiation de la consommation",
    paragraphes: [
      "Conformément aux articles L. 611-1 et suivants du Code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige, après avoir tenté de le régler directement avec le Prestataire.",
      `Médiateur : ${ou(legal.mediateur)}.`,
    ],
  },
  {
    titre: "16. Droit applicable et litiges",
    paragraphes: [
      "Les présentes conditions sont soumises au droit français. En cas de litige, les parties recherchent d'abord une solution amiable.",
      "À défaut, pour les Clients professionnels, les tribunaux compétents sont ceux du ressort du siège du Prestataire. Les Clients consommateurs bénéficient des règles légales de compétence qui leur sont applicables.",
    ],
  },
];
