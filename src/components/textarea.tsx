import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  errorMessage?: string;
  containerClassName?: string;
}

const Textarea = ({
  id,
  label,
  errorMessage,
  containerClassName,
  ...props
}: TextareaProps) => {
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={id}
          className="font-functional font-bold text-[13px] text-mauve-12 dark:text-mauve-dark-12"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          id={id}
          {...props}
          className={`
            w-full border rounded-sm border-mauve-6 dark:border-mauve-dark-6
            bg-mauve-2 dark:bg-mauve-dark-2 outline-none p-3 min-h-[120px]
            ${
              errorMessage
                ? 'border-error focus:border-error focus:caret-error'
                : 'focus:border-purple-9 dark:focus:border-purple-dark-9 focus:caret-purple-9 dark:focus:caret-purple-dark-9'
            }
            text-mauve-12 dark:text-mauve-dark-12 font-functional
            placeholder:text-mauve-9 dark:placeholder:text-mauve-dark-9 placeholder:font-functional
            placeholder:font-normal
          `}
        />
      </div>
      {errorMessage && (
        <span className="text-error text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

export { Textarea };
