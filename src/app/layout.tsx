import { Analytics } from "@vercel/analytics/react";
import { twMerge } from "tailwind-merge";

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

export { metadata } from "@/lib/metadata";

export interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
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
        <Analytics />
      </body>
    </html>
  );
}
