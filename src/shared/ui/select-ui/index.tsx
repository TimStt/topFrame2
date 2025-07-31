import React, { useEffect, useId, useRef, useState } from 'react'

import useOnClickOutside from '@/shared/hooks/use-on-click-outside'
import { cls } from '@/shared/lib/cls'
import { handleOptionChange } from '@/shared/utils/handle-change-checkbox'
import ArrowIcon from '@/source/icons/arrow2.svg'

import { CheckboxUI } from '../checkbox-ui'

export interface ISelectOptions {
  value: string
  label: string
}

export type ISelectOption = {
  /** Значение опции */
  options: ISelectOptions[]
  /** Текст опции */
  type: 'checkbox' | 'radio'
  label: string
  /** Отключена ли опция */
}

export interface ISelect {
  /** Массив опций */

  /** Выбранные значения */
  value: ISelectOption
  activeValue: ISelectOptions[]
  /** Обработчик изменения выбора */
  onChange?: (name: string, value: ISelectOption) => void
  /** Placeholder */
  placeholder?: string
  /** Отключен ли селект */
  disabled?: boolean
  /** Дополнительные классы */
  className?: string
  /** Лейбл селекта */
  label?: string
  /** Текст ошибки */
  error?: string
  /** Полная ширина */
  fullWidth?: boolean
}

export const SelectUI = <T extends string | number>({
  value,
  onChange,
  placeholder = 'Выберите значение',
  disabled = false,
  className,
  activeValue,
  label,
  error,
  fullWidth = false,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectClasses = cls(
    'select',
    {
      'select--open': isOpen,
      'select--disabled': disabled,
      'select--error': error,
      'select--full-width': fullWidth,
    },
    className,
  )

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleChange = handleOptionChange(value.type, activeValue || [], (currentValue) => {
    onChange?.(label || '', {
      options: currentValue,
      type: value?.type,
      label: label || '',
    })
  })

  // Закрытие при клике вне компонента
  useOnClickOutside(selectRef, () => setIsOpen(false))

  // Формирование отображаемого текста
  const displayText = value.options?.length > 0 ? activeValue.map((opt) => opt.label).join(',') : ''

  const id = useId()

  return (
    <div className="select-wrapper">
      <div ref={selectRef} className={selectClasses}>
        <div
          className="select__trigger"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-labelledby={`select-${id}`}
          aria-haspopup="listbox"
        >
          {displayText &&
            (value.type === 'checkbox' ? (
              <div className="select__values">
                {displayText.split(',').map((opt) => (
                  <div
                    className="select__values-item"
                    key={opt}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleChange(
                        { value: value.options.find((v) => v.label === opt)?.value!, label: opt },
                        false,
                      )
                    }}
                  >
                    <span>{opt}</span>
                    <button>
                      <svg
                        height="14"
                        width="14"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <span className="select__value">{displayText}</span>
            ))}
          {
            <span
              className={cls('select__label', { 'not-empty': !!displayText })}
              aria-hidden="true"
            >
              {label}
            </span>
          }
          {!displayText && <span className="select__label-placeholder">{label}</span>}
          <ArrowIcon className="select__arrow" />
        </div>

        {isOpen && (
          <div className="select__dropdown">
            <ul
              className="select__options"
              role="listbox"
              tabIndex={0}
              aria-labelledby={`select-${id}`}
              aria-multiselectable={true}
            >
              {value.options.map((option) => (
                <li
                  key={option.value}
                  className="select__option"
                  aria-selected={value.options.some((opt) => opt.value === option.value)}
                  id={`select-option-${option.value}`}
                  role="option"
                >
                  <CheckboxUI
                    key={option.value}
                    type={value.type}
                    checked={activeValue.some((opt) => opt.value === option.value)}
                    onChangeCheckbox={(checked) =>
                      handleChange({ value: option.value, label: option.label }, !!checked)
                    }
                    label={option.label}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error && <span className="select-error">{error}</span>}
    </div>
  )
}
