import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export type StatusKey = "ok" | "busy" | "unknown";

export interface Engagement {
  valeur: string;
  libelle: string;
  /** mot passe en serif italique */
  accent: string;
}

export interface ServiceProps {
  icon: LucideIcon;
  /** l'offre, en petit : "Site vitrine" */
  titre: string;
  /** le probleme du client, en titre : "Etre trouve en ligne" */
  probleme?: string;
  desc: string;
  tags: string[];
  /** optionnel, pour mettre en avant un service particulier */
  highlight?: boolean;
}

export interface PlanProps {
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
  /** pseudo sans le @ */
  pseudo?: string;
  role: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export interface EtapeProps {
  /** verbe d'action, en gras */
  verbe: string;
  /** complement, en serif italique */
  accent: string;
  desc: string;
}

/** une rubrique d'un document juridique (mentions, confidentialite, CGV) */
export interface LegalSection {
  titre: string;
  paragraphes?: string[];
  liste?: string[];
}

export interface FaqProps {
  question: string;
  reponse: string;
}

export interface ChoixProps {
  value: string;
  label: string;
}

export type ChampContact =
  | "nom"
  | "email"
  | "projet"
  | "budget"
  | "delai"
  | "message";

export interface ContactState {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<ChampContact, string>>;
  /** valeurs soumises, pour ne pas vider le formulaire apres une erreur */
  values?: Partial<Record<ChampContact, string>>;
}
