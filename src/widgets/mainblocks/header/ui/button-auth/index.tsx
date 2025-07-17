"use client";

import { Avatar } from "@/entity/user/ui/avatar";
import { useAuthStore } from "@/features/auth/auth.store";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import React from "react";

export const ButtonAuth = () => {
  const isAuth = useAuthStore().isAuthTest;
  return isAuth ? (
    <Avatar userAvatar={""} size="small" />
  ) : (
    <button
      className="header__login-btn"
      title="Войти в аккаунт"
      onClick={() => onToggleModal("auth", true)}
    >
      Войти
    </button>
  );
};
