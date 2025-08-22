/**
 * @file: Slid.tsx
 * @description: Компонент Slid
 * @created: 2025-07-29
 */
"use client";

import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";

import { sliderConfig } from "../../slider.config";
import { AccordionInfo } from "../accordion-info";
import { useGetHome } from "@/entity/user/api/get-home";

/**
 * @file: Slid.tsx
 * @description: Компонент Slid
 * @created: 2025-07-29
 */

const Slider: React.FC = () => {
  const swiper = useRef<SwiperRef>(null);

  const handleStopAutoplay = () => {
    swiper.current?.swiper.autoplay.stop();
  };

  const handleStartAutoplay = () => {
    swiper.current?.swiper.autoplay.start();
  };

  const { aboutUs, isLoading } = useGetHome();

  return (
    <Swiper className="zero-hero__swiper" {...sliderConfig} ref={swiper}>
      {aboutUs?.map((card) => {
        return (
          <SwiperSlide
            key={card.id}
            className="zero-hero__card-slide"
            onClick={handleStopAutoplay}
            onMouseEnter={handleStopAutoplay}
            onMouseLeave={handleStartAutoplay}
          >
            <AccordionInfo card={card} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
