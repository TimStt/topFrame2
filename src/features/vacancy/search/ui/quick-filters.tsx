/**
 * @file: quick-filters.tsx
 * @description: Компонент быстрых фильтров вакансий с возможностью применения и сброса
 * @dependencies: useFilter, QuickFiltersUI, SelectUI, ButtonUI
 * @created: 2024-12-19
 */

"use client";

import React from "react";
import { IApiSchemas } from "@/shared/api/schema";
import { QuickFiltersUI } from "@/shared/ui/search-ui-kit/quick-filters-ui";
import { SelectUI } from "@/shared/ui/select-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { TFilter, useFilter } from "../model/use-filter";
import { useGetCatalog } from "@/entity/vacancy/api/get-catalog";
import { QuickFiltersSkeleton } from "@/shared/ui/search-ui-kit/quick-filters-ui/skeleton";

interface QuickFiltersProps {
  quickFilter?: IApiSchemas["FilterDto"][];

  className?: string;
  filterVacancies: TFilter;
}

export const QuickFilters = ({
  quickFilter,

  className,
  filterVacancies,
}: QuickFiltersProps) => {
  const isLoading = useGetCatalog().isLoadingFilter;

  return (
    <QuickFiltersUI
      className={className}
      filters={
        isLoading ? (
          <QuickFiltersSkeleton />
        ) : (
          quickFilter?.map((filter) => (
            <SelectUI
              key={filter.name}
              value={{
                options: filter.arr,
                name: filter.slug,
                label: filter.name,
              }}
              activeValue={
                filterVacancies.currentActiveFilters?.find(
                  (f) => f?.name === filter?.slug
                )?.options || []
              }
              type="checkbox"
              onChange={(label, values) =>
                filterVacancies.handleChangeFilter(label, values)
              }
              label={filter.name}
            />
          ))
        )
      }
      renderActions={
        <>
          <ButtonUI
            hasArrow
            text="Применить фильтры"
            onClick={filterVacancies.acceptAllFilters}
            disabled={
              filterVacancies.isEmptyQuickFilters ||
              filterVacancies.isAllQuickFilterApplied
            }
          />
          <button
            className="filter__reset-filters"
            onClick={filterVacancies.resetQuickFilters}
            title="Сбросить быстрые фильтры"
            disabled={filterVacancies.isEmptyQuickFilters}
          >
            Сбросить
          </button>
        </>
      }
    />
  );
};
