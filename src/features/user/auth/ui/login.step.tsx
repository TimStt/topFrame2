import React, { useId } from "react";

import { changeStepAuth } from "@/features/user/auth/model/change-step-auth";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { ButtonSubmitUI } from "@/shared/ui/button-submit-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { InputPasswordUI } from "@/shared/ui/input-password-ui";
import { InputPhoneUI } from "@/shared/ui/input-phone-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { TextareaUI } from "@/shared/ui/textarea-ui";
import Link from "next/link";
import { TRole, useAuthStoreBase } from "../model/auth.store";
import { z } from "zod";
import { useLogin } from "../model/use-login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGetContacts } from "@/entity/user/api/get-contacts";
import { ErrorFieldUI } from "@/shared/ui/error-field-ui";
import { ErrorBoxUI } from "@/shared/ui/error-box-ui";

const LoginSchema = z.object({
  login: z.string().min(1, "Логин обязателен для заполнения"),
  password: z.string().min(1, "Пароль обязателен для заполнения"),
  errorMessage: z.string().optional(),
});

export const LoginStep = () => {
  const { className, ref } = useAnimateOnScroll();

  const {
    formState: { errors: errorsLogin, isDirty },
    setError,
    ...validateForm
  } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const { loginMutation, handleLogin } = useLogin({
    onError: (error) => {
      setError("errorMessage", { message: error });
    },
  });

  const { contacts } = useGetContacts();

  const id = useId();

  return (
    <>
      <form
        ref={ref}
        className={cls(className, "modal-auth__login-step fade-in ")}
        onSubmit={validateForm.handleSubmit(handleLogin)}
        aria-describedby={id}
      >
        <div className="modal-auth__inputs">
          <InputUI
            classNameWrapper="modal-auth__input input-bottom"
            label="Ваш логин"
            placeholder="Логин"
            {...validateForm.register("login")}
            error={errorsLogin.login?.message}
          />
          <InputPasswordUI
            classNameWrapper="modal-auth__input input-bottom"
            label="Ваш пароль"
            placeholder="Пароль"
            {...validateForm.register("password")}
            error={errorsLogin.password?.message}
          />
        </div>

        <ButtonSubmitUI
          className="modal-auth__button-action"
          hasArrow
          dirty={isDirty}
          fullWidth
          isLoading={loginMutation.isPending}
          text="Продолжить"
        />
        <ButtonUI
          className="modal-auth__button-action"
          type="button"
          hasArrow
          fullWidth
          variant="secondary"
          onClick={() => changeStepAuth("registration")}
        >
          Заявка на регистрацию
        </ButtonUI>

        {/* <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        onClick={() => handleTestAuth("freelancer")}
        fullWidth
        type="button"
      >
        ТЕСТ ЛК ФРИЛАНСЕРА
      </ButtonSubmitUI>
      <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        onClick={() => handleTestAuth("recruiter")}
        fullWidth
        type="button"
      >
        ТЕСТ ЛК РЕКРУТЕРА
      </ButtonSubmitUI> */}
        <p className="police-text">
          Продолжая, вы принимаете
          <Link
            href={PAGES_PATHS.DOCUMENTS(contacts?.privacyPolicy.slug)}
            onClick={() => onToggleModal("auth", false)}
          >
            {" "}
            {contacts?.privacyPolicy.title.toLowerCase()}
          </Link>
        </p>
      </form>
      {
        <ErrorBoxUI
          message={errorsLogin?.errorMessage?.message}
          hasCloseButton
          onClose={() => validateForm.resetField("errorMessage")}
          delay={3000}
        />
      }
    </>
  );
};
