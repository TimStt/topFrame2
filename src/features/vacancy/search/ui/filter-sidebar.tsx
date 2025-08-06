/**
 * @file: filter-sidebar.tsx
 * @description: Компонент боковой панели фильтров с аккордеоном и кнопками управления
 * @dependencies: useFilter, FilterSideBarUI, AccordionFilterUI, ButtonUI
 * @created: 2024-12-19
 */

"use client";

import React from "react";
import { IApiSchemas } from "@/shared/api/schema";
import { FilterSideBarUI } from "@/shared/ui/filter-side-bar-ui";
import { AccordionFilterUI } from "@/shared/ui/accordion-filter-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { TFilter, useFilter } from "../model/use-filter";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";

interface FilterSidebarProps {
  filters?: IApiSchemas["FilterDto"][];
  filterVacancies: TFilter;
  withApplyFilters?: boolean;
}

export const FilterSidebar = ({
  filters,
  filterVacancies,
  withApplyFilters = true,
}: FilterSidebarProps) => {
  const modalFilter = useInitialModal("filter", undefined, false, [
    ".btn__filter",
  ]);

  const handleAcceptFilterSideBar = (
    ...props: Parameters<typeof filterVacancies.acceptAllFilters>
  ) => {
    filterVacancies.acceptAllFilters(...props);
    modalFilter.handleCloseModal();
  };

  return (
    <FilterSideBarUI
      isOpen={modalFilter.isOpenModal}
      rootRef={modalFilter.ref}
      renderResetFilters={
        <button
          className="filter__reset-filters"
          onClick={filterVacancies.resetAllFilters}
          title="Сбросить все фильтры"
        >
          Сбросить
        </button>
      }
      renderFilters={filters?.map((filter) => (
        <AccordionFilterUI
          key={filter.slug}
          filter={{
            options: filter.arr,
            name: filter.slug,
            label: filter.name,
          }}
          activeValue={
            filterVacancies.currentActiveFilters?.find(
              (f) => f?.name === filter?.slug
            )?.options || []
          }
          onChange={(label, values) =>
            filterVacancies.handleChangeFilter(label, values)
          }
          renderReset={
            <button className="filter__reset-filters">Сбросить</button>
          }
        />
      ))}
      renderApplyFilters={
        withApplyFilters && (
          <ButtonUI
            className="filter__side-bar__apply"
            text="Применить фильтры"
            onClick={handleAcceptFilterSideBar}
          />
        )
      }
      onCloseFilter={modalFilter.handleCloseModal}
    />
  );
};
