import { twMerge } from "tailwind-merge";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  black?: boolean;
}

export const defaultClass = "mx-auto px-2 py-16 sm:px-4 md:px-8 lg:px-12";

export default function Section({
  as: AsElement = "section",
  black = false,
  children,
  className,
  ...props
}: Props) {
  const content = (
    <AsElement className={twMerge(defaultClass, className)} {...props}>
      {children}
    </AsElement>
  );

  return black ? <div className="bg-black">{content}</div> : content;
}
