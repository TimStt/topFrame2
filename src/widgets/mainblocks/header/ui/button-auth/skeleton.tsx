/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента ButtonAuth в шапке
 * @dependencies: react-loading-skeleton
 * @created: 2024-12-19
 */

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ButtonAuthSkeleton = () => {
  return (
    <div className="header__profile-skeleton">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Скелетон для аватара */}
        <Skeleton
          circle
          width={32}
          height={32}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
        />

        {/* Скелетон для имени пользователя */}
        <Skeleton
          width={60}
          height={16}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
        />
      </div>
    </div>
  );
};
