"use client";

import { Avatar } from "@/entity/user/ui/avatar";
import { useAuthStore } from "@/features/auth/auth.store";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { useGetScrollWidth } from "@/shared/hooks/use-get-scroll-width";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import Link from "next/link";
import React from "react";

export const ButtonAuth = () => {
  const isAuth = useAuthStore().isAuthTest;
  useGetScrollWidth();
  return isAuth ? (
    <Link className="header__profile" href={PAGES_PATHS.PROFILE}>
      <Avatar userAvatar={""} size="small" />
      <span>Иван</span>
    </Link>
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
