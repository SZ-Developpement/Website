export default function Section({
  id,
  className = "",
  contentClassName = "",
  padding = "py-24",
  children,
}: {
  id: string;
  /** s'applique a la <section> : fond, marges, overflow */
  className?: string;
  /** s'applique au conteneur interieur : mise en page du contenu */
  contentClassName?: string;
  /**
   * Rythme vertical. C'est une prop et non une classe par defaut concatenee :
   * deux utilitaires Tailwind en conflit (py-24 py-12) se resolvent par leur
   * ordre dans la feuille generee, pas par leur ordre dans l'attribut class.
   * py-24 gagnerait donc toujours. Ici la valeur est remplacee, pas ajoutee.
   */
  padding?: string;
  children: React.ReactNode;
}) {
  // scroll-mt : la navbar est fixe, sans marge les titres passent dessous
  // au saut d'ancre
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div
        className={`mx-auto w-full max-w-7xl px-6 ${padding} ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
