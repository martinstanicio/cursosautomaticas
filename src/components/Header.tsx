"use client";

import { Close as CloseIcon, Menu as MenuIcon } from "@carbon/icons-react";
import { Menu, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Brand from "./Brand";
import Button from "./Button";

export default function Header({
  className = "",
  hideOnHome = false,
}: {
  className?: string;
  hideOnHome?: boolean;
}) {
  return usePathname() === "/" && hideOnHome ? (
    <></>
  ) : (
    <header
      className={twMerge(
        "relative z-50 flex items-center justify-between bg-black px-2 py-4 sm:px-4",
        className,
      )}
    >
      <Brand textClassName="hidden min-[400px]:block" />

      <Menu as={"div"} className="relative">
        {({ open }) => (
          <>
            <div className="lg:hidden">
              <Menu.Button id="headlessui-menu-button">
                {open ? (
                  <>
                    <CloseIcon
                      size={32}
                      className="hover:text-neutral-50 focus:text-neutral-50"
                    />
                    <span className="sr-only">Close menu</span>
                  </>
                ) : (
                  <>
                    <MenuIcon
                      size={32}
                      className="hover:text-neutral-50 focus:text-neutral-50"
                    />
                    <span className="sr-only">Open menu</span>
                  </>
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
                  className="absolute right-0 mt-2 flex w-64 origin-top-right flex-col gap-4 bg-neutral-900 p-6 font-bold uppercase shadow before:absolute before:-top-2 before:right-2 before:h-0 before:w-0 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-neutral-900"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Button
                        href="/"
                        size="small"
                        intent="secondary"
                        className={twMerge(active && "text-accent-600")}
                      >
                        Inicio
                      </Button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Button
                        href="/contacto"
                        size="small"
                        intent="secondary"
                        className={twMerge(active && "text-accent-600")}
                      >
                        Contacto
                      </Button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Button
                        href="/cursos"
                        size="small"
                        intent="primary"
                        className={twMerge(active && "bg-accent-700")}
                      >
                        Nuestros cursos
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
                    href="/"
                    className="hover:text-neutral-50 focus:text-neutral-50"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="hover:text-neutral-50 focus:text-neutral-50"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Button href="/cursos" size="small" intent="primary">
                    Nuestros cursos
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
