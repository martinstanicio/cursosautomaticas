"use client";

import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
import { twMerge } from "tailwind-merge";

import { useState } from "react";

import Image from "next/image";

export interface Props {
  images: string[];
  title: string;
}

function ImageElement({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3]">
      <Image
        sizes="(min-width: 780px) 715px, 96.52vw"
        className="object-cover object-center"
        src={src}
        alt={alt}
        priority
        fill
      />
    </div>
  );
}

export default function Slider({ images, title }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  function calcCurrentImage(
    indexModifier: number,
    currentIndex: number,
    length: number,
  ) {
    const newIndex = currentIndex + indexModifier;

    if (newIndex >= length) return 0;
    if (newIndex < 0) return length - 1;
    return newIndex;
  }

  if (images.length === 1) return <ImageElement src={images[0]} alt={title} />;

  return (
    <section className="space-y-4" aria-label="carousel">
      <div className="relative">
        <div
          className="group absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-neutral-50/50 p-2 outline-offset-4 transition-colors hover:bg-neutral-50/75 focus:bg-neutral-50/75"
          tabIndex={0}
          onClick={() =>
            setCurrentImage(calcCurrentImage(-1, currentImage, images.length))
          }
        >
          <ChevronLeft
            size={32}
            className="fill-neutral-900 opacity-75 transition-opacity group-hover:opacity-100 group-focus:opacity-100"
          />
        </div>
        <ImageElement
          src={images[currentImage]}
          alt={`Imagen ${currentImage + 1}: ${title}`}
          aria-label={`imagen ${currentImage + 1} de ${images.length}`}
        />
        <div
          className="group absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-neutral-50/50 p-2 outline-offset-4 transition-colors hover:bg-neutral-50/75 focus:bg-neutral-50/75"
          tabIndex={0}
          onClick={() =>
            setCurrentImage(calcCurrentImage(1, currentImage, images.length))
          }
        >
          <ChevronRight size={32} className="fill-neutral-900" />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        {images.map((_, i) => (
          <button
            key={i}
            className={twMerge(
              "aspect-square w-3 cursor-pointer rounded-full transition-all",
              currentImage === i
                ? "scale-125 bg-neutral-50"
                : "bg-neutral-50/50",
            )}
            onClick={() => setCurrentImage(i)}
          />
        ))}
      </div>
    </section>
  );
}
