import CourseCard from "@/components/CourseCard";
import Heading from "@/components/Heading";
import { allCourses } from "contentlayer/generated";

export default function Cursos() {
  const courses = allCourses.sort();

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-2 py-16 sm:px-4 md:px-8 lg:px-12">
      <Heading as="h1" size={1}>
        Nuestros Cursos
      </Heading>
      <section className="space-y-4">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </section>
    </main>
  );
}
