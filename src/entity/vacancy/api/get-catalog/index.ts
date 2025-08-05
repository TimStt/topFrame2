import { useQueries, useQuery } from "@tanstack/react-query";
import { getOptionsVacanciesQuery } from "./options";
import { rqClient } from "@/shared/api/api-client";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";

export const useGetCatalog = () => {
  const queries = useQueryParamAction().getAllParams<{
    page: number;
    search: string;
  }>()?.original;

  const { data, ...catalogQuery } = rqClient.useQuery(
    "get",
    "/api/vacancy/catalog",
    {
      query: queries,
    }
  );

  const result = data?.response;

  return {
    ...catalogQuery,
    result,
  };
};
