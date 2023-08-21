import CourseCard from "@/components/CourseCard";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { allCourses } from "contentlayer/generated";

export default function Cursos() {
  const courses = allCourses.sort();

  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <Heading as="h1" size={1}>
        Nuestros Cursos
      </Heading>
      <div className="space-y-4">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </Section>
  );
}
