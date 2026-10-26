import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/data/site";
import "./globals.css";

/** serif haute-graisse, reservee aux titres en italique */
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

/** grotesque compacte, tout le reste */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE = SITE_URL;
const TITRE = "SZ Dev";
const DESCRIPTION =
  "Studio de développement web et mobile. Applications Next.js, React et " +
  "React Native conçues, développées et déployées de bout en bout. " +
  "Réponse sous 48 h.";

export const metadata: Metadata = {
  // indispensable : sans metadataBase, les URLs d'images Open Graph restent
  // relatives et les apercus de partage cassent (LinkedIn, Discord, iMessage)
  metadataBase: new URL(SITE),

  title: {
    default: TITRE,
    // les sous-pages n'ecrivent plus que leur nom : "Projets" -> "Projets - SZ Dev"
    template: "%s - SZ Dev",
  },
  description: DESCRIPTION,

  alternates: { canonical: "/" },

  applicationName: "SZ Dev",
  authors: [{ name: "SZ Dev", url: SITE }],
  creator: "SZ Dev",
  publisher: "SZ Dev",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE,
    siteName: "SZ Dev",
    title: TITRE,
    description: DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",
    title: TITRE,
    description: DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded-full focus-visible:bg-foreground focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-background focus-visible:outline-background"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
