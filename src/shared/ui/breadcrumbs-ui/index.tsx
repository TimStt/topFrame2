import React from 'react'

import { cls } from '@/shared/lib/cls'
import Link from 'next/link'

export type IBreadcrumbItem = {
  /** Текст элемента */
  label: string
  /** Ссылка (если не указана, элемент будет неактивным) */
  href?: string
}

export type IBreadcrumbs = {
  /** Массив элементов хлебных крошек */
  items: IBreadcrumbItem[]
  /** Вариант стиля хлебных крошек */

  /** Разделитель между элементами */
  separator?: React.ReactNode
  /** Дополнительные классы */
  className?: string
}

export const BreadcrumbsUI: React.FC<IBreadcrumbs> = ({ items, separator = '/', className }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav className={cls('breadcrumbs', className)} aria-label="Хлебные крошки">
      <div className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isClickable = item.href && !isLast

          return (
            <span key={index} className="breadcrumbs__list-item">
              {isClickable ? (
                <Link href={item.href!} className="breadcrumbs__item breadcrumbs__item--clickable">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cls('breadcrumbs__item', {
                    'breadcrumbs__item--active': isLast,
                  })}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="breadcrumbs__separator" aria-hidden="true">
                  {' ' + separator + ' '}
                </span>
              )}
            </span>
          )
        })}
      </div>
    </nav>
  )
}
