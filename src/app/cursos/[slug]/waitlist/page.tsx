import { notFound } from "next/navigation";

import { allCourses } from "contentlayer/generated";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Section from "@/components/Section";

export const generateStaticParams = () =>
  allCourses.map(({ slug }) => ({ slug }));

export default function Waitlist({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Ha sido añadido a la lista de espera con éxito
        </Heading>
        <p>
          Ha sido añadido a la lista de espera del curso{" "}
          <strong className="text-accent-500">
            &quot;{course.title}&quot;
          </strong>{" "}
          con éxito.
        </p>
        <p>
          Nos comunicaremos con usted mediante email cuando la inscripción al
          curso esté abierta.
        </p>
      </div>
      <Button href="/" intent="primary">
        Inicio
      </Button>
    </Section>
  );
}
