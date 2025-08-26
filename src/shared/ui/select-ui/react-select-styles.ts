/**
 * @file: react-select-styles.ts
 * @description: Стили для React Select компонента в виде объекта
 * @dependencies: react-select
 * @created: 2024-12-19
 */

import { StylesConfig } from "react-select";

export interface SelectOption {
  value: string | number;
  label: string;
  isAll?: boolean;
}

// Кастомные стили для react-select на основе select.scss
export const reactSelectStyles: StylesConfig<SelectOption, boolean> = {
  control: (provided, state) => ({
    ...provided,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "50px",
    padding: "8px 16px",
    gap: "10px",
    width: "100%",
    border: `1px solid ${state.isFocused ? "var(--color-accent-blue)" : "var(--color-main)"}`,
    background: "var(--color-white)",
    cursor: "pointer",
    transition: "var(--transition-fast)",
    minHeight: "43px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "var(--color-accent-blue)",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "var(--font-weight-regular)",
    color: "var(--color-main)",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),

  singleValue: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "var(--font-weight-regular)",
    color: "var(--color-main)",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),

  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgb(230, 230, 230)",
    borderRadius: "2px",
    fontSize: "85%",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    minWidth: "0px",
    padding: "0px 4px",
    zIndex: 7,
    cursor: "pointer",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    padding: "0px 4px",
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "14px",
    height: "14px",
    border: "none",
    transitionDuration: "var(--transition-fast)",
    "&:hover": {
      backgroundColor: "var(--color-error)",
      opacity: 0.5,
    },
  }),

  menu: (provided) => ({
    ...provided,
    position: "absolute",
    top: "105%",
    left: 0,
    zIndex: "var(--z-dropdown)",
    right: 0,
    borderRadius: "16px",
    background: "var(--color-white)",
    border: "1px solid var(--color-accent-blue)",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.1)",
    maxHeight: "300px",
    overflowY: "auto",
  }),

  menuList: (provided) => ({
    ...provided,
    padding: "8px 0",
    "&::-webkit-scrollbar": {
      width: "2px",
      height: "54px",
    },
    "&::-webkit-scrollbar-track": {
      background: "var(--color-white-1)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "var(--color-light-blue-2)",
      borderRadius: "2px",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    padding: "12px 16px",
    backgroundColor: state.isFocused
      ? "var(--color-light-blue)"
      : "transparent",
    "&:hover": {
      backgroundColor: "var(--color-light-blue)",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    width: "16px",
    height: "16px",
    color: "var(--color-main)",
    transition: "transform var(--transition-fast)",
    flexShrink: 0,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  clearIndicator: (provided) => ({
    ...provided,
    width: "20px",
    height: "20px",
    color: "var(--color-main)",
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    gap: "4px",
  }),

  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
};
