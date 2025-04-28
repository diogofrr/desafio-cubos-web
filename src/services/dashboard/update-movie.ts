'use server';

import { requestsMessages } from '@/constants/requests-messages';
import isValidResponse from '@/utils/is-valid-response';
import { clearSession, getAuthToken } from '@/lib/session';
import uploadImage from './upload-image';
import {
  UpdateMovieArgs,
  UpdateMovieResponse,
} from '@/types/movies/update-movie';

export default async function updateMovie(args: UpdateMovieArgs) {
  const url = `${process.env.API_URL}/movies/${args.id}`;
  const authToken = await getAuthToken();

  const { image, ...data } = args;

  if (!authToken) {
    clearSession();
    return null;
  }

  const requestOptions: RequestInit = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(data),
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: UpdateMovieResponse = await response.json();

  if (!isValidResponse(response.status)) {
    throw new Error(parsedData.message || requestsMessages.auth.login.error);
  }

  if (image) {
    await uploadImage({ id: args.id, image });
  }

  return parsedData;
}
