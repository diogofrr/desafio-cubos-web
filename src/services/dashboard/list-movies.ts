'use server';

import { getAuthToken, clearSession } from '@/lib/session';
import isValidResponse from '@/utils/is-valid-response';
import { ListMoviesArgs, ListMoviesResponse } from '@/types/movies/list-movies';

export default async function getMovies(filters: ListMoviesArgs) {
  try {
    const url = `${process.env.API_URL}/movies`;
    const requestUrl = new URL(url);
    const authToken = await getAuthToken();

    if (!authToken) {
      clearSession();
      return null;
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        requestUrl.searchParams.append(key, value);
      }
    });

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      redirect: 'follow',
      cache: 'no-cache',
    };

    const response = await fetch(requestUrl, requestOptions);
    console.error('Error: 1', response);
    const parsedData: ListMoviesResponse = await response.json();
    console.error('Error: 2', parsedData);

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
