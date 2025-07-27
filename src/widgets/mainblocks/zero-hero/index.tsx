'use client'

/**
 * @file: ZeroHero section
 * @description: Main hero section with title, background and feature cards
 * @dependencies: React, Swiper, SVG icons
 * @created: 2024-01-15
 */
import React from 'react'

import { BACKGROUND_IMAGE_BLUE } from '@/shared/constants/other'
import { AccordionUI } from '@/shared/ui/accordion-ui'
import { ArrowIconUI } from '@/shared/ui/arrow-icon-ui'
import { ButtonUI } from '@/shared/ui/button-ui'
import BgMain from '@/source/icons/bg-main.svg'
import Line1 from '@/source/icons/line1.svg'
import Line2 from '@/source/icons/line2.svg'
import Line3 from '@/source/icons/line3.svg'
import Line4 from '@/source/icons/line4.svg'
import Line5 from '@/source/icons/line5.svg'
import Line6 from '@/source/icons/line6.svg'
import Line7 from '@/source/icons/line7.svg'
import Line8 from '@/source/icons/line8.svg'
import Line9 from '@/source/icons/line9.svg'
import Line10 from '@/source/icons/line10.svg'
import Warning from '@/source/icons/warning.svg'
import World from '@/source/icons/world.svg'
import IconWorld from '@/source/icons/world.svg'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { featureCards } from './feature-card.data'
import { sliderConfig } from './slider.config'
import { AccordionInfo } from './ui/accordion-info'

interface ZeroHeroProps {
  className?: string
  children?: React.ReactNode
}

export interface IFeatureCard {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export const ZeroHero = () => {
  return (
    <section
      className="zero-hero"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_BLUE})`,
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
              Мы как Российская компания помогаем России строить полюса в новом многополярном мире
            </p>
            <ButtonUI
              className="zero-hero__cta-btn"
              variant="secondary"
              size="medium"
              text="Присоединиться к команде"
            />
          </div>
          <div className="zero-hero__world">
            <Image src={'/icons/world.svg'} width={682} height={450} alt="world" />
            {/* Линии с анимацией - позиционирование как на фото */}
            <div className="zero-hero__world__lines">
              {/* Линия 1 - верхняя длинная дуга (Канада - Европа) */}
              <div className="zero-hero__world-line zero-hero__world-line--1">
                <Line1 className="glow-line" viewBox="0 0 300 285" />
              </div>

              {/* Линия 2 - короткая (Канада - Скандинавия) */}
              <div className="zero-hero__world-line zero-hero__world-line--2">
                <Line2 className="glow-line" viewBox="0 0 99 91" />
              </div>

              {/* Линия 3 - средняя (Канада - Россия) */}
              <div className="zero-hero__world-line zero-hero__world-line--3">
                <Line3 className="glow-line" viewBox="0 0 218 224" />
              </div>

              {/* Линия 4 - из России вниз (Россия - Индия) */}
              <div className="zero-hero__world-line zero-hero__world-line--4">
                <Line4 className="glow-line" viewBox="0 0 187 155" />
              </div>

              {/* Линия 5 - короткая горизонтальная (Африка - Ближний Восток) */}
              <div className="zero-hero__world-line zero-hero__world-line--5">
                <Line5 className="glow-line" viewBox="0 0 56 49" />
              </div>

              {/* Линия 6 - вертикальная (Европа - Африка) */}
              <div className="zero-hero__world-line zero-hero__world-line--6">
                <Line6 className="glow-line" viewBox="0 0 68 91" />
              </div>

              {/* Линия 7 - длинная вертикальная (Россия - Африка) */}
              <div className="zero-hero__world-line zero-hero__world-line--7">
                <Line7 className="glow-line" viewBox="0 0 74 169" />
              </div>

              {/* Линия 8 - короткая (Австралия - вверх) */}
              <div className="zero-hero__world-line zero-hero__world-line--8">
                <Line8 className="glow-line" viewBox="0 0 51 58" />
              </div>

              {/* Линия 9 -   средняя (Австралия - Азия) */}
              <div className="zero-hero__world-line zero-hero__world-line--9">
                <Line9 className="glow-line" viewBox="0 0 80 85" />
              </div>

              {/* Линия 10 - длинная (Австралия - Россия) */}
              <div className="zero-hero__world-line zero-hero__world-line--10">
                <Line10 className="glow-line" viewBox="0 0 140 183" />
              </div>
            </div>
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
          <Swiper className="zero-hero__swiper" {...sliderConfig}>
            {featureCards.map((card) => {
              return (
                <SwiperSlide key={card.id} className="zero-hero__card-slide">
                  <AccordionInfo card={card} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ZeroHero
