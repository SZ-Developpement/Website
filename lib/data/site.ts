import type { NavLink } from "@/types";

export const SITE_URL = "https://www.sz-dev.fr";

/** Reseaux et contact. */
export const social = {
  github: "https://github.com/SZ-Developpement",
  linkedin: "https://www.linkedin.com/company/sz-developpement",
  email: "contact.szdev@gmail.com",
};

/** Liens de la navigation principale. */
export const navLinks: readonly NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Méthode", href: "/#methode" },
  { label: "Tarifs", href: "/#plan-rate" },
  { label: "FAQ", href: "/#faq" },
];

export type StatusKey = "ok" | "busy" | "unknown";

// Statut actuel du projet : "ok" = dispo, "busy" = complet, "unknown" = inconnu
export const projectStatus: StatusKey = "ok";

export const statusList: Record<
  StatusKey,
  { color: string; textProject: string }
> = {
  ok: {
    color: "#2F9E63",
    textProject: "Disponible pour de nouveaux projets",
  },
  busy: {
    color: "#C2410C",
    textProject: "Complet - prochains créneaux en janvier",
  },
  unknown: {
    color: "#A16207",
    textProject: "Statut inconnu",
  },
};

// Export de l'état actuel du projet pour l'afficher
export const currentStatus = statusList[projectStatus];
