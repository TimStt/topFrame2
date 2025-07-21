import React from "react";
import { ButtonUI } from "@/shared/ui/button-ui";
import FilterIcon from "@/source/icons/filter.svg";
import { cls } from "@/shared/lib/cls";

export const ButtonFiltersUI = ({
  className,
  handleOpenFilters,
}: {
  className?: string;
  handleOpenFilters: () => void;
}) => {
  return (
    <ButtonUI
      className={cls("btn__filter", className)}
      title="открыть фильтры вакансий"
      size="custom"
      variant="custom"
      onClick={handleOpenFilters}
      type="button"
    >
      <span className="visually-hidden">открыть фильтры вакансий</span>
      <FilterIcon />
    </ButtonUI>
  );
};
