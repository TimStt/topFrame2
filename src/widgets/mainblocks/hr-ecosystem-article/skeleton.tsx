/**
 * @file: skeleton.tsx
 * @description: Скелетон страницы подробного описания статьи о направлении
 * @dependencies: react-loading-skeleton
 * @created: 2025-08-08
 */
"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HrEcosystemArticleSkeleton: React.FC = () => {
  return (
    <div className="freelance-page__content">
      <div className="freelance-page__info" style={{ width: "100%" }}>
        {/* Крупный факт */}
        <Skeleton height={24} style={{ marginBottom: 12 }} />

        {/* Параграфы */}
        <Skeleton count={3} height={14} style={{ marginBottom: 8 }} />
        <Skeleton count={2} height={14} style={{ marginBottom: 16 }} />

        {/* Блок преимуществ */}
        <div style={{ marginTop: 24 }}>
          <Skeleton height={24} style={{ marginBottom: 12 }} />
          <div className="freelance-page__benefits__list">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="freelance-page__benefits__item">
                <Skeleton
                  height={18}
                  width={200}
                  style={{
                    marginBottom: 8,
                    maxWidth: 200,
                    marginTop: 8,
                    width: "100%",
                  }}
                />
                <Skeleton count={2} height={12} width={"100%"} />
              </div>
            ))}
          </div>
        </div>

        {/* Как начать (шаги) */}
        <div style={{ marginTop: 28 }}>
          <Skeleton height={24} style={{ marginBottom: 12 }} />
          <ol className="freelance-page__how__list">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                style={{ display: "flex", gap: 12, alignItems: "center" }}
              >
                <Skeleton height={29} width={14} />

                <Skeleton height={14} width={150} style={{ flex: 1 }} />
              </div>
            ))}
          </ol>
        </div>

        {/* Завершающий блок + кнопка */}
        <div style={{ marginTop: 28 }}>
          <Skeleton height={20} style={{ marginBottom: 8 }} />
          <Skeleton count={2} height={14} style={{ marginBottom: 16 }} />
          <Skeleton height={44} />
        </div>
      </div>

      {/* Изображение справа */}
      <div style={{ marginLeft: "auto", width: "100%", maxWidth: 480 }}>
        <Skeleton height={320} />
      </div>
    </div>
  );
};

export default HrEcosystemArticleSkeleton;
