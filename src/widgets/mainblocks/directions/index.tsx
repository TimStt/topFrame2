"use client";

/**
 * @file: Directions section
 * @description: Section with HR directions and services
 * @dependencies: React
 * @created: 2024-01-15
 */
import React, { useState } from "react";

import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { ArrowIconUI } from "@/shared/ui/arrow-icon-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import Image from "next/image";

import FoundIcon from "@/source/icons/found.svg";

import {
  IDirectionButtons,
  IDirectionCards,
  directionsCardsData,
  directionsData,
} from "./directions.data";
import { DescriptionCollapseUI } from "@/shared/ui/description-collapse-ui";

export const Directions: React.FC = () => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  return (
    <section
      className="directions "
      style={{
        backgroundImage: `url("/icons/bg-main.svg")`,
      }}
    >
      <div className="directions__inner container">
        <div className="directions__header">
          <h2 className="directions__title title-section">Наши направления</h2>
          <p className="directions__subtitle subtitle">
            Широкий спектр профессиональных услуг <br /> для эффективного
            бизнеса
          </p>
        </div>
        <div className="directions__content">
          <div className="directions__list">
            {directionsData.map((direction) => (
              <button
                className={cls("directions__button", {
                  active: isSelected === direction.id,
                })}
                key={direction.id}
                onClick={() => setIsSelected(direction.id)}
              >
                <span className="directions__button-title">
                  {direction.title}
                </span>
                <ArrowIconUI />
              </button>
            ))}
          </div>
          <div className="directions__selected">
            {isSelected ? (
              <DirectionCard {...directionsCardsData[isSelected]} />
            ) : (
              <div className="directions__selected-empty">
                <FoundIcon />
                <span>
                  Наведите на направление <br /> для просмотра деталей
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const DirectionCard: React.FC<IDirectionCards> = ({
  id,
  title,
  description,
  image,
}) => {
  const { ref, className } = useAnimateOnScroll();
  return (
    <article
      className={cls("directions__card fade-in", className)}
      key={id}
      ref={ref}
    >
      <Image src={image} alt={title} width={480} height={240} />
      <div className="directions__card__text-container">
        <h4 className="directions__card-title">{title}</h4>
        <DescriptionCollapseUI
          className="directions__card-description"
          text={description}
          maxRows={4}
        />

        <ButtonUI
          className="directions__card-button"
          variant="primary"
          size="medium"
          hasArrow
        >
          Присоединиться к компании
        </ButtonUI>
        <ButtonUI
          className="directions__card-button"
          variant="secondary"
          size="medium"
          hasArrow
          fullWidth={false}
        >
          Подробнее
        </ButtonUI>
      </div>
    </article>
  );
};
