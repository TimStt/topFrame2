"use client";
import { useGetHome } from "@/entity/user/api/get-home";
import { ListVacancies } from "@/entity/vacancy/ui/list-vacancies";
import { mockVacancies } from "@/shared/constants/mock-data";
import { ButtonUI } from "@/shared/ui/button-ui";
import React from "react";

export const NewVacancies = () => {
  const { vacancies, isLoading } = useGetHome();
  return (
    <section className="new-vacancies">
      <h2 className="new-vacancies__title title-section">Новые вакансии</h2>
      <p className="new-vacancies__subtitle">
        Найдите свою идеальную позицию в TopFrame
      </p>
      <ListVacancies
        className="container"
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
        vacancies={vacancies}
        isLoading={isLoading}
      />
    </section>
  );
};
