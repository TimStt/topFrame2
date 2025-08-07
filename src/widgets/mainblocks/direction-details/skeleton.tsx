/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента DirectionDetails
 * @created: 2025-08-07
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonDirectionDetails: React.FC = () => {
  return (
    <>
      <div className="admin-direction-page container">
        <div className="admin-direction-content">
          {/* Скелетон для текстового блока */}
          <div className="admin-direction-text">
            <Skeleton count={3} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={3} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={2} height={20} />
          </div>

          {/* Скелетон для изображения */}
          <Skeleton
            width={480}
            height={320}
            style={{ borderRadius: "8px", flexShrink: 0 }}
          />
        </div>

        {/* Скелетон для кнопки */}
        <Skeleton height={48} width={200} style={{ marginTop: "40px" }} />
      </div>
    </>
  );
};
