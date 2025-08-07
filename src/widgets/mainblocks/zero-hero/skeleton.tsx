/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента ZeroHero
 * @created: 2025-01-15
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonZeroHero: React.FC = () => {
  return (
    <section className="zero-hero transform-ellipses">
      <div className="zero-hero_inner container">
        <div className="zero-hero__row">
          {/* Скелетон для текстового контента */}
          <div className="zero-hero__text-content">
            <Skeleton
              height={60}
              width={400}
              style={{ marginBottom: "20px" }}
            />
            <Skeleton count={3} height={20} style={{ marginBottom: "16px" }} />
            <Skeleton count={2} height={20} style={{ marginBottom: "24px" }} />
            <Skeleton height={48} width={200} />
          </div>

          {/* Скелетон для иконки мира */}
          <div className="zero-hero__world">
            <Skeleton
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>

        {/* Скелетон для слайдера */}
        <div className="zero-hero__features">
          <div className="zero-hero__features-wrapper">
            <Skeleton height={40} width={40} style={{ borderRadius: "50%" }} />
            <Skeleton height={40} width={40} style={{ borderRadius: "50%" }} />
          </div>

          {/* Скелетон для карточек функций */}
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} style={{ flex: 1 }}>
                <Skeleton
                  height={120}
                  style={{ borderRadius: "8px", marginBottom: "12px" }}
                />
                <Skeleton
                  height={20}
                  width="80%"
                  style={{ marginBottom: "8px" }}
                />
                <Skeleton count={2} height={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
