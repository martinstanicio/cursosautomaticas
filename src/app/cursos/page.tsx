import type { Metadata } from "next";

import CourseCard from "@/components/CourseCard";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { sortedCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Aquí podrás encontrar todos nuestros cursos y su fecha de realización. Puedes encontrar información adicional en la página de cada curso.",
  alternates: { canonical: "/cursos" },
  openGraph: { url: "/cursos" },
};

export default function Cursos() {
  return (
    <Section as="main" className="max-w-4xl space-y-8">
      <div className="space-y-2">
        <Heading as="h1" size={1}>
          Nuestros Cursos
        </Heading>
        <p>
          Estos son los cursos a realizarse próximamente. Puedes encontrar
          información detallada sobre cada uno en su página específica.
        </p>
        <p className="text-accent-500">
          Los cupos son limitados, se recomienda inscribirse con anticipación
          para asegurar tu participación.
        </p>
      </div>
      <div className="space-y-4">
        {sortedCourses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </Section>
  );
}
