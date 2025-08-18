/**
 * @file: index.ts
 * @description: Хук для получения данных команды с пагинацией
 * @created: 2025-01-15
 */
import { fetchClient, rqClient } from "@/shared/api/api-client";
import { IApiSchemas } from "@/shared/api/schema";
import { IResponse } from "@/shared/api/types";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetOurTeam = () => {
  const { data, ...queryOurTeam } = useInfiniteQuery({
    queryKey: ["get", "/api/home/ourTeam"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchClient.GET("/api/home/ourTeam", {
        params: { query: { page: pageParam.toString() } },
      });
      return response.data as IResponse<IApiSchemas["TeamResponseDto"]>;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage: IResponse<IApiSchemas["TeamResponseDto"]>) =>
      lastPage.response.ourTeamCountPage > lastPage.response.currentPage
        ? lastPage.response.currentPage + 1
        : undefined,
    select: (
      data: InfiniteData<
        IResponse<{
          ourTeamCountPage: number;
          ourTeam: IApiSchemas["TeamMemberDto"][];
        }>
      >
    ) => {
      const dataResult = data?.pages
        ?.map((results) => results?.response?.ourTeam)
        .flat();
      return {
        ourTeam: dataResult,
        ourTeamCountPage: data?.pages[0]?.response?.ourTeamCountPage,
      };
    },
  });

  console.log(data);

  return {
    team: data?.ourTeam,
    ...queryOurTeam,
  };
};
