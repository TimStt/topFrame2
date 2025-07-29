/**
 * @file: ZeroHero section
 * @description: Main hero section with title, background and feature cards
 * @dependencies: React, Swiper, SVG icons
 * @created: 2024-01-15
 */
import React from "react";

import { BACKGROUND_IMAGE_BLUE } from "@/shared/constants/other";
import { AccordionUI } from "@/shared/ui/accordion-ui";
import { ArrowIconUI } from "@/shared/ui/arrow-icon-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import BgMain from "@/source/icons/bg-main.svg";

import { WorldIconUI } from "@/shared/ui/world-icon-ui";
import { AnimationEllipses } from "@/shared/ui/animation-ellipses-ui";
import { MainInfo } from "./ui/main-info";
import { Slider } from "./ui/slider";

interface ZeroHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IFeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ZeroHero = () => {
  return (
    <section
      className="zero-hero transform-ellipses"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})`,
      }}
    >
      <AnimationEllipses className="zero-hero__animation-ellipses" length={3} />
      <div className="zero-hero_inner container">
        <div className="zero-hero__row">
          <div className="zero-hero__text-content">
            <MainInfo />
          </div>
          <div className="zero-hero__world">
            <WorldIconUI />
          </div>
        </div>
        <div className="zero-hero__features">
          <div className="zero-hero__features-wrapper">
            <div className="swiper-button-prev zero-hero__nav-prev">
              <ArrowIconUI />
            </div>
            <div className="swiper-button-next zero-hero__nav-next">
              <ArrowIconUI />
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default ZeroHero;
