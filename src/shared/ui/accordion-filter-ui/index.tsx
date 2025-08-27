/**
 * @file: index.tsx
 * @description: Универсальный компонент фильтра на основе аккордеона для отображения групп чекбоксов по категориям.
 * @dependencies: src/shared/ui/accordion-ui, src/shared/ui/checkbox-ui, src/shared/lib/cls
 * @created: 2024-06-09
 */

import React, { useRef, useState } from "react";
import { AccordionUI } from "../accordion-ui";
import { CheckboxUI } from "../checkbox-ui";
import { cls } from "@/shared/lib/cls";
import ArrowIcon from "@/source/icons/arrow2.svg";
import useOnClickOutside from "@/shared/hooks/use-on-click-outside";
import { handleOptionChange } from "@/shared/utils/handle-change-checkbox";
import { ISelectOption, ISelectOptions } from "../select-ui";

export interface AccordionFilterOption {
  label: string;
  value: string;
}

export interface AccordionFilterGroup {
  title: string;
  options: AccordionFilterOption[];
}

export interface AccordionFilterUIProps {
  filter: ISelectOption;
  activeValue?: ISelectOptions[];
  onChange: (name: string, options: ISelectOption) => void;
  hasSearch?: boolean;
  className?: string;
  renderReset?: React.ReactNode;
}

export const AccordionFilterUI: React.FC<AccordionFilterUIProps> = ({
  filter,
  activeValue,
  onChange,
  hasSearch,
  className,
  renderReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refAccordion = useRef<HTMLDivElement>(null);
  // useOnClickOutside(refAccordion, () => {
  //   setIsOpen(false);
  // });

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const refSearch = useRef<HTMLInputElement>(null);

  const handleChange = handleOptionChange(
    "checkbox",

    (currentValue) => {
      onChange(filter.name, {
        ...filter,
        options: currentValue,
      });
    }
  );

  const handleCheckAll = (checked: boolean) => {
    if (!checked) {
      onChange?.(filter.name, {
        options: [],
        name: filter.name,
        label: filter.label,
      });

      return;
    }

    onChange?.(filter.name, {
      options: filter.options,
      name: filter.name,
      label: filter.label,
    });
  };

  const handleOpen = (state: boolean) => {
    setIsOpen(state);
    if (hasSearch && state) {
      console.log("handleOpen", refSearch);
      requestAnimationFrame(() => {
        refSearch.current?.focus();
      });

      return;
    }

    setSearchValue("");
  };

  const currentFilterOptions = filter.options.filter(
    (option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
      !searchValue
  );

  return (
    <>
      <AccordionUI
        key={filter.name}
        rootRef={refAccordion}
        open={isOpen}
        classNameRoot="filter__accordion"
        classNameDetails="filter__accordion__details"
        classNameSummary="filter__accordion__summary"
        classNameContent="filter__accordion__content"
        onClick={() => handleOpen(!isOpen)}
        summaryContent={
          <>
            {hasSearch && (
              <input
                type="text"
                className="filter__accordion__search"
                placeholder="Поиск"
                value={searchValue}
                ref={refSearch}
                name={filter.name}
                onClick={(e) => e.stopPropagation()}
                onChange={handleSearch}
              />
            )}
            <span className="filter__accordion__title">{filter.label}</span>
            <button className="filter__accordion__button">
              <ArrowIcon />
            </button>
          </>
        }
      >
        <div className="filter__accordion__content">
          <div className="filter__accordion__list">
            {currentFilterOptions.length > 0 ? (
              currentFilterOptions.map((option) => (
                <CheckboxUI
                  key={option.value}
                  label={option.label}
                  checked={activeValue?.some((v) => v.value === option.value)}
                  onChangeCheckbox={(checked) => {
                    if (option.isAll) {
                      handleCheckAll(!!checked);
                      return;
                    }
                    handleChange(
                      { value: option.value, label: option.label },
                      !!checked,
                      activeValue || []
                    );
                  }}
                  type="checkbox"
                />
              ))
            ) : (
              <span style={{ textAlign: "center" }}>Ничего не найдено</span>
            )}
          </div>
          {renderReset}
        </div>
      </AccordionUI>
    </>
  );
};
