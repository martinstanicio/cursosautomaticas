import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const heading = cva("font-headings font-bold tracking-tight text-neutral-50", {
  variants: {
    size: {
      1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
      2: "text-2xl sm:text-3xl md:text-4xl",
      3: "",
    },
  },
});

export interface Props
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heading> {
  as: keyof HTMLElementTagNameMap;
}

export default function Heading({
  as: AsElement,
  children,
  size,
  className,
  ...props
}: Props) {
  return (
    <AsElement className={twMerge(heading({ size, className }))} {...props}>
      {children}
    </AsElement>
  );
}
