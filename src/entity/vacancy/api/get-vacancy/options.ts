import { rqClient } from "@/shared/api/api-client";
import { paths } from "@/shared/api/schema";

export const getOptionsVacancyQuery = ({ slug }: { slug: string }) =>
  rqClient.queryOptions("get", "/api/vacancy/{slug}", {
    params: {
      path: { slug },
    },
  });
