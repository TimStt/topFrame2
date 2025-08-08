/**
 * @file: options.ts
 * @description: Опции для запроса юридического документа по slug
 * @created: 2025-08-08
 */
import { rqClient } from "@/shared/api/api-client";

export const getContactDetailOptions = (slug: string) =>
  rqClient.queryOptions("get", "/api/contact/{slug}", {
    params: {
      path: { slug },
    },
  });
