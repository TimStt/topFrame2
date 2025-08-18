"use client";
import dynamic from "next/dynamic";
import { InfoUserSkeleton } from "./skeleton";

export const InfoUser = dynamic(() => import("./info-user.ui"), {
  ssr: false,
  loading: () => <InfoUserSkeleton />,
});
