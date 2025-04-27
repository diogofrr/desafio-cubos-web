'use client';

import { Button } from '@/components/button';
import Icon from '@/components/icon';
import { Input } from '@/components/input';
import { Link } from '@/components/link';

import {
	LoginFormData,
	useLogin,
	loginSchema,
} from '@/hooks/auth/login/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Login() {
	const {
		passwordIsVisible,
		handleChangePasswordVisibility,
		handleSubmitLogin,
		isPending,
	} = useLogin();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<div className="w-full px-4 flex justify-center">
			<form
				className="max-w-[412px] w-full rounded-sm p-4 flex flex-col gap-4 bg-mauve-3 dark:bg-mauve-dark-3"
				onSubmit={handleSubmit(handleSubmitLogin)}
				noValidate
			>
				<Input
					{...register('email')}
					id="email"
					label="E-mail"
					type="email"
					placeholder="Digite seu E-mail"
					disabled={isPending}
					errorMessage={errors.email?.message}
				/>
				<Input
					{...register('password')}
					id="password"
					label="Senha"
					type={passwordIsVisible ? 'text' : 'password'}
					placeholder="Digite sua senha"
					disabled={isPending}
					rightIcon={
						<button
							type="button"
							onClick={handleChangePasswordVisibility}
							className="cursor-pointer"
							disabled={isPending}
						>
							<Icon name={passwordIsVisible ? 'view-hide' : 'view'} />
						</button>
					}
					errorMessage={errors.password?.message}
				/>
				<footer className="flex flex-row justify-between items-center">
					<Link href="/" target="_self">
						Esqueci minha senha
					</Link>
					<Button variant="primary" type="submit" disabled={isPending}>
						Entrar
					</Button>
				</footer>
			</form>
		</div>
	);
}
