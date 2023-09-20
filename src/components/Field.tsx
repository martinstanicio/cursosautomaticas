import { twMerge } from "tailwind-merge";

import {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

const defaultClassName =
  "block w-full rounded border-2 border-accent-500 bg-neutral-900 px-4 py-2 shadow";

type LabelProps = {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
};

function Label({ htmlFor, required, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        "block",
        required && "after:text-red-500 after:content-['*']",
      )}
    >
      {children}
    </label>
  );
}

export type Props = {
  children: ReactNode;
  id: string;
};

export const Input = forwardRef<
  HTMLInputElement,
  Props & InputHTMLAttributes<HTMLInputElement>
>(function InputComponent({ children, className, id, ...props }, ref) {
  return (
    <div>
      <Label htmlFor={id} required={props.required}>
        {children}
      </Label>
      <input
        ref={ref}
        id={id}
        className={twMerge(defaultClassName, className)}
        {...props}
      />
    </div>
  );
});

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  Props & TextareaHTMLAttributes<HTMLTextAreaElement>
>(function TextAreaComponent({ children, className, id, ...props }, ref) {
  return (
    <div>
      <Label htmlFor={id} required={props.required}>
        {children}
      </Label>
      <textarea
        ref={ref}
        id={id}
        className={twMerge(defaultClassName, className)}
        {...props}
      />
    </div>
  );
});
