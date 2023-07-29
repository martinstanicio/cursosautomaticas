import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="container">
      <h1 className="font-headings text-3xl font-bold text-neutral-50 sm:text-4xl md:text-5xl lg:text-6xl">
        Conduce la excelencia en tu aprendizaje con{" "}
        <span className="text-accent-600">Cursos Automáticas</span>
      </h1>
      <p>
        Aprende de la experiencia de Carlos Grosso, experto en reparación de
        cajas automáticas.
      </p>
      <Button href="#" size="big" intent="primary" variant="accent">
        ¡Regístrate ahora!
      </Button>
    </main>
  );
}
