/**
 * @file: index.ts
 * @description: Хук для получения данных главной страницы
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const useGetHome = () => {
  const { data, ...queryHome } = rqClient.useQuery("get", "/api/home", {});

  console.log(data?.response);

  return {
    ...data?.response,
    ...queryHome,
  };
};
