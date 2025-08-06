/**
 * @file: index.tsx
 * @description: Основной компонент поиска вакансий, объединяющий поиск, фильтры и результаты
 * @dependencies: SearchBox, QuickFilters, FilterSidebar, VacancyResults, useGetCatalog, useInitialModal
 * @created: 2024-12-19
 */

"use client";

import React from "react";
import { useGetCatalog } from "@/entity/vacancy/api/get-catalog";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { cls } from "@/shared/lib/cls";
import { SearchBox } from "./search-box";
import { QuickFilters } from "./quick-filters";
import { FilterSidebar } from "./filter-sidebar";
import { VacancyResults } from "./vacancy-results";
import { useFilter } from "../model/use-filter";

export const SearchVacancies = ({
  withQuickFilters = true,
  withHead = true,
  className,
  withApplyFilters = true,
}: {
  withQuickFilters?: boolean;
  withApplyFilters?: boolean;
  withHead?: boolean;
  className?: string;
}) => {
  const { result, isLoading } = useGetCatalog();
  const filterVacancies = useFilter({
    quickFilter: result?.quickFilter,
    filters: result?.filters,
  });
  return (
    <div className={cls("search-vacancies", className)}>
      <SearchBox
        className="search-vacancies__box"
        renderQuickFilters={
          withQuickFilters && (
            <QuickFilters
              quickFilter={result?.quickFilter}
              filterVacancies={filterVacancies}
            />
          )
        }
      />

      <VacancyResults
        count={result?.count}
        countPage={result?.countPage}
        isLoading={isLoading}
        withHead={withHead}
      />

      <FilterSidebar
        filters={result?.filters}
        filterVacancies={filterVacancies}
        withApplyFilters={withApplyFilters}
      />
    </div>
  );
};
