import { rqClient } from "@/shared/api/api-client";
import { paths } from "@/shared/api/schema";

export const getOptionsVacanciesQuery = ({
  page,
  search,
}: {
  page: number;
  search: string;
}) =>
  rqClient.queryOptions("get", "/api/vacancy/catalog", {
    query: { page, search },
  });
