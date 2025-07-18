import { cls } from "@/shared/lib/cls";
import React from "react";

export const ButtonLogout = ({ className }: { className?: string }) => {
  return (
    <button className={cls("button-logout", className)}>
      Выйти из личного кабинета
    </button>
  );
};
