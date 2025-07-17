import { ButtonUI } from "@/shared/ui/button-ui";
import { InputUI } from "@/ shared/ui/input-ui";
import { WrapperUI } from "@/shared/ui/wrapper-ui";
import React from "react";

export const SearchBoxByVacancies = ({
  renderButtonSearch,
  renderModalFilter,
  renderQuickFilters,
}: {
  renderButtonSearch?: React.ReactNode;
  renderModalFilter?: React.ReactNode;
  renderQuickFilters?: React.ReactNode;
}) => {
  return (
    <WrapperUI
      className="search-vacancies__wrapper"
      isVisible={!!renderQuickFilters}
    >
      <search className="search-vacancies__box">
        <InputUI className="search-vacancies__input" />
        {renderButtonSearch}
        {renderModalFilter}
      </search>
      {renderQuickFilters}
    </WrapperUI>
  );
};
