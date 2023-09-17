import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import Link from "next/link";

const button = cva(
  "border-2.5 inline-block cursor-pointer px-[1.5em] py-[0.75em] text-center font-bold uppercase shadow outline-offset-4 transition-colors duration-100 w-full sm:w-auto",
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
        big: "text-lg",
      },
      intent: {
        primary: "text-neutral-50 border-transparent",
        secondary: "border-current",
      },
      variant: {
        accent: "",
        black: "",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "accent",
        className: "bg-accent-600 hover:bg-accent-700 focus:bg-accent-700",
      },
      {
        intent: "secondary",
        variant: "accent",
        className:
          "text-accent-500 hover:text-accent-600 focus:text-accent-600",
      },
      {
        intent: "primary",
        variant: "black",
        className: "bg-black",
      },
      {
        intent: "secondary",
        variant: "black",
        className: "text-black",
      },
    ],
    defaultVariants: {
      size: "medium",
      intent: "secondary",
      variant: "accent",
    },
  },
);

export type Props = VariantProps<typeof button> & (LinkProps | ButtonProps);

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  type?: "link";
  href: string;
};
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: "button" | "submit";
};

export default function Button({
  children,
  size,
  intent,
  variant,
  className,
  ...props
}: Props) {
  const classes = twMerge(button({ size, intent, variant }), className);

  if (props.type === "submit" || props.type === "button") {
    return (
      <button {...props} className={classes}>
        {children}
      </button>
    );
  }

  if (props.type === "link" || props.type === undefined) {
    const { type, ...propsWithoutType } = props;

    return (
      <Link {...propsWithoutType} className={classes}>
        {children}
      </Link>
    );
  }
}
