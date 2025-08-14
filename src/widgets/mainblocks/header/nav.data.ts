import { PAGES_PATHS } from "@/shared/constants/pages-paths";

export const navigationItems = [
  { label: "HR пространство", href: PAGES_PATHS.HR_TOPFRAME() },
  {
    label: "Наши направления",
    href: PAGES_PATHS.DIRECTIONS(),
  },

  { label: "Наши вакансии", href: PAGES_PATHS.VACANCIES },
  { label: "Наша команда", href: "/#team" },
];
