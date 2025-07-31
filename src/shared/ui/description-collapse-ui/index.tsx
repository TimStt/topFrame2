/**
 * @file: description-block.tsx
 * @description: Универсальный компонент для отображения описания с обрезкой по количеству строк.
 * @dependencies: @/styles/components/description-block.scss
 * @created: 2024-06-07
 */
import React, { useEffect, useMemo, useRef, useState } from 'react'

import cls from 'classnames'

export interface IDescriptionCollapseUIProps {
  text: string
  maxRows?: number // максимальное количество строк для показа
  expandedHeight?: number // высота раскрытого блока (px)
  className?: string
  textMore?: string
}

export const DescriptionCollapseUI: React.FC<IDescriptionCollapseUIProps> = ({
  text,
  maxRows = 4,
  expandedHeight = 200,
  className = '',
  textMore = 'читать далее',
}) => {
  const [expanded, setExpanded] = useState(false)
  const [truncatedText, setTruncatedText] = useState(text)
  const [showButton, setShowButton] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)

  const [isCurrentMaxRows, setIsCurrentMaxRows] = useState(maxRows)
  const [isInitial, setIsInitial] = useState(false)
  const [isMaxHeight, setIsMaxHeight] = useState(0)
  const [calculatedLineHeight, setCalculatedLineHeight] = useState('1.5em')

  // ✅ НОВОЕ: Кэш для предотвращения ненужных пересчетов
  const calculationCache = useRef<{
    text: string
    maxRows: number
    width: number
    result: {
      truncatedText: string
      showButton: boolean
      maxHeight: number
    }
  } | null>(null)

  // ✅ НОВОЕ: Состояние для отслеживания готовности шрифтов в Safari
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [recalculateTrigger, setRecalculateTrigger] = useState(0)
  const [isSafari, setIsSafari] = useState(false)

  // ✅ НОВОЕ: Определяем Safari
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    setIsSafari(userAgent.includes('safari') && !userAgent.includes('chrome'))
  }, [])

  // ✅ НОВОЕ: Функция для принудительной загрузки шрифтов в Safari
  const ensureFontsLoaded = async () => {
    if ('fonts' in document) {
      try {
        // Принудительно загружаем все шрифты
        await document.fonts.ready
        console.log('Fonts loaded in Safari')
        setFontsLoaded(true)
      } catch (error) {
        console.log('Font loading failed, proceeding anyway')
        setFontsLoaded(true)
      }
    } else {
      // Fallback для старых браузеров
      setFontsLoaded(true)
    }
  }

  // ✅ НОВОЕ: Функция для принудительного reflow в Safari
  const forceReflow = (element: HTMLElement) => {
    // Принудительно вызываем reflow для корректных измерений в Safari
    element.offsetHeight
    element.getBoundingClientRect()
    element.scrollHeight
    element.clientHeight
  }

  // ✅ НОВОЕ: Функция для ожидания стабилизации размеров в Safari
  const waitForStableDimensions = (element: HTMLElement, maxAttempts = 10): Promise<void> => {
    return new Promise((resolve) => {
      let attempts = 0
      let lastHeight = element.getBoundingClientRect().height

      const checkStability = () => {
        const currentHeight = element.getBoundingClientRect().height

        if (Math.abs(currentHeight - lastHeight) < 1 || attempts >= maxAttempts) {
          resolve()
        } else {
          lastHeight = currentHeight
          attempts++
          setTimeout(checkStability, 50)
        }
      }

      setTimeout(checkStability, 100)
    })
  }

  // ✅ НОВОЕ: Проверяем кэш перед расчетом
  const shouldRecalculate = (element: HTMLElement): boolean => {
    if (!calculationCache.current) return true

    const cache = calculationCache.current
    const currentWidth = element.offsetWidth

    return cache.text !== text || cache.maxRows !== maxRows || cache.width !== currentWidth
  }

  useEffect(() => {
    // ✅ НОВОЕ: Сначала загружаем шрифты только в Safari
    if (isSafari) {
      ensureFontsLoaded()
    } else {
      setFontsLoaded(true)
    }
  }, [isSafari])

  useEffect(() => {
    if (!textRef.current || !blockRef.current || isInitial || !fontsLoaded) return

    const element = textRef.current
    const currentWidth = element.offsetWidth

    // ✅ НОВОЕ: Проверяем кэш
    if (!shouldRecalculate(element)) {
      const cache = calculationCache.current!
      setTruncatedText(cache.result.truncatedText)
      setShowButton(cache.result.showButton)
      setIsMaxHeight(cache.result.maxHeight)
      return
    }

    const computedStyle = getComputedStyle(element)

    // Безопасный расчет lineHeight для Safari
    let lineHeight: number
    const computedLineHeight = computedStyle.lineHeight

    if (computedLineHeight === 'normal' || computedLineHeight === '') {
      const fontSize = parseFloat(computedStyle.fontSize)
      lineHeight = fontSize * 1.2
    } else if (computedLineHeight.includes('px')) {
      lineHeight = parseFloat(computedLineHeight)
    } else if (computedLineHeight.includes('em')) {
      const fontSize = parseFloat(computedStyle.fontSize)
      lineHeight = parseFloat(computedLineHeight) * fontSize
    } else {
      lineHeight = parseFloat(computedLineHeight) || parseFloat(computedStyle.fontSize) * 1.2
    }

    setCalculatedLineHeight(lineHeight + 'px')

    // ✅ НОВОЕ: Принудительный reflow только в Safari
    if (isSafari) {
      forceReflow(element)
      forceReflow(blockRef.current!)
    }

    const textHeight = blockRef.current?.getBoundingClientRect().height || 0

    let maxCurrentHeight = lineHeight * isCurrentMaxRows

    console.log('maxCurrentHeight', maxCurrentHeight)
    console.log('textHeight', textHeight)
    console.log('maxRows', isCurrentMaxRows)

    // Если текст не помещается в заданное количество строк, то уменьшаем количество строк
    for (let i = isCurrentMaxRows; textHeight < maxCurrentHeight; i--) {
      maxCurrentHeight = lineHeight * i
      maxRows = i
    }

    setIsMaxHeight(maxCurrentHeight)

    // Создаем тестовый элемент для измерений
    const testElement = document.createElement('div')
    testElement.style.position = 'absolute'
    testElement.style.visibility = 'hidden'
    testElement.style.height = 'auto'
    testElement.style.maxHeight = 'none'
    testElement.style.width = element.offsetWidth + 'px'
    testElement.style.font = computedStyle.font
    testElement.style.lineHeight = computedStyle.lineHeight
    testElement.style.wordBreak = computedStyle.wordBreak
    testElement.style.whiteSpace = computedStyle.whiteSpace
    testElement.style.padding = computedStyle.padding
    testElement.style.margin = computedStyle.margin
    testElement.style.display = '-webkit-box'
    testElement.style.webkitLineClamp = maxRows.toString()
    testElement.style.overflow = 'hidden'
    testElement.textContent = text

    document.body.appendChild(testElement)

    // ✅ НОВОЕ: Ждем стабилизации размеров только в Safari
    const performCalculation = () => {
      console.log('scrollHeight text', testElement.getBoundingClientRect().height, testElement)
      console.log('clientHeight div', blockRef.current?.getBoundingClientRect().height)

      if (testElement.clientHeight <= maxCurrentHeight) {
        // Текст помещается в заданное количество строк
        const result = {
          truncatedText: text,
          showButton: false,
          maxHeight: maxCurrentHeight,
        }

        setTruncatedText(result.truncatedText)
        setShowButton(result.showButton)
        setIsMaxHeight(result.maxHeight)

        // ✅ НОВОЕ: Сохраняем в кэш
        calculationCache.current = {
          text,
          maxRows,
          width: currentWidth,
          result,
        }
      } else {
        // Нужно обрезать текст
        setShowButton(true)

        // Создаем тестовую кнопку для измерения её размеров
        const buttonElement = document.createElement('button')
        buttonElement.textContent = textMore
        buttonElement.className = 'description-block__more-btn'
        buttonElement.style.position = 'absolute'
        buttonElement.style.visibility = 'hidden'
        buttonElement.style.whiteSpace = 'nowrap'
        document.body.appendChild(buttonElement)

        const buttonWidth = buttonElement.offsetWidth
        const containerWidth = element.offsetWidth

        // Бинарный поиск оптимальной длины текста
        let left = 0
        let right = text.length
        let bestLength = 0

        while (left <= right) {
          const mid = Math.floor((left + right) / 2)
          const testText = text.slice(0, mid)

          // Создаем полный тестовый контент как он будет выглядеть
          const fullTestElement = document.createElement('div')
          fullTestElement.style.position = 'absolute'
          fullTestElement.style.visibility = 'hidden'
          fullTestElement.style.width = containerWidth + 'px'
          fullTestElement.style.font = computedStyle.font
          fullTestElement.style.lineHeight = computedStyle.lineHeight
          fullTestElement.style.wordBreak = computedStyle.wordBreak
          fullTestElement.style.whiteSpace = computedStyle.whiteSpace
          fullTestElement.style.padding = computedStyle.padding
          fullTestElement.style.margin = computedStyle.margin

          // Создаем структуру как в реальном компоненте
          const textSpan = document.createElement('span')
          textSpan.textContent = testText

          const ellipsis = document.createElement('span')
          ellipsis.textContent = '...'
          ellipsis.className = 'description-block__ellipsis'

          const button = document.createElement('button')
          button.textContent = textMore
          button.className = 'description-block__more-btn'

          fullTestElement.appendChild(textSpan)
          fullTestElement.appendChild(ellipsis)
          fullTestElement.appendChild(button)
          document.body.appendChild(fullTestElement)

          // ✅ НОВОЕ: Принудительный reflow только в Safari
          if (isSafari) {
            forceReflow(fullTestElement)
          }

          console.log('fullTestElement', fullTestElement.scrollHeight)

          if (fullTestElement.scrollHeight <= maxCurrentHeight) {
            bestLength = mid
            left = mid + 1
          } else {
            right = mid - 1
          }
          const finalHeight = fullTestElement.getBoundingClientRect().height
          setIsMaxHeight(finalHeight)
          document.body.removeChild(fullTestElement)
        }

        // Дополнительная оптимизация: не обрезаем слово посередине
        let finalText = text.slice(0, bestLength)

        // Ищем последний пробел в разумных пределах
        const lastSpaceIndex = finalText.lastIndexOf(' ')
        const lastDotIndex = finalText.lastIndexOf('.')
        const lastCommaIndex = finalText.lastIndexOf(',')

        // Находим последний "хороший" символ для обрезки
        const breakPoints = [lastSpaceIndex, lastDotIndex, lastCommaIndex].filter((i) => i > 0)
        const bestBreakPoint = Math.max(...breakPoints)

        // Используем лучшую точку разрыва, если она не слишком далеко от конца
        if (bestBreakPoint > finalText.length * 0.7) {
          finalText = finalText.slice(0, bestBreakPoint)
        }

        const result = {
          truncatedText: finalText,
          showButton: true,
          maxHeight: maxCurrentHeight,
        }

        setTruncatedText(result.truncatedText)

        testElement.innerText = finalText
        console.log('testElement', testElement.getBoundingClientRect().height, maxCurrentHeight)

        // Очищаем тестовые элементы
        document.body.removeChild(buttonElement)

        // ✅ НОВОЕ: Сохраняем в кэш
        calculationCache.current = {
          text,
          maxRows,
          width: currentWidth,
          result,
        }
      }

      setIsInitial(true)
      document.body.removeChild(testElement)
    }

    // ✅ НОВОЕ: Выполняем расчет сразу или после стабилизации в Safari
    if (isSafari) {
      waitForStableDimensions(testElement).then(performCalculation)
    } else {
      performCalculation()
    }
  }, [text, textMore, isInitial, fontsLoaded, recalculateTrigger, isSafari])

  // ✅ НОВОЕ: Обработчик для принудительного пересчета при изменении размеров
  useEffect(() => {
    if (!textRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      // Принудительно пересчитываем при изменении размеров
      setIsInitial(false)
      calculationCache.current = null // Очищаем кэш при изменении размеров
      setRecalculateTrigger((prev) => prev + 1)
    })

    resizeObserver.observe(textRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const handleToggle = () => {
    setExpanded((prev) => !prev)
    console.log('textRef offsetHeight', blockRef.current?.offsetHeight)

    // ✅ НОВОЕ: Принудительный пересчет после toggle только в Safari
    if (isSafari) {
      setTimeout(() => {
        setIsInitial(false)
        calculationCache.current = null // Очищаем кэш
        setRecalculateTrigger((prev) => prev + 1)
      }, 100)
    }
  }

  const cssTextProperties = {
    '--maxLines': isCurrentMaxRows,
    '--maxHeight': isMaxHeight + 'px',
    overflowY: expanded ? ('auto' as const) : ('hidden' as const),
  } as React.CSSProperties

  return (
    <div
      ref={blockRef}
      className={cls('description-block', className, {
        expanded: expanded,
      })}
      style={cssTextProperties}
    >
      <p
        ref={textRef}
        className="description-block__text"
        style={{ lineHeight: calculatedLineHeight }}
      >
        {expanded ? text : truncatedText}

        {showButton && (
          <>
            {!expanded && <span className="description-block__ellipsis">...</span>}
            <button
              className="description-block__more-btn"
              type="button"
              onClick={handleToggle}
              aria-label={expanded ? 'Скрыть текст' : 'Показать полный текст'}
            >
              {expanded ? 'скрыть' : textMore}
            </button>
          </>
        )}
      </p>
    </div>
  )
}
