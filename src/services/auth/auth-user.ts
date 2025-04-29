'use server';

import { LoginArgs, LoginResponse } from '@/types/auth/login/login';

import { saveAuthToken, saveSession } from '@/lib/session';
import isValidResponse from '@/utils/is-valid-response';
import { requestsMessages } from '@/constants/requests-messages';

export default async function authUser(loginArgs: LoginArgs) {
  const url = `${process.env.API_URL}/auth/login`;

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginArgs),
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: LoginResponse = await response.json();

  if (!isValidResponse(response.status)) {
    throw new Error(parsedData.message || requestsMessages.auth.login.error);
  }

  await saveAuthToken(parsedData.result.access_token);
  await saveSession(parsedData.result.user);

  return true;
}
