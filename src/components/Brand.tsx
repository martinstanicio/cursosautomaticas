import Image from "next/image";
import Link from "next/link";

export interface Props {
  textClassName?: string;
}

export default function Brand({ textClassName = "" }: Props) {
  return (
    <Link href="/" className="flex items-center gap-3 sm:gap-6">
      <div className="relative aspect-square w-12 sm:w-16">
        <Image src="/logo.png" alt="logo" fill />
      </div>
      <span
        className={`font-headings text-2xl font-bold sm:text-4xl ${textClassName}`}
      >
        Cursos Automáticas
      </span>
    </Link>
  );
}
