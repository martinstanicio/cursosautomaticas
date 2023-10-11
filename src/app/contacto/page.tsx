import type { Metadata } from "next";

import Button from "@/components/Button";
import { Input, TextArea } from "@/components/Field";
import Heading from "@/components/Heading";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Su opinión y consultas son de gran importancia para nosotros. Le invitamos a completar el formulario a continuación y nos comprometemos a responder en la brevedad.",
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto" },
};

export default function Contacto() {
  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Contacto
        </Heading>
        <p>
          Su opinión y consultas son de gran importancia para nosotros. Le
          invitamos a completar el formulario a continuación y nos comprometemos
          a responder en la brevedad.
        </p>
      </div>
      <form action="/api/contact" className="space-y-4">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Juan Perez"
          required
          autoComplete="name"
          autoFocus
        >
          Nombre
        </Input>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="juan@gmail.com"
          required
          autoComplete="email"
        >
          Email
        </Input>
        <TextArea id="message" name="message" required>
          Tu mensaje o consulta
        </TextArea>

        <Button type="submit" intent="primary">
          Enviar
        </Button>
      </form>
    </Section>
  );
}
