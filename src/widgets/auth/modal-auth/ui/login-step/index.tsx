import { useAuthStore } from "@/features/auth/auth.store";
import { changeStepAuth } from "@/features/auth/change-step-auth";
import { useAnimateOnScroll } from "@/shared/hooks/use-animate-on-scroll";
import { cls } from "@/shared/lib/cls";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { ButtonSubmitUI } from "@/shared/ui/button-submit-ui";
import { ButtonUI } from "@/shared/ui/button-ui";
import { InputPasswordUI } from "@/shared/ui/input-password-ui";
import { InputPhoneUI } from "@/shared/ui/input-phone-ui";
import { InputUI } from "@/shared/ui/input-ui";
import { TextareaUI } from "@/shared/ui/textarea-ui";
import React from "react";

export const LoginStep = () => {
  const { className, ref } = useAnimateOnScroll();

  const handleTestAuth = () => {
    useAuthStore().setIsAuthTest(true);

    onToggleModal("auth", false);
  };

  return (
    <div ref={ref} className={cls(className, "modal-auth__login-step fade-in")}>
      <InputUI
        classNameWrapper="modal-auth__input input-bottom"
        label="Ваш логин"
        placeholder="Логин"
      />
      <InputPasswordUI
        classNameWrapper="modal-auth__input input-bottom"
        label="Ваш пароль"
        placeholder="Пароль"
      />

      <ButtonSubmitUI className="modal-auth__button-action" hasArrow fullWidth>
        Продолжить
      </ButtonSubmitUI>
      <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        fullWidth
        variant="secondary"
        onClick={() => changeStepAuth("registration")}
      >
        Заявка на регистрацию
      </ButtonSubmitUI>

      <ButtonSubmitUI
        className="modal-auth__button-action"
        hasArrow
        onClick={handleTestAuth}
        fullWidth
      >
        ТЕСТ ЛК
      </ButtonSubmitUI>
      <p className="modal-auth__police-text">
        Продолжая, вы принимаете политику конфиденциальности
      </p>
    </div>
  );
};
