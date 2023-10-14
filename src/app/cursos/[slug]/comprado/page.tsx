import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { allCoursesSlugs, findCourse } from "@/lib/courses";

export const generateStaticParams = () => allCoursesSlugs;

export default function Comprado({ params }: { params: { slug: string } }) {
  const course = findCourse(params.slug);

  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Compra realizada
        </Heading>
        <p>
          Su compra del curso{" "}
          <strong className="text-accent-500">
            &quot;{course.title}&quot;
          </strong>{" "}
          ha sido realizada con éxito.
        </p>
        <p>
          Nos comunicaremos con usted mediante email para informarle sobre el
          curso en la brevedad.
        </p>
      </div>
      <Button href="/cursos" intent="primary">
        Ver cursos
      </Button>
    </Section>
  );
}
