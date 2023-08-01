import Button from "./Button";
import Header from "./Header";
import Image from "next/image";
import Stat from "./Stat";

export default function Hero() {
  return (
    <section>
      <div className="relative bg-black">
        <div className="absolute inset-y-0 right-0 w-full max-w-4xl">
          <Image src="/hero.jpg" alt="" fill objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-[rgba(0,0,0,0.75)] md:to-[rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="relative z-10 flex flex-col gap-4 pb-6 sm:gap-8">
          <Header className="bg-transparent" />
          <div className="container mx-auto flex flex-col gap-12 px-2 sm:px-4 md:px-8 lg:px-12">
            <div className="flex flex-col gap-3">
              <h1 className="max-w-2xl font-headings text-3xl font-bold text-neutral-50 sm:text-4xl md:text-5xl lg:text-6xl">
                Conduce la excelencia en tu aprendizaje con{" "}
                <span className="text-accent-600">Cursos Automáticas</span>
              </h1>
              <p className="max-w-[35ch]">
                Aprende de la experiencia de <strong>Carlos Grosso</strong>,
                experto en reparación de cajas automáticas.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href="#" size="big" intent="primary" variant="accent">
                ¡Regístrate ahora!
              </Button>
              <Button href="#" size="big" intent="secondary" variant="accent">
                Ver video
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto flex w-full flex-col justify-center gap-x-6 gap-y-10 px-2 py-6 sm:flex-row sm:justify-around sm:px-4 md:px-8 lg:px-12">
          <Stat value="35+">años reparando cajas automáticas</Stat>
          <Stat value="6+">años de experiencia dictando cursos</Stat>
        </div>
      </div>
    </section>
  );
}
