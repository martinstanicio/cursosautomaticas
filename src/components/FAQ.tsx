import { ChevronRight } from "@carbon/icons-react";
import Heading from "./Heading";
import type { FAQ as _FAQ } from "contentlayer/generated";

export default function FAQ({
  title: question,
  body: { html: answer },
  isOpen,
}: _FAQ) {
  return (
    <details
      className="group w-full rounded bg-neutral-900 shadow"
      {...(isOpen ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-8 p-8">
        <Heading as="h3" size={3}>
          {question}
        </Heading>
        <ChevronRight
          size={16}
          className="text-neutral-50 transition-transform group-open:rotate-90"
        />
      </summary>
      <div
        className="grid grid-rows-[0fr] overflow-hidden p-8 pt-0 transition-all group-open:grid-rows-1"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}
