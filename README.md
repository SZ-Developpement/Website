# SZ Dev — site

Site vitrine de Alexis De Jesus EI – SZ Dev (micro-entreprise, une seule personne). Next.js 16 · React 19 · Tailwind 4 · TypeScript.

> **État : refonte en cours.** Le site est reconstruit depuis zéro sur `v-pro`
> avec un positionnement commercial. L'ancienne version reste sur `v-beta`.

## À faire avant la mise en ligne

- [ ] **Médiateur de la consommation** : adhérer à un médiateur avant de vendre
      à des particuliers, puis renseigner `legal.mediateur` dans
      `lib/data/legal.ts`. Tant qu'il est `null`, `legalComplet` est faux et les
      trois pages juridiques restent en `noindex` (et hors sitemap) ; le reste
      du site n'est pas touché.
- [ ] **Texte « À propos »** : renseigner `lib/data/apropos.ts` (texte, photo).
      Vide, la section n'est pas affichée.
- [ ] **Variables Vercel** : `RESEND_API_KEY` (et `CONTACT_FROM`, `CONTACT_TO`),
      voir `.env.example`.
- [ ] **Domaine** `www.sz-dev.fr` rattaché au projet Vercel.

---

## Branches

Quatre branches coexistent et portent des versions **différentes** du site.
Lire ce tableau avant de changer de branche : du travail a déjà été perdu ici.

| Branche           | Rôle                                                              |
| ----------------- | ----------------------------------------------------------------- |
| `main`            | Version restructurée (`src/`), design terminal, formulaire Resend |
| `v-pro`           | **Branche active** — refonte marketing, repart d'une base vierge  |
| `v-beta`          | Version sobre + thème clair/sombre + version d'origine               |
| `v-test`          | Bac à sable                                                       |
| `feat/auth-admin` | Espace d'administration                                           |

`main` et `v-beta` ont divergé au point d'être deux sites distincts : l'un a un
dossier `src/`, l'autre non. Les fusionner demande un arbitrage, pas un merge.

Récupérer un élément d'une ancienne version sans changer de branche :

```powershell
git checkout v-beta -- public/stack
```

**Commiter avant tout changement de branche.** Les fichiers non suivis ne sont
rattachés à aucune branche et disparaissent sans que git puisse les restaurer.

---

## Organisation

Le contenu est séparé du rendu. Aucun texte, aucune couleur et aucune donnée
ne vit dans un composant.

```
app/                 routes (App Router)
components/
  section/           blocs de page, assemblés dans app/page.tsx
  card/              cartes réutilisables
  layout/            navbar, footer, section générique
  icon/              SVG inline
lib/data/            toutes les données éditoriales
types/               types partagés
public/              logos de stack, favicons
```

**Modifier le site passe presque toujours par `lib/data/`.** Ajouter un projet,
un service ou un tarif, c'est ajouter une entrée dans le tableau concerné —
jamais toucher au composant qui l'affiche.

### Lier deux jeux de données

Les relations se font par identifiant typé, jamais par nom affiché.

```ts
export type ServiceSlug = "site-vitrine" | "application-web";

// sur le projet, pas sur le service : un projet relève d'un service
service: ServiceSlug;
```

Une faute de frappe devient alors une erreur de compilation. Lier par titre ou
par nom fait disparaître l'élément en silence, sans erreur.

---

## Design

Couleurs, ombres et polices sont des tokens définis dans `app/globals.css`.

**Ne jamais écrire une couleur en dur dans un composant.** Le site supporte le
thème clair et sombre : un `#0a0a0b` codé en dur reste noir sur fond blanc.

| Token                   | Usage                        |
| ----------------------- | ---------------------------- |
| `bg-background`         | fond de page                 |
| `bg-card` / `card-hover`| surface des cartes           |
| `text-foreground/40`    | texte secondaire (opacités)  |
| `shadow-card`           | élévation, nulle en sombre   |

L'opacité se pose sur `foreground`, qui s'inverse avec le thème :
`text-foreground/40` fonctionne dans les deux modes, `text-white/40` non.

---

## Règles de contenu

Ces règles existent parce que l'inverse a déjà été publié.

- **Aucun chiffre invérifiable.** Pas de « 100 % de satisfaction client » ni de
  « 94 % de passion ». Les compteurs se dérivent de la donnée réelle
  (`projects.filter((p) => p.status === "Terminé").length`), jamais à la main.
  Une allégation fausse engage l'entreprise (art. L121-2 du Code de la
  consommation).
- **Engagements plutôt que compteurs.** « Réponse sous 48h » est une promesse
  tenable dès le premier client ; « 3 projets livrés » dépend du temps.
- **Voix commerciale sur les pages d'offre** (accueil, services, projets) :
  ni âge, ni école, ni statut étudiant. **Voix assumée sur la page à-propos**, où la jeunesse devient un atout. La jeunesse est la preuve d'un
  bénéfice, jamais l'excuse d'un manque.
- **Mentions légales obligatoires** (LCEN art. 6-III) : dénomination, forme
  juridique, SIRET, siège, hébergeur. Elles vivent dans `lib/data/legal.ts` et
  ne sont jamais inventées — la page reste en `noindex` tant qu'elle est
  incomplète.

---

## Conventions

- **Commits** en français, format conventionnel : `feat:`, `fix:`, `chore:`,
  `refactor:`. Le `!` signale une rupture.
- **Terminal PowerShell.** Pas de `&&` ni de `rm -rf` : utiliser `;` et
  `Remove-Item -Recurse -Force`.
- **Avant de pousser** : `npx tsc --noEmit`, `npx eslint .`, `npx next build`.

---

## Secrets

`.env` et `.env.local` sont ignorés par git et **absents de GitHub**. Les perdre
signifie regénérer les clés chez Neon et Resend.

| Variable         | Service |
| ---------------- | ------- |
| `DATABASE_URL`   | NeonDB  |
| `JWT_SECRET`     | auth    |
| `RESEND_API_KEY` | Resend  |

Le formulaire de contact lit `RESEND_API_KEY` (et, en option, `CONTACT_FROM`
et `CONTACT_TO`) : voir `.env.example`.

---

## Structure de page visée

Ordre des sections de la refonte, et ce que chacune doit accomplir.

1. **Hero** — ce qu'on fait, pour qui, ce qui nous distingue
2. **Engagements** — réponse 48h, code source livré, aucune sous-traitance
3. **Services** — formulés en problèmes clients, pas en technologies
4. **Étude de cas** — un projet détaillé : problème → solution → résultat
5. **Méthode** — le cadre de travail, qui rassure en l'absence de références
6. **À propos** — la personne derrière le code (micro-entreprise : pas d'équipe)
7. **Tarifs** — fourchettes, pour filtrer les demandes en amont
8. **FAQ** — les objections traitées de front
9. **Contact** — formulaire qualifiant : projet, budget, délai
10. **Footer** — navigation, réseaux, mentions légales

Sans références clients, ce sont les sections 2, 5 et 8 qui font le travail de
réassurance que des témoignages feraient ailleurs.
