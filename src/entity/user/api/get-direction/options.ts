import { fetchClient, rqClient } from "@/shared/api/api-client";

export const getDirectionOptions = (direction: string) =>
  rqClient.queryOptions("get", "/api/direction/{slug}", {
    params: {
      path: {
        slug: direction,
      },
    },
  });

export const getDirectionDetail = async (slug: string) => {
  const response = await fetchClient.GET("/api/direction/{slug}", {
    params: {
      path: { slug },
    },
  });
  return response.data;
};
