'use client'

/**
 * @file: HR Ecosystem section
 * @description: Section with HR ecosystem diagram
 * @dependencies: React
 * @created: 2024-01-15
 */
import React from 'react'

import { useAnimateOnScroll } from '@/shared/hooks/use-animate-on-scroll'
import { cls } from '@/shared/lib/cls'
import Image from 'next/image'
import Link from 'next/link'

import { IHRElement, centralElement, hrEcosystemData } from './hr-ecosystem.data'

export const HREcosystemSection: React.FC = () => {
  const { ref, className } = useAnimateOnScroll()

  const outerElements = hrEcosystemData.filter((element) => element.layer === 'outer')
  const innerElements = hrEcosystemData.filter((element) => element.layer === 'inner')

  return (
    <section className={cls(`hr-ecosystem container`)} ref={ref}>
      <h2 className="hr-ecosystem__title hidden title-section">HR пространство TopFrame</h2>
      <div className="hr-ecosystem__wrapper">
        <div className="hr-ecosystem__circle">
          <Image src="/icons/circle.svg" alt="HR Ecosystem" width={335} height={335} />
          <h2 className="hr-ecosystem__title">HR пространство TopFrame</h2>
        </div>
      </div>
      <div
        className="hr-ecosystem__elements"
        style={
          { '--size': 'var(--sizeBigLine)', '--top': 'var(--topBigLine)' } as React.CSSProperties
        }
      >
        {outerElements.map((element, index) => (
          <HRElement
            key={element.id}
            element={element}
            index={index}
            total={hrEcosystemData.length}
          />
        ))}
      </div>
      <div
        className="hr-ecosystem__elements"
        style={
          {
            '--size': 'var(--sizeMiddleLine)',
            '--top': 'var(--topMiddleLine)',
          } as React.CSSProperties
        }
      >
        {innerElements.map((element, index) => (
          <HRElement
            key={element.id}
            element={element}
            index={index}
            total={innerElements.length}
          />
        ))}
      </div>

      <div className="hr-ecosystem__elements all">
        {hrEcosystemData.map((element, index) => (
          <HRElement
            key={element.id}
            element={element}
            index={index}
            total={hrEcosystemData.length}
          />
        ))}
      </div>
    </section>
  )
}

interface HRElementProps {
  element: IHRElement
  index: number
  total: number
}

const HRElement: React.FC<HRElementProps> = ({ element, index, total }) => {
  const angle = index * (360 / total)
  return (
    <Link
      className={cls(`hr-ecosystem__element`)}
      href={element.link}
      title={`Читать о ${element.title} в HR пространстве TopFrame`}
      style={
        {
          '--angle': `${angle}deg`,
          '--translateX': `${
            {
              inner: 'var(--radiusMiddleLine)',
              outer: 'var(--radiusBigLine)',
            }[element.layer]
          }`,
        } as React.CSSProperties
      }
    >
      <div className="hr-ecosystem__element-content">
        <span className="hr-ecosystem__element-icon">{element.icon}</span>
        <h4 className="hr-ecosystem__element-title">{element.title}</h4>
      </div>
    </Link>
  )
}

export default HREcosystemSection
