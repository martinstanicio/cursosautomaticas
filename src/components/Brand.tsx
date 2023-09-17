import { twMerge } from "tailwind-merge";

import Image from "next/image";
import Link from "next/link";

export interface Props {
  textClassName?: string;
}

export default function Brand({ textClassName }: Props) {
  return (
    <Link href="/" className="flex items-center gap-3 sm:gap-4 lg:gap-6">
      <div className="relative aspect-square w-10 sm:w-12 lg:w-14">
        <Image sizes="56px" src="/logo.png" alt="logo" fill />
      </div>
      <span
        className={twMerge(
          "font-headings text-2xl font-bold sm:text-3xl lg:text-4xl",
          textClassName,
        )}
      >
        Cursos Automáticas
      </span>
    </Link>
  );
}
