/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента Directions
 * @created: 2025-01-15
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonDirections: React.FC = () => {
  return (
    <section className="directions transform-ellipses">
      <div className="directions__inner container">
        {/* Скелетон для заголовка */}
        <div className="directions__header">
          <Skeleton height={48} width={300} style={{ marginBottom: "16px" }} />
          <Skeleton count={2} height={20} width={400} />
        </div>
        
        <div className="directions__content">
          {/* Скелетон для списка кнопок */}
          <div className="directions__list">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                height={60}
                width={200}
                style={{ marginBottom: "12px" }}
              />
            ))}
          </div>
          
          {/* Скелетон для выбранной карточки */}
          <div className="directions__selected">
            <Skeleton height={240} width={480} style={{ borderRadius: "8px", marginBottom: "20px" }} />
            <Skeleton height={24} width={300} style={{ marginBottom: "12px" }} />
            <Skeleton count={3} height={16} style={{ marginBottom: "20px" }} />
            <div style={{ display: "flex", gap: "12px" }}>
              <Skeleton height={40} width={200} />
              <Skeleton height={40} width={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
