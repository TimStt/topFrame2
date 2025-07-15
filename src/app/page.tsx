/**
 * @file: Main page
 * @description: Home page with header and hero section
 * @dependencies: Header, ZeroHero widgets
 * @created: 2024-01-15
 */

import { Header } from "@/widgets/mainblocks/header";
import HREcosystemSection from "@/widgets/mainblocks/hr-ecosystem";
import { ZeroHero } from "@/widgets/mainblocks/zero-hero";

export default function Home() {
  return (
    <>
      <main>
        <ZeroHero />
        <HREcosystemSection />
      </main>
    </>
  );
}
