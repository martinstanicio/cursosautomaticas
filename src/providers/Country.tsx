import { cookies, headers } from "next/headers";

import Brand from "@/components/Brand";
import Section from "@/components/Section";
import { getEnv } from "@/lib/env";

export interface Props {
  children: React.ReactNode;
}

export default function CountryProvider({ children }: Props) {
  const cookiesStore = cookies();
  const headersList = headers();

  const ADMIN_ID = getEnv("ADMIN_ID");

  // check if "admin-id" cookie exists and is valid
  const adminIdCookie = cookiesStore.get("admin-id")?.value;
  if (ADMIN_ID === adminIdCookie) return children;

  // check if "X-Country-Name" header exists
  const country = headersList.get("X-Country-Name");
  if (!country) return children;

  // check if the country is unavailable
  const UNAVAILABLE_COUNTRIES = getEnv("UNAVAILABLE_COUNTRIES").split(",");
  if (!UNAVAILABLE_COUNTRIES.includes(country)) return children;

  const listFormatter = new Intl.ListFormat("es");
  const formattedUnavailableCountries = listFormatter.format(
    UNAVAILABLE_COUNTRIES,
  );

  return (
    <Section as="main" className="flex flex-col items-center gap-4 text-center">
      <Brand />
      <p>
        Lo sentimos, esta plataforma no está disponible en{" "}
        {formattedUnavailableCountries}.
      </p>
    </Section>
  );
}
