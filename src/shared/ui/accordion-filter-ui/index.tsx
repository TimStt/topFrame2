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

  className?: string;
  renderReset?: React.ReactNode;
}

export const AccordionFilterUI: React.FC<AccordionFilterUIProps> = ({
  filter,
  activeValue,
  onChange,

  className,
  renderReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refAccordion = useRef<HTMLDivElement>(null);
  useOnClickOutside(refAccordion, () => {
    setIsOpen(false);
  });

  const handleChange = handleOptionChange(
    "checkbox",
    activeValue || [],
    (currentValue) => {
      onChange(filter.name, {
        ...filter,
        options: currentValue,
      });
    }
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
        rootOnClick={() => setIsOpen(!isOpen)}
        summaryContent={
          <>
            <span className="filter__accordion__title">{filter.label}</span>
            <ArrowIcon />
          </>
        }
      >
        <div className="filter__accordion__content">
          <div className="filter__accordion__list">
            {filter.options.map((option) => (
              <CheckboxUI
                key={option.value}
                label={option.label}
                checked={activeValue?.some((v) => v.value === option.value)}
                onChangeCheckbox={(checked) => {
                  handleChange(
                    { value: option.value, label: option.label },
                    !!checked
                  );
                }}
                type="checkbox"
              />
            ))}
          </div>
          {renderReset}
        </div>
      </AccordionUI>
    </>
  );
};
