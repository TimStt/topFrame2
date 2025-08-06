/**
 * @file: search-box.tsx
 * @description: Компонент поиска вакансий с поисковой строкой и кнопками действий
 * @dependencies: useSearch, SearchBoxUI, ButtonSearchUI, ButtonFiltersUI
 * @created: 2024-12-19
 */

"use client";

import React from "react";
import { SearchBoxUI } from "@/shared/ui/search-ui-kit/search-box-ui";
import { ButtonSearchUI } from "@/shared/ui/search-ui-kit/button-search-ui";
import { ButtonFiltersUI } from "@/shared/ui/button-filters-ui";
import { useSearch } from "../model/use-search";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { useGetCatalog } from "@/entity/vacancy/api/get-catalog";

interface SearchBoxProps {
  renderQuickFilters?: React.ReactNode;
  className?: string;
}

export const SearchBox = ({
  renderQuickFilters,
  className,
}: SearchBoxProps) => {
  const searchVacancies = useSearch();
  const { isLoading } = useGetCatalog();

  return (
    <SearchBoxUI
      className={className}
      placeholder="Поиск по названию вакансии, навыкам, ключевым словам"
      handleSubmit={searchVacancies.handleSearch}
      onChange={searchVacancies.handleChangeSearch}
      value={searchVacancies.isSearchValue}
      renderQuickFilters={renderQuickFilters}
      renderActions={
        <>
          <ButtonSearchUI isLoading={isLoading} />
          <ButtonFiltersUI
            handleOpenFilters={() => onToggleModal("filter", true)}
          />
        </>
      }
    />
  );
};
