import React from 'react'

import classNames from 'classnames'

import { ArrowIconUI } from '../arrow-icon-ui'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Вариант стиля кнопки */
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'ghost' | 'light'
  /** Размер кнопки */
  size?: 'small' | 'medium' | 'large'
  /** Состояние загрузки */
  loading?: boolean
  /** Полная ширина */
  fullWidth?: boolean
  /** Иконка слева от текста */
  leftIcon?: React.ReactNode
  /** Иконка справа от текста */
  rightIcon?: React.ReactNode
  /** Дочерние элементы (текст кнопки) */
  children: React.ReactNode
  /** Дополнительные CSS классы */
  className?: string
  /** Тип кнопки */
  type?: 'button' | 'submit' | 'reset'
  /** Обработчик клика */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  hasArrow?: boolean
}

export const ButtonUI: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  type = 'button',
  onClick,
  hasArrow = false,
  ...rest
}) => {
  const buttonClasses = classNames(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    {
      'btn--loading': loading,
      'btn--disabled': disabled || loading,
      'btn--full-width': fullWidth,
    },
    className,
  )

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      event.preventDefault()
      return
    }
    onClick?.(event)
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {hasArrow && <ArrowIconUI />}

      {loading && <span className="btn__loader" />}
    </button>
  )
}
