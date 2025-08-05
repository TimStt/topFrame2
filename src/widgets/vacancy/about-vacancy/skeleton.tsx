/**
 * @file: skeleton.tsx
 * @description: Скелетон для страницы вакансии
 * @dependencies: react-loading-skeleton
 * @created: 2024-12-19
 */

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const VacancyPageSkeleton = () => {
  return (
    <main className="vacancy-page-skeleton">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
          marginBottom: "120px",
        }}
      >
        {/* Основная часть */}
        <div style={{ flex: 1, maxWidth: "780px" }}>
          {/* Скелетон для заголовка */}
          <Skeleton
            width="60%"
            height={40}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
            style={{ marginBottom: "24px" }}
          />

          {/* Скелетон для зарплаты */}
          <Skeleton
            width={200}
            height={24}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
            style={{ marginBottom: "24px" }}
          />

          {/* Скелетоны для тегов */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "24px" }}>
            {[1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                width={120}
                height={24}
                borderRadius={12}
                baseColor="#f0f0f0"
                highlightColor="#e0e0e0"
              />
            ))}
          </div>

          {/* Скелетон для локации */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginBottom: "24px",
            }}
          >
            <Skeleton
              width={16}
              height={16}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
            <Skeleton
              width={80}
              height={16}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          </div>

          {/* Скелетон для кнопки "Откликнуться" */}
          <Skeleton
            width={150}
            height={40}
            borderRadius={8}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
            style={{ marginBottom: "40px" }}
          />

          {/* Скелетон для информационного блока */}
          <div
            style={{
              boxShadow: "0 3px 10px 0 rgba(46, 88, 124, 0.04)",
              padding: "20px",
              border: "1px solid var(--color-light-blue)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "64px",
            }}
          >
            {/* Скелетоны для секций */}
            {[1, 2, 3].map((section) => (
              <div key={section}>
                {/* Скелетон для заголовка секции */}
                <Skeleton
                  width="40%"
                  height={29}
                  baseColor="#f0f0f0"
                  highlightColor="#e0e0e0"
                  style={{ marginBottom: "24px" }}
                />

                {/* Скелетоны для параграфов */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Skeleton
                    width="100%"
                    height={22}
                    baseColor="#f0f0f0"
                    highlightColor="#e0e0e0"
                    count={3}
                  />
                </div>

                {/* Скелетоны для списков */}
                <div style={{ marginTop: "16px" }}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        marginBottom: "16px",
                      }}
                    >
                      <Skeleton
                        width={6}
                        height={6}
                        circle
                        baseColor="#f0f0f0"
                        highlightColor="#e0e0e0"
                        style={{ marginTop: "8px", flexShrink: 0 }}
                      />
                      <Skeleton
                        width="100%"
                        height={22}
                        baseColor="#f0f0f0"
                        highlightColor="#e0e0e0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая колонка с бенефитами */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f7ffcd",
            borderRadius: "8px",
            position: "sticky",
            top: "0px",
            marginTop: "101px",
            height: "fit-content",
            width: "280px",
          }}
        >
          {/* Скелетон для заголовка бенефитов */}
          <Skeleton
            width="80%"
            height={24}
            baseColor="#f0f0f0"
            highlightColor="#e0e0e0"
            style={{ marginBottom: "24px" }}
          />

          {/* Скелетоны для списка бенефитов */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Skeleton
                  width={6}
                  height={6}
                  circle
                  baseColor="#f0f0f0"
                  highlightColor="#e0e0e0"
                  style={{ marginTop: "8px", flexShrink: 0 }}
                />
                <Skeleton
                  width="100%"
                  height={16}
                  baseColor="#f0f0f0"
                  highlightColor="#e0e0e0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
