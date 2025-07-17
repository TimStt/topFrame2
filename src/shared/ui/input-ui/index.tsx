import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { cls } from "@/shared/lib/cls";

export type IInput = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
  /** Вариант стиля инпута */
  variant?: "primary" | "secondary" | "outline" | "error" | "success";
  /** Размер инпута */
  size?: "small" | "medium" | "large";
  /** Полная ширина */
  fullWidth?: boolean;

  /** Лейбл инпута */
  label?: string;
  /** Текст ошибки */
  error?: string;
  /** Дополнительные классы */
  className?: string;
  /** Дополнительные классы для враппера */
  classNameWrapper?: string;

  rootRef?: React.RefObject<HTMLInputElement>;
};

export const InputUI = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  label,
  error,
  className,
  classNameWrapper,
  children,
  rootRef,
  ...rest
}: IInput) => {
  const inputClasses = cls(
    "input",
    `input--${variant}`,
    `input--${size}`,
    {
      "input--full-width": fullWidth,
      "input--error": error,
    },
    className
  );

  const wrapperClasses = cls(
    "input-wrapper",
    {
      "input-wrapper--full-width": fullWidth,
    },
    classNameWrapper
  );

  return (
    <div className={wrapperClasses}>
      {label && <label className="input-label">{label}</label>}
      {children}
      <div className="input-container">
        <input ref={rootRef} className={inputClasses} {...rest} />
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

InputUI.displayName = "InputUI";
