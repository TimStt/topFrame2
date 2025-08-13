/**
 * @file: vacancy-results.tsx
 * @description: Компонент отображения результатов поиска вакансий с пагинацией
 * @dependencies: ListVacancies, PaginationUI, LabelSearchUI, TotalResultsUI, useSearch
 * @created: 2024-12-19
 */

"use client";

import React from "react";
import { ListVacancies } from "@/entity/vacancy/ui/list-vacancies";
import { PaginationUI } from "@/shared/ui/pagination-ui";
import { LabelSearchUI } from "@/shared/ui/search-ui-kit/label-search-ui";
import { TotalResultsUI } from "@/shared/ui/search-ui-kit/total-results-ui";
import { useSearch } from "../model/use-search";
import { mockVacancies } from "@/shared/constants/mock-data";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { useGetCatalog } from "@/entity/vacancy/api/get-catalog";

interface VacancyResultsProps {
  count?: number;
  countPage?: number;
  isLoading?: boolean;
  withHead?: boolean;
  className?: string;
}

export const VacancyResults = ({
  count,
  countPage,
  isLoading = false,
  withHead = true,
  className,
}: VacancyResultsProps) => {
  const currentPage = useQueryParamAction().get<number>("page") || 1;

  const { searchResult, isLoadingSearch } = useGetCatalog();

  return (
    <div className={className}>
      {withHead && (
        <div className="profile__vacancies-head">
          <LabelSearchUI />
          <TotalResultsUI total={count} />
        </div>
      )}

      <ListVacancies
        vacancies={searchResult?.vacancies || []}
        isLoading={isLoadingSearch}
      />

      <PaginationUI
        meta={{
          current_page: currentPage,
          last_page: countPage || 1,
          per_page: 0,
          total: count || 1,
          links: [],
          path: "",
        }}
        hasMore={true}
        isLoading={isLoading}
      />
    </div>
  );
};
