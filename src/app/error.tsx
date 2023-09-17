"use client";

import { useEffect } from "react";

import type { Metadata } from "next";
import Link from "next/link";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Error",
  description:
    "Hubo un error con la página, por favor vuelva a intentaro. Si el problema persiste, intentelo más tarde o realize un reclamo.",
};

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
