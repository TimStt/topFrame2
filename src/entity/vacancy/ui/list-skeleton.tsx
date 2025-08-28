/**
 * @file: ListSkeleton.tsx
 * @description: Компонент ListSkeleton
 * @created: 2025-08-22
 */
import React from "react";
import { CardVacancySkeleton } from "./skeleton";

export const ID_VACANCY_LIST = "vacancy-list";

export const ListVacanciesSkeleton: React.FC = () => {
  return (
    <div className={"vacancy-list"} id={ID_VACANCY_LIST}>
      <div className="vacancy-list__content">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardVacancySkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
