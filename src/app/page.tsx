import {
  Choices,
  DocumentHorizontal,
  Education,
  RecentlyViewed,
} from "@carbon/icons-react";

import Benefit from "@/components/Benefit";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Image from "next/image";
import { allCourses } from "contentlayer/generated";

export default function Home() {
  const filteredCourses = allCourses
    .sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime))
    .slice(0, 3);

  return (
    <>
      <Hero />
      <main>
        <section className="mx-auto space-y-8 px-2 py-16 sm:px-4 md:px-8 lg:px-12">
          <Heading as="h2" size={2} className="text-center">
            ¿Por qué elegir Cursos Automáticas?
          </Heading>
          <div className="mx-auto grid max-w-3xl place-items-center justify-center gap-10 sm:grid-cols-2 sm:gap-y-16">
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
        </section>
        <section className="bg-black">
          <div className="mx-auto flex max-w-5xl flex-col gap-12 px-2 py-16 sm:px-4 md:flex-row md:px-8 lg:px-12">
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
                  en el campo. Durante los últimos 6 años, ha sido profesor en
                  la prestigiosa{" "}
                  <strong className="text-accent-500">FAATRA</strong>, donde ha
                  formado a nuevos profesionales del área.
                </p>
                <p>
                  Prepárate para aprender de un referente en la industria y{" "}
                  <strong>desbloquear nuevas oportunidades</strong> en tu
                  carrera.
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
          </div>
        </section>
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-2 py-16 sm:px-4 md:px-8 lg:px-12">
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
        </section>
      </main>
    </>
  );
}
