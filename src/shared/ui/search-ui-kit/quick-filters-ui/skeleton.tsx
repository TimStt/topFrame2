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
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Первый ряд фильтров */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {[1, 2, 3, 4].map((item) => (
          <Skeleton
            key={item}
            width={176}
            height={43}
            borderRadius={8}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />
        ))}
      </div>
    </div>
  );
};
