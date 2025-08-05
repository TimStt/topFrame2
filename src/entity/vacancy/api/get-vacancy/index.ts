import { rqClient } from "@/shared/api/api-client";
import { components } from "@/shared/api/schema/components";
import { useParams } from "next/navigation";

export const useGetVacancy = () => {
  const slug = useParams<{ slug: string }>().slug;
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
    // @ts-ignore
    data: data?.response as components["schemas"]["VacancyDto"],
    ...queryVacancy,
  };
};
