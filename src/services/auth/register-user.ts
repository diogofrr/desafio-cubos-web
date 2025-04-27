'use server';

import { RegisterArgs, RegisterResponse } from '@/types/auth/login/register';
import { saveAuthToken, saveSession } from '@/lib/session';
import isValidResponse from '@/utils/is-valid-response';
import { requestsMessages } from '@/constants/requests-messages';

export default async function registerUser(registerArgs: RegisterArgs) {
	const url = `${process.env.API_URL}/auth/register`;

	const requestOptions: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(registerArgs),
		redirect: 'follow',
		cache: 'no-cache',
	};

	const response = await fetch(url, requestOptions);
	const parsedData: RegisterResponse = await response.json();

	if (!isValidResponse(response.status)) {
		throw new Error(parsedData.message || requestsMessages.auth.register.error);
	}

	await saveAuthToken(parsedData.result.access_token);
	await saveSession(parsedData.result.user);

	return true;
}
