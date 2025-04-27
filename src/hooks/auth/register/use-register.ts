'use client';

import { z } from 'zod';

import { toast } from 'sonner';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFetchRegister } from './use-fetch-register';
import { requestsMessages } from '@/constants/requests-messages';

export type RegisterFormData = z.infer<typeof registerSchema>;

export const registerSchema = z
	.object({
		name: z.string().nonempty({ message: 'Nome obrigatório' }),
		email: z.string().email({ message: 'E-mail inválido' }),
		password: z
			.string()
			.min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
			.nonempty({ message: 'Senha obrigatória' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
			.nonempty({ message: 'Senha obrigatória' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não conferem',
		path: ['confirmPassword'],
	});

export function useRegister() {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] =
		useState(false);
	const fetchRegister = useFetchRegister();
	const router = useRouter();

	const handleChangePasswordVisibility = () => {
		setPasswordIsVisible((prev) => !prev);
	};

	const handleChangeConfirmPasswordVisibility = () => {
		setConfirmPasswordIsVisible((prev) => !prev);
	};

	const handleSubmitRegister = async (data: RegisterFormData) => {
		fetchRegister.mutate(data, {
			onSuccess: async () => {
				toast.success('Cadastro realizado com sucesso', {
					description: requestsMessages.auth.login.success,
				});

				router.push('/');
			},
			onError: (error) => {
				toast.error('Erro ao realizar cadastro', {
					description: error.message,
				});
			},
		});
	};

	return {
		passwordIsVisible,
		confirmPasswordIsVisible,
		handleChangePasswordVisibility,
		handleChangeConfirmPasswordVisibility,
		handleSubmitRegister,
		isPending: fetchRegister.isPending,
	};
}
