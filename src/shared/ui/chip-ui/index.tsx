import React from "react";

interface IChip {
  as?: React.ElementType;
  children?: React.ReactNode;
  text: string;
}

export const ChipUI = ({ as, text, children }: IChip) => {
  const DEFAULT_ELEMENT = "div";
  const Element: React.ElementType = as || DEFAULT_ELEMENT;

  return (
    <Element className="chip">
      <span>{text}</span>
      {children}
    </Element>
  );
};
