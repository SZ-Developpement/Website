import { LucideIcon } from "lucide-react";

export interface PlanRateCardProps {
  icon: LucideIcon;
  title: string;
  price: number;
  type?: string;
  desc: string;
  features: string[];
  /** Mise en avant du plan, qui determine la largeur du panneau. */
  highlight: boolean;
  /** Action du bouton, independante de la mise en avant. */
  cta: "devis" | "commande";
}

export interface MembreProps {
  name: string;
  // pseudo sans le @
  pseudo?: string;
  role: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export interface ServiceProps {
  icon: LucideIcon;
  titre: string;
  desc: string;
  tags: string[];
  // optionnel, pour mettre en avant un service particulier
  highlight?: boolean;
}
