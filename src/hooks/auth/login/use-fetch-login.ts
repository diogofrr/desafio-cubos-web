import { useMutation } from '@tanstack/react-query';

import authUser from '@/services/auth/auth-user';

const useFetchLogin = () => {
	return useMutation({
		mutationFn: authUser,
	});
};

export { useFetchLogin };
