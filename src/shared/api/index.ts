// 'use server';
import { HTTP_METHOD } from "next/dist/server/web/http";

import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

import { QueryClient } from "@tanstack/react-query";

import { detectRussianText } from "@/shared/utils/detect-russian-text";
import { getCookie as getCookieClient } from "@/shared/utils/get-cookie-client";
import { getCookie as getCookieServer } from "@/shared/utils/get-cookie-server";

import { IResponse } from "./types";
import { TOKEN_NAME } from "../constants/other";

export const BASE_API = process.env.URL || "";

type HttpMethod = keyof Pick<
  AxiosInstance,
  "get" | "post" | "put" | "delete" | "patch"
>;

export const apiInstanceFetch = async <ResponseFetch = undefined>(
  url: string,
  init?: Omit<AxiosRequestConfig, "url" | "method"> & {
    json?: unknown;
    method: HTTP_METHOD;
  },
  formData?: FormData,
  isServerAction?: boolean
): Promise<IResponse<ResponseFetch>> => {
  try {
    let { method, headers, json, ...restInit } = init ?? {};
    headers = headers || {};
    headers.Accept = "application/json";

    if (!formData) {
      headers["Content-Type"] = "application/json";
    }

    let token;

    if (isServerAction) {
      token = await getCookieServer(TOKEN_NAME);
    } else {
      token = getCookieClient(TOKEN_NAME);
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const data = json || formData;

    console.log("data", data);

    const isNotBody = method === "GET" || method === "DELETE";

    const result = await axios[method?.toLowerCase() as HttpMethod](
      `${BASE_API}${url}`,
      isNotBody ? { headers } : data,
      !isNotBody ? { headers } : undefined
    );

    return {
      status: result.status,
      response: result.data as ResponseFetch,
      errorMessage: (result.data as { message: string }).message || undefined,
      isError: false,
    };
  } catch (error) {
    const errorMessage = (
      (error as AxiosError).response?.data as {
        message: string;
      }
    )?.message;

    const isErrorMessageRus = detectRussianText(errorMessage);

    const errorResponse = {
      status: (error as AxiosError).response?.status,
      response: undefined as ResponseFetch,
      errorMessage: isErrorMessageRus ? errorMessage : undefined,
      isError: true,
    };

    throw errorResponse;
  }
};
