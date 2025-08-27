"use client";
import React from "react";
import { CardVacancy } from "./card-vacancy";
import { cls } from "@/shared/lib/cls";
import { IApiSchemas } from "@/shared/api/schema";
import { CardVacancySkeleton } from "./skeleton";
import { useGetHome } from "@/entity/user/api/get-home";
import { NewVacanciesSkeleton } from "@/widgets/vacancy/new-vacancies/skeleton";

export interface IListVacancies {
  vacancies?: IApiSchemas["VacancyDto"][];
  renderPagination?: React.ReactNode;
  renderButton?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  textEmpty?: string;
}

export const ListVacancies = ({
  renderPagination,
  renderButton,
  className,
  vacancies,
  textEmpty,
  isLoading,
}: IListVacancies) => {
  if (isLoading) {
    return <NewVacanciesSkeleton />;
  }

  return (
    <div className={cls("vacancy-list", className)}>
      <div className="vacancy-list__content">
        {vacancies?.length ? (
          vacancies.map((vacancy, index) => (
            <CardVacancy key={vacancy.id || `vacancy-${index}`} {...vacancy} />
          ))
        ) : (
          <div className="vacancy-list__empty">
            <p
              className="vacancy-list__empty-text"
              dangerouslySetInnerHTML={{
                __html:
                  textEmpty ||
                  `По вашему запросу ничего не найдено. <br />
              Попробуйте изменить параметры поиска.`,
              }}
            />
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
