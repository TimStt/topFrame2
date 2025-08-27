"use client";

/**
 * @file: HR Ecosystem section
 * @description: Section with HR ecosystem diagram
 * @dependencies: React
 * @created: 2024-01-15
 */
import React from "react";

import { useGetHome } from "@/entity/user/api/get-home";
import { useGetSpace } from "@/entity/user/api/get-space";
import { IApiSchemas } from "@/shared/api/schema";
import { URL_FILE_API } from "@/shared/constants/other";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import Image from "next/image";
import Link from "next/link";

import { SkeletonHREcosystemSection } from "./skeleton";

export const HREcosystemSection: React.FC = () => {
  const { isLoading, spaceCenter, spaceOuter } = useGetHome();

  if (isLoading) {
    return <SkeletonHREcosystemSection />;
  }
  const allSpace = [...(spaceCenter || []), ...(spaceOuter || [])];

  return (
    <section className={cls(`hr-ecosystem container`)}>
      <h2 className="hr-ecosystem__title hidden title-section">
        HR пространство TopFrame
      </h2>
      <div className="hr-ecosystem__wrapper">
        <div className="hr-ecosystem__circle">
          <Image
            src="/icons/circle.svg"
            alt="HR Ecosystem"
            width={335}
            height={335}
          />
          <h2 className="hr-ecosystem__title">HR пространство TopFrame</h2>
        </div>
      </div>

      {/* Внешний круг - дублируем элементы для непрерывного потока */}
      <div
        className="hr-ecosystem__elements"
        style={
          {
            "--size": "var(--sizeBigLine)",
            "--top": "var(--topBigLine)",
          } as React.CSSProperties
        }
      >
        {/* Первый набор элементов */}
        {spaceOuter?.concat(spaceOuter)?.map((element, index) => (
          <HRElement
            key={`outer-${element.slug}-${index}`}
            element={element}
            index={index}
            total={spaceOuter?.length * 2}
          />
        ))}
        {/* Второй набор элементов (дубликаты) */}
        {/* {spaceOuter?.map((element, index) => (
          <HRElement
            key={`outer-2-${element.slug}`}
            element={element}
            index={index}
            total={spaceOuter?.length}
            isDuplicate={true}
          />
        ))} */}
      </div>

      {/* Средний круг - дублируем элементы для непрерывного потока */}
      <div
        className="hr-ecosystem__elements"
        style={
          {
            "--size": "var(--sizeMiddleLine)",
            "--top": "var(--topMiddleLine)",
          } as React.CSSProperties
        }
      >
        {/* Сначала рендерим все оригинальные центральные элементы */}
        {spaceCenter?.concat(spaceCenter)?.map((element, index) => (
          <HRElement
            key={`center-original-${element.slug}-${index}`}
            element={element}
            index={index}
            total={spaceCenter?.length * 2}
            isDuplicate={false}
          />
        ))}
        {/* Затем рендерим все дубликаты центральных элементов */}
      </div>

      <div className="hr-ecosystem__elements all">
        {/* Сначала рендерим все оригинальные элементы */}
        {allSpace?.map((element, index) => (
          <HRElement
            key={`original-${element.slug}-${index}`}
            element={element}
            index={index}
            total={allSpace?.length}
            isDuplicate={false}
          />
        ))}
      </div>
    </section>
  );
};

interface HRElementProps {
  element: IApiSchemas["SpaceItemDto"];
  index: number;
  total: number;
  isDuplicate?: boolean;
}

const HRElement: React.FC<HRElementProps> = ({
  element,
  index,
  total,
  isDuplicate = false,
}) => {
  // Для дубликатов добавляем смещение на 180 градусов
  const baseAngle = index * (360 / total);
  const angle = isDuplicate
    ? baseAngle + (element.inCenter ? 180 : 180)
    : baseAngle;

  // Определяем тип круга на основе данных API
  const circleType = element.inCenter ? "inner" : "outer";

  return (
    <Link
      className={cls(`hr-ecosystem__element`)}
      href={PAGES_PATHS.HR_TOPFRAME(
        element.hasSeparatePage ? undefined : element.slug,
        element.hasSeparatePage ? element.slug : undefined
      )}
      title={`Читать о ${element.name} в HR пространстве TopFrame`}
      data-duplicate={isDuplicate}
      style={
        {
          "--angle": `${angle}deg`,
          "--translateX": `${
            {
              inner: "var(--radiusMiddleLine)",
              outer: "var(--radiusBigLine)",
            }[circleType]
          }`,
        } as React.CSSProperties
      }
    >
      <div className="hr-ecosystem__element-content">
        <div className="hr-ecosystem__element-icon">
          <Image
            src={URL_FILE_API + element.icon}
            alt={element.name}
            width={32}
            height={32}
          />
        </div>
        <h3 className="hr-ecosystem__element-title">{element.name}</h3>
      </div>
    </Link>
  );
};

export default HREcosystemSection;
