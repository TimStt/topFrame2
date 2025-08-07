import { rqClient } from "@/shared/api/api-client";

export const useGetDirection = (direction: string) => {
  const { data, ...queryDirection } = rqClient.useQuery(
    "get",
    "/api/direction/{slug}",
    {
      params: {
        path: {
          slug: direction,
        },
      },
    }
  );
  return { directionInfo: data?.response, ...queryDirection };
};
