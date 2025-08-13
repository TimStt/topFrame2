/**
 * @file: options.ts
 * @description: Опции для запроса юридического документа по slug
 * @created: 2025-08-08
 */
import { fetchClient, rqClient } from "@/shared/api/api-client";

export const getContactDetailOptions = (slug: string) =>
  rqClient.queryOptions("get", "/api/contact/{slug}", {
    params: {
      path: { slug },
    },
  });

export const getContactDetail = async (slug: string) => {
  const response = await fetchClient.GET("/api/contact/{slug}", {
    params: {
      path: { slug },
    },
  });

  return response.data;
};
