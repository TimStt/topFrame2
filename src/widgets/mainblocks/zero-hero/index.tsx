"use client";

/**
 * @file: ZeroHero section
 * @description: Main hero section with title, background and feature cards
 * @dependencies: React, Swiper, SVG icons
 * @created: 2024-01-15
 */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Warning from "@/source/icons/warning.svg";
import World from "@/source/icons/world.svg";
import BgMain from "@/source/icons/bg-main.svg";

import "swiper/css";

interface ZeroHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const featureCards = [
  {
    id: 1,
    title: "Честность",
    description:
      "Основа наших работ — это правдивое отношение к клиентам. Мы всегда делаем только то что заявлено и в указанные сроки без дополнительных платежей.",
    icon: Warning,
  },
  {
    id: 2,
    title: "Открытость",
    description:
      "Мы готовы к диалогу и всегда открыты для новых предложений и идей наших клиентов.",
    icon: Warning,
  },
  {
    id: 3,
    title: "Независимость",
    description:
      "Мы работаем независимо и объективно, предоставляя честные решения.",
    icon: Warning,
  },
  {
    id: 4,
    title: "Экологичность",
    description:
      "Мы заботимся об окружающей среде и используем экологически чистые технологии.",
    icon: Warning,
  },
];

export const ZeroHero = () => {
  return (
    <section
      className="zero-hero"
      style={{
        backgroundImage: `url("/icons/bg-main.svg")`,
      }}
    >
      <div className="container">
        <div className="zero-hero_inner">
          <div className="zero-hero__text-content">
            <h1 className="zero-hero__title">
              Строим будущее <br />
              России вместе
            </h1>
            <p className="zero-hero__subtitle">
              Мы как Российская компания помогаем России строить полюса в новом
              многополярном мире
            </p>
            <button className="zero-hero__cta-btn">
              Присоединиться к команде
              <svg
                className="zero-hero__btn-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 1L15 8L8 15M15 8L1 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <World className="zero-hero__world-svg" />
        </div>
        <div className="zero-hero__features">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="zero-hero__swiper"
          >
            {featureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <SwiperSlide key={card.id} className="zero-hero__card-slide">
                  <label
                    className="zero-hero__feature-card"
                    htmlFor={card.id.toString()}
                  >
                    <div className="zero-hero__card-head">
                      <h3 className="zero-hero__card-title">{card.title}</h3>
                      <IconComponent />
                    </div>

                    <p className="zero-hero__card-description">
                      {card.description}
                    </p>
                    <input
                      type="checkbox"
                      className="visually-hidden"
                      id={card.id.toString()}
                    />
                  </label>
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
