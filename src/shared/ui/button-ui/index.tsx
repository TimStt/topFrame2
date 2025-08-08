import React, { ComponentPropsWithoutRef, ElementType, Ref } from "react";

import { ArrowIconUI } from "../arrow-icon-ui";
import Link from "next/link";
import { cls } from "@/shared/lib/cls";

export type IButton<
  TElementButton extends Extract<React.ElementType, "button" | "a"> = "button",
> = ComponentPropsWithoutRef<TElementButton> & {
  /** Вариант стиля кнопки */
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "success"
    | "ghost"
    | "light"
    | "custom";
  /** Размер кнопки */
  size?: "small" | "medium" | "large" | "custom";
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
  className?: string;
  href?: string;
  as?: TElementButton;
  rootRef?: Ref<
    TElementButton extends "button" ? HTMLButtonElement : HTMLAnchorElement
  >;
  /** Показывать стрелку */
  hasArrow?: boolean;
  /** Текст кнопки */
  text?: string;
};

export const ButtonUI = <
  TElementButton extends Extract<React.ElementType, "button" | "a"> = "button",
>({
  variant = "primary",
  size = "medium",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type,
  children,
  as,
  text,
  className,
  hasArrow = false,
  rootRef,
  ...rest
}: IButton<TElementButton>) => {
  const DEFAULT_ELEMENT: React.ElementType = "button";
  const Element: React.ElementType = as || DEFAULT_ELEMENT;

  const buttonClasses = cls(
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

  if (Element === "a" && rest.href) {
    return (
      <Link
        href={rest.href as string}
        className={buttonClasses}
        {...(rest as ComponentPropsWithoutRef<"a">)}
        ref={rootRef as Ref<HTMLAnchorElement>}
      >
        <span>{text}</span>
        {children}
        {hasArrow && <ArrowIconUI className="arrow" />}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      type={type as "button" | "submit" | "reset"}
      {...(rest as ComponentPropsWithoutRef<"button">)}
      ref={rootRef as Ref<HTMLButtonElement>}
    >
      <span>{text}</span>
      {children}
      {hasArrow && <ArrowIconUI className="arrow" />}
    </button>
  );
};
