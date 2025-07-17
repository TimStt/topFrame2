"use client";

/**
 * @file: ZeroHero section
 * @description: Main hero section with title, background and feature cards
 * @dependencies: React, Swiper, SVG icons
 * @created: 2024-01-15
 */
import React from "react";

import { AccordionUI } from "@/shared/ui/accordion-ui";
import { ArrowIconUI } from "@/shared/ui/arrow-icon-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import BgMain from "@/source/icons/bg-main.svg";
import Warning from "@/source/icons/warning.svg";
import World from "@/source/icons/world.svg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { featureCards } from "./feature-card.data";
import { sliderConfig } from "./slider.config";
import { AccordionInfo } from "./ui/accordion-info";

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
      className="zero-hero"
      style={{
        backgroundImage: `url("/icons/bg-main.svg")`,
      }}
    >
      <div className="zero-hero_inner container">
        <div className="zero-hero__row">
          <div className="zero-hero__text-content">
            <h1 className="zero-hero__title">
              Строим будущее <br />
              России вместе
            </h1>
            <p className="zero-hero__subtitle subtitle">
              Мы как Российская компания помогаем России строить полюса в новом
              многополярном мире
            </p>
            <ButtonUI
              className="zero-hero__cta-btn"
              variant="secondary"
              size="medium"
            >
              <span>Присоединиться к команде</span>
            </ButtonUI>
          </div>
          <Image
            className="zero-hero__world"
            src={"/icons/world.svg"}
            width="682"
            height="450"
            alt="world"
          />
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
          <Swiper className="zero-hero__swiper" {...sliderConfig}>
            {featureCards.map((card) => {
              return (
                <SwiperSlide key={card.id} className="zero-hero__card-slide">
                  <AccordionInfo card={card} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ZeroHero;
