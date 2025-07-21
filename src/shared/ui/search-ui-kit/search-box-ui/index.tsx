import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { WrapperUI } from "@/shared/ui/wrapper-ui";
import React, { ComponentPropsWithoutRef } from "react";

export const SearchBoxUI = ({
  renderQuickFilters,
  renderActions,
  renderHints,
  placeholder,
  className,
  classNameForm,
  ...props
}: {
  renderQuickFilters?: React.ReactNode;
  renderActions?: React.ReactNode;
  renderHints?: React.ReactNode;
  placeholder?: string;
  classNameForm?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "size">) => {
  return (
    <search className={cls("search-box", className)}>
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
