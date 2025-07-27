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
            {/* Линии с анимацией - позиционирование как на фото */}
            <svg
              className="zero-hero__world__lines"
              viewBox="0 0 682 450"
              preserveAspectRatio="xMinYMin meet"
              fill="none"
            >
              <image href={'/icons/world.svg'} />

              <defs>
                <filter
                  id="circle-filter"
                  x="0"
                  y="153"
                  width="16"
                  height="16"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_298_5943" />
                </filter>
                <radialGradient
                  id="circle-gradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8 161) rotate(90) scale(6)"
                >
                  <stop stop-color="#FDFDFD" />
                  <stop offset="1" stop-color="#F7FFCD" />
                </radialGradient>
              </defs>

              <path
                d="M297 131C248 59.5 109.219 68.8051 15.0002 157.822"
                preserveAspectRatio="xMinYMin meet"
                stroke="#FDFDFD"
              />
              <g filter="url(#circle-filter)">
                <circle cx="17" cy="154.822" r="9" fill="url(#circle-gradient)" />
              </g>

              {/* Линия 2 - короткая (Канада - Скандинавия) */}

              <path d="M98.0001 43C79.0104 33.7913 34.0247 21.899 6.00011 48" stroke="#FDFDFD" />
              <g filter="url(#circle-filter)">
                <circle cx="8" cy="45" r="6" fill="url(#circle-gradient)" />
              </g>

              {/* Линия 3 - средняя (Канада -     Россия) */}

              <path d="M217.5 74.5C175.5 59.5 100.219 60.2093 6.00027 149.226" stroke="#FDFDFD" />
              <g filter="url(#circle-filter)">
                <circle cx="8" cy="146.226" r="6" fill="url(#circle-gradient)" />
              </g>

              {/* Линия 4 - из России вниз (Россия - Индия) */}
              <g className="zero-hero__world-line zero-hero__world-line--4">
                <path d="M186 1C135.605 11.2749 31.2508 53.2598 17 139" stroke="#FDFDFD" />
                <g filter="url(#circle-filter)">
                  <circle cx="17" cy="138" r="9" fill="url(#circle-gradient)" />
                </g>
              </g>

              {/* Линия 5 - короткая горизонтальная (Африка - Ближний Восток) */}
              <g className="zero-hero__world-line zero-hero__world-line--5">
                <path d="M7.40635 34.5154C13.3645 25.3829 36.5 15 56 15" stroke="#FDFDFD" />
                <g filter="url(#circle-filter)">
                  <circle cx="8.66431" cy="33" r="6" fill="url(#circle-gradient)" />
                </g>
              </g>

              {/* Линия 6 - вертикальная (Европа - Африка) */}
              <g className="zero-hero__world-line zero-hero__world-line--6">
                <path d="M68 1C42.0002 1 13.0002 38.5 17 74.5" stroke="#FDFDFD" />
                <g filter="url(#circle-filter)">
                  <circle cx="17" cy="73.5" r="9" fill="url(#circle-gradient)" />
                </g>
              </g>

              {/* Линия 7 - длинная вертикальная (Россия - Африка) */}
              <g className="zero-hero__world-line zero-hero__world-line--7">
                <path d="M73 0.5C29.5 40 3.99997 108.5 8.00005 162" stroke="#FDFDFD" />
                <g filter="url(#filter0_f_298_5943)">
                  <circle cx="8" cy="161" r="6" fill="url(#paint0_radial_298_5943)" />
                </g>
              </g>

              {/* Линия 8 - короткая (Австралия - вверх) */}
              <g className="zero-hero__world-line zero-hero__world-line--8">
                <path
                  d="M24.4064 51.5154C30.3646 42.3829 39.0397 19.4943 26.0745 0.99999"
                  stroke="#FDFDFD"
                />
                <g filter="url(#circle-filter)">
                  <circle cx="25.6643" cy="50" r="6" fill="url(#circle-gradient)" />
                </g>
              </g>

              {/* Линия 9 -   средняя (Австралия - Азия) */}
              <g className="zero-hero__world-line zero-hero__world-line--9">
                <path
                  d="M29.742 78.5154C42.3457 62.5285 64.0424 24.6437 50 0.999998"
                  stroke="#FDFDFD"
                />
                <g filter="url(#circle-filter)">
                  <circle cx="31" cy="77" r="6" fill="url(#circle-gradient)" />
                </g>
              </g>

              {/* Линия 10 - длинная (Австралия - Россия) */}
              <g className="zero-hero__world-line zero-hero__world-line--10">
                <path d="M94 167C100.62 124.603 100.287 32.0477 46 0.999992" stroke="#FDFDFD" />
                <g filter="url(#circle-filter)">
                  <circle cx="94" cy="166" r="9" fill="url(#circle-gradient)" />
                </g>
              </g>
            </svg>
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
