import type { FaqProps } from "@/types";

// Les objections, traitees de front. Chaque reponse ne s'appuie que sur des
// faits deja affiches ailleurs sur le site : pas de prix, pas de delai.
export const faq: FaqProps[] = [
  {
    question: "Qui travaille sur mon projet ?",
    reponse:
      "Une seule personne, du premier échange à la mise en ligne : votre interlocuteur est celui qui écrit le code. Aucune étape n'est sous-traitée.",
  },
  {
    question: "À qui appartient le code ?",
    reponse: "À vous. Le code source vous est livré avec le projet.",
  },
  {
    question: "Sous quel délai répondez-vous ?",
    reponse:
      "Sous 48 h, sans engagement de votre part. Décrivez votre projet via le formulaire de contact.",
  },
  {
    question: "Pourrai-je modifier le contenu moi-même ?",
    reponse:
      "Pour un site vitrine, oui : le contenu est pensé pour que vous le modifiiez vous-même, sans nous solliciter à chaque changement.",
  },
  {
    question: "Une application mobile fonctionne-t-elle sur iPhone et Android ?",
    reponse:
      "Oui. Une seule base de code (React Native et Expo) produit l'application iOS et Android : un seul développement à payer, une seule application à faire évoluer.",
  },
  {
    question: "Pouvez-vous reprendre un site ou une application existants ?",
    reponse:
      "Oui : audit, reprise en main, puis remise en état. C'est utile quand un prestataire est parti sans transmettre ou que personne ne comprend plus le code.",
  },
  {
    question: "Comment se passe le premier échange ?",
    reponse:
      "Vous remplissez le formulaire de contact avec votre projet, votre budget et votre délai. Nous vous répondons sous 48 h pour en discuter.",
  },
];
