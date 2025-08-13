import { rqClient } from "@/shared/api/api-client";
import { components } from "@/shared/api/schema/components";
import { useParams } from "next/navigation";

export const useGetVacancy = (
  slug: string,
  initialData?: components["schemas"]["VacancyDetailsDto"]
) => {
  const { data, ...queryVacancy } = rqClient.useQuery(
    "get",
    "/api/vacancy/{slug}",
    {
      params: {
        path: { slug: slug },
      },
    }
  );

  return {
    vacancy: (
      data as unknown as {
        response: {
          vacancy: components["schemas"]["VacancyDetailsDto"];
        };
      }
    )?.response.vacancy,
    ...queryVacancy,
  };
};
