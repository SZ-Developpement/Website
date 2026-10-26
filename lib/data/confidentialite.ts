import type { LegalSection } from "@/types";
import { hebergeur, legal, ou } from "./legal";

// Politique de confidentialite (RGPD, art. 13). Chaque affirmation decrit ce
// que le code fait reellement : formulaire -> Resend -> boite mail, aucun
// cookie, aucun outil de mesure. Si un outil est ajoute (analytics, widget,
// police distante), ce document doit etre mis a jour avant la mise en ligne.
export const confidentialite: LegalSection[] = [
  {
    titre: "1. Responsable du traitement",
    paragraphes: [
      `Le responsable du traitement des données personnelles collectées sur ce site est ${legal.denomination} (${legal.exploitant}, ${legal.formeJuridique}), SIRET ${ou(legal.siret)}, ${ou(legal.adresse)}.`,
      `Contact pour toute question relative aux données personnelles : ${legal.email}.`,
    ],
  },
  {
    titre: "2. Données collectées",
    paragraphes: [
      "Je ne collecte que les données que vous me transmettez volontairement :",
    ],
    liste: [
      "via le formulaire de contact : nom, adresse e-mail, type de projet, budget, délai et description de votre projet ;",
      "par e-mail, si vous m'écrivez directement : votre adresse e-mail et le contenu de votre message.",
    ],
  },
  {
    titre: "3. Finalités et bases légales",
    liste: [
      "Répondre à votre demande et préparer un devis : mesures précontractuelles prises à votre demande (art. 6.1.b du RGPD).",
      "Exécuter le contrat, assurer la facturation et le suivi de la relation client : exécution du contrat et obligations légales comptables (art. 6.1.b et 6.1.c).",
      "Assurer la sécurité du site et prévenir les envois automatisés abusifs : intérêt légitime (art. 6.1.f).",
    ],
  },
  {
    titre: "4. Destinataires et sous-traitants",
    paragraphes: [
      "Vos données sont destinées à l'éditeur du site. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales. Pour fonctionner, le site s'appuie sur des prestataires techniques qui les traitent pour mon compte :",
    ],
    liste: [
      `${hebergeur.nom} : hébergement du site ;`,
      "Resend, Inc. : acheminement des e-mails envoyés depuis le formulaire de contact ;",
      "Google (Gmail) : réception et stockage des e-mails à l'adresse de contact.",
    ],
  },
  {
    titre: "5. Transferts hors de l'Union européenne",
    paragraphes: [
      "Certains de ces prestataires sont établis aux États-Unis. Les transferts de données sont encadrés par des garanties appropriées prévues par le RGPD : décision d'adéquation de la Commission européenne (Data Privacy Framework) ou clauses contractuelles types.",
    ],
  },
  {
    titre: "6. Durées de conservation",
    liste: [
      "Demandes de contact sans suite : 3 ans à compter du dernier échange.",
      "Données de clients : pendant la durée de la relation contractuelle, puis 5 ans à titre d'archivage (prescription civile).",
      "Pièces comptables et factures : 10 ans (Code de commerce).",
    ],
  },
  {
    titre: "7. Vos droits",
    paragraphes: [
      "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données, ainsi que d'un droit à la portabilité et du droit de définir des directives relatives au sort de vos données après votre décès.",
      `Pour exercer ces droits, écrivez à ${legal.email}. Je réponds dans un délai d'un mois. Un justificatif d'identité peut vous être demandé en cas de doute raisonnable.`,
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (cnil.fr, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07).",
    ],
  },
  {
    titre: "8. Cookies et traceurs",
    paragraphes: [
      "Ce site ne dépose aucun cookie de mesure d'audience, de publicité ou de suivi, et n'intègre aucun service tiers qui en déposerait. Les polices de caractères sont servies par le site lui-même.",
      "En l'absence de traceurs soumis à consentement, aucun bandeau cookies n'est affiché.",
    ],
  },
  {
    titre: "9. Sécurité",
    paragraphes: [
      "Les échanges avec le site sont chiffrés (HTTPS). Le formulaire de contact est protégé contre les envois automatisés. Seules les personnes qui traitent votre demande ont accès à vos données.",
    ],
  },
  {
    titre: "10. Évolution de cette politique",
    paragraphes: [
      "Cette politique peut être mise à jour pour refléter une évolution du site ou de la réglementation. La date de dernière mise à jour figure en haut de cette page.",
    ],
  },
];
