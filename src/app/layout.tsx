import { twMerge } from "tailwind-merge";

import type { Metadata } from "next";
import { Nunito, Play } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CountryProvider from "@/providers/Country";
import "@/styles/main.css";

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
    url: "https://www.cursosautomaticas.com/",
    // images,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={twMerge(body.variable, headings.variable, "scroll-smooth")}
    >
      <body className="bg-neutral-950 font-body leading-relaxed text-neutral-300">
        <CountryProvider>
          <Header hideOnHome />
          {children}
          <Footer />
        </CountryProvider>
      </body>
    </html>
  );
}
