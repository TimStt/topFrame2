/**
 * @file: index.ts
 * @description: Хук для получения списка разделов SPACE
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const useGetSpace = () => {
  const { data, ...querySpace } = rqClient.useQuery("get", "/api/space", {});
  return { spaceList: data?.response?.space, ...querySpace };
};
