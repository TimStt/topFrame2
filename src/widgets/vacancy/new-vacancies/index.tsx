import { ListVacancies } from "@/entity/vacancy/ui/list-vacancies";
import { mockVacancies } from "@/shared/constants/mock-data";
import { ButtonUI } from "@/shared/ui/button-ui";
import React from "react";

export const NewVacancies = () => {
  return (
    <section className="new-vacancies">
      <h2 className="new-vacancies__title title-section">Новые вакансии</h2>
      <p className="new-vacancies__subtitle">
        Найдите свою идеальную позицию в TopFrame
      </p>
      <ListVacancies
        className="container"
        vacancies={mockVacancies}
        renderButton={
          <ButtonUI
            variant="primary"
            size="medium"
            hasArrow
            as="a"
            href="/"
            text="Посмотреть все вакансии"
          />
        }
      />
    </section>
  );
};
