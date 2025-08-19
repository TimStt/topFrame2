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

import {
  IHRElement,
  centralElement,
  hrEcosystemData,
} from "./hr-ecosystem.data";
import { SkeletonHREcosystemSection } from "./skeleton";

export const HREcosystemSection: React.FC = () => {
  const { ref, className } = useAnimateOnScroll();
  const { isLoading, spaceCenter, spaceOuter } = useGetHome();

  if (isLoading) {
    return <SkeletonHREcosystemSection />;
  }
  const allSpace = [...(spaceCenter || []), ...(spaceOuter || [])];

  return (
    <section className={cls(`hr-ecosystem container`)} ref={ref}>
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
      <div
        className="hr-ecosystem__elements"
        style={
          {
            "--size": "var(--sizeBigLine)",
            "--top": "var(--topBigLine)",
          } as React.CSSProperties
        }
      >
        {spaceOuter?.map((element, index) => (
          <HRElement
            key={element.slug}
            element={element}
            index={index}
            total={spaceOuter?.length}
          />
        ))}
      </div>
      <div
        className="hr-ecosystem__elements"
        style={
          {
            "--size": "var(--sizeMiddleLine)",
            "--top": "var(--topMiddleLine)",
          } as React.CSSProperties
        }
      >
        {spaceCenter?.map((element, index) => (
          <HRElement
            key={element.slug}
            element={element}
            index={index}
            total={spaceCenter?.length}
          />
        ))}
      </div>

      <div className="hr-ecosystem__elements all">
        {allSpace?.map((element, index) => (
          <HRElement
            key={element.slug}
            element={element}
            index={index}
            total={hrEcosystemData.length}
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
}

const HRElement: React.FC<HRElementProps> = ({ element, index, total }) => {
  const angle = index * (360 / total);
  return (
    <Link
      className={cls(`hr-ecosystem__element`)}
      href={PAGES_PATHS.HR_TOPFRAME(
        element.hasSeparatePage ? undefined : element.slug,
        element.hasSeparatePage ? element.slug : undefined
      )}
      title={`Читать о ${element.name} в HR пространстве TopFrame`}
      style={
        {
          "--angle": `${angle}deg`,
          "--translateX": `${
            {
              inner: "var(--radiusMiddleLine)",
              outer: "var(--radiusBigLine)",
            }[element.inCenter ? "inner" : "outer"]
          }`,
        } as React.CSSProperties
      }
    >
      <div className="hr-ecosystem__element-content">
        <div>
          <Image
            className="hr-ecosystem__element-icon"
            src={URL_FILE_API + element.icon}
            alt={element.name}
            width={32}
            height={32}
          />
        </div>
        <h4 className="hr-ecosystem__element-title">{element.name}</h4>
      </div>
    </Link>
  );
};

export default HREcosystemSection;
