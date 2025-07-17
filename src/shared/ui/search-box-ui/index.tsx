import { ButtonUI } from "@/shared/ui/button-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { WrapperUI } from "@/shared/ui/wrapper-ui";
import React from "react";

export const SearchBoxUI = ({
  renderButtonSearch,
  renderModalFilter,
  renderQuickFilters,
}: {
  renderButtonSearch?: React.ReactNode;
  renderModalFilter?: React.ReactNode;
  renderQuickFilters?: React.ReactNode;
}) => {
  return (
    <WrapperUI className="search-box__wrapper" isVisible={!!renderQuickFilters}>
      <search className="search-box">
        <InputUI className="search-box__  input" />
        {renderButtonSearch}
        {renderModalFilter}
      </search>
      {renderQuickFilters}
    </WrapperUI>
  );
};
