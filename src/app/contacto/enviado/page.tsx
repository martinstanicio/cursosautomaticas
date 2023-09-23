import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Section from "@/components/Section";

export default function Enviado() {
  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Formulario enviado
        </Heading>
        <p>Su mensaje ha sido enviado con éxito.</p>
        <p>De ser necesario, nos comunicaremos con usted en la brevedad.</p>
      </div>
      <Button href="/" intent="primary">
        Inicio
      </Button>
    </Section>
  );
}
