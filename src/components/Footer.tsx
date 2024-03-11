import Link from "next/link";

import Brand from "./Brand";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="container mx-auto flex max-w-4xl flex-col gap-12 px-2 py-16 sm:px-4">
        <Brand />
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2">
          <div className="flex flex-col gap-y-2">
            <Link href="/" className="link">
              Inicio
            </Link>
            <Link href="/cursos" className="link">
              Cursos
            </Link>
            <Link href="/contacto" className="link">
              Contacto
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <a
              href="https://www.instagram.com/cursos_automaticas"
              target="_blank"
              className="link"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552512632250&mibextid=ZbWKwL"
              target="_blank"
              className="link"
            >
              Facebook
            </a>
          </div>
        </div>
        <ul className="grid list-none grid-cols-1 gap-y-2 sm:grid-cols-2">
          <li>Cursos Automáticas &copy; {new Date().getFullYear()}</li>
          <li>
            Página web diseñada por{" "}
            <a
              href="https://www.linkedin.com/in/martinstanicio/"
              target="_blank"
              className="font-bold text-accent-500 hover:underline focus:underline"
            >
              Martín Stanicio
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
