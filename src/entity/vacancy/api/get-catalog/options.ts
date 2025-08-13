import { rqClient } from "@/shared/api/api-client";
import { paths } from "@/shared/api/schema";

export const getOptionsFilterQuery = () =>
  rqClient.queryOptions("get", "/api/vacancy/catalog", {});

export const getOptionsSearchVacanciesQuery = (params?: {
  page: string;
  search: string;
}) =>
  rqClient.queryOptions("get", "/api/vacancy/catalog/filter", {
    params: {
      query: params,
    },
  });
