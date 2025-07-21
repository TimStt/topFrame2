import React from "react";
import { ISelectOption, SelectUI } from "../../select-ui";
import { cls } from "@/shared/lib/cls";

export interface IQuickFilters {
  title: string;
  options: ISelectOption<string>[];
}

export interface IQuickFiltersProps {
  filters: React.ReactNode;
  renderActions?: React.ReactNode;
  className?: string;
}

export const QuickFiltersUI = ({
  filters,
  renderActions,
  className,
}: IQuickFiltersProps) => {
  return (
    <div className={cls("search-box__filters", className)}>
      <span className="search-box__filters-title">Быстрые фильтры</span>

      <div className="search-box__filters-list">{filters}</div>
      {renderActions && (
        <div className="search-box__filters-actions">{renderActions}</div>
      )}
    </div>
  );
};
