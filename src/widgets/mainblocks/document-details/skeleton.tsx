/**
 * @file: skeleton.tsx
 * @description: Скелетон контента страницы документа (без заголовка)
 * @dependencies: react-loading-skeleton
 * @created: 2025-08-08
 */
"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const DocumentDetailsSkeleton: React.FC = () => {
  return (
    <div className="policy__content container">
      {/* Пара вводных абзацев */}
      <Skeleton height={16} count={3} style={{ marginBottom: 8 }} />
      <Skeleton height={16} count={2} style={{ marginBottom: 16 }} />

      {/* Подзаголовок раздела */}
      <Skeleton height={22} width={280} style={{ margin: "20px 0 12px" }} />
      <Skeleton height={16} count={3} style={{ marginBottom: 8 }} />

      {/* Список пунктов */}
      <div style={{ marginTop: 16 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              marginBottom: 8,
            }}
          >
            <Skeleton width={12} height={12} circle />
            <Skeleton height={14} width="80%" />
          </div>
        ))}
      </div>

      {/* Ещё раздел */}
      <Skeleton height={22} width={320} style={{ margin: "24px 0 12px" }} />
      <Skeleton height={16} count={4} style={{ marginBottom: 8 }} />
    </div>
  );
};

export default DocumentDetailsSkeleton;
