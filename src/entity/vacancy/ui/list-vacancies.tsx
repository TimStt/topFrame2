import React from "react";
import { CardVacancy, ICardVacancy } from "./card-vacancy";
import { cls } from "@/shared/lib/cls";

export interface IListVacancies {
  vacancies: Omit<ICardVacancy, "children">[];
  renderPagination?: React.ReactNode;
  renderButton?: React.ReactNode;
  className?: string;
}

export const ListVacancies = ({
  vacancies,
  renderPagination,
  renderButton,
  className,
}: IListVacancies) => {
  return (
    <div className={cls("vacancy-list container", className)}>
      <div className="vacancy-list__content">
        {vacancies.map((vacancy) => (
          <CardVacancy children={undefined} key={vacancy.id} {...vacancy} />
        ))}
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
