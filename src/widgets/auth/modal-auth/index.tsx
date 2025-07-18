"use client";

import { useAuthStore } from "@/features/auth/auth.store";
import { LoginStep } from "@/widgets/auth/modal-auth/ui/login-step";
import { RegisterStep } from "@/widgets/auth/modal-auth/ui/register-step";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { ModalUI } from "@/shared/ui/modal-ui";
import React from "react";
import { changeStepAuth } from "@/features/auth/change-step-auth";

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
