import { PlanProps } from "@/types";
import { Globe, LayoutDashboard, Smartphone } from "lucide-react";


/** mention affichee pres des prix (franchise en base de TVA) */
export const noteTarifs =
  "Prix nets, TVA non applicable (art. 293 B du CGI). Tarifs indicatifs, devis gratuit.";

export const planRate: PlanProps[] = [
  {
    icon: Globe,
    title: "Site vitrine",
    price: 900,
    desc: "Votre activité en ligne, livrée clé en main.",
    features: [
      "Jusqu'à 6 pages sur mesure",
      "Responsive mobile et tablette",
      "Référencement de base",
      "Formulaire de contact",
      "Mise en ligne et nom de domaine",
    ],
    highlight: false,
    cta: "commande",
  },
  {
    icon: LayoutDashboard,
    title: "Application web",
    price: 3000,
    desc: "L'outil métier qui remplace vos tableurs.",
    features: [
      "Comptes utilisateurs et rôles",
      "Base de données et back-office",
      "Paiement en ligne",
      "Tableau de bord sur mesure",
      "Hébergement et déploiement",
    ],
    highlight: true,
    cta: "devis",
  },
  {
    icon: Smartphone,
    title: "Application mobile",
    price: 4000,
    desc: "iOS et Android depuis une seule base de code.",
    features: [
      "iOS et Android en une fois",
      "Notifications push",
      "Publication sur les stores",
      "Mises à jour sans repasser par les stores",
      "Suivi après mise en ligne",
    ],
    highlight: true,
    cta: "devis",
  },
];
