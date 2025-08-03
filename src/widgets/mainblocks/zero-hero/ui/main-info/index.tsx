/**
 * @file: MainIn.tsx
 * @description: Компонент MainIn
 * @created: 2025-07-29
 */
'use client'

import React from 'react'

import { useAnimateOnScroll } from '@/shared/hooks/use-animate-on-scroll'
import { cls } from '@/shared/lib/cls'
import { ButtonUI } from '@/shared/ui/button-ui'

/**
 * @file: MainIn.tsx
 * @description: Компонент MainIn
 * @created: 2025-07-29
 */

export const MainInfo: React.FC = () => {
  const { ref: refTitle, isVisible, className } = useAnimateOnScroll()

  return (
    <>
      <h1 className={cls('zero-hero__title slide-down', className)} ref={refTitle}>
        Строим будущее <br />
        России вместе
      </h1>
      <p className={cls('zero-hero__subtitle subtitle slide-down', className)}>
        Мы как Российская компания помогаем России строить полюса в новом многополярном мире
      </p>
      <ButtonUI
        className={cls('zero-hero__cta-btn slide-down', className)}
        variant="secondary"
        size="medium"
        text="Присоединиться к команде"
        hasArrow
      />
    </>
  )
}
