import { rqClient } from "@/shared/api/api-client";
import { paths } from "@/shared/api/schema";
import { fetchClient } from "@/shared/api/api-client";
import { IApiSchemas } from "@/shared/api/schema";
import { components } from "@/shared/api/schema/components";
import { IResponse } from "@/shared/api/types";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { redirect, useParams } from "next/navigation";
export const getOptionsVacancyQuery = ({ slug }: { slug: string }) =>
  rqClient.queryOptions("get", "/api/vacancy/{slug}", {
    params: {
      path: { slug },
    },
  });

export const getVacancy = async (slug: string) => {
  try {
    const response = (
      await fetchClient.GET("/api/vacancy/{slug}", {
        params: {
          path: { slug },
        },
      })
    ).data as unknown as IResponse<{
      vacancy: IApiSchemas["VacancyDetailsDto"];
    }>;

    return response;
  } catch (error) {
    return null;
  }
};
