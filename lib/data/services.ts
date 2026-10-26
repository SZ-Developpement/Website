import { Globe, LayoutDashboard, Smartphone, Wrench } from "lucide-react";
import type { ServiceProps } from "@/types";

// Services formules en problemes clients, pas en technologies
export const services: ServiceProps[] = [
  {
    icon: Globe,
    titre: "Site vitrine",
    probleme: "Être trouvé en ligne",
    desc: "Votre activité en ligne, rapide et trouvable. Des pages sur mesure, un contenu que vous modifiez vous-même, et le référencement travaillé dès la conception.",
    tags: ["Next.js", "React", "SEO"],
    highlight: true,
  },
  {
    icon: LayoutDashboard,
    titre: "Application web",
    probleme: "Remplacer vos tableurs",
    desc: "L'outil qui remplace vos tableurs. Comptes utilisateurs, base de données, espace d'administration, construit autour de votre façon de travailler, pas l'inverse.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    icon: Smartphone,
    titre: "Application mobile",
    probleme: "Tenir dans la poche de vos clients",
    desc: "Disponible sur iOS et Android à partir d'une seule base de code. Un seul développement à payer, une seule application à faire évoluer ensuite.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: Wrench,
    titre: "Reprise de projet",
    probleme: "Reprendre un projet qui bloque",
    desc: "Un site qui rame, un prestataire parti sans transmettre, du code que personne ne comprend plus. Audit, reprise en main, remise en état.",
    tags: ["Audit", "Refonte", "Maintenance"],
  },
];
