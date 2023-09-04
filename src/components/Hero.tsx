"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import Button from "./Button";
import Header from "./Header";
import Heading from "./Heading";
import Image from "next/image";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="relative bg-black">
      <div className="absolute inset-y-0 right-0 w-full max-w-4xl">
        <Image
          sizes="(min-width: 960px) 896px, calc(93.13vw + 21px)"
          className="object-cover"
          src="/hero.jpg"
          alt=""
          priority
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[rgba(0,0,0,0.75)] md:to-[rgba(0,0,0,0.25)]" />
      </div>
      <div className="relative z-10 flex flex-col gap-4 pb-6 sm:gap-8">
        <Header className="bg-transparent" />
        <div className="container mx-auto flex flex-col gap-12 px-2 sm:px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-3">
            <Heading as="h1" size={1} className="max-w-2xl lg:text-6xl">
              Conduce la excelencia en tu aprendizaje con{" "}
              <span className="text-accent-600">Cursos Automáticas</span>
            </Heading>
            <p className="max-w-[36ch]">
              Aprende de la experiencia de nuestro equipo de profesionales en
              cajas automáticas, liderado por <strong>Carlos Grosso</strong>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button href="/cursos" size="big" intent="primary" variant="accent">
              ¡Inscríbete ahora!
            </Button>
            <Button
              type="button"
              size="big"
              intent="secondary"
              variant="accent"
              onClick={openModal}
            >
              Ver video
            </Button>
          </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-2">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="aspect-video w-full max-w-lg transform overflow-hidden rounded bg-black shadow transition-all">
                    <video
                      tabIndex={0}
                      src="/hero.mp4"
                      controls
                      autoPlay
                      className="h-full w-full"
                    ></video>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
}
