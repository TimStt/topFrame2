import React from "react";
import { ISelectOption, SelectUI } from "../select-ui";

export interface IQuickFilters {
  title: string;
  options: ISelectOption[];
}

export const QuickFiltersUI = ({
  filters,
  renderActions,
}: {
  filters: IQuickFilters[];
  renderActions?: React.ReactNode;
}) => {
  return (
    <div className="search-box__quick-filters">
      <span>Быстрые фильтры</span>

      <div className="search-box__quick-filters-list">
        {filters.map((filter) => (
          <SelectUI key={filter.title} options={filter.options} />
        ))}
      </div>
      {renderActions && (
        <div className="search-box__quick-filters-actions">{renderActions}</div>
      )}
    </div>
  );
};
