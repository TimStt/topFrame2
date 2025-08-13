import React from "react";
import { ButtonUI } from "@/shared/ui/button-ui";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "404 | TopFrame",
  description: "404 | TopFrame",
};

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <span className="not-found__text">Страницы не найдена</span>
      <ButtonUI
        className="not-found__btn"
        variant="secondary"
        size="medium"
        as="a"
        hasArrow
        href={PAGES_PATHS.HOME}
      >
        Вернуться на главную
      </ButtonUI>
    </main>
  );
}
