import React, { useState, useRef, useEffect, useId } from "react";
import { cls } from "@/shared/lib/cls";
import { CheckboxUI } from "../checkbox-ui";
import ArrowIcon from "@/source/icons/arrow2.svg";
import useOnClickOutside from "@/shared/hooks/use-on-click-outside";
import { handleOptionChange } from "@/shared/utils/handle-change-checkbox";

export interface ISelectOptions {
  value: string;
  label: string;
}

export type ISelectOption = {
  /** Значение опции */
  options: ISelectOptions[];
  /** Текст опции */
  type: "checkbox" | "radio";
  label: string;
  /** Отключена ли опция */
};

export interface ISelect {
  /** Массив опций */

  /** Выбранные значения */
  value: ISelectOption;
  activeValue: ISelectOptions[];
  /** Обработчик изменения выбора */
  onChange?: (name: string, value: ISelectOption) => void;
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
  value,
  onChange,
  placeholder = "Выберите значение",
  disabled = false,
  className,
  activeValue,
  label,
  error,
  fullWidth = false,
}: ISelect) => {
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

  const handleChange = handleOptionChange(
    value.type,
    activeValue || [],
    (currentValue) => {
      onChange?.(label || "", {
        options: currentValue,
        type: value?.type,
        label: label || "",
      });
    }
  );

  // Закрытие при клике вне компонента
  useOnClickOutside(selectRef, () => setIsOpen(false));

  // Формирование отображаемого текста
  const displayText =
    value.options?.length > 0
      ? activeValue.map((opt) => opt.label).join(",")
      : "";

  const id = useId();

  return (
    <div className="select-wrapper">
      <div ref={selectRef} className={selectClasses}>
        <button
          className="select__trigger"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-labelledby={`select-${id}`}
          aria-haspopup="listbox"
        >
          {displayText && <span className="select__value">{displayText}</span>}
          {
            <span
              className={cls("select__label", { "not-empty": !!displayText })}
              aria-hidden="true"
            >
              {label}
            </span>
          }
          {!displayText && (
            <span className="select__label-placeholder">{label}</span>
          )}
          <ArrowIcon className="select__arrow" />
        </button>

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
                  aria-selected={value.options.some(
                    (opt) => opt.value === option.value
                  )}
                  id={`select-option-${option.value}`}
                  role="option"
                >
                  <CheckboxUI
                    key={option.value}
                    type={value.type}
                    checked={activeValue.some(
                      (opt) => opt.value === option.value
                    )}
                    onChangeCheckbox={(checked) =>
                      handleChange(
                        { value: option.value, label: option.label },
                        !!checked
                      )
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
  );
};
