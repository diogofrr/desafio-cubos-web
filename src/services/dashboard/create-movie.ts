'use server';

import {
  CreateMovieArgs,
  CreateMovieResponse,
} from '@/types/movies/create-movie';

import { requestsMessages } from '@/constants/requests-messages';
import isValidResponse from '@/utils/is-valid-response';
import { clearSession, getAuthToken } from '@/lib/session';
import uploadImage from './upload-image';

export default async function createMovie(args: CreateMovieArgs) {
  const url = `${process.env.API_URL}/movies/`;
  const authToken = await getAuthToken();

  const { image, ...data } = args;

  if (!authToken) {
    clearSession();
    return null;
  }

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(data),
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: CreateMovieResponse = await response.json();

  if (!isValidResponse(response.status)) {
    throw new Error(parsedData.message || requestsMessages.auth.login.error);
  }

  await uploadImage({ id: parsedData.result.id, image });

  return parsedData;
}
