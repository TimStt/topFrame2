import { cls } from "@/shared/lib/cls";
import React from "react";
import { logout } from "../model/logout";

export const ButtonLogout = ({ className }: { className?: string }) => {
  return (
    <button
      className={cls("profile__button-logout", className)}
      onClick={logout}
    >
      Выйти из личного кабинета
    </button>
  );
};
