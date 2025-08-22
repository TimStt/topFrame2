/**
 * @file: index.ts
 * @description: Хук для получения данных главной страницы
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const useGetHome = () => {
  const { data, ...queryHome } = rqClient.useQuery("get", "/api/home", {
    // Оптимизация кеширования
    staleTime: 5 * 60 * 1000, // 5 минут
    cacheTime: 10 * 60 * 1000, // 10 минут
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    // Приоритет для критических данных
    suspense: false,
  });

  // Убираем console.log для production
  if (process.env.NODE_ENV === "development") {
    console.log(data?.response);
  }

  return {
    ...data?.response,
    ...queryHome,
  };
};
