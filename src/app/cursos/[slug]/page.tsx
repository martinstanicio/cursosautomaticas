import Button from "@/components/Button";
import Datetime from "@/components/Datetime";
import Heading from "@/components/Heading";
import Image from "next/image";
import MDXContent from "@/components/MDXContent";
import Section from "@/components/Section";
import { allCourses } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const DynamicCheckout = dynamic(() => import("@/components/Checkout"), {
  loading: () => (
    <div className="min-h-[13rem] rounded bg-white p-4 text-neutral-900">
      <p>Cargando...</p>
    </div>
  ),
});

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
  const { title, description } = findCourse(params.slug);

  return { title, description };
}

export default function Curso({ params }: Props) {
  const { title, description, datetime, price, ...course } = findCourse(
    params.slug,
  );

  const imgSrc = `/${course._raw.sourceFileDir}/${course.slug}.jpg`;

  return (
    <article>
      <Section as="header" className="max-w-3xl space-y-4">
        <Heading as="h1" size={2}>
          {title}
        </Heading>
        <div className="relative aspect-[4/3]">
          <Image
            sizes="(min-width: 780px) 715px, 96.52vw"
            className="object-cover object-center"
            src={imgSrc}
            alt={title}
            priority
            fill
          />
        </div>
        <p>{description}</p>
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <Button href="#checkout" intent="primary" className="flex-shrink-0">
            ¡Inscribite ahora!
          </Button>
          <Datetime datetime={new Date(datetime)} />
        </div>
      </Section>

      <MDXContent code={course.body.code} />

      <Section
        intent="accent"
        className="max-w-3xl scroll-mt-24 space-y-4"
        id="checkout"
      >
        <Heading as="h2" size={2}>
          ¡Inscribite ahora!
        </Heading>
        <DynamicCheckout title={title} price={price} />
      </Section>
    </article>
  );
}
