import { useQueries, useQuery } from "@tanstack/react-query";
import {
  getOptionsFilterQuery,
  getOptionsSearchVacanciesQuery,
} from "./options";
import { rqClient } from "@/shared/api/api-client";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { IApiSchemas } from "@/shared/api/schema";
import { IResponse } from "@/shared/api/types";

export const useGetCatalog = () => {
  const queriesActions = useQueryParamAction();

  const params =
    queriesActions.getAllParams<{
      page: string;
      search: string;
    }>()?.original || {};

  const { data, ...catalogQuery } = rqClient.useQuery(
    "get",
    "/api/vacancy/catalog"
  );

  const { data: search, ...searchQuery } = rqClient.useQuery(
    "get",
    "/api/vacancy/catalog/filter",
    {
      params: {
        query: params,
      },
    }
  );

  const searchResult = (
    search as unknown as IResponse<{
      vacancies: IApiSchemas["VacancyDto"][];
      count: number;
      countPage: number;
    }>
  )?.response;
  const filterResult = data?.response;

  return {
    isLoadingSearch: searchQuery.isLoading,
    isLoadingFilter: catalogQuery.isLoading,
    filterResult,
    searchResult,
  };
};
