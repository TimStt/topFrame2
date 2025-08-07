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

export default function Home() {
  return (
    <>
      <main>
        <ZeroHero />
        <HREcosystemSection />
        <Directions />
        <Team />
        <NewVacancies />
      </main>
    </>
  );
}
