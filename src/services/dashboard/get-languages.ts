'use server';

import isValidResponse from '@/utils/is-valid-response';
import { getAuthToken, clearSession } from '@/lib/session';
import { GetLanguagesResponse } from '@/types/movies/get-languages';

export default async function getLanguages() {
  try {
    const url = `${process.env.API_URL}/movies/languages`;
    const authToken = await getAuthToken();

    if (!authToken) {
      clearSession();
      return null;
    }

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      redirect: 'follow',
      cache: 'no-cache',
    };

    const response = await fetch(url, requestOptions);
    const parsedData: GetLanguagesResponse = await response.json();

    if (!isValidResponse(response.status)) {
      throw new Error(parsedData.message);
    }

    return parsedData;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return null;
  }
}
