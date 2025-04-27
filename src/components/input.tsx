import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label?: string
}

const Input = ({id, label, ...props}: InputProps) => {
	return (
		<div className="flex flex-col gap-2 py-2">
			{label && <label htmlFor={id} className="font-functional font-bold text-[13px] text-mauve-12 dark:text-mauve-dark-12">{label}</label>}
			<input id={id} {...props} className={`
				border rounded-sm border-mauve-6 dark:border-mauve-dark-6
			bg-mauve-2 dark:bg-mauve-dark-2 
			focus:border-purple-9 dark:focus:border-purple-dark-9
			focus:caret-purple-9 dark:focus:caret-purple-dark-9
				outline-none p-3
			placeholder:text-mauve-9 dark:placeholder:text-mauve-dark-9 placeholder:font-functional
				placeholder:font-normal
			text-mauve-12 dark:text-mauve-dark-12 font-functional
			`}
			/>
		</div>
	);
}

export { Input }