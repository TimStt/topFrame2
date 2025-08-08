/**
 * @file: index.ts
 * @description: Хук для получения юридического документа по slug
 * @created: 2025-08-08
 */
import { rqClient } from "@/shared/api/api-client";

export const useGetContactDetail = (slug?: string) => {
  const { data, ...query } = rqClient.useQuery(
    "get",
    "/api/contact/{slug}",
    {
      params: {
        path: {
          slug: slug || "",
        },
      },
    },
    { enabled: !!slug }
  );
  return { document: data?.response, ...query };
};
