import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const section = cva(
  "mx-auto px-2 py-16 sm:px-4 md:px-8 lg:px-12 shadow-[0_0_0_100vmax] [clip-path:inset(0_-100vmax)]",
  {
    variants: {
      intent: {
        default: "bg-transparent shadow-none",
        black: "bg-black shadow-black",
        accent: "bg-accent-600 shadow-accent-600",
      },
      frequency: {
        all: "",
        even: "odd:bg-[unset] odd:shadow-transparent",
        odd: "even:bg-[unset] even:shadow-transparent",
      },
    },
    defaultVariants: {
      intent: "default",
      frequency: "all",
    },
  },
);

export type Props = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof section> & {
    as?: keyof HTMLElementTagNameMap;
  };

export default function Section({
  as: AsElement = "section",
  intent,
  frequency,
  children,
  className,
  ...props
}: Props) {
  return (
    <AsElement
      className={twMerge(section({ intent, frequency }), className)}
      {...props}
    >
      {children}
    </AsElement>
  );
}
