/**
 * @file: options.ts
 * @description: Опции для запроса детальной информации о разделе SPACE по slug
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const getSpaceDetailOptions = (slug: string) =>
  rqClient.queryOptions("get", "/api/space/{slug}", {
    params: {
      path: {
        slug: slug,
      },
    },
  });
