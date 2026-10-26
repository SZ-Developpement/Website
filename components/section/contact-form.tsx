"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { envoyerContact } from "@/app/actions/contact";
import { budgetOptions, delaiOptions, projetsOptions } from "@/lib/data/contact";
import type { ChampContact, ChoixProps, ContactState } from "@/types";

const initial: ContactState = { status: "idle" };

// meme langage que les plans : panneau blanc pose dans un conteneur teinte (le
// conteneur est dans app/contact/page.tsx), coins rounded-xl, filets "line"
// focus : pas du contour noir decale (celui, global, des liens et boutons), mais
// le filet qui fonce et un halo doux, toujours bien visible au clavier
const base =
  "w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-foreground transition-[border-color,box-shadow] duration-200 placeholder:text-muted focus-visible:border-foreground/50 focus-visible:outline-none! focus-visible:ring-4 focus-visible:ring-foreground/8";

export default function ContactForm() {
  const [state, action, enCours] = useActionState(envoyerContact, initial);

  if (state.status === "ok") {
    return (
      <div
        role="status"
        className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-7 sm:p-8"
      >
        <h2 className="text-lg font-semibold tracking-[-0.02em]">
          Demande envoyée
        </h2>
        <p className="text-pretty text-sm leading-relaxed text-muted">
          {state.message}
        </p>
      </div>
    );
  }

  const valeur = (c: ChampContact) => state.values?.[c] ?? "";
  const erreur = (c: ChampContact) => state.errors?.[c];

  return (
    <form
      action={action}
      noValidate
      className="flex flex-col gap-7 rounded-2xl border border-line bg-surface p-7 sm:p-8"
    >
      {/* entete : meme composition que le haut d'une carte de plan */}
      <div className="flex flex-row items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface">
          <Send size={18} aria-hidden />
        </span>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold tracking-[-0.02em]">
            Décrivez votre projet
          </h2>
          <p className="text-sm text-muted">Réponse sous 48 h, sans engagement.</p>
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-xl border border-orange-700/30 px-4 py-3 text-sm text-orange-700"
        >
          {state.message}
        </p>
      )}

      <Puces
        id="projet"
        label="Type de projet"
        options={projetsOptions}
        defaut={valeur("projet")}
        erreur={erreur("projet")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Champ id="nom" label="Nom" erreur={erreur("nom")}>
          <input
            id="nom"
            name="nom"
            type="text"
            autoComplete="name"
            required
            defaultValue={valeur("nom")}
            aria-invalid={!!erreur("nom")}
            aria-describedby={erreur("nom") ? "nom-erreur" : undefined}
            className={base}
          />
        </Champ>
        <Champ id="email" label="E-mail" erreur={erreur("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={valeur("email")}
            aria-invalid={!!erreur("email")}
            aria-describedby={erreur("email") ? "email-erreur" : undefined}
            className={base}
          />
        </Champ>
      </div>

      <Puces
        id="budget"
        label="Budget"
        options={budgetOptions}
        defaut={valeur("budget")}
        erreur={erreur("budget")}
      />

      <Puces
        id="delai"
        label="Délai"
        options={delaiOptions}
        defaut={valeur("delai")}
        erreur={erreur("delai")}
      />

      <Champ id="message" label="Votre projet" erreur={erreur("message")}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={valeur("message")}
          aria-invalid={!!erreur("message")}
          aria-describedby={erreur("message") ? "message-erreur" : undefined}
          className={`${base} resize-y`}
        />
      </Champ>

      {/* piege a robots : hors ecran, inaccessible au clavier et aux lecteurs */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="site">Ne pas remplir</label>
        <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={enCours}
          className="flex w-full flex-row items-center justify-center gap-2 rounded-xl border border-transparent bg-foreground py-2.5 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-70 disabled:opacity-60"
        >
          {enCours ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>

        {/* information RGPD au point de collecte (art. 13) */}
        <p className="text-pretty text-[13px] leading-relaxed text-muted">
          Ces informations servent uniquement à répondre à votre demande et ne
          sont pas transmises à des tiers à des fins commerciales.{" "}
          <Link
            href="/politique-de-confidentialite"
            className="font-semibold text-foreground underline-offset-4 hover:underline"
          >
            En savoir plus
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Champ({
  id,
  label,
  erreur,
  children,
}: {
  id: string;
  label: string;
  erreur?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[13px] font-semibold">
        {label}
      </label>
      {children}
      {erreur && (
        <p id={`${id}-erreur`} className="text-[13px] text-orange-700">
          {erreur}
        </p>
      )}
    </div>
  );
}

/**
 * Choix unique presente en puces plutot qu'en liste deroulante : tout est
 * visible d'un coup. Ce sont de vrais boutons radio (clavier, lecteurs
 * d'ecran, envoi du formulaire) ; la puce n'est que leur habillage.
 */
function Puces({
  id,
  label,
  options,
  defaut,
  erreur,
}: {
  id: ChampContact;
  label: string;
  options: ChoixProps[];
  defaut: string;
  erreur?: string;
}) {
  return (
    <fieldset
      className="flex min-w-0 flex-col gap-2"
      aria-describedby={erreur ? `${id}-erreur` : undefined}
    >
      <legend className="mb-2 text-[13px] font-semibold">{label}</legend>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name={id}
              value={option.value}
              defaultChecked={defaut === option.value}
              className="peer sr-only"
            />
            <span className="flex items-center rounded-xl border border-line px-3.5 py-2 text-sm transition-colors duration-300 hover:bg-foreground/5 peer-checked:border-foreground peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-foreground">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {erreur && (
        <p id={`${id}-erreur`} className="text-[13px] text-orange-700">
          {erreur}
        </p>
      )}
    </fieldset>
  );
}
