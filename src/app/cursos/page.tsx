import CourseCard from "@/components/CourseCard";
import Heading from "@/components/Heading";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { allCourses } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Aquí podrás encontrar todos nuestros cursos y su fecha de realización. Puedes encontrar información adicional en la página de cada curso.",
};

export default function Cursos() {
  const courses = allCourses.sort();

  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Nuestros Cursos
        </Heading>
        <p>
          Aquí podrás encontrar todos nuestros cursos y su fecha de realización.
          Puedes encontrar información adicional en la página de cada curso.
        </p>
      </div>
      <div className="space-y-4">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </Section>
  );
}
