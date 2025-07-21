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
import { IQuickFilters } from "../search-ui-kit/quick-filters-ui";
import useOnClickOutside from "@/shared/hooks/use-on-click-outside";

export interface AccordionFilterOption {
  label: string;
  value: string;
}

export interface AccordionFilterGroup {
  title: string;
  options: AccordionFilterOption[];
}

export interface AccordionFilterUIProps {
  filter: IQuickFilters;
  values?: string[];
  onChange: (name: string, value: string[]) => void;

  className?: string;
  renderReset?: React.ReactNode;
}

export const AccordionFilterUI: React.FC<AccordionFilterUIProps> = ({
  filter,
  values,
  onChange,

  className,
  renderReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refAccordion = useRef<HTMLDivElement>(null);
  useOnClickOutside(refAccordion, () => {
    setIsOpen(false);
  });
  return (
    <>
      <AccordionUI
        key={filter.title}
        rootRef={refAccordion}
        open={isOpen}
        classNameRoot="filter__accordion"
        classNameDetails="filter__accordion__details"
        classNameSummary="filter__accordion__summary"
        classNameContent="filter__accordion__content"
        rootOnClick={() => setIsOpen(!isOpen)}
        summaryContent={
          <>
            <span className="filter__accordion__title">{filter.title}</span>
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
                checked={values?.includes(option.value.toString()) || false}
                onChange={(e) => {
                  const checked = e.target.checked;
                  const prev = values || [];
                  const next = checked
                    ? [...prev, option.value.toString()]
                    : prev.filter((v) => v !== option.value.toString());
                  onChange(filter.title, next);
                }}
              />
            ))}
          </div>
          {renderReset}
        </div>
      </AccordionUI>
    </>
  );
};
