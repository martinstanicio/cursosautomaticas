import { notFound } from "next/navigation";

import { allCourses } from "contentlayer/generated";

import Button from "@/components/Button";
import Datetime from "@/components/Datetime";
import { Input } from "@/components/Field";
import Heading from "@/components/Heading";
import MDXContent from "@/components/MDXContent";
import Section from "@/components/Section";
import Slider from "@/components/Slider";

// const DynamicCheckout = dynamic(() => import("@/components/Checkout"), {
//   loading: () => (
//     <div className="min-h-[13rem] bg-white p-4 text-neutral-900">
//       <p>Cargando...</p>
//     </div>
//   ),
// });

function findCourse(slug: string) {
  const course = allCourses.find((c) => c.slug === slug);

  if (!course) notFound();

  return course;
}

export function generateStaticParams() {
  return allCourses.map(({ slug }) => ({ slug }));
}

export interface Props {
  params: ReturnType<typeof generateStaticParams>[0];
}

export function generateMetadata({ params }: Props) {
  const { title, description, url } = findCourse(params.slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { url },
  };
}

export default function Curso({ params }: Props) {
  const { title, description, datetime, price, images, ...course } = findCourse(
    params.slug,
  );

  return (
    <article>
      <Section as="header" className="max-w-3xl space-y-4">
        <Heading as="h1" size={2}>
          {title}
        </Heading>

        <Slider images={images} title={title} />

        <p>{description}</p>
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <Button href="#checkout" intent="primary" className="flex-shrink-0">
            Sumate a la lista de espera
          </Button>
          <Datetime datetime={new Date(datetime)} />
        </div>
        <p>
          Cupos limitados, ¡no pierdas la oportunidad! Sumate a la lista de
          espera para mantenerte en contacto.
        </p>
      </Section>

      <MDXContent code={course.body.code} />

      <Section
        intent="accent"
        className="max-w-3xl scroll-mt-24 space-y-4"
        id="checkout"
      >
        <Heading as="h2" size={2}>
          Lista de espera
        </Heading>
        <p>
          La inscripción a nuestros cursos todavía no está disponible, te
          recomendamos que te mantengas alerta para no perder esta oportunidad.
        </p>
        <form action="/api/waitlist" className="space-y-4">
          <input type="hidden" name="slug" value={course.slug} />
          <Input type="email" id="email" name="email">
            Email
          </Input>
          <Button type="submit" intent="primary" variant="black">
            Enviar
          </Button>
        </form>
        {/* <DynamicCheckout title={title} price={price} /> */}
      </Section>
    </article>
  );
}
