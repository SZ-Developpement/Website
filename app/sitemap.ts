import type { MetadataRoute } from "next";
import { legalComplet } from "@/lib/data/legal";
import { SITE_URL } from "@/lib/data/site";

const pages = ["", "/contact"];
// les pages juridiques sont en noindex tant que legal.ts est incomplet : on ne
// les annonce pas dans le plan du site
const pagesJuridiques = [
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const chemins = legalComplet ? [...pages, ...pagesJuridiques] : pages;
  return chemins.map((chemin) => ({ url: `${SITE_URL}${chemin}` }));
}
