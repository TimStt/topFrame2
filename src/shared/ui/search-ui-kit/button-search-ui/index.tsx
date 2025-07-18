import React from "react";
import { ButtonSubmitUI } from "../../button-submit-ui";
import { cls } from "@/shared/lib/cls";

export const ButtonSearchUI = ({
  className,
  isLoading,
}: {
  className?: string;
  isLoading?: boolean;
}) => {
  return (
    <ButtonSubmitUI
      className={cls("search-box__button-search", className)}
      variant="custom"
      size="custom"
      isLoading={isLoading}
    >
      Поиск
    </ButtonSubmitUI>
  );
};
