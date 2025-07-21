import React, { useState, useRef, useEffect } from "react";
import { cls } from "@/shared/lib/cls";
import { CheckboxUI } from "../checkbox-ui";
import ArrowIcon from "@/source/icons/arrow2.svg";
import useOnClickOutside from "@/shared/hooks/use-on-click-outside";

export type ISelectOption<T extends string | number> = {
  /** Значение опции */
  value: string | number;
  /** Текст опции */
  type: "checkbox" | "radio";
  label: string;
  /** Отключена ли опция */
  disabled?: boolean;
};

export interface ISelect<T extends string | number> {
  /** Массив опций */
  options: ISelectOption<T>[];
  /** Выбранные значения */
  value?: T[];
  /** Обработчик изменения выбора */
  onChange?: (value: T[]) => void;
  /** Placeholder */
  placeholder?: string;
  /** Отключен ли селект */
  disabled?: boolean;
  /** Дополнительные классы */
  className?: string;
  /** Лейбл селекта */
  label?: string;
  /** Текст ошибки */
  error?: string;
  /** Полная ширина */
  fullWidth?: boolean;
}

export const SelectUI = <T extends string | number>({
  options,
  value = [],
  onChange,
  placeholder = "Выберите значение",
  disabled = false,
  className,
  label,
  error,
  fullWidth = false,
}: ISelect<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectClasses = cls(
    "select",
    {
      "select--open": isOpen,
      "select--disabled": disabled,
      "select--error": error,
      "select--full-width": fullWidth,
    },
    className
  );

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionChange = (
    optionValue: string | number,
    checked: boolean
  ) => {
    console.log(optionValue, checked, value);
    if (!onChange) return;

    let newValue: T[];
    if (checked) {
      if (!value) {
        newValue = [optionValue as T];
      } else {
        newValue = [...value, optionValue as T];
      }
    } else {
      newValue = value.filter((v) => v !== optionValue) as T[];
    }
    console.log(newValue);
    onChange(newValue);
  };

  // Закрытие при клике вне компонента
  useOnClickOutside(selectRef, () => setIsOpen(false));

  // Формирование отображаемого текста
  const displayText =
    value.length > 0
      ? value
          .map((v) => options.find((opt) => opt.value === v)?.label)
          .filter(Boolean)
          .join(", ")
      : "";

  return (
    <div className="select-wrapper">
      <div ref={selectRef} className={selectClasses}>
        <div className="select__trigger" onClick={handleToggle}>
          {displayText && <span className="select__value">{displayText}</span>}
          {
            <span
              className={cls("select__label", { "not-empty": !!displayText })}
            >
              {label}
            </span>
          }
          {!displayText && (
            <span className="select__label-placeholder">{label}</span>
          )}
          <ArrowIcon className="select__arrow" />
        </div>

        {isOpen && (
          <div className="select__dropdown">
            <div className="select__options">
              {options.map((option) => (
                <div key={option.value} className="select__option">
                  <CheckboxUI
                    type={option.type}
                    checked={value.includes(option.value as T)}
                    onChange={(e) =>
                      handleOptionChange(option.value as T, e.target.checked)
                    }
                    disabled={option.disabled}
                    label={option.label}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && <span className="select-error">{error}</span>}
    </div>
  );
};
