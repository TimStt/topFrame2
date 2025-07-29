import React from "react";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { ChipUI } from "@/shared/ui/chip-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { redirect } from "next/navigation";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";

export default function VacanciesPage() {
  return redirect(PAGES_PATHS.VACANCIES);
}
