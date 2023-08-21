import {
  Choices,
  DocumentHorizontal,
  Education,
  RecentlyViewed,
} from "@carbon/icons-react";
import { allCourses, allFAQs, allTestimonies } from "contentlayer/generated";

import Benefit from "@/components/Benefit";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import FAQ from "@/components/FAQ";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Image from "next/image";
import Section from "@/components/Section";
import Stat from "@/components/Stat";
import Testimony from "@/components/Testimony";

export default function Home() {
  const filteredCourses = allCourses
    .sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime))
    .slice(0, 3);

  return (
    <>
      <Hero />
      <Section
        black
        className="flex flex-col justify-center gap-x-6 gap-y-10 py-6 sm:flex-row sm:justify-around"
      >
        <Stat value="35+">años reparando cajas automáticas</Stat>
        <Stat value="6+">años de experiencia dictando cursos</Stat>
      </Section>
      <main>
        <Section className="max-w-4xl space-y-8">
          <Heading as="h2" size={2} className="text-center">
            ¿Por qué elegir Cursos Automáticas?
          </Heading>
          <div className="grid place-items-center justify-center gap-10 sm:grid-cols-2 sm:gap-y-16">
            <Benefit icon={Education} title="Clases con un experto">
              Aprende directamente del especialista{" "}
              <strong>Carlos Grosso</strong>, quien te guiará a lo largo del
              proceso de aprendizaje.
            </Benefit>
            <Benefit icon={RecentlyViewed} title="Material actualizado">
              Accede a <strong>contenido actualizado</strong> y relevante sobre
              las últimas tecnologías en transmisiones automáticas.
            </Benefit>
            <Benefit icon={Choices} title="Variedad de cursos">
              Ofrecemos cursos sobre diversos tipos de transmisiones y sistemas,
              cubriendo una{" "}
              <strong>amplia gama de temas y tecnologías relevantes</strong> en
              la industria.
            </Benefit>
            <Benefit
              icon={DocumentHorizontal}
              title="Clases online interactivas"
            >
              Disfruta de <strong>clases en vivo</strong> desde cualquier lugar
              del mundo, donde podrás hacer preguntas y recibir respuestas en
              tiempo real.
            </Benefit>
          </div>
        </Section>
        <Section black className="flex max-w-5xl flex-col gap-12 md:flex-row">
          <div className="flex-1 space-y-8">
            <Heading as="h2" size={2}>
              Conoce a Carlos Grosso, nuestro especialista
            </Heading>
            <div className="space-y-4">
              <p>
                <strong>Carlos Grosso</strong> es un apasionado de las cajas
                automáticas con más de{" "}
                <strong className="text-accent-500">
                  35 años de experiencia
                </strong>{" "}
                en el campo. Durante los últimos 6 años, ha sido profesor en la
                prestigiosa <strong className="text-accent-500">FAATRA</strong>,
                donde ha formado a nuevos profesionales del área.
              </p>
              <p>
                Prepárate para aprender de un referente en la industria y{" "}
                <strong>desbloquear nuevas oportunidades</strong> en tu carrera.
              </p>
            </div>
            <Button href="#" size="small">
              Leer más
            </Button>
          </div>
          <div className="relative aspect-[4/3] flex-1 border-4 border-accent-500">
            <Image
              src="/carlosgrosso.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </Section>
        <Section className="flex max-w-4xl flex-col items-center gap-12">
          <Heading as="h2" size={2}>
            Próximos cursos
          </Heading>
          <div className="space-y-4">
            {filteredCourses.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
          <Button href="/cursos" className="sm:mx-auto">
            Ver todos los cursos
          </Button>
        </Section>
        <Section black className="flex max-w-5xl flex-col gap-12">
          <Heading as="h2" size={2} className="text-center">
            Las opiniones de nuestros alumnos
          </Heading>
          <div className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-3">
            {allTestimonies.slice(0, 3).map((testimony, i) => (
              <Testimony
                className="max-w-xs lg:first:scale-95 lg:first:opacity-75 lg:last:scale-95 lg:last:opacity-75"
                key={i}
                {...testimony}
              />
            ))}
          </div>
        </Section>
        <Section className="flex max-w-4xl flex-col items-center gap-12">
          <Heading as="h2" size={2}>
            Preguntas frecuentes (FAQ)
          </Heading>
          <div className="w-full space-y-4">
            {allFAQs.map((faq, i) => (
              <FAQ key={i} {...faq} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
