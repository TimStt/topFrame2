import { BACKGROUND_IMAGE_BLUE } from "@/shared/constants/other";
import { AnimationEllipses } from "@/shared/ui/animation-ellipses-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { SearchVacancies } from "@/features/vacancy/search/ui";

export default function Page() {
  return (
    <main className="vacancies">
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
    </main>
  );
}
