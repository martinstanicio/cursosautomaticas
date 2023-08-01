import Brand from "./Brand";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="container mx-auto flex max-w-4xl flex-col gap-12 px-2 py-16 sm:px-4">
        <Brand />
        <ul className="grid list-none grid-cols-1 gap-y-2 sm:grid-cols-2">
          <li>
            <Link href="/login" className="link">
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link href="/sobre-nosotros" className="link">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link href="/signup" className="link">
              Registrarse
            </Link>
          </li>
          <li>
            <Link href="/sobre-nosotros" className="link">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="link">
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/sobre-nosotros" className="link">
              Sobre nosotros
            </Link>
          </li>
        </ul>
        <ul className="grid list-none grid-cols-1 gap-y-2 sm:grid-cols-2">
          <li>Cursos Automáticas &copy; {new Date().getFullYear()}</li>
          <li>
            Página web diseñada por{" "}
            <Link
              href="https://www.instagram.com/martinstanicio/"
              className="font-bold text-accent-500 hover:underline focus:underline"
            >
              Martín Stanicio
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}