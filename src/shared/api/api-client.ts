import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BASE_API, apiInstanceFetch } from ".";
import { objectToFormData } from "../utils/object-to-form-data";
import { transformObjectByParams } from "../utils/transform-object-by-param";
import { adapterFetch } from "./adapter";
import { paths } from "./schema";
// import { paths } from './schema/generated';
import { IResponse } from "./types";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

export const queryClientDuplicate = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

export const fetchClient = createFetchClient<paths>({
  baseUrl: BASE_API,
  fetch: adapterFetch,
});
export const rqClient = createClient(fetchClient);

export const apiClient = {
  get: <T>({
    url,
    params,
  }: {
    url: string;
    params?: Record<string, unknown>;
  }) =>
    apiInstanceFetch<T>(
      url + (params ? transformObjectByParams(params) : ""),
      { method: "GET", params },
      undefined,
      true
    ),

  post: <T, Data = unknown>({
    url,
    data,
    params,
    convertToFormData,
  }: {
    url: string;
    data?: Data;
    params?: Record<string, unknown>;
    convertToFormData?: boolean;
  }) => {
    const formData = convertToFormData ? new FormData() : undefined;

    if (formData && data) {
      objectToFormData(data, undefined, formData);
    }

    return apiInstanceFetch<T>(
      url + (params ? transformObjectByParams(params) : ""),
      {
        method: "POST",
        json: convertToFormData ? undefined : data,
      },
      formData
    );
  },

  put: <T>({
    url,
    data,
    params,
  }: {
    url: string;
    data?: unknown;
    params?: Record<string, unknown>;
  }) =>
    apiInstanceFetch<T>(url + (params ? transformObjectByParams(params) : ""), {
      method: "PUT",
      json: data,
    }),

  delete: <T>({
    url,
    params,
  }: {
    url: string;
    params?: Record<string, unknown>;
  }) =>
    apiInstanceFetch<T>(url + (params ? transformObjectByParams(params) : ""), {
      method: "DELETE",
    }),

  patch: <T>({
    url,
    data,
    params,
  }: {
    url: string;
    data?: unknown;
    params?: Record<string, unknown>;
  }) =>
    apiInstanceFetch<T>(url + (params ? transformObjectByParams(params) : ""), {
      method: "PATCH",
      json: data,
    }),
};
