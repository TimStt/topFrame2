/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента ZeroHero
 * @created: 2025-01-15
 */
import React from "react";

import { BACKGROUND_IMAGE_BLUE } from "@/shared/constants/other";
import { AnimationEllipses } from "@/shared/ui/animation-ellipses-ui";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonSlider } from "./ui/slider/skeleton";

export const SkeletonZeroHero: React.FC = () => {
  return (
    <section
      className="zero-hero transform-ellipses bg-blue"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})` }}
      aria-busy
    >
      <AnimationEllipses className="zero-hero__animation-ellipses" length={3} />
      <div className="zero-hero_inner container">
        <div className="zero-hero__row" style={{ gap: 20 }}>
          {/* Левая колонка: заголовок, подзаголовок, кнопка */}
          <div className="zero-hero__text-content">
            <Skeleton
              height={56}
              width={520}
              style={{ marginBottom: 24, opacity: 0.5 }}
            />
            <Skeleton
              height={18}
              width={560}
              style={{ marginBottom: 12, opacity: 0.5 }}
            />
            <Skeleton
              height={18}
              width={540}
              style={{ marginBottom: 28, opacity: 0.5 }}
            />
            <Skeleton height={48} width={260} style={{ opacity: 0.5 }} />
          </div>

          {/* Правая колонка: карта мира (сохраняем пропорции контейнера) */}
          <div className="zero-hero__world">
            <div style={{ width: "100%", height: "100%" }}>
              <Skeleton
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
        </div>

        {/* Нижний блок: стрелки навигации и карточки фичей */}
        <div className="zero-hero__features">
          <div className="zero-hero__features-wrapper">
            {/* <Skeleton circle width={32} height={32} style={{ opacity: 0.5 }} />
            <Skeleton circle width={32} height={32} style={{ opacity: 0.5 }} /> */}
          </div>

          <SkeletonSlider />
        </div>
      </div>
    </section>
  );
};
