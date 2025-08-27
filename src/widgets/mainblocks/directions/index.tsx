"use client";

/**
 * @file: index.tsx
 * @description: Динамический импорт Directions section
 * @dependencies: directions.ui.tsx
 * @created: 2024-01-15
 */

import dynamic from "next/dynamic";
import { SkeletonDirections } from "./skeleton";

export const Directions = dynamic(
  () => import("./directions.ui").then((m) => m.Directions),
  { ssr: false, loading: () => <SkeletonDirections /> }
);

export default Directions;
