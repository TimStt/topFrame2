/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента Team
 * @created: 2025-01-15
 */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonTeam: React.FC = () => {
  return (
    <section className="team container">
      {/* Скелетон для заголовка */}
      <div className="team__header">
        <Skeleton height={48} width={300} style={{ marginBottom: "16px" }} />
        <Skeleton height={20} width={400} />
      </div>

      {/* Скелетон для списка команды */}
      <div className="team__list">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="team__card">
            {/* Скелетон для видео/изображения */}
            <Skeleton
              height={300}
              width={280}
              style={{ borderRadius: "8px", marginBottom: "16px" }}
            />

            {/* Скелетон для кнопки воспроизведения */}
            <Skeleton
              width={60}
              height={60}
              style={{ borderRadius: "50%", marginBottom: "12px" }}
            />

            {/* Скелетон для имени */}
            <Skeleton height={24} width={200} style={{ marginBottom: "8px" }} />

            {/* Скелетон для должности */}
            <Skeleton height={16} width={150} />
          </div>
        ))}
      </div>
    </section>
  );
};
