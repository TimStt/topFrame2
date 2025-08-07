/**
 * @file: options.ts
 * @description: Опции для запроса данных главной страницы
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const getHomeOptions = () =>
  rqClient.queryOptions("get", "/api/home", {});
