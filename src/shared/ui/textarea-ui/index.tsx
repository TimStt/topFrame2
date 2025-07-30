import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { cls } from "@/shared/lib/cls";
import { IInput } from "../input-ui";

export type ITextarea = Omit<IInput, "leftIcon" | "rightIcon"> &
  ComponentPropsWithoutRef<"textarea"> & {
    /** Показать счетчик символов */
    showCounter?: boolean;
    /** Максимальное количество символов */
    maxLength?: number;
    /** Минимальная высота */
    minRows?: number;
    /** Максимальная высота */
    maxRows?: number;
    /** Автоматическое изменение высоты */
    autoResize?: boolean;
    /** Показывать счетчик символов */
    shouldShowCounter?: boolean;
  };

export const TextareaUI = forwardRef<HTMLTextAreaElement, ITextarea>(
  (
    {
      variant = "primary",
      size = "medium",
      fullWidth = false,
      label,
      error,
      className,
      classNameWrapper,
      shouldShowCounter = false,
      maxLength,
      minRows = 3,
      maxRows,
      autoResize = false,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [currentLength, setCurrentLength] = useState(0);
    const [textareaValue, setTextareaValue] = useState(value || "");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      // Если есть maxLength, обрезаем значение
      const finalValue = maxLength ? newValue.slice(0, maxLength) : newValue;

      setTextareaValue(finalValue);
      setCurrentLength(finalValue.length);

      // Создаем новое событие с обрезанным значением
      if (onChange) {
        const syntheticEvent = {
          ...e,
          target: {
            ...e.target,
            value: finalValue,
          },
        };
        onChange(syntheticEvent as React.ChangeEvent<HTMLTextAreaElement>);
      }
    };

    const textareaClasses = cls(
      "textarea",
      `textarea--${variant}`,
      `textarea--${size}`,
      {
        "textarea--full-width": fullWidth,
        "textarea--error": error,
        "textarea--auto-resize": autoResize,
      },
      className
    );

    const wrapperClasses = cls(
      "textarea-wrapper",
      {
        "textarea-wrapper--full-width": fullWidth,
      },
      classNameWrapper
    );

    // Определяем, показывать ли счетчик
    // Определяем, превышен ли лимит символов
    const isOverLimit = maxLength ? currentLength > maxLength : false;

    return (
      <div className={wrapperClasses}>
        {label && <label className="textarea-label">{label}</label>}
        <div className="textarea-container">
          <textarea
            ref={ref}
            className={textareaClasses}
            value={textareaValue}
            onChange={handleChange}
            maxLength={maxLength}
            {...rest}
          />
        </div>
        {error && <span className="textarea-error">{error}</span>}
      </div>
    );
  }
);

TextareaUI.displayName = "TextareaUI";
