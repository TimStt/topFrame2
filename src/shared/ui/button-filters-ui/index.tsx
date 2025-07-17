import React from "react";
import { ButtonUI } from "@/shared/ui/button-ui";
import FilterIcon from "@/source/icons/filter.svg";

export const ButtonFilters = () => {
  return (
    <ButtonUI
      className="btn__filter"
      title="открыть фильтры вакансий"
      size="custom"
      variant="custom"
    >
      <span className="visually-hidden">открыть фильтры вакансий</span>
      <FilterIcon />
    </ButtonUI>
  );
};
