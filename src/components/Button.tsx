import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-block uppercase font-bold text-center outline-offset-4 cursor-pointer transition-colors duration-100",
  {
    variants: {
      size: {
        small: "px-4 py-2 text-sm",
        medium: "px-5 py-3 text-base",
        big: "px-7 py-4 text-lg",
      },
      intent: {
        primary: "text-neutral-50",
        secondary:
          "border-2.5 border-current hover:bg-neutral-900 focus:bg-neutral-900",
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
        className: "text-accent-500",
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

export interface Props
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  href: string;
}

export default function Button({
  children,
  href,
  size,
  intent,
  variant,
  className,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={button({ size, intent, variant, className })}
      {...props}
    >
      {children}
    </Link>
  );
}
