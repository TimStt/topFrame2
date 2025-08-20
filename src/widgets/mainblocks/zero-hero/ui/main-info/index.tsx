/**
 * @file: MainIn.tsx
 * @description: Компонент MainIn
 * @created: 2025-07-29
 */
"use client";

import React from "react";

import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";

/**
 * @file: MainIn.tsx
 * @description: Компонент MainIn
 * @created: 2025-07-29
 */

interface MainInfoProps {
  aboutUs?: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export const MainInfo = () => {
  const { ref: refTitle, isVisible, className } = useAnimateOnScroll();

  return (
    <>
      <h1
        className={cls("zero-hero__title slide-down", className)}
        ref={refTitle}
      >
        Строим будущее России вместе
      </h1>
      <p className={cls("zero-hero__subtitle subtitle slide-down", className)}>
        Мы как Российская компания помогаем России строить полюса в новом
        многополярном мире
      </p>
      <ButtonUI
        className={cls("zero-hero__cta-btn slide-down", className)}
        variant="secondary"
        size="medium"
        text="Присоединиться к команде"
        hasArrow
        as="a"
        href={PAGES_PATHS.VACANCIES}
      />
    </>
  );
};
