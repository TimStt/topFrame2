"use client";

import { Avatar } from "@/entity/user/ui/avatar";
import { useAuthStore } from "@/features/user/auth/model/auth.store";
import { useGetUser } from "@/features/user/auth/model/use-get-user";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { useGetScrollWidth } from "@/shared/hooks/use-get-scroll-width";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import Link from "next/link";
import React from "react";
import { ButtonAuthSkeleton } from "./skeleton";

export const ButtonAuth = () => {
  const { info, isLoading } = useGetUser();
  return isLoading ? (
    <ButtonAuthSkeleton />
  ) : info?.user ? (
    <Link className="header__profile" href={PAGES_PATHS.PROFILE}>
      <Avatar userAvatar={info?.user?.photo} size="small" />
      <span>{info?.user?.name}</span>
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
