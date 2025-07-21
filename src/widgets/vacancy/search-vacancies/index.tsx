"use client";
import { ListVacancies } from "@/entity/vacancy/ui/list-vacancies";
import {
  PaginationMock,
  mockFilters,
  mockVacancies,
} from "@/shared/constants/mock-data";
import { cls } from "@/shared/lib/cls";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { AccordionUI } from "@/shared/ui/accordion-ui";
import ArrowIcon from "@/source/icons/arrow2.svg";
import { ButtonFiltersUI } from "@/shared/ui/button-filters-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { CheckboxUI } from "@/shared/ui/checkbox-ui";
import { FilterSideBarUI } from "@/shared/ui/filter-side-bar-ui";
import { PaginationUI } from "@/shared/ui/pagination-ui";
import { ButtonSearchUI } from "@/shared/ui/search-ui-kit/button-search-ui";
import { LabelSearchUI } from "@/shared/ui/search-ui-kit/label-search-ui";
import { QuickFiltersUI } from "@/shared/ui/search-ui-kit/quick-filters-ui";
import { SearchBoxUI } from "@/shared/ui/search-ui-kit/search-box-ui";
import { TotalResultsUI } from "@/shared/ui/search-ui-kit/total-results-ui";
import { SelectUI } from "@/shared/ui/select-ui";
import React, { useState } from "react";
import { AccordionFilterUI } from "@/shared/ui/accordion-filter-ui";

export const SearchVacancies = ({
  withQuickFilters = true,
  withHead = true,
  className,
}: {
  withQuickFilters?: boolean;
  withHead?: boolean;
  className?: string;
}) => {
  const [filters, setFilters] = useState<
    {
      name: string;
      value: string[];
    }[]
  >([]);

  const handleChangeFilter = (name: string, value: string[]) => {
    const filterSelected = filters.findIndex((f) => f.name === name);
    if (filterSelected !== -1) {
      const newFilters = [...filters];
      newFilters[filterSelected] = { name, value };
      setFilters(newFilters);
    } else {
      setFilters([...(filters || []), { name, value }]);
    }
    console.log(filters);
  };

  const modalFilter = useInitialModal("filter", undefined, false, [
    ".btn__filter",
  ]);

  return (
    <div className={cls("search-vacancies", className)}>
      <SearchBoxUI
        className="search-vacancies__box"
        renderQuickFilters={
          withQuickFilters && (
            <QuickFiltersUI
              filters={mockFilters.map((filter) => (
                <SelectUI
                  options={filter.options}
                  onChange={(value) => {
                    handleChangeFilter(filter.title, value);
                  }}
                  value={filters.find((f) => f.name === filter.title)?.value}
                  label={filter.title}
                />
              ))}
              renderActions={
                <>
                  <ButtonUI hasArrow>Применить фильтры</ButtonUI>
                  <button className="filter__reset-filters">Сбросить</button>
                </>
              }
            />
          )
        }
        renderActions={
          <>
            <ButtonSearchUI />
            <ButtonFiltersUI handleOpenFilters={modalFilter.handleOpenModal} />
          </>
        }
      />
      {withHead && (
        <div className="profile__vacancies-head">
          <LabelSearchUI />
          <TotalResultsUI />
        </div>
      )}

      <ListVacancies vacancies={mockVacancies} />
      <PaginationMock />
      <div style={{ overflow: modalFilter.isOpenModal ? "auto" : "hidden" }}>
        <FilterSideBarUI
          isOpen={modalFilter.isOpenModal}
          rootRef={modalFilter.ref}
          renderResetFilters={
            <button className="filter__reset-filters">Сбросить</button>
          }
          renderFilters={mockFilters.map((filter) => (
            <AccordionFilterUI
              key={filter.title}
              filter={filter}
              values={filters.find((f) => f.name === filter.title)?.value}
              onChange={handleChangeFilter}
              renderReset={
                <button className="filter__reset-filters">Сбросить</button>
              }
            />
          ))}
          onCloseFilter={modalFilter.handleCloseModal}
        />
      </div>
    </div>
  );
};
