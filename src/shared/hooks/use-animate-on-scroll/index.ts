import { useCallback, useState } from 'react'

import { useIntersection } from '../use-intersection'

/**
 * @description Hook для анимации элементов при прокрутке
 * @param options - Опции для хука
 * @returns Объект с референсом, видимостью и классом анимации
 */
interface UseAnimateOnScrollOptions extends IntersectionObserverInit {}

export const useAnimateOnScroll = <Element extends HTMLElement>(
  options: UseAnimateOnScrollOptions = {},
) => {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersection = useCallback(() => {
    setIsVisible(true)
  }, [])

  const ref = useIntersection<Element>(handleIntersection, {
    threshold,
    rootMargin,
  })

  return {
    ref,
    isVisible,
    className: isVisible ? 'animate' : '',
  }
}
