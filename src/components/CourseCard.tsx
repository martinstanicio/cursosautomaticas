import { twMerge } from "tailwind-merge";

import Image from "next/image";

import type { Course } from "contentlayer/generated";

import Button from "./Button";
import Datetime from "./Datetime";
import Heading from "./Heading";

export default function CourseCard({
  title,
  description,
  url,
  datetime,
  images,
  upcoming,
}: Course) {
  return (
    <article className="flex flex-col overflow-x-hidden bg-neutral-900 shadow sm:grid sm:grid-cols-5">
      <div
        className={twMerge(
          "relative col-span-2 aspect-[4/3] sm:aspect-auto",
          upcoming &&
            "after:absolute after:-left-16 after:-top-10 after:origin-bottom-right after:-rotate-45 after:bg-accent-600 after:px-12 after:py-1 after:text-sm after:shadow after:content-['Próximamente']",
        )}
      >
        <Image
          sizes="(min-width: 960px) 339px, (min-width: 640px) calc(30vw + 51px), calc(100vw - 16px)"
          className="object-cover"
          src={images[0]}
          alt=""
          fill
        />
      </div>
      <div className="col-span-3 flex flex-col gap-y-4 p-4 sm:items-start sm:justify-between">
        <div>
          <Heading as="h2" size={3}>
            {title}
          </Heading>
          <p title={description} className="line-clamp-3">
            {description}
          </p>
        </div>
        <div className="w-full">
          {!!datetime && <Datetime datetime={new Date(datetime)} />}
        </div>
        <Button href={url} size="small">
          Ver curso
        </Button>
      </div>
    </article>
  );
}
