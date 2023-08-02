import {
  Choices,
  DocumentHorizontal,
  Education,
  RecentlyViewed,
} from "@carbon/icons-react";

import Benefit from "@/components/Benefit";
import Hero from "@/components/Hero";

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
    </>
  );
}
