/**
 * @file: index.ts
 * @description: Хук для получения детальной информации о разделе SPACE по slug
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const useGetSpaceDetail = (slug?: string) => {
  const { data, ...querySpaceDetail } = rqClient.useQuery(
    "get",
    "/api/space/{slug}",
    {
      params: {
        path: {
          slug: slug || "",
        },
      },
    },
    {
      enabled: !!slug,
    }
  );
  return { spaceDetail: data?.response, ...querySpaceDetail };
};
