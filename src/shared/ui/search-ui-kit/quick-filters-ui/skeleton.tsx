/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента QuickFiltersUI
 * @dependencies: react-loading-skeleton
 * @created: 2024-12-19
 */

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const QuickFiltersSkeleton = () => {
  return (
    <div className="search-box__filters-skeleton">
      <div
        style={{
          backgroundColor: "var(--color-light-gray)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {/* Скелетон для заголовка */}
        <Skeleton
          width={140}
          height={20}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
          style={{ marginBottom: "16px" }}
        />

        {/* Скелетоны для фильтров */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Первый ряд фильтров */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                width={120}
                height={40}
                borderRadius={8}
                baseColor="#f0f0f0"
                highlightColor="#e0e0e0"
              />
            ))}
          </div>

          {/* Второй ряд фильтров */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[1, 2].map((item) => (
              <Skeleton
                key={item}
                width={120}
                height={40}
                borderRadius={8}
                baseColor="#f0f0f0"
                highlightColor="#e0e0e0"
              />
            ))}
          </div>
        </div>

        {/* Скелетон для кнопки действий (если есть) */}
        <div style={{ marginTop: "16px" }}>
          <Skeleton
            width={100}
            height={32}
            borderRadius={8}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />
        </div>
      </div>
    </div>
  );
};
