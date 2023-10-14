import Button from "@/components/Button";
import Datetime from "@/components/Datetime";
import { Input } from "@/components/Field";
import Heading from "@/components/Heading";
import MDXContent from "@/components/MDXContent";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import { allCoursesSlugs, findCourse } from "@/lib/courses";

// const DynamicCheckout = dynamic(() => import("@/components/Checkout"), {
//   loading: () => (
//     <div className="min-h-[13rem] bg-white p-4 text-neutral-900">
//       <p>Cargando...</p>
//     </div>
//   ),
// });

export const generateStaticParams = () => allCoursesSlugs;

export interface Props {
  params: (typeof allCoursesSlugs)[0];
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
        <div className="space-y-2">
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <Button href="#checkout" intent="primary" className="flex-shrink-0">
              Sumate a la lista de espera
            </Button>
            <Datetime datetime={new Date(datetime)} />
          </div>
          <p className="text-sm text-red-600">
            La fecha es tentativa y está sujeta a posibles modificaciones hasta
            que se abran las inscripciones.
          </p>
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
