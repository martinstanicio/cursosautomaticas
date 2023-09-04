import { twMerge } from "tailwind-merge";

export type Props = {
  children: React.ReactNode;
} & (InputProps | TextareaProps);

type InputProps = {
  textarea?: false;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  textarea: true;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Field({ children, ...props }: Props) {
  const classes = twMerge(
    "block w-full rounded border-2 border-accent-500 bg-neutral-800 px-4 py-2 shadow",
    props.className,
  );
  let FieldElement;

  if (props.textarea) {
    const { textarea, ...propsWithoutTextarea } = props;
    FieldElement = (
      <textarea name={props.id} {...propsWithoutTextarea} className={classes} />
    );
  } else {
    const { textarea, ...propsWithoutTextarea } = props;
    FieldElement = (
      <input name={props.id} {...propsWithoutTextarea} className={classes} />
    );
  }

  return (
    <div>
      <label
        htmlFor={props.id}
        className={twMerge(
          "block",
          props.required && "after:text-red-500 after:content-['*']",
        )}
      >
        {children}
      </label>
      {FieldElement}
    </div>
  );
}
