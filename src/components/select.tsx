import { SelectHTMLAttributes, ReactNode, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
  containerClassName?: string;
  children: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      leftIcon,
      rightIcon,
      error,
      containerClassName,
      children,
      ...props
    },
    ref
  ) => {
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
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          <select
            id={id}
            ref={ref}
            {...props}
            className={`
              border rounded-sm border-mauve-6 dark:border-mauve-dark-6
              bg-mauve-2 dark:bg-mauve-dark-2
              ${
                error
                  ? 'focus:border-error focus:ring-error'
                  : 'focus:border-purple-9 dark:focus:border-purple-dark-9 focus:ring-purple-9 dark:focus:ring-purple-dark-9'
              }
              outline-none p-3
              text-mauve-12 dark:text-mauve-dark-12 font-functional
              appearance-none
              w-full
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
            `}
          >
            {children}
          </select>
          <div className="absolute right-3 flex items-center pointer-events-none">
            {rightIcon || (
              <svg
                className="w-4 h-4 text-mauve-9 dark:text-mauve-dark-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        {error && <span className="text-error text-sm">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
