/**
 * @file: Main page
 * @description: Home page with header and hero section
 * @dependencies: Header, ZeroHero widgets
 * @created: 2024-01-15
 */

import { ZeroHero } from "@/widgets/mainblocks/zero-hero";
import { HREcosystemSection } from "@/widgets/mainblocks/hr-ecosystem";
import { Directions } from "@/widgets/mainblocks/directions";
import { Team } from "@/widgets/mainblocks/team";
import { NewVacancies } from "@/widgets/vacancy/new-vacancies";
import { WrapperPrefetchQuery } from "@/shared/lib/react-query/wrapper-prefetch-query";
import { getHomeOptions } from "@/entity/user/api/get-home/options";
import { Metadata } from "next/types";
import { fetchClient } from "@/shared/api/api-client";
import { Suspense, lazy } from "react";
import { SkeletonHREcosystemSection } from "@/widgets/mainblocks/hr-ecosystem/skeleton";
import { SkeletonDirections } from "@/widgets/mainblocks/directions/skeleton";
import { SkeletonTeam } from "@/widgets/mainblocks/team/skeleton";
import { NewVacanciesSkeleton } from "@/widgets/vacancy/new-vacancies/skeleton";

// Ленивая загрузка некритичных секций
const LazyHREcosystemSection = lazy(() =>
  import("@/widgets/mainblocks/hr-ecosystem").then((module) => ({
    default: module.HREcosystemSection,
  }))
);

const LazyDirections = lazy(() =>
  import("@/widgets/mainblocks/directions").then((module) => ({
    default: module.Directions,
  }))
);

const LazyTeam = lazy(() =>
  import("@/widgets/mainblocks/team").then((module) => ({
    default: module.Team,
  }))
);

const LazyNewVacancies = lazy(() =>
  import("@/widgets/vacancy/new-vacancies").then((module) => ({
    default: module.NewVacancies,
  }))
);

export default async function Home() {
  return (
    <>
      <main>
        <WrapperPrefetchQuery {...getHomeOptions()}>
          {/* Критический контент - загружается сразу */}
          <ZeroHero />

          {/* Некритичные секции - загружаются отложенно */}
          <Suspense fallback={<SkeletonHREcosystemSection />}>
            <LazyHREcosystemSection />
          </Suspense>

          <Suspense fallback={<SkeletonDirections />}>
            <LazyDirections />
          </Suspense>

          <Suspense fallback={<SkeletonTeam />}>
            <LazyTeam />
          </Suspense>

          <Suspense fallback={<NewVacanciesSkeleton />}>
            <LazyNewVacancies />
          </Suspense>
        </WrapperPrefetchQuery>
      </main>
    </>
  );
}
