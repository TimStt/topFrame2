import createFetchClient, { Middleware } from 'openapi-fetch';

import { BASE_API, apiInstanceFetch } from '..';
import { paths } from '../schema';
import { IResponse } from '../types';

export const adapterFetch = async (input: Request) => {
  const url = typeof input === 'string' ? input : input.url;

  let data: unknown = undefined;
  let isBodyFormData = false;
  const method = input.method;

  // клонируем запрос, чтобы не трогать оригинал
  const cloned = input.clone();

  const contentType = cloned.headers.get('Content-Type') || '';
  isBodyFormData = contentType.includes('multipart/form-data');
  try {
    if (
      (!isBodyFormData || contentType.includes('application/json')) &&
      method !== 'GET'
    ) {
      data = await cloned?.json();
    } else if (isBodyFormData && method !== 'GET') {
      data = await cloned?.formData();
    }
  } catch (error) {}

  try {
    const response = await apiInstanceFetch(
      url.replace(BASE_API, ''),
      {
        method:
          ((method as string)?.toUpperCase() as
            | 'GET'
            | 'HEAD'
            | 'OPTIONS'
            | 'POST'
            | 'PUT'
            | 'DELETE'
            | 'PATCH') || 'GET',
        json: !isBodyFormData ? data : undefined,
      },
      isBodyFormData ? (data as FormData) : undefined,
      true
    );

    return new Response(JSON.stringify(response), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('error', error);
    const errorResponse = error as IResponse;
    return new Response(JSON.stringify(errorResponse), {
      status: errorResponse.status || 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
