import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label?: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	errorMessage?: string;
	containerClassName?: string;
}

const Input = ({
	id,
	label,
	leftIcon,
	rightIcon,
	errorMessage,
	containerClassName,
	...props
}: InputProps) => {
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
				<input
					id={id}
					{...props}
					className={`
            border rounded-sm border-mauve-6 dark:border-mauve-dark-6
            bg-mauve-2 dark:bg-mauve-dark-2
            ${
							errorMessage
								? 'focus:border-error focus:caret-error'
								: 'focus:border-purple-9 dark:focus:border-purple-dark-9 focus:caret-purple-9 dark:focus:caret-purple-dark-9'
						}
            outline-none p-3
            placeholder:text-mauve-9 dark:placeholder:text-mauve-dark-9 placeholder:font-functional
            placeholder:font-normal
            text-mauve-12 dark:text-mauve-dark-12 font-functional
            w-full
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
          `}
				/>
				{rightIcon && (
					<div className="absolute right-3 flex items-center">{rightIcon}</div>
				)}
			</div>
			{errorMessage && (
				<span className="text-error text-sm">{errorMessage}</span>
			)}
		</div>
	);
};

export { Input };
