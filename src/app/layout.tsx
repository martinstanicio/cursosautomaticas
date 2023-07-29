import "./globals.css";

import { Nunito, Play } from "next/font/google";

import type { Metadata } from "next";

const headings = Play({
  variable: "--font-headings",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const body = Nunito({ variable: "--font-body", subsets: ["latin"] });

const siteName = "Cursos Automáticas";
const description =
  "Conduce la excelencia en tu aprendizaje con Cursos Automáticas";
const themeColor = "#ef4444";

// TODO add images to metadata
// * https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-image-generation
// const images = "";

// TODO add url to metadata
// const url = "";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  themeColor,
  colorScheme: "dark",
  creator: "Martín Stanicio",
  generator: "Next.js",
  openGraph: {
    siteName,
    title: siteName,
    description,
    type: "website",
    locale: "es_ES",
    // url,
    // images,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${headings.variable} ${body.variable}`}>
      <body className="font-body text-neutral-300">{children}</body>
    </html>
  );
}
