/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента HREcosystemSection
 * @created: 2025-01-15
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonHREcosystemSection: React.FC = () => {
  return (
    <section className="hr-ecosystem container">
      {/* Скелетон для заголовка */}
      <Skeleton height={40} width={300} style={{ marginBottom: "40px" }} />

      {/* Скелетон для центрального круга */}
      <div className="hr-ecosystem__wrapper">
        <div className="hr-ecosystem__circle">
          <Skeleton width={335} height={335} style={{ borderRadius: "50%" }} />
          <Skeleton height={32} width={250} style={{ marginTop: "20px" }} />
        </div>
      </div>

      {/* Скелетон для элементов экосистемы */}
      <div className="hr-ecosystem__elements">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="hr-ecosystem__element"
            style={{
              position: "absolute",
              transform: `rotate(${index * 45}deg) translateX(200px)`,
            }}
          >
            <div className="hr-ecosystem__element-content">
              <Skeleton
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
              <Skeleton height={16} width={80} style={{ marginTop: "8px" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
