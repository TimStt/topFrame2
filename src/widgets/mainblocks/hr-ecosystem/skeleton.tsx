/**
 * @file: skeleton.tsx
 * @description: Скелетон для компонента HREcosystemSection
 * @created: 2025-01-15
 */
import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const OUTER_COUNT = 8
const INNER_COUNT = 6
const ALL_COUNT = OUTER_COUNT + INNER_COUNT

export const SkeletonHREcosystemSection: React.FC = () => {
  const getAngle = (index: number, total: number) => index * (360 / total)

  return (
    <section className="hr-ecosystem container" aria-busy>
      {/* Заголовок для мобильной вёрстки (как в реальном компоненте) */}
      <h2 className="hr-ecosystem__title hidden title-section">
        <Skeleton height={32} width={280} style={{ opacity: 0.5 }} />
      </h2>

      {/* Центральный круг с заголовком внутри */}
      <div className="hr-ecosystem__wrapper">
        <div className="hr-ecosystem__circle">
          <Skeleton width={335} height={335} style={{ borderRadius: '50%', opacity: 0.5 }} />
          <h2 className="hr-ecosystem__title">
            <Skeleton height={28} width={240} style={{ marginTop: 20, opacity: 0.5 }} />
          </h2>
        </div>
      </div>

      {/* Внешнее кольцо элементов */}
      <div
        className="hr-ecosystem__elements"
        style={
          {
            '--size': 'var(--sizeBigLine)',
            '--top': 'var(--topBigLine)',
          } as React.CSSProperties
        }
      >
        {Array.from({ length: OUTER_COUNT }).map((_, index) => (
          <div
            key={`outer-${index}`}
            className="hr-ecosystem__element"
            style={
              {
                '--angle': `${getAngle(index, OUTER_COUNT)}deg`,
                '--translateX': 'var(--radiusBigLine)',
              } as React.CSSProperties
            }
          >
            <div className="hr-ecosystem__element-content">
              <span className="hr-ecosystem__element-icon">
                <Skeleton circle width={36} height={36} style={{ opacity: 0.5 }} />
              </span>
              <h4 className="hr-ecosystem__element-title">
                <Skeleton height={16} width={100} style={{ opacity: 0.5 }} />
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Внутреннее кольцо элементов */}
      <div
        className="hr-ecosystem__elements"
        style={
          {
            '--size': 'var(--sizeMiddleLine)',
            '--top': 'var(--topMiddleLine)',
          } as React.CSSProperties
        }
      >
        {Array.from({ length: INNER_COUNT }).map((_, index) => (
          <div
            key={`inner-${index}`}
            className="hr-ecosystem__element"
            style={
              {
                '--angle': `${getAngle(index, INNER_COUNT)}deg`,
                '--translateX': 'var(--radiusMiddleLine)',
              } as React.CSSProperties
            }
          >
            <div className="hr-ecosystem__element-content">
              <span className="hr-ecosystem__element-icon">
                <Skeleton circle width={36} height={36} style={{ opacity: 0.5 }} />
              </span>
              <h4 className="hr-ecosystem__element-title">
                <Skeleton height={16} width={100} style={{ opacity: 0.5 }} />
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Мобильная сетка (отображается через модификатор .all в CSS) */}
      <div className="hr-ecosystem__elements all">
        {Array.from({ length: ALL_COUNT }).map((_, index) => (
          <div key={`all-${index}`} className="hr-ecosystem__element">
            <div className="hr-ecosystem__element-content">
              <span className="hr-ecosystem__element-icon">
                <Skeleton circle width={36} height={36} style={{ opacity: 0.5 }} />
              </span>
              <h4 className="hr-ecosystem__element-title">
                <Skeleton height={16} width={120} style={{ opacity: 0.5 }} />
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
