/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента HrTopFrameBlock
 * @created: 2025-08-07
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonHrTopFrameTabs: React.FC = () => {
  return (
    <>
      {/* Скелетон для заголовка страницы */}

      <div className="hr-topframe-tabs">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            width={120}
            height={36}
            style={{
              borderRadius: "16px",
              marginRight: "4px",
            }}
          />
        ))}
      </div>
    </>
  );
};
