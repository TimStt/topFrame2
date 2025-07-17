"use client";

/**
 * @file: HR Ecosystem section
 * @description: Section with HR ecosystem diagram
 * @dependencies: React
 * @created: 2024-01-15
 */
import React from "react";

import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import Image from "next/image";

import {
  IHRElement,
  centralElement,
  hrEcosystemData,
} from "./hr-ecosystem.data";

export const HREcosystemSection: React.FC = () => {
  return (
    <section className="hr-ecosystem container">
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
      <div className="hr-ecosystem__elements">
        <div className="hr-ecosystem__elements__wrapper">
          {hrEcosystemData.map((element) => (
            <HRElement key={element.id} element={element} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface HRElementProps {
  element: IHRElement;
}

const HRElement: React.FC<HRElementProps> = ({ element }) => {
  const { ref, className } = useAnimateOnScroll();
  return (
    <div className={cls(`hr-ecosystem__element fade-in`, className)} ref={ref}>
      <span className="hr-ecosystem__element-icon">{element.icon}</span>
      <h4 className="hr-ecosystem__element-title">{element.title}</h4>
    </div>
  );
};

export default HREcosystemSection;
