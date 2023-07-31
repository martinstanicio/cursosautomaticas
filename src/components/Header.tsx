"use client";

import { Close as CloseIcon, Menu as MenuIcon } from "@carbon/icons-react";
import { Menu, Transition } from "@headlessui/react";

import Brand from "./Brand";
import Button from "./Button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-4 sm:px-4">
      <Brand textClassName="hidden min-[400px]:block" />

      <Menu as={"div"} className="relative">
        {({ open }) => (
          <>
            <div className="lg:hidden">
              <Menu.Button>
                {open ? (
                  <CloseIcon
                    size={"glyph"}
                    className="aspect-square w-8 hover:text-neutral-50 focus:text-neutral-50"
                  />
                ) : (
                  <MenuIcon
                    size={"glyph"}
                    className="aspect-square w-8 hover:text-neutral-50 focus:text-neutral-50"
                  />
                )}
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  static
                  as={"nav"}
                  className="absolute right-0 mt-2 flex w-64 origin-top-right flex-col gap-6 bg-neutral-800 p-6 font-bold uppercase shadow before:absolute before:-top-2 before:right-2 before:h-0 before:w-0 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-neutral-800"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/cursos"
                        className={twMerge(active && "text-neutral-50")}
                      >
                        Cursos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/login"
                        className={twMerge(active && "text-neutral-50")}
                      >
                        Iniciar sesión
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Button
                        href="/signup"
                        size="small"
                        intent="primary"
                        className={twMerge(active && "bg-accent-700")}
                      >
                        ¡Regístrate ahora!
                      </Button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 font-bold uppercase">
                <li>
                  <Link
                    href="/cursos"
                    className="hover:text-neutral-50 focus:text-neutral-50"
                  >
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-neutral-50 focus:text-neutral-50"
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Button href="/signup" size="small" intent="primary">
                    ¡Regístrate ahora!
                  </Button>
                </li>
              </ul>
            </nav>
          </>
        )}
      </Menu>
    </header>
  );
}
