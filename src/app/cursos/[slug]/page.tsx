import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { allCourses } from "contentlayer/generated";
import { defaultClass as defaultSectionClass } from "@/components/Section";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = () =>
  allCourses.map(({ slug }) => ({ slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c.slug === params.slug);
  if (!course) notFound();
  return { title: course.title };
}

export default function Curso({ params }: { params: { slug: string } }) {
  const course = allCourses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const Content = useMDXComponent(course.body.code);
  const imgPath = `/${course._raw.sourceFileDir}/${course.slug}.jpg`;

  return (
    <article>
      <header className="mx-auto max-w-3xl space-y-4 px-2 py-16 sm:px-4 md:px-8 lg:px-12">
        <Heading as="h1" size={1}>
          {course.title}
        </Heading>
        <div className="relative aspect-[4/3]">
          <Image
            sizes="(min-width: 780px) 715px, 96.52vw"
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
          section: ({ children, ["data-heading-rank"]: headingRank }: any) => {
            switch (Number(headingRank)) {
              case 2:
                return (
                  <div
                    className="even:bg-black"
                    style={{ counterIncrement: "section" }}
                  >
                    <section
                      className={twMerge(defaultSectionClass, "max-w-3xl")}
                    >
                      {children}
                    </section>
                  </div>
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
    </article>
  );
}
