'use server';

import {
  UploadImageArgs,
  UploadImageResponse,
} from '@/types/movies/upload-image';

import { requestsMessages } from '@/constants/requests-messages';
import isValidResponse from '@/utils/is-valid-response';
import { clearSession, getAuthToken } from '@/lib/session';

export default async function uploadImage(args: UploadImageArgs) {
  const url = `${process.env.API_URL}/upload/image/${args.id}`;
  const authToken = await getAuthToken();

  if (!authToken) {
    clearSession();
    return null;
  }

  const formData = new FormData();
  formData.append('file', args.image);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
    redirect: 'follow',
    cache: 'no-cache',
  };

  const response = await fetch(url, requestOptions);
  const parsedData: UploadImageResponse = await response.json();

  if (!isValidResponse(response.status)) {
    throw new Error(
      parsedData.message || requestsMessages.movies.uploadImage.error
    );
  }

  return true;
}
