import Heading from "@/components/Heading";
import Image from "next/image";
import { allCourses } from "contentlayer/generated";
import { notFound } from "next/navigation";

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
  const imgPath = `/${course._raw.flattenedPath}.jpg`;

  return (
    <article className="prose prose-neutral mx-auto max-w-3xl space-y-8 px-2 py-16 dark:prose-invert sm:prose-sm md:prose-base marker:font-bold marker:text-accent-500 prose-headings:font-headings prose-headings:font-bold prose-ul:list-square sm:px-4 md:px-8 lg:px-12">
      <header>
        <Heading as="h1" size={2}>
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
      <div dangerouslySetInnerHTML={{ __html: course.body.html }} />
    </article>
  );
}