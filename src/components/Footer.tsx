import Link from "next/link";

import Brand from "./Brand";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="container mx-auto flex max-w-4xl flex-col gap-12 px-2 py-16 sm:px-4">
        <Brand />
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2">
          <div className="flex flex-col gap-y-2">
            <Link href="/cursos" className="link">
              Cursos
            </Link>
            <Link href="/contacto" className="link">
              Contacto
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <Link
              href="https://www.instagram.com/cursos_automaticas"
              className="link"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61552512632250&mibextid=ZbWKwL"
              className="link"
            >
              Facebook
            </Link>
          </div>
        </div>
        <ul className="grid list-none grid-cols-1 gap-y-2 sm:grid-cols-2">
          <li>Cursos Automáticas &copy; {new Date().getFullYear()}</li>
          <li>
            Página web diseñada por{" "}
            <Link
              href="mailto:staniciomartin@gmail.com"
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
