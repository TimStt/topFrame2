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
  return (
    <>
      <h1 className={"zero-hero__title"}>Строим будущее России вместе</h1>
      <p className={"zero-hero__subtitle subtitle"}>
        Мы как Российская компания помогаем России строить полюс в новом
        многополярном мире.
      </p>
      <ButtonUI
        className={"zero-hero__cta-btn"}
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
