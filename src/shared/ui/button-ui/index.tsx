import React, { ComponentPropsWithoutRef } from "react";

import classNames from "classnames";

import { ArrowIconUI } from "../arrow-icon-ui";

type BaseButtonProps = {
  /** Вариант стиля кнопки */
  variant?: "primary" | "secondary" | "outline" | "success" | "ghost" | "light";
  /** Размер кнопки */
  size?: "small" | "medium" | "large";
  /** Состояние загрузки */
  loading?: boolean;
  /** Полная ширина */
  fullWidth?: boolean;
  /** Иконка слева от текста */
  leftIcon?: React.ReactNode;
  /** Иконка справа от текста */
  rightIcon?: React.ReactNode;
  /** Дочерние элементы (текст кнопки) */
  children?: React.ReactNode;
  /** Показывать стрелку */
  hasArrow?: boolean;
  /** Дополнительные CSS классы */
  className?: string;
};

type ButtonAsButton = BaseButtonProps & {
  as?: "button";
} & ComponentPropsWithoutRef<"button">;

type ButtonAsLink = BaseButtonProps & {
  as: "a";
} & ComponentPropsWithoutRef<"a">;

export type ButtonProps<El extends Extract<React.ElementType, "button" | "a">> =
  El extends "button" ? ButtonAsButton : El extends "a" ? ButtonAsLink : never;

export const ButtonUI = <
  El extends Extract<React.ElementType, "button" | "a"> = "button",
>({
  variant = "primary",
  size = "medium",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className,
  hasArrow = false,
  as = "button",
  ...rest
}: ButtonProps<El>) => {
  const buttonClasses = classNames(
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    {
      "btn--loading": loading,
      "btn--disabled": ("disabled" in rest && rest.disabled) || loading,
      "btn--full-width": fullWidth,
    },
    className
  );

  const DEFAULT_ELEMENT = "button";

  const Element = as || DEFAULT_ELEMENT;

  return (
    <Element className={buttonClasses} {...rest}>
      {children}
      {hasArrow && <ArrowIconUI className="arrow" />}

      {loading && <span className="btn__loader" />}
    </Element>
  );
};
