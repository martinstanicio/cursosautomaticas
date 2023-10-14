import type { Metadata } from "next";

const siteName = "Cursos Automáticas";
const title = `${siteName}: Potencia tus habilidades con cursos profesionales en cajas automáticas`;
const description =
  "Aprende de la experiencia de nuestro equipo de profesionales en transmisiones automáticas, liderado por Carlos Grosso.";
const themeColor = "#ef4444";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cursosautomaticas.com/"),
  title: {
    template: `%s | ${siteName}`,
    default: title,
  },
  description,
  themeColor,
  colorScheme: "dark",
  creator: "Martín Stanicio",
  generator: "Next.js",
  alternates: { canonical: "/" },
  openGraph: {
    siteName,
    title,
    description,
    type: "website",
    locale: "es",
    url: "/",
  },
};
