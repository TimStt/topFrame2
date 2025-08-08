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
      colorLoader="#fff"
      size="custom"
      isLoading={isLoading}
      text="Поиск"
    />
  );
};
