"use client";

import React, { useState } from "react";

import { ListVacancies } from "@/entity/vacancy/ui/list-vacancies";
import {
  PaginationMock,
  mockFilters,
  mockVacancies,
} from "@/shared/constants/mock-data";
import { cls } from "@/shared/lib/cls";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { AccordionFilterUI } from "@/shared/ui/accordion-filter-ui";
import { AccordionUI } from "@/shared/ui/accordion-ui";
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
import { ISelectOption, SelectUI } from "@/shared/ui/select-ui";
import ArrowIcon from "@/source/icons/arrow2.svg";
import { useGetCatalog } from "@/entity/vacancy/api/get-catalog";
import { useFilter } from "../use-filter";
import { useSearch } from "../use-search";

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

  const searchVacancies = useSearch();

  const filterVacancies = useFilter({
    quickFilter: result?.quickFilter,
    filters: result?.filters,
  });

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
    <div className={cls("search-vacancies", className)}>
      <SearchBoxUI
        className="search-vacancies__box"
        placeholder="Поиск по названию вакансии, навыкам, ключевым словам"
        handleSubmit={searchVacancies.handleSearch}
        onChange={searchVacancies.handleChangeSearch}
        value={searchVacancies.isSearchValue}
        renderQuickFilters={
          withQuickFilters && (
            <QuickFiltersUI
              filters={result?.quickFilter.map((filter) => (
                <SelectUI
                  key={filter.name}
                  value={{
                    options: filter.arr,
                    name: filter.slug,
                    label: filter.name,
                  }}
                  activeValue={
                    filterVacancies.currentActiveFilters?.find(
                      (f) => f.name === filter.slug
                    )?.options || []
                  }
                  type="checkbox"
                  onChange={(label, values) =>
                    filterVacancies.handleChangeFilter(label, values)
                  }
                  label={filter.name}
                />
              ))}
              renderActions={
                <>
                  <ButtonUI
                    hasArrow
                    text="Применить фильтры"
                    onClick={filterVacancies.acceptAllFilters}
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
          )
        }
        renderActions={
          <>
            <ButtonSearchUI isLoading />
            <ButtonFiltersUI handleOpenFilters={modalFilter.handleOpenModal} />
          </>
        }
      />
      {withHead && (
        <div className="profile__vacancies-head">
          <LabelSearchUI />
          <TotalResultsUI total={result?.count} />
        </div>
      )}

      <ListVacancies vacancies={mockVacancies} />
      <PaginationUI
        meta={{
          current_page: searchVacancies.currentPage,
          last_page: result?.countPage || 1,
          per_page: 0,
          total: result?.count || 1,
          links: [],
          path: "",
        }}
        hasMore={true}
        isLoading={isLoading}
      />

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
        renderFilters={result?.quickFilter.map((filter) => (
          <AccordionFilterUI
            key={filter.slug}
            filter={{
              options: filter.arr,
              name: filter.slug,
              label: filter.name,
            }}
            activeValue={
              filterVacancies.currentActiveFilters?.find(
                (f) => f.name === filter.slug
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
    </div>
  );
};
