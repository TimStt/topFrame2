/**
 * @file: Slid.tsx
 * @description: Компонент Slid
 * @created: 2025-07-29
 */
"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { sliderConfig } from "../../slider.config";
import { featureCards } from "../../feature-card.data";
import { AccordionInfo } from "../accordion-info";

export const Slider: React.FC = () => {
  return (
    <Swiper className="zero-hero__swiper" {...sliderConfig}>
      {featureCards.map((card) => {
        return (
          <SwiperSlide key={card.id} className="zero-hero__card-slide">
            <AccordionInfo card={card} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
