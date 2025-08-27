"use client";
/**
 * @file: index.tsx
 * @description: Динамический импорт Team section
 * @dependencies: team.ui.tsx
 * @created: 2024-01-15
 */

import dynamic from "next/dynamic";
import { SkeletonTeam } from "./skeleton";

export const Team = dynamic(() => import("./team.ui").then((m) => m.Team), {
  ssr: false,
  loading: () => <SkeletonTeam />,
});

export default Team;
