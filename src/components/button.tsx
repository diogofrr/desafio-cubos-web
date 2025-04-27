import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant: 'primary' | 'secondary';
}

const Button = ({
	children,
	className = '',
	variant,
	...props
}: ButtonProps) => {
	const variants = {
		primary:
			'whitespace-nowrap transition ease-in duration-100 bg-purple-9 dark:bg-purple-dark-9 hover:bg-purple-10 dark:hover:bg-purple-dark-10 text-white rounded-xs font-functional font-normal text-base px-5 py-3 cursor-pointer active:bg-purple-8 dark:active:bg-purple-dark-8 disabled:bg-mauve-9 dark:disabled:bg-mauve-dark-9 disabled:cursor-not-allowed disabled:text-mauve-10 dark:disabled:text-mauve-dark-11 disabled:hover:bg-mauve-9 dark:disabled:hover:bg-mauve-dark-9 shadow-none',
		secondary:
			'whitespace-nowrap transition ease-in duration-100 bg-purple-alpha-3 dark:bg-purple-dark-alpha-2 hover:bg-purple-alpha-4 dark:hover:bg-purple-dark-alpha-3 active:bg-purple-alpha-2 dark:active:bg-purple-dark-alpha-1 disabled:bg-mauve-alpha-3 dark:disabled:bg-mauve-dark-alpha-3 disabled:hover:bg-mauve-alpha-3 dark:disabled:hover:bg-mauve-dark-alpha-3 rounded-xs font-functional font-normal text-base px-5 py-3 cursor-pointer disabled:cursor-not-allowed shadow-none text-purple-alpha-12 dark:text-purple-dark-alpha-12 disabeld:text-mauve-alpha-10 dark:disabled:text-mauve-dark-alpha-10',
	};

	return (
		<button className={`${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	);
};

export { Button };
