'use client'

/**
 * @file: Directions section
 * @description: Section with HR directions and services
 * @dependencies: React
 * @created: 2024-01-15
 */
import React, { useState } from 'react'

import { BACKGROUND_IMAGE_BLUE } from '@/shared/constants/other'
import { useAnimateOnScroll } from '@/shared/hooks/use-animate-on-scroll'
import { cls } from '@/shared/lib/cls'
import { AnimationEllipses } from '@/shared/ui/animation-ellipses-ui'
import { ArrowIconUI } from '@/shared/ui/arrow-icon-ui'
import { ButtonUI } from '@/shared/ui/button-ui'
import { DescriptionCollapseUI } from '@/shared/ui/description-collapse-ui'
import FoundIcon from '@/source/icons/found.svg'
import Image from 'next/image'

import {
  IDirectionButtons,
  IDirectionCards,
  directionsCardsData,
  directionsData,
} from './directions.data'

export const Directions: React.FC = () => {
  const [isSelected, setIsSelected] = useState<number | null>(null)

  const selectedCard = directionsCardsData.find((card) => card.id === isSelected)

  return (
    <section
      className="directions transform-ellipses"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})`,
      }}
    >
      <AnimationEllipses className="directions__animation-ellipses" length={2} />
      <div className="directions__inner container">
        <div className="directions__header">
          <h2 className="directions__title title-section">Наши направления</h2>
          <p className="directions__subtitle subtitle">
            Широкий спектр профессиональных услуг <br /> для эффективного бизнеса
          </p>
        </div>
        <div className="directions__content">
          <div className="directions__list">
            {directionsData.map((direction) => (
              <button
                className={cls('directions__button', {
                  active: isSelected === direction.idCard,
                })}
                key={direction.id}
                onClick={() => setIsSelected(direction.idCard)}
                onMouseEnter={() => setIsSelected(direction.idCard)}
              >
                <span className="directions__button-title">{direction.title}</span>
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
  )
}

export const DirectionCard: React.FC<IDirectionCards | undefined> = (card) => {
  const { ref, className } = useAnimateOnScroll()

  if (!card) return null

  return (
    <article className={cls('directions__card fade-in', className)} key={card?.id} ref={ref}>
      <Image src={card?.image || ''} alt={card?.title || ''} width={480} height={240} />
      <div className="directions__card__text-container">
        <h4 className="directions__card-title">{card?.title}</h4>
        <p className="directions__card-description">{card?.description || ''}</p>

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
        />
      </div>
    </article>
  )
}
