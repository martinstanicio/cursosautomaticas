import { twMerge } from "tailwind-merge";

import Image from "next/image";

import type { Testimony as TTestimony } from "contentlayer/generated";

export default function Testimony({
  name,
  job,
  body: { html: content },
  _raw: { flattenedPath: avatar },
  className,
}: TTestimony & {
  className?: string;
}) {
  return (
    <article
      className={twMerge(
        "flex flex-col items-center gap-6 rounded bg-neutral-900 px-4 py-12 shadow",
        className,
      )}
    >
      <Image
        src={`/${avatar}.jpg`}
        alt="avatar"
        width={64}
        height={64}
        sizes="64px"
        className="aspect-square rounded-full object-cover"
      />
      <figure className="flex flex-1 flex-col justify-between gap-6 text-center">
        <blockquote dangerouslySetInnerHTML={{ __html: content }} />
        <figcaption className="flex flex-col">
          <span className="font-bold text-neutral-50">{name}</span>
          <span className="text-accent-500">{job}</span>
        </figcaption>
      </figure>
    </article>
  );
}
