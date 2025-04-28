import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label?: string;
  error?: string;
  containerClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, error, containerClassName, className, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        <div className="flex items-center">
          <input
            id={id}
            type="checkbox"
            ref={ref}
            {...props}
            className={`
              h-4 w-4 rounded
              border-mauve-6 dark:border-mauve-dark-6
              text-purple-9 dark:text-purple-dark-9
              focus:ring-purple-9 dark:focus:ring-purple-dark-9


              bg-mauve-2 dark:bg-mauve-dark-2
              accent-purple-9 dark:accent-purple-dark-9
              ${error ? 'border-error' : ''}
              ${className}
            `}
          />
          {label && (
            <label
              htmlFor={id}
              className="ml-2 font-functional text-sm text-mauve-12 dark:text-mauve-dark-12"
            >
              {label}
            </label>
          )}
        </div>
        {error && <span className="text-error text-sm">{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
