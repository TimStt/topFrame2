"use client";
/**
 * @file: index.tsx
 * @description: Динамический импорт HR Ecosystem section
 * @dependencies: hr-ecosystem.ui.tsx
 * @created: 2024-01-15
 */

import dynamic from "next/dynamic";
import { SkeletonHREcosystemSection } from "./skeleton";

export const HREcosystemSection = dynamic(
  () => import("./hr-ecosystem.ui").then((m) => m.HREcosystemSection),
  { ssr: false, loading: () => <SkeletonHREcosystemSection /> }
);

export default HREcosystemSection;
