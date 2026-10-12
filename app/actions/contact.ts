"use server";

import { budgetOptions, delaiOptions, projetsOptions } from "@/lib/data/contact";
import { social } from "@/lib/data/site";
import type { ChampContact, ContactState } from "@/types";

const LIMITES = { nom: 100, email: 200, message: 4000 } as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** retire les retours a la ligne : une valeur injectee dans un en-tete mail */
const uneLigne = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

const libelle = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label;

export async function envoyerContact(
  _precedent: ContactState,
  data: FormData,
): Promise<ContactState> {
  // piege a robots : champ invisible pour un humain, rempli par un script.
  // On repond "ok" pour ne rien leur apprendre.
  if (String(data.get("site") ?? "") !== "") {
    return { status: "ok", message: "Merci, votre demande est bien partie." };
  }

  const lire = (champ: ChampContact) => String(data.get(champ) ?? "").trim();
  const values: Record<ChampContact, string> = {
    nom: lire("nom"),
    email: lire("email"),
    projet: lire("projet"),
    budget: lire("budget"),
    delai: lire("delai"),
    message: lire("message"),
  };

  const errors: ContactState["errors"] = {};
  if (!values.nom) errors.nom = "Indiquez votre nom.";
  else if (values.nom.length > LIMITES.nom) errors.nom = "Nom trop long.";

  if (!EMAIL.test(values.email) || values.email.length > LIMITES.email) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (!libelle(projetsOptions, values.projet)) {
    errors.projet = "Choisissez un type de projet.";
  }
  if (!libelle(budgetOptions, values.budget)) {
    errors.budget = "Choisissez une tranche de budget.";
  }
  if (!libelle(delaiOptions, values.delai)) {
    errors.delai = "Choisissez un délai.";
  }
  if (values.message.length < 10) {
    errors.message = "Décrivez votre projet en quelques phrases.";
  } else if (values.message.length > LIMITES.message) {
    errors.message = "Message trop long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Certains champs sont à corriger.",
      errors,
      values,
    };
  }

  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    return {
      status: "error",
      message: `L'envoi n'est pas disponible pour le moment. Écrivez-nous directement à ${social.email}.`,
      values,
    };
  }

  // texte brut uniquement : rien de ce que saisit le visiteur n'est interprete
  // comme du HTML.
  const corps = [
    `Nom : ${uneLigne(values.nom)}`,
    `E-mail : ${uneLigne(values.email)}`,
    `Projet : ${libelle(projetsOptions, values.projet)}`,
    `Budget : ${libelle(budgetOptions, values.budget)}`,
    `Délai : ${libelle(delaiOptions, values.delai)}`,
    "",
    values.message,
  ].join("\n");

  try {
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cle}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "SZ Dev <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? social.email],
        reply_to: uneLigne(values.email),
        subject: `Nouvelle demande : ${libelle(projetsOptions, values.projet)} (${uneLigne(values.nom)})`,
        text: corps,
      }),
    });

    if (!reponse.ok) throw new Error(`Resend ${reponse.status}`);
  } catch {
    return {
      status: "error",
      message: `L'envoi a échoué. Réessayez, ou écrivez-nous à ${social.email}.`,
      values,
    };
  }

  return {
    status: "ok",
    message: "Merci, votre demande est bien partie. Réponse sous 48 h.",
  };
}
