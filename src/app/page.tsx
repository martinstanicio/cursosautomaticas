import {
  Choices,
  DocumentHorizontal,
  Education,
  RecentlyViewed,
} from "@carbon/icons-react";

import Benefit from "@/components/Benefit";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto px-2 py-16 sm:px-4 md:px-8 lg:px-12">
        <h2 className="mb-8 text-center">
          ¿Por qué elegir Cursos Automáticas?
        </h2>
        <div className="mx-auto grid max-w-3xl place-items-center justify-center gap-10 sm:grid-cols-2 sm:gap-y-16">
          <Benefit icon={Education} title="Clases con un experto">
            Aprende directamente del especialista <strong>Carlos Grosso</strong>
            , quien te guiará a lo largo del proceso de aprendizaje.
          </Benefit>
          <Benefit icon={RecentlyViewed} title="Material actualizado">
            Accede a <strong>contenido actualizado</strong> y relevante sobre
            las últimas tecnologías en transmisiones automáticas.
          </Benefit>
          <Benefit icon={Choices} title="Variedad de cursos">
            Ofrecemos cursos sobre diversos tipos de transmisiones y sistemas,
            cubriendo una{" "}
            <strong>amplia gama de temas y tecnologías relevantes</strong> en la
            industria.
          </Benefit>
          <Benefit icon={DocumentHorizontal} title="Clases online interactivas">
            Disfruta de <strong>clases en vivo</strong> desde cualquier lugar
            del mundo, donde podrás hacer preguntas y recibir respuestas en
            tiempo real.
          </Benefit>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto grid max-w-5xl gap-12 px-2 py-16 sm:px-4 md:grid-cols-2 md:px-8 lg:px-12">
          <div className="max-w-prose">
            <h2 className="mb-8">
              Conoce a Carlos Grosso, nuestro especialista
            </h2>
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
              <Button href="#" size="small">
                Leer más
              </Button>
            </div>
          </div>
          <div className="relative border-8 border-accent-500">
            <Image src="/carlosgrosso.jpg" alt="" fill objectFit="cover" />
          </div>
        </div>
      </section>
    </>
  );
}
