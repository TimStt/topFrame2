import React from "react";
import CloseIcon from "@/source/icons/close.svg";
import { cls } from "@/shared/lib/cls";

export const ButtonCloseUI = ({
  className,

  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
}) => {
  return (
    <button className={cls("modal__close", className)} type="button" {...props}>
      <span className="visually-hidden">закрыть модальное окно</span>
      <CloseIcon />
    </button>
  );
};
