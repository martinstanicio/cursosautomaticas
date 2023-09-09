import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "404 | Cursos Automáticas" };

export default function Error() {
  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          404: Esta página no existe
        </Heading>
        <p>
          La página que está intentando acceder no existe. Si cree que esto es
          un error, por favor{" "}
          <Link href="/contacto" className="text-accent-500 hover:underline">
            realize un reclamo
          </Link>
          .
        </p>
      </div>
      <Button href="/" intent="primary">
        Inicio
      </Button>
    </Section>
  );
}
