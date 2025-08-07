import { rqClient } from "@/shared/api/api-client";

export const getDirectionOptions = (direction: string) =>
  rqClient.queryOptions("get", "/api/direction/{slug}", {
    params: {
      path: {
        slug: direction,
      },
    },
  });
