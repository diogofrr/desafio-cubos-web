'use server';

import {
  DeleteMovieArgs,
  DeleteMovieResponse,
} from '@/types/movies/delete-movie';

import { clearSession, getAuthToken } from '@/lib/session';
import isValidResponse from '@/utils/is-valid-response';

export default async function DeleteMovie(args: DeleteMovieArgs) {
  const url = `${process.env.API_URL}/movies/${args.id}`;
  const authToken = await getAuthToken();

  if (!authToken) {
    clearSession();
    return null;
  }

  const requestOptions: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: DeleteMovieResponse = await response.json();

  if (!isValidResponse(response.status)) {
    throw new Error(parsedData.message);
  }

  return parsedData;
}
