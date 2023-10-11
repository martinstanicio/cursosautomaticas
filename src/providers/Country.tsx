import { headers } from "next/headers";

import Brand from "@/components/Brand";
import Section from "@/components/Section";
import { getEnv } from "@/env";

export interface Props {
  children: React.ReactNode;
}

export default function CountryProvider({ children }: Props) {
  if (process.env.NODE_ENV !== "production") return children;

  const UNAVAILABLE_COUNTRIES = getEnv("UNAVAILABLE_COUNTRIES").split(",");

  const headersList = headers();
  const country = headersList.get("X-Country");

  if (typeof country !== "string") return children;
  if (!UNAVAILABLE_COUNTRIES.includes(country)) return children;

  const listFormatter = new Intl.ListFormat("es");
  const formattedUnavailableCountries = listFormatter.format(
    UNAVAILABLE_COUNTRIES,
  );

  return (
    <Section as="main" className="flex flex-col items-center gap-4 text-center">
      <Brand />
      <p>
        Esta plataforma no está disponible en {formattedUnavailableCountries}.
      </p>
    </Section>
  );
}
