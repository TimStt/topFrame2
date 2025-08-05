import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { WrapperUI } from "@/shared/ui/wrapper-ui";
import React, { ComponentPropsWithoutRef } from "react";

export const SearchBoxUI = ({
  renderQuickFilters,
  renderActions,
  renderHints,
  handleSubmit,
  className,
  classNameForm,
  ...props
}: {
  renderQuickFilters?: React.ReactNode;
  renderActions?: React.ReactNode;
  renderHints?: React.ReactNode;
  handleSubmit?: () => void;
  classNameForm?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "size">) => {
  return (
    <search className={cls("search-box", className)}>
      <form
        className="search-box__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit?.();
        }}
      >
        <InputUI
          className="search-box__input"
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
