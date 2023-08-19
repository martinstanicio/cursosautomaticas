import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { allCourses } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = () =>
  allCourses.map((c) => ({ slug: c._raw.flattenedPath }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c._raw.flattenedPath === params.slug);
  if (!course) notFound();
  return { title: course.title };
}

export default function Curso({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c._raw.flattenedPath === params.slug);
  if (!course) notFound();

  const Content = useMDXComponent(course.body.code);
  const imgPath = `/${course._raw.flattenedPath}.jpg`;

  return (
    <article>
      <header className="mx-auto max-w-3xl px-2 py-16 sm:px-4 md:px-8 lg:px-12">
        <Heading as="h1" size={1}>
          {course.title}
        </Heading>
        <div className="relative aspect-[4/3]">
          <Image
            className="object-cover"
            src={imgPath}
            alt={course.title}
            priority
            fill
          />
        </div>
      </header>
      <Content
        components={{
          // ! fix typescript error
          section: ({
            children,
            ["data-heading-rank"]: headingRank,
          }: React.HTMLAttributes<HTMLElement> & {
            "data-heading-rank"?: string;
          }) => {
            switch (Number(headingRank)) {
              case 2:
                return (
                  <section className="even:bg-black">
                    <div className="mx-auto max-w-3xl px-2 py-16 sm:px-4 md:px-8 lg:px-12">
                      {children}
                    </div>
                  </section>
                );
              case 3:
                return (
                  <section className="mt-8 first-of-type:mt-0">
                    {children}
                  </section>
                );

              default:
                return children;
            }
          },
          a: ({ href, children }) => (
            <Link href={href as string}>{children}</Link>
          ),
          h2: ({ children }) => (
            <Heading as="h2" size={2} className="pb-[1em]">
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading as="h3" size={3} className="pb-[1em]">
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
    </article>
  );
}
