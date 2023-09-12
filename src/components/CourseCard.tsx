import Button from "./Button";
import type { Course } from "contentlayer/generated";
import Datetime from "./Datetime";
import Heading from "./Heading";
import Image from "next/image";

export default function CourseCard({
  title,
  description,
  url,
  datetime,
  _raw: { flattenedPath: imgName },
}: Course) {
  return (
    <article className="flex flex-col overflow-x-hidden bg-neutral-900 shadow sm:grid sm:grid-cols-5">
      <div className="relative col-span-2 aspect-[4/3] sm:aspect-auto">
        <Image
          sizes="(min-width: 960px) 339px, (min-width: 640px) calc(30vw + 51px), calc(100vw - 16px)"
          className="object-cover"
          src={`/${imgName}.jpg`}
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
        <Datetime datetime={new Date(datetime)} />
        <Button href={url} size="small">
          Ver curso
        </Button>
      </div>
    </article>
  );
}
