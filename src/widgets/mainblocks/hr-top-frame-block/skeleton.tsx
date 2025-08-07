/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента HrTopFrameBlock
 * @created: 2025-08-07
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonHrTopFrameBlock: React.FC = () => {
  return (
    <>
      {/* Скелетон для заголовка страницы */}

      {/* Скелетон для табов */}

      <div className="hr-topframe-content">
        {/* Скелетон для информационного блока */}
        <div className="hr-topframe-info">
          {/* Скелетон для заголовка */}
          <Skeleton height={29} width={150} style={{ marginBottom: "16px" }} />

          {/* Скелетон для текстового контента */}
          <div className="hr-main-text">
            <Skeleton count={3} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={3} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={4} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={2} height={20} />
          </div>
        </div>

        {/* Скелетон для блока с изображением и кнопкой */}
        <div className="hr-topframe-img-wrap">
          {/* Скелетон для изображения */}
          <Skeleton
            width={480}
            height={320}
            style={{
              borderRadius: "8px",
              marginBottom: "24px",
              aspectRatio: "480/320",
            }}
          />

          {/* Скелетон для кнопки */}
          <Skeleton height={48} width={120} />
        </div>
      </div>
    </>
  );
};
