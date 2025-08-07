/**
 * @file: options.ts
 * @description: Опции для запроса списка разделов SPACE
 * @created: 2025-01-15
 */
import { rqClient } from "@/shared/api/api-client";

export const getSpaceOptions = () =>
  rqClient.queryOptions("get", "/api/space", {});
