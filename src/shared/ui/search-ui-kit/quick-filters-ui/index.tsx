import React, { useState } from "react";
import { ISelectOption, SelectUI } from "../../select-ui";
import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "../../button-ui";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={cls("search-box__filters", className, {
          "is-open": isOpen,
        })}
      >
        <span className="search-box__filters-title">Быстрые фильтры</span>

        <div className="search-box__filters-list">{filters}</div>
        {renderActions && (
          <div className="search-box__filters-actions">{renderActions}</div>
        )}
      </div>
      <ButtonUI
        className="search-box__filters-toggle"
        fullWidth
        variant="secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? "Скрыть" : "Показать быстрые фильтры"}</span>
      </ButtonUI>
    </>
  );
};
