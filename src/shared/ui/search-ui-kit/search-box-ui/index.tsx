import { ButtonUI } from "@/shared/ui/button-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { WrapperUI } from "@/shared/ui/wrapper-ui";
import React, { ComponentPropsWithoutRef } from "react";

export const SearchBoxUI = ({
  renderQuickFilters,
  renderActions,
  renderHints,
  placeholder,
  ...props
}: {
  renderQuickFilters?: React.ReactNode;
  renderActions?: React.ReactNode;
  renderHints?: React.ReactNode;
  placeholder?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "size">) => {
  return (
    <search className="search-box">
      <form className="search-box__form">
        <InputUI
          className="search-box__  input"
          variant="outline"
          fullWidth
          {...props}
        >
          {renderHints}
        </InputUI>
        {renderActions}
      </form>
      {renderQuickFilters}
    </search>
  );
};
