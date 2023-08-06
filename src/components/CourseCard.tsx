import { Calendar, Time } from "@carbon/icons-react";

import Button from "@/components/Button";
import type { Course } from "contentlayer/generated";
import Heading from "@/components/Heading";
import Image from "next/image";

export default function CourseCard({
  title,
  description,
  url,
  datetime,
}: Course) {
  const dateObject = new Date(datetime);

  return (
    <article className="flex flex-col overflow-x-hidden rounded bg-neutral-800 shadow sm:grid sm:grid-cols-5">
      <div className="relative col-span-2 aspect-[4/3] sm:aspect-auto">
        <Image
          className="object-cover"
          src={new URL(
            `https://placehold.co/600x400.png?text=${title}`,
          ).toString()}
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
        <time className="grid w-full grid-cols-2 gap-4 text-sm text-neutral-50">
          <div className="flex items-center gap-2">
            <Calendar size="glyph" className="w-8 fill-accent-500" />
            {dateObject.toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2">
            <Time size="glyph" className="w-8 fill-accent-500" />
            {dateObject.toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </time>
        <Button href={url} size="small">
          Más información
        </Button>
      </div>
    </article>
  );
}
