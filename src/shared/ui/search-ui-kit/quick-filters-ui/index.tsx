import React from "react";
import { ISelectOption, SelectUI } from "../../select-ui";
import { cls } from "@/shared/lib/cls";

export interface IQuickFilters {
  title: string;
  options: ISelectOption[];
}

export const QuickFiltersUI = ({
  filters,
  renderActions,
  className,
}: {
  filters: IQuickFilters[];
  renderActions?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cls("search-box__filters", className)}>
      <span className="search-box__filters-title">Быстрые фильтры</span>

      <div className="search-box__filters-list">
        {filters.map((filter) => (
          <SelectUI key={filter.title} options={filter.options} />
        ))}
      </div>
      {renderActions && (
        <div className="search-box__filters-actions">{renderActions}</div>
      )}
    </div>
  );
};
