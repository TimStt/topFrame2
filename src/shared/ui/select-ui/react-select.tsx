/**
 * @file: react-select.tsx
 * @description: React Select компонент на базе библиотеки react-select с совместимым API
 * @dependencies: react-select, @types/react-select
 * @created: 2024-12-19
 */

import React, { useId } from "react";
import Select, {
  Props as SelectProps,
  GroupBase,
  MultiValue,
  SingleValue,
  ActionMeta,
} from "react-select";

import { cls } from "@/shared/lib/cls";
import { reactSelectStyles, SelectOption } from "./react-select-styles";

export interface ISelectOptions {
  value: string | number;
  label: string;
  isAll?: boolean;
}

export type ISelectOption = {
  /** Значение опции */
  options: ISelectOptions[];
  /** название фильтра для отправки на сервер */
  name: string;
  /** Текст опции */
  label: string;
};

export interface ISelect {
  /** Массив опций */
  /** Выбранные значения */
  value: ISelectOption;
  activeValue: ISelectOptions[];
  type: "checkbox" | "radio";
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

// Используем стили из отдельного файла

export const SelectUI_RS = <T extends string | number>({
  value,
  onChange,
  placeholder = "Выберите значение",
  disabled = false,
  className,
  activeValue,
  label,
  type,
  error,
  fullWidth = false,
}: ISelect) => {
  const id = useId();

  // Преобразование опций для react-select
  const options = value.options.map((option) => ({
    value: option.value,
    label: option.label,
    isAll: option.isAll,
  }));

  // Преобразование выбранных значений для react-select
  const selectedOptions = activeValue.map((option) => ({
    value: option.value,
    label: option.label,
    isAll: option.isAll,
  }));

  const handleChange = (
    newValue:
      | SingleValue<{ value: string | number; label: string; isAll?: boolean }>
      | MultiValue<{ value: string | number; label: string; isAll?: boolean }>,
    actionMeta: ActionMeta<{
      value: string | number;
      label: string;
      isAll?: boolean;
    }>
  ) => {
    if (!newValue) {
      onChange?.(label || "", {
        options: [],
        name: value.name,
        label: label || "",
      });
      return;
    }

    if (type === "radio") {
      // Для radio берем только одно значение
      const singleValue = Array.isArray(newValue) ? newValue[0] : newValue;
      onChange?.(label || "", {
        options: [singleValue],
        name: value.name,
        label: label || "",
      });
    } else {
      // Для checkbox обрабатываем массив значений
      const multiValue = Array.isArray(newValue) ? newValue : [newValue];

      // Проверяем, есть ли опция "Все"
      const hasAllOption = multiValue.some((opt) => opt.isAll);

      if (hasAllOption) {
        // Если выбрана опция "Все", выбираем все опции
        onChange?.(label || "", {
          options: value.options,
          name: value.name,
          label: label || "",
        });
      } else {
        onChange?.(label || "", {
          options: multiValue,
          name: value.name,
          label: label || "",
        });
      }
    }
  };

  const selectClasses = cls(
    "select-wrapper",
    {
      "select--full-width": fullWidth,
    },
    type,
    className
  );

  return (
    <div className={selectClasses}>
      <Select
        instanceId={id}
        options={options}
        value={type === "radio" ? selectedOptions[0] || null : selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
        isDisabled={disabled}
        isMulti={type === "checkbox"}
        isClearable={type === "checkbox"}
        closeMenuOnSelect={type === "radio"}
        hideSelectedOptions={false}
        styles={reactSelectStyles}
        className={cls("select", {
          "select--error": error,
        })}
        aria-label={label}
      />
      {error && <span className="select-error">{error}</span>}
    </div>
  );
};
