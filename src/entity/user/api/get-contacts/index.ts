/**
 * @file: index.ts
 * @description: Хук для получения контактов и документов
 * @created: 2025-08-08
 */
import { rqClient } from "@/shared/api/api-client";

export const useGetContacts = () => {
  const { data, ...query } = rqClient.useQuery("get", "/api/contact", {});
  return { contacts: data?.response, ...query };
};
