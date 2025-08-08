/**
 * @file: options.ts
 * @description: Опции для запроса контактов и документов
 * @created: 2025-08-08
 */
import { rqClient } from "@/shared/api/api-client";

export const getContactsOptions = () =>
  rqClient.queryOptions("get", "/api/contact", {});
