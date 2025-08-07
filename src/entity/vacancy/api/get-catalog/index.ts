import { useQueries, useQuery } from "@tanstack/react-query";
import { getOptionsVacanciesQuery } from "./options";
import { rqClient } from "@/shared/api/api-client";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";

export const useGetCatalog = () => {
  const queriesActions = useQueryParamAction();

  const { data, ...catalogQuery } = rqClient.useQuery(
    "get",
    "/api/vacancy/catalog",
    {
      params: {
        query: queriesActions.getAllParams<{
          page: string;
          search: string;
        }>()?.original,
      },
    }
  );

  const result = data?.response;

  return {
    ...catalogQuery,
    result,
  };
};
