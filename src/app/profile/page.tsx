import { HeadPage } from "@/widgets/mainblocks/head-page";
import { InfoUser } from "@/widgets/profile/info-user";
import { SearchVacancies } from "@/widgets/vacancy/search-vacancies";

const Page = () => {
  return (
    <main className="profile">
      <HeadPage className="container" title="Личный кабинет" />

      <div className="profile__inner container">
        <InfoUser />
        <SearchVacancies />
      </div>
    </main>
  );
};

export default Page;
