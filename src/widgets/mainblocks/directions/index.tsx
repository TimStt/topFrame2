"use client";

/**
 * @file: Directions section
 * @description: Section with HR directions and services
 * @dependencies: React
 * @created: 2024-01-15
 */
"use client";
import React, { useState } from "react";

import { BACKGROUND_IMAGE_BLUE, URL_FILE_API } from "@/shared/constants/other";
import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { AnimationEllipses } from "@/shared/ui/animation-ellipses-ui";
import { ArrowIconUI } from "@/shared/ui/arrow-icon-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import FoundIcon from "@/source/icons/found.svg";
import Image from "next/image";
import { useGetHome } from "@/entity/user/api/get-home";
import { SkeletonDirections } from "./skeleton";

import {
  IDirectionButtons,
  IDirectionCards,
  directionsCardsData,
  directionsData,
} from "./directions.data";
import { IApiSchemas } from "@/shared/api/schema";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";

export const Directions: React.FC = () => {
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const { directions, isLoading } = useGetHome();

  if (isLoading) {
    return <SkeletonDirections />;
  }

  const selectedCard = directions?.find((card) => card.slug === isSelected);

  return (
    <section
      className="directions transform-ellipses"
      id="directions"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})`,
      }}
    >
      <AnimationEllipses
        className="directions__animation-ellipses"
        length={2}
      />
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
            {directions?.map((direction) => (
              <button
                className={cls("directions__button", {
                  active: isSelected === direction.slug,
                })}
                key={direction.slug}
                onClick={() => setIsSelected(direction.slug)}
                onMouseEnter={() => setIsSelected(direction.slug)}
              >
                <span className="directions__button-title">
                  {direction.title}
                </span>
                <ArrowIconUI />
              </button>
            ))}
          </div>
          <div className="directions__selected">
            {selectedCard ? (
              <DirectionCard {...selectedCard} />
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

export const DirectionCard: React.FC<
  IApiSchemas["DirectionDto"] | undefined
> = (card) => {
  const { ref, className } = useAnimateOnScroll();

  if (!card) return null;

  return (
    <article
      className={cls("directions__card fade-in", className)}
      key={card?.slug}
      ref={ref}
    >
      <Image
        src={URL_FILE_API + card?.image || ""}
        alt={card?.title || ""}
        width={480}
        height={240}
      />
      <div className="directions__card__text-container">
        <h4 className="directions__card-title">{card?.title}</h4>
        <p className="directions__card-description">
          {card?.description || ""}
        </p>

        <ButtonUI
          className="directions__card-button"
          variant="primary"
          size="medium"
          hasArrow
          text="Присоединиться к компании"
        />
        <ButtonUI
          className="directions__card-button"
          variant="secondary"
          size="medium"
          hasArrow
          fullWidth={false}
          text="Подробнее"
          href={PAGES_PATHS.DIRECTIONS(card?.link?.slug || "")}
          as="a"
        />
      </div>
    </article>
  );
};
