import Button from "@/components/Button";
import Field from "@/components/Field";
import Heading from "@/components/Heading";
import Section from "@/components/Section";

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
      <form className="space-y-4">
        <Field
          type="text"
          id="nombre"
          placeholder="Juan Perez"
          required
          autoComplete="name"
          autoFocus
        >
          Nombre
        </Field>
        <Field
          type="email"
          id="email"
          placeholder="juan@gmail.com"
          required
          autoComplete="email"
        >
          Email
        </Field>
        <Field textarea id="mensaje" required>
          Tu mensaje o consulta
        </Field>

        <Button type="submit" intent="primary">
          Enviar
        </Button>
      </form>
    </Section>
  );
}
