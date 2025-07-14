'use client'

/**
 * @file: ZeroHero section
 * @description: Main hero section with title, background and feature cards
 * @dependencies: React, Swiper, SVG icons
 * @created: 2024-01-15
 */
import React from 'react'

import { ButtonUI } from '@/shared/ui/button-ui'
import ArrowIcon from '@/source/icons/arrow.svg'
import BgMain from '@/source/icons/bg-main.svg'
import Warning from '@/source/icons/warning.svg'
import World from '@/source/icons/world.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { sliderConfig } from './slider.config'

interface ZeroHeroProps {
  className?: string
  children?: React.ReactNode
}

const featureCards = [
  {
    id: 1,
    title: 'Честность',
    description:
      'Основа наших работ — это правдивое отношение к клиентам. Мы всегда делаем только то что заявлено и в указанные сроки без дополнительных платежей.',
    icon: Warning,
  },
  {
    id: 2,
    title: 'Открытость',
    description:
      'Мы готовы к диалогу и всегда открыты для новых предложений и идей наших клиентов.',
    icon: Warning,
  },
  {
    id: 3,
    title: 'Независимость',
    description: 'Мы работаем независимо и объективно, предоставляя честные решения.',
    icon: Warning,
  },
  {
    id: 4,
    title: 'Экологичность',
    description: 'Мы заботимся об окружающей среде и используем экологически чистые технологии.',
    icon: Warning,
  },
]

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
              Мы как Российская компания помогаем России строить полюса в новом многополярном мире
            </p>
            <ButtonUI
              className="zero-hero__cta-btn"
              variant="secondary"
              size="medium"
              rightIcon={<ArrowIcon />}
            >
              <span>Присоединиться к команде</span>
            </ButtonUI>
          </div>
          <World className="zero-hero__world-svg" />
        </div>
        <div className="zero-hero__features">
          <div className="zero-hero__features-wrapper">
            <div className="swiper-button-prev zero-hero__nav-prev">
              <ArrowIcon />
            </div>
            <div className="swiper-button-next zero-hero__nav-next">
              <ArrowIcon />
            </div>
          </div>
          <Swiper className="zero-hero__swiper" {...sliderConfig}>
            {featureCards.map((card) => {
              const IconComponent = card.icon
              return (
                <SwiperSlide key={card.id} className="zero-hero__card-slide">
                  <label className="zero-hero__feature-card" htmlFor={card.id.toString()}>
                    <div className="zero-hero__card-head">
                      <h3 className="zero-hero__card-title">{card.title}</h3>
                      <IconComponent />
                    </div>

                    <p className="zero-hero__card-description">{card.description}</p>
                    <input type="checkbox" className="visually-hidden" id={card.id.toString()} />
                  </label>
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
