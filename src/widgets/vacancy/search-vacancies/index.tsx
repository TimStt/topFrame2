import { ListVacancies } from "@/entity/vacancy/ui/list-vacancies";
import {
  PaginationMock,
  mockFilters,
  mockVacancies,
} from "@/shared/constants/mock-data";
import { cls } from "@/shared/lib/cls";
import { ButtonFiltersUI } from "@/shared/ui/button-filters-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { PaginationUI } from "@/shared/ui/pagination-ui";
import { ButtonSearchUI } from "@/shared/ui/search-ui-kit/button-search-ui";
import { LabelSearchUI } from "@/shared/ui/search-ui-kit/label-search-ui";
import { QuickFiltersUI } from "@/shared/ui/search-ui-kit/quick-filters-ui";
import { SearchBoxUI } from "@/shared/ui/search-ui-kit/search-box-ui";
import { TotalResultsUI } from "@/shared/ui/search-ui-kit/total-results-ui";
import React from "react";

export const SearchVacancies = ({
  withQuickFilters = true,
  withHead = true,
}: {
  withQuickFilters?: boolean;
  withHead?: boolean;
}) => {
  return (
    <div className={"profile__vacancies"}>
      <SearchBoxUI
        className="search-vacancies__box"
        renderQuickFilters={
          withQuickFilters && (
            <QuickFiltersUI
              filters={mockFilters}
              renderActions={
                <>
                  <ButtonUI hasArrow>Применить фильтры</ButtonUI>
                  <button>Сбросить</button>
                </>
              }
            />
          )
        }
        renderActions={
          <>
            <ButtonSearchUI />
            <ButtonFiltersUI handleOpenFilters={() => {}} />
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
    </div>
  );
};
