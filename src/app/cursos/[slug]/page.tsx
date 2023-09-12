import Button from "@/components/Button";
import Datetime from "@/components/Datetime";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { allCourses } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

const DynamicCheckout = dynamic(() => import("@/components/Checkout"), {
  loading: () => (
    <div className="min-h-[13rem] rounded bg-white p-4 text-neutral-900">
      <p>Cargando...</p>
    </div>
  ),
});

export const generateStaticParams = () =>
  allCourses.map(({ slug }) => ({ slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const { title, description } = course;
  return { title, description };
}

export default function Curso({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const { title, description, datetime, price, slug } = course;
  const Content = useMDXComponent(course.body.code);
  const imgPath = `/${course._raw.sourceFileDir}/${slug}.jpg`;

  return (
    <article>
      <Section as="header" className="max-w-3xl space-y-4">
        <Heading as="h1" size={2}>
          {title}
        </Heading>
        <div className="relative aspect-[4/3] overflow-hidden rounded">
          <Image
            sizes="(min-width: 780px) 715px, 96.52vw"
            className="object-cover object-center"
            src={imgPath}
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
      <Content
        components={{
          section: ({ children, ["data-heading-rank"]: headingRank }: any) => {
            switch (Number(headingRank)) {
              case 2:
                return (
                  <Section
                    intent="black"
                    frequency="even"
                    className="max-w-3xl"
                    style={{ counterIncrement: "section" }}
                  >
                    {children}
                  </Section>
                );
              case 3:
                return (
                  <div className="mt-8 first-of-type:mt-0">{children}</div>
                );

              default:
                return children;
            }
          },
          a: ({ href, children }) => (
            <Link href={href as string}>{children}</Link>
          ),
          h2: ({ children }) => (
            <Heading
              as="h2"
              size={2}
              className="pb-[1em] before:text-accent-500 before:content-[counter(section)_'._']"
            >
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading as="h3" size={3} className="pb-[1em] text-accent-500">
              {children}
            </Heading>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ps-6 marker:font-bold marker:text-accent-500">
              {children}
            </ol>
          ),
          ul: ({ children }) => (
            <ul className="list-square ps-6 marker:text-accent-500">
              {children}
            </ul>
          ),
        }}
      />

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
