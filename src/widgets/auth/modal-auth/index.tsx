"use client";

import { useAuthStore } from "@/features/user/auth/model/auth.store";
import { changeStepAuth } from "@/features/user/auth/model/change-step-auth";
import { LoginStep } from "@/features/user/auth/ui/login.step";
import { RegisterStep } from "@/features/user/auth/ui/register.step";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { ModalUI } from "@/shared/ui/modal-ui";
import React from "react";

export const ModalAuth = () => {
  const { isOpenModal, handleCloseModal } = useInitialModal("auth", () =>
    changeStepAuth("login")
  );

  const step = useAuthStore().step;

  return (
    <ModalUI
      className="modal-auth"
      handleClose={handleCloseModal}
      open={isOpenModal}
    >
      <h2 className="modal-auth__title modal__title">
        {
          {
            login: "Вход / регистрация",
            registration: "Регистрация",
          }[step]
        }
      </h2>

      {
        {
          login: <LoginStep />,
          registration: <RegisterStep />,
        }[step]
      }
    </ModalUI>
  );
};
