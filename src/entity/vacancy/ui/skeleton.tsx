/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента CardVacancy
 * @dependencies: react-loading-skeleton
 * @created: 2024-12-19
 */

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardVacancySkeleton = () => {
  return (
    <div className="vacancy-card-skeleton">
      <div
        style={{
          border: "1px solid var(--color-light-blue)",
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "calc(var(--container-max-width) * 1px)",
          width: "100%",
          backgroundColor: "var(--color-light)",
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Левая часть с информацией */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
          }}
        >
          {/* Скелетон для заголовка */}
          <Skeleton
            width="80%"
            height={29}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />

          {/* Скелетоны для параметров (чипы) */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                width={80}
                height={24}
                borderRadius={12}
                baseColor="#f0f0f0"
                highlightColor="#e0e0e0"
              />
            ))}
          </div>

          {/* Скелетон для локации */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Skeleton
              width={16}
              height={16}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
            <Skeleton
              width={80}
              height={16}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          </div>
        </div>

        {/* Правая часть с действиями */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-end",
          }}
        >
          {/* Скелетон для зарплаты */}
          <Skeleton
            width={120}
            height={24}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />

          {/* Скелетон для кнопки "Подробнее" */}
          <Skeleton
            width={100}
            height={40}
            borderRadius={8}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />
        </div>
      </div>
    </div>
  );
};
