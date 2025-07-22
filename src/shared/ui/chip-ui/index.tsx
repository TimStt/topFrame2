import React from 'react'

import { cls } from '@/shared/lib/cls'

interface IChip {
  as?: React.ElementType
  children?: React.ReactNode
  text: string
  className?: string
}

export const ChipUI = ({ as, text, children, className }: IChip) => {
  const DEFAULT_ELEMENT = 'div'
  const Element: React.ElementType = as || DEFAULT_ELEMENT

  return (
    <Element className={cls('chip', className)}>
      <span>{text}</span>
      {children}
    </Element>
  )
}
