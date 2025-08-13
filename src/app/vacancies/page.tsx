import { BACKGROUND_IMAGE_BLUE } from "@/shared/constants/other";
import { AnimationEllipses } from "@/shared/ui/animation-ellipses-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { SearchVacancies } from "@/features/vacancy/search/ui";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import {
  getOptionsFilterQuery,
  getOptionsSearchVacanciesQuery,
} from "@/entity/vacancy/api/get-catalog/options";
import { object } from "zod";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Вакансии",
  description: "Вакансии - это возможность найти работу или сотрудника",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string; search: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="vacancies">
      <WrapperPrefetchQuery {...getOptionsSearchVacanciesQuery(params)}>
        <WrapperPrefetchQuery {...getOptionsFilterQuery()}>
          <div
            className="vacancies__head transform-ellipses"
            style={{
              backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})`,
            }}
          >
            <AnimationEllipses
              className="zero-hero__animation-ellipses"
              length={2}
            />
            <HeadPage className="container" title="Вакансии" />
          </div>
          <div className="vacancies__inner container">
            <SearchVacancies withHead={false} withQuickFilters={false} />
          </div>
        </WrapperPrefetchQuery>
      </WrapperPrefetchQuery>
    </main>
  );
}
