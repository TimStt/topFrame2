import React, { useEffect, useId, useRef, useState } from "react";

import useOnClickOutside from "@/shared/hooks/use-on-click-outside";
import { cls } from "@/shared/lib/cls";
import { handleOptionChange } from "@/shared/utils/handle-change-checkbox";
import ArrowIcon from "@/source/icons/arrow2.svg";

import { CheckboxUI } from "../checkbox-ui";

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
  hasSearch?: boolean;
}

export const SelectUI = <T extends string | number>({
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
  hasSearch = false,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const refSearch = useRef<HTMLInputElement>(null);
  const selectClasses = cls(
    "select",
    {
      "select--open": isOpen,
      "select--disabled": disabled,
      "select--error": error,
      "select--full-width": fullWidth,
    },
    type,
    className
  );

  const handleToggle = (status: boolean) => {
    if (!disabled) {
      setIsOpen(status);
      refSearch.current?.focus();
    }
  };

  const handleChange = handleOptionChange(
    "checkbox",

    (currentValue) => {
      onChange?.(value.name, {
        ...value,
        options: currentValue,
      });
      setSearchValue("");
    }
  );

  // Закрытие при клике вне компонента
  useOnClickOutside(selectRef, () => setIsOpen(false));

  // Формирование отображаемого текста
  const displayText =
    value.options?.length > 0
      ? activeValue.map((opt) => opt.label).join(",")
      : "";

  // создат ьвременный массив для визуального выделения всех опций

  const isCheckedAll = activeValue.some((opt) => opt.isAll);

  const handleCheckAll = (checked: boolean) => {
    if (!checked) {
      onChange?.(label || "", {
        options: [],
        name: value.name,
        label: label || "",
      });

      setSearchValue("");

      return;
    }

    onChange?.(label || "", {
      options: value.options,
      name: value.name,
      label: label || "",
    });
  };

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    if (!isOpen) {
      handleToggle(true);
    }
  };

  const id = useId();

  const currentOptions = value.options.filter((opt) =>
    opt.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      className={cls("select-wrapper", type, {
        "has-value": !!displayText,
      })}
    >
      <div ref={selectRef} className={selectClasses}>
        <div
          className="select__trigger"
          onClick={() => handleToggle(!isOpen)}
          aria-expanded={isOpen}
          aria-labelledby={`select-${id}`}
          aria-haspopup="listbox"
        >
          {hasSearch && (
            <input
              type="text"
              className="select__search"
              placeholder="Поиск"
              name="search"
              value={searchValue}
              ref={refSearch}
              onChange={handleSearch}
            />
          )}
          {displayText &&
            (type === "checkbox" ? (
              <div className="select__values" key={searchValue}>
                {displayText.split(",").map((opt, index) => (
                  <div
                    className="select__values-item"
                    key={`${opt}-${index}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChange(
                        {
                          value: value.options.find((v) => v.label === opt)
                            ?.value!,
                          label: opt,
                        },
                        false,
                        activeValue
                      );
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
              className={cls("select__label", {
                "not-empty": !!displayText || !!searchValue.length,
              })}
              aria-hidden="true"
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
            <ul
              className="select__options"
              role="listbox"
              tabIndex={0}
              aria-labelledby={`select-${id}`}
              aria-multiselectable={true}
            >
              {currentOptions.length > 0 ? (
                currentOptions.map((option) => (
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
                      type={type}
                      checked={
                        (option.isAll ? isCheckedAll : true) &&
                        activeValue.some((opt) => opt.value === option.value)
                      }
                      onChangeCheckbox={(checked) =>
                        option.isAll
                          ? handleCheckAll(!!checked)
                          : handleChange(
                              { value: option.value, label: option.label },
                              !!checked,
                              activeValue
                            )
                      }
                      label={option.label}
                    />
                  </li>
                ))
              ) : (
                <li className="select__option">
                  <span className="select__option-empty">Нет результатов</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {error && <span className="select-error">{error}</span>}
    </div>
  );
};
