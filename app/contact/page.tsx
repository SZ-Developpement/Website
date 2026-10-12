import type { Metadata } from "next";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Section from "@/components/layout/Section";
import ContactForm from "@/components/section/contact-form";
import { social } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Démarrer un projet",
  description:
    "Décrivez votre projet, votre budget et votre délai. Réponse sous 48 h, sans engagement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main id="main">
        <Section
          id="contact"
          padding="pt-32 pb-16"
          contentClassName="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16"
        >
          <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <h1 className="text-balance text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">
              <span className="serif text-[1.15em] font-normal">Un projet</span>{" "}
              en tête&nbsp;?
            </h1>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
              Décrivez ce que vous voulez construire, avec votre budget et votre
              délai. Réponse sous 48&nbsp;h, sans engagement.
            </p>
            <p className="text-[13px] text-muted">
              Vous préférez écrire ? <br />
              <a
                href={`mailto:${social.email}`}
                className="font-semibold text-foreground underline-offset-4 hover:underline"
              >
                {social.email}
              </a>
            </p>
          </div>

          {/* conteneur teinte + panneau blanc : comme le bloc des plans */}
          <div className="rounded-3xl border border-line bg-foreground/4 p-2">
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer cta={false} />
    </>
  );
}
