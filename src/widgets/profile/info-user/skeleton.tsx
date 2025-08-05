/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента InfoUser в профиле
 * @dependencies: react-loading-skeleton
 * @created: 2024-12-19
 */

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const InfoUserSkeleton = () => {
  return (
    <section className="profile__info-user-skeleton">
      {/* Скелетон для блока "О пользователе" */}
      <div className="profile__info-user__about-skeleton">
        <div
          style={{
            padding: "20px",
            border: "1px solid var(--color-light-blue)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Скелетон для аватара */}
          <Skeleton
            circle
            width={100}
            height={100}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />

          {/* Скелетон для имени */}
          <Skeleton
            width={120}
            height={24}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />

          {/* Скелетон для роли */}
          <Skeleton
            width={80}
            height={16}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />

          {/* Скелетон для кнопки локации */}
          <Skeleton
            width={120}
            height={40}
            borderRadius={20}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
          />
        </div>
      </div>

      {/* Скелетон для блока "Быстрые ссылки" */}
      <div className="profile__info-user__links-skeleton">
        <div
          style={{
            borderRadius: "8px",
            padding: "24px 20px",
            backgroundColor: "#f7ffcd",
            marginTop: "20px",
          }}
        >
          {/* Скелетон для заголовка */}
          <Skeleton
            width={140}
            height={24}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
            style={{ marginBottom: "24px" }}
          />

          {/* Скелетоны для ссылок */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {[1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                width="100%"
                height={40}
                borderRadius={20}
                baseColor="#f0f0f0"
                highlightColor="#e0e0e0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Скелетон для второго блока "Быстрые ссылки" */}
      <div className="profile__info-user__links-skeleton">
        <div
          style={{
            borderRadius: "8px",
            padding: "24px 20px",
            backgroundColor: "var(--color-light-blue)",
            marginTop: "20px",
          }}
        >
          {/* Скелетон для заголовка */}
          <Skeleton
            width={140}
            height={24}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
            style={{ marginBottom: "24px" }}
          />

          {/* Скелетоны для ссылок */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {[1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                width="100%"
                height={40}
                borderRadius={20}
                baseColor="#f0f0f0"
                highlightColor="#e0e0e0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Скелетон для кнопки выхода */}
      <Skeleton
        width="100%"
        height={40}
        borderRadius={8}
        baseColor="#f0f0f0"
        highlightColor="#e0e0e0"
        style={{ marginTop: "20px" }}
      />
    </section>
  );
};
