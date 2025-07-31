/**
 * @file: description-block.tsx
 * @description: Универсальный компонент для отображения описания с обрезкой по количеству строк.
 * @dependencies: @/styles/components/description-block.scss
 * @created: 2024-06-07
 */
import React, { useEffect, useRef, useState } from 'react'

import cls from 'classnames'
import { tree } from 'next/dist/build/templates/app-page'

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

  // ✅ ЕДИНСТВЕННОЕ ИСПРАВЛЕНИЕ: Добавляем состояние для lineHeight
  const [calculatedLineHeight, setCalculatedLineHeight] = useState('1.5em')

  useEffect(() => {
    if (!textRef.current || !blockRef.current || isInitial) return

    const element = textRef.current
    const computedStyle = getComputedStyle(element)

    // ✅ ИСПРАВЛЕНИЕ: Безопасный расчет lineHeight для Safari
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

    // ✅ Сохраняем для использования в cssTextProperties
    setCalculatedLineHeight(lineHeight + 'px')

    const textHeight = blockRef.current?.getBoundingClientRect().height || 0

    let maxCurrentHeight = lineHeight * isCurrentMaxRows

    console.log('maxCurrentHeight', maxCurrentHeight)
    console.log('textHeight', textHeight)
    console.log('maxRows', isCurrentMaxRows)

    console.log('blockRef.current', blockRef.current)

    // Оригинальная логика: Если текст не помещается в заданное количество строк, то уменьшаем количество строк
    for (let i = isCurrentMaxRows; textHeight < maxCurrentHeight; i--) {
      maxCurrentHeight = lineHeight * i
      maxRows = i
    }

    setIsMaxHeight(maxCurrentHeight)

    // Создаем тестовый элемент для измерений (ОРИГИНАЛЬНАЯ ЛОГИКА)
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

    console.log('scrollHeight text', testElement.getBoundingClientRect().height, testElement)
    console.log('clientHeight div', blockRef.current?.getBoundingClientRect().height)

    if (testElement.clientHeight <= maxCurrentHeight) {
      // Текст помещается в заданное количество строк
      setTruncatedText(text)
      setShowButton(false)
    } else {
      // Нужно обрезать текст (ОРИГИНАЛЬНАЯ ЛОГИКА)
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

      // Бинарный поиск оптимальной длины текста (ОРИГИНАЛЬНАЯ ЛОГИКА)
      let left = 0
      let right = text.length
      let bestLength = 0

      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const testText = text.slice(0, mid)

        // Создаем полный тестовый контент как он будет выглядеть (ОРИГИНАЛЬНАЯ ЛОГИКА)
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

        // Создаем структуру как в реальном компоненте (ОРИГИНАЛЬНАЯ ЛОГИКА)
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

      // Дополнительная оптимизация: не обрезаем слово посередине (ОРИГИНАЛЬНАЯ ЛОГИКА)
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

      setTruncatedText(finalText)

      testElement.innerText = finalText
      console.log('testElement', testElement.getBoundingClientRect().height, maxCurrentHeight)

      // Очищаем тестовые элементы
      document.body.removeChild(buttonElement)
    }
    setIsInitial(true)
    document.body.removeChild(testElement)
  }, [text, textMore, isInitial])

  const handleToggle = () => {
    setExpanded((prev) => !prev)
    console.log('textRef offsetHeight', blockRef.current?.offsetHeight)
  }

  // ✅ ЕДИНСТВЕННОЕ ИСПРАВЛЕНИЕ: Используем calculatedLineHeight из состояния
  const cssTextProperties = {
    '--maxLines': isCurrentMaxRows,
    // Теперь берем из состояния
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
