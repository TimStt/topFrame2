"use client";
import React from "react";
import { CardVacancy } from "./card-vacancy";
import { cls } from "@/shared/lib/cls";
import { IApiSchemas } from "@/shared/api/schema";
import { CardVacancySkeleton } from "./skeleton";
import { useGetHome } from "@/entity/user/api/get-home";

export interface IListVacancies {
  vacancies?: IApiSchemas["VacancyDto"][];
  renderPagination?: React.ReactNode;
  renderButton?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export const ListVacancies = ({
  renderPagination,
  renderButton,
  className,
}: IListVacancies) => {
  const { vacancies, isLoading } = useGetHome();

  return (
    <div className={cls("vacancy-list", className)}>
      <div className="vacancy-list__content">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <CardVacancySkeleton key={index} />
          ))
        ) : vacancies?.length ? (
          vacancies.map((vacancy) => (
            <CardVacancy key={vacancy.id} {...vacancy} />
          ))
        ) : (
          <div className="vacancy-list__empty">
            <p className="vacancy-list__empty-text">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры
              поиска.
            </p>
          </div>
        )}
      </div>

      {renderPagination ||
        (renderButton && (
          <div className="vacancy-list__actions">
            {renderPagination}
            {renderButton}
          </div>
        ))}
    </div>
  );
};
