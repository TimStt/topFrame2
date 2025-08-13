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

export default function Home() {
  return (
    <>
      <main>
        <WrapperPrefetchQuery {...getHomeOptions()}>
          <ZeroHero />
          <HREcosystemSection />
          <Directions />
          <Team />
          <NewVacancies />
        </WrapperPrefetchQuery>
      </main>
    </>
  );
}
