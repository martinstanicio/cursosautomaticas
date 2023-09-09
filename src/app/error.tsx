"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";
import Section from "@/components/Section";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Error
        </Heading>
        <p>
          Hubo un error con la página, por favor vuelva a intentaro. Si el
          problema persiste, intentelo más tarde o{" "}
          <Link href="/contacto" className="text-accent-500 hover:underline">
            realize un reclamo
          </Link>
          .
        </p>
      </div>
      <Button type="button" intent="primary" onClick={reset}>
        Reiniciar
      </Button>
    </Section>
  );
}
