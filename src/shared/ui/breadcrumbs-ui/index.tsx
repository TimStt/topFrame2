"use client";
import React from "react";

import { cls } from "@/shared/lib/cls";
import Link from "next/link";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { useGetVacancy } from "@/entity/vacancy/api/get-vacancy";
import Skeleton from "react-loading-skeleton";
import { IBreadcrumbItem, useBreadcrumb } from "@/shared/hooks/use-breadcrumb";
import { useGetDirection } from "@/entity/user/api/get-direction";

export type IBreadcrumbs = {
  /** Массив элементов хлебных крошек */

  /** Вариант стиля хлебных крошек */

  /** Дополнительные классы */
  className?: string;
};

export const DynamicDirectionTitle = ({ direction }: { direction: string }) => {
  const queryDirection = useGetDirection(direction);
  const title = queryDirection.directionInfo?.title;

  if (queryDirection.isLoading)
    return (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} width={"60px"} height={"15px"} />
        ))}
      </>
    );
  return (
    <>
      <Link href={PAGES_PATHS.HOME}>Главная</Link>
      <Link href={PAGES_PATHS.DIRECTIONS(":direction")}>
        Наши направления
      </Link>{" "}
      <span>{title}</span>
    </>
  );
};

export const DynamicProductTitle = ({ slug }: { slug: string }) => {
  const queryVacancy = useGetVacancy(slug);
  const title = queryVacancy.vacancy?.name;

  if (queryVacancy.isLoading)
    return (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            width={"60px"}
            height={"15px"}
            style={{ margin: "0 10px 0 0" }}
          />
        ))}
      </>
    );
  return (
    <>
      {" "}
      <Link href={PAGES_PATHS.HOME}>Главная</Link>
      <Link href={PAGES_PATHS.VACANCIES}>Вакансии</Link> <span>{title}</span>
    </>
  );
};

export const PATHS_BREADCRUMB: IBreadcrumbItem[] = [
  {
    path: PAGES_PATHS.VACANCIES,
    title: (
      <>
        {" "}
        <Link href={PAGES_PATHS.HOME}>Главная</Link> <span>Вакансии</span>
      </>
    ),
  },

  {
    path: PAGES_PATHS.VACANCY_PAGE(":slug"),
    title: (params: { slug: string }) => (
      <DynamicProductTitle slug={params.slug} />
    ),
  },

  {
    path: PAGES_PATHS.PROFILE,
    title: (
      <>
        {" "}
        <Link href={PAGES_PATHS.HOME}>Главная</Link> <span>Личный кабинет</span>
      </>
    ),
  },

  {
    path: PAGES_PATHS.POLICY,
    title: (
      <>
        {" "}
        <Link href={PAGES_PATHS.HOME}>Главная</Link>{" "}
        <span>Политика конфиденциальности</span>
      </>
    ),
  },

  {
    path: PAGES_PATHS.FREELANCE,
    title: (
      <>
        {" "}
        <Link href={PAGES_PATHS.HOME}>Главная</Link> <span>Фриланс</span>
      </>
    ),
  },

  {
    path: PAGES_PATHS.HR_TOPFRAME,
    title: (
      <>
        {" "}
        <Link href={PAGES_PATHS.HOME}>Главная</Link> <span>HR TopFrame</span>
      </>
    ),
  },

  {
    path: PAGES_PATHS.DIRECTIONS(":direction"),
    title: (params: { slug: string }) => (
      <DynamicDirectionTitle direction={params.slug} />
    ),
  },
];

export const BreadcrumbsUI: React.FC<IBreadcrumbs> = ({ className }) => {
  const { breadcrumbsItems } = useBreadcrumb(PATHS_BREADCRUMB);

  if (!breadcrumbsItems) {
    return null;
  }

  return (
    <nav className={cls("breadcrumbs", className)} aria-label="Хлебные крошки">
      <div className="breadcrumbs__list">{breadcrumbsItems}</div>
    </nav>
  );
};
