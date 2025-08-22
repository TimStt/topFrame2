/**
 * @file: NewSkeleton.tsx
 * @description: Скелетон для компонента NewVacancies
 * @created: 2025-08-22
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ListVacanciesSkeleton } from "@/entity/vacancy/ui/list-skeleton";

export const NewVacanciesSkeleton: React.FC = () => {
  return (
    <section className="new-vacancies">
      {/* Скелетон для заголовка */}
      <div style={{ marginBottom: "16px" }}>
        <Skeleton
          width={300}
          height={48}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
          style={{ marginBottom: "12px" }}
        />
      </div>

      {/* Скелетон для подзаголовка */}
      <div style={{ marginBottom: "32px" }}>
        <Skeleton
          width={400}
          height={24}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
        />
      </div>

      {/* Скелетон для списка вакансий */}
      <div className="container">
        <ListVacanciesSkeleton />
      </div>
    </section>
  );
};
