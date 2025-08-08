import { rqClient } from "@/shared/api/api-client";
import { paths } from "@/shared/api/schema";

export const getOptionsVacanciesQuery = (params?: {
  page: string;
  search: string;
}) =>
  rqClient.queryOptions("get", "/api/vacancy/catalog", {
    params: {
      query: params,
    },
  });
