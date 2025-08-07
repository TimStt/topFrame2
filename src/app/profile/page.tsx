import { HeadPage } from "@/widgets/mainblocks/head-page";
import { InfoUser } from "@/widgets/profile/info-user";
import { SearchVacancies } from "@/features/vacancy/search/ui";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { getOptionsVacanciesQuery } from "@/entity/vacancy/api/get-catalog/options";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
    search: string;
  }>;
}) => {
  const params = await searchParams;
  return (
    <main className="profile">
      <WrapperPrefetchQuery {...getOptionsVacanciesQuery(params)}>
        <HeadPage className="container" title="Личный кабинет" />

        <div className="profile__inner container">
          <InfoUser />
          <SearchVacancies />
        </div>
      </WrapperPrefetchQuery>
    </main>
  );
};

export default Page;
