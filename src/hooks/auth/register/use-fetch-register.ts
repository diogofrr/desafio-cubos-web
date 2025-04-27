import { useMutation } from '@tanstack/react-query';

import registerUser from '@/services/auth/register-user';

export const useFetchRegister = () => {
	return useMutation({
		mutationFn: registerUser,
	});
};
